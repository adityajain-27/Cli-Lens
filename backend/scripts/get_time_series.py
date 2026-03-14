"""
get_time_series.py
Usage:
  python get_time_series.py <nc_file> <variable> <lat> <lon>          — location time series
  python get_time_series.py <nc_file> <variable> --global-mean        — global spatial mean
Returns time series with rolling mean, linear trend, and anomaly detection as JSON.
"""
import sys
import json
import xarray as xr
import numpy as np


def compute_analysis(times_str, values):
    """Given aligned times (str) and values, compute rolling mean, trend, and anomalies."""
    n = len(values)
    arr = np.array(values, dtype=float)

    # --- Rolling mean (12-step window) ---
    window = min(12, n)
    rolling_mean = []
    for i in range(n):
        start = max(0, i - window + 1)
        chunk = arr[start:i + 1]
        valid = chunk[~np.isnan(chunk)]
        rolling_mean.append(round(float(np.mean(valid)), 4) if len(valid) > 0 else None)

    # --- Linear trend ---
    valid_mask = ~np.isnan(arr)
    x_all = np.arange(n)
    trend_values = [None] * n
    trend_rate = None
    if np.sum(valid_mask) >= 2:
        x_fit = x_all[valid_mask].astype(float)
        y_fit = arr[valid_mask]
        slope, intercept = np.polyfit(x_fit, y_fit, 1)
        trend_values = [round(float(slope * i + intercept), 4) for i in range(n)]
        # Rate per year: if monthly data, divide by 12
        # We estimate from the time gaps
        trend_rate = round(float(slope), 6)

    # --- Anomaly detection (points > 2σ from rolling mean) ---
    anomaly_indices = []
    anomaly_times = []
    anomaly_values = []
    rm_arr = np.array([v if v is not None else np.nan for v in rolling_mean])
    deviations = arr - rm_arr
    valid_devs = deviations[~np.isnan(deviations)]
    if len(valid_devs) > 2:
        std = float(np.std(valid_devs))
        threshold = 2.0 * std
        for i in range(n):
            if not np.isnan(deviations[i]) and abs(deviations[i]) > threshold:
                anomaly_indices.append(i)
                anomaly_times.append(times_str[i])
                anomaly_values.append(round(float(arr[i]), 4))

    return rolling_mean, trend_values, trend_rate, anomaly_times, anomaly_values


def get_time_series(filepath, variable, lat, lon):
    time_coder = xr.coders.CFDatetimeCoder(use_cftime=True)
    ds = xr.open_dataset(filepath, engine="netcdf4", decode_times=time_coder)

    if variable not in ds:
        print(json.dumps({"error": f"Variable '{variable}' not found in dataset"}))
        sys.exit(1)

    lat = float(lat)
    lon = float(lon)

    lat_key = "latitude" if "latitude" in ds.coords else "lat"
    lon_key = "longitude" if "longitude" in ds.coords else "lon"

    data = ds[variable].sel(
        {lat_key: lat, lon_key: lon},
        method="nearest"
    )

    # Squeeze out any extra dimensions (e.g., level)
    for dim in list(data.dims):
        if dim not in ("time",):
            data = data.isel({dim: 0})

    times = []
    values = []

    if "time" in data.dims:
        for t, v in zip(data.time.values, data.values):
            try:
                t_str = str(np.datetime_as_string(t, unit="D"))
            except TypeError:
                t_str = str(t)[:10]
            times.append(t_str)
            val = float(v)
            values.append(None if np.isnan(val) else round(val, 4))
    else:
        print(json.dumps({"error": "No time dimension in this dataset"}))
        sys.exit(1)

    actual_lat = float(ds[lat_key].sel({lat_key: lat}, method="nearest").values)
    actual_lon = float(ds[lon_key].sel({lon_key: lon}, method="nearest").values)
    ds.close()

    # Compute analytics
    safe_values = [v if v is not None else float('nan') for v in values]
    rolling_mean, trend_line, trend_rate, anomaly_times, anomaly_values = compute_analysis(times, safe_values)

    # Estimate trend per year
    trend_per_year = None
    if trend_rate is not None and len(times) > 1:
        # Estimate: if data is monthly, multiply slope by 12
        # Heuristic: if > 100 points and span < 50 years, likely monthly
        try:
            first_year = int(times[0][:4])
            last_year = int(times[-1][:4])
            span = max(1, last_year - first_year)
            points_per_year = len(times) / max(1, span)
            trend_per_year = round(trend_rate * points_per_year, 6)
        except (ValueError, IndexError):
            trend_per_year = trend_rate

    print(json.dumps({
        "variable": variable,
        "requestedLat": lat,
        "requestedLon": lon,
        "actualLat": actual_lat,
        "actualLon": actual_lon,
        "times": times,
        "values": values,
        "rollingMean": rolling_mean,
        "trendLine": trend_line,
        "trendPerYear": trend_per_year,
        "anomalyTimes": anomaly_times,
        "anomalyValues": anomaly_values,
    }))


def get_global_mean(filepath, variable):
    """Compute global spatial mean at each time step."""
    time_coder = xr.coders.CFDatetimeCoder(use_cftime=True)
    ds = xr.open_dataset(filepath, engine="netcdf4", decode_times=time_coder)

    if variable not in ds:
        print(json.dumps({"error": f"Variable '{variable}' not found in dataset"}))
        sys.exit(1)

    data = ds[variable]

    # Squeeze out level dimension if present
    for dim in list(data.dims):
        if dim not in ("time", "lat", "lon", "latitude", "longitude"):
            data = data.isel({dim: 0})

    if "time" not in data.dims:
        print(json.dumps({"error": "No time dimension in this dataset"}))
        sys.exit(1)

    # Compute spatial mean at each time step
    lat_key = "latitude" if "latitude" in data.dims else "lat"
    lon_key = "longitude" if "longitude" in data.dims else "lon"

    # Weight by cosine of latitude for proper global mean
    weights = np.cos(np.deg2rad(ds[lat_key]))
    weighted = data.weighted(weights)
    global_mean = weighted.mean(dim=[lat_key, lon_key], skipna=True)

    times = []
    values = []
    for t, v in zip(global_mean.time.values, global_mean.values):
        try:
            t_str = str(np.datetime_as_string(t, unit="D"))
        except TypeError:
            t_str = str(t)[:10]
        times.append(t_str)
        val = float(v)
        values.append(None if np.isnan(val) else round(val, 4))

    ds.close()

    # Compute analytics on global mean series
    safe_values = [v if v is not None else float('nan') for v in values]
    rolling_mean, trend_line, trend_rate, anomaly_times, anomaly_values = compute_analysis(times, safe_values)

    # Estimate trend per year
    trend_per_year = None
    if trend_rate is not None and len(times) > 1:
        try:
            first_year = int(times[0][:4])
            last_year = int(times[-1][:4])
            span = max(1, last_year - first_year)
            points_per_year = len(times) / max(1, span)
            trend_per_year = round(trend_rate * points_per_year, 6)
        except (ValueError, IndexError):
            trend_per_year = trend_rate

    print(json.dumps({
        "variable": variable,
        "mode": "global_mean",
        "times": times,
        "values": values,
        "rollingMean": rolling_mean,
        "trendLine": trend_line,
        "trendPerYear": trend_per_year,
        "anomalyTimes": anomaly_times,
        "anomalyValues": anomaly_values,
    }))


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(json.dumps({"error": "Usage: get_time_series.py <file> <variable> <lat> <lon> OR get_time_series.py <file> <variable> --global-mean"}))
        sys.exit(1)

    filepath = sys.argv[1]
    variable = sys.argv[2]

    if len(sys.argv) >= 4 and sys.argv[3] == "--global-mean":
        get_global_mean(filepath, variable)
    elif len(sys.argv) >= 5:
        get_time_series(filepath, variable, sys.argv[3], sys.argv[4])
    else:
        print(json.dumps({"error": "Provide lat/lon or --global-mean flag"}))
        sys.exit(1)
