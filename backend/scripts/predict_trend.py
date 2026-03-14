"""
predict_trend.py
Usage: python predict_trend.py <nc_file> <variable> <lat> <lon>
Extracts time series for a location, fits a Linear Regression,
and outputs historical + predicted values (2025-2050) as JSON.
"""
import sys
import json
import xarray as xr
import numpy as np
from sklearn.linear_model import LinearRegression


def predict_trend(filepath, variable, lat, lon):
    time_coder = xr.coders.CFDatetimeCoder(use_cftime=True)
    ds = xr.open_dataset(filepath, engine="netcdf4", decode_times=time_coder)

    if variable not in ds:
        print(json.dumps({"error": f"Variable '{variable}' not found"}))
        sys.exit(1)

    lat = float(lat)
    lon = float(lon)
    lat_key = "latitude" if "latitude" in ds.coords else "lat"
    lon_key = "longitude" if "longitude" in ds.coords else "lon"

    data = ds[variable].sel({lat_key: lat, lon_key: lon}, method="nearest")

    if "time" not in data.dims:
        print(json.dumps({"error": "No time dimension in this dataset"}))
        sys.exit(1)

    # Aggregate to annual means — handle cftime objects
    try:
        raw_years = data.time.dt.year.values
    except Exception:
        # For cftime objects, extract year manually
        raw_years = np.array([t.year for t in data.time.values])

    years = np.array(sorted(set(raw_years)))

    # Climatology datasets may have only 1 unique year (e.g. year 1)
    if len(years) < 2:
        print(json.dumps({
            "error": f"This dataset has only {len(years)} unique year(s) ({years.tolist()}). "
                     "Prediction requires multi-year time series data. "
                     "Try uploading a dataset with multiple years of observations."
        }))
        sys.exit(1)

    annual_means = []
    for yr in years:
        year_data = data.sel(time=raw_years == yr).values
        mean_val = float(np.nanmean(year_data))
        annual_means.append(mean_val)

    ds.close()

    # Fit Linear Regression
    X = years.reshape(-1, 1)
    y = np.array(annual_means)
    model = LinearRegression()
    model.fit(X, y)

    # Predict 2025–2050
    future_years = np.arange(2025, 2051)
    predicted = model.predict(future_years.reshape(-1, 1))

    print(json.dumps({
        "variable": variable,
        "historicalYears": years.tolist(),
        "historicalValues": [round(v, 4) for v in annual_means],
        "predictedYears": future_years.tolist(),
        "predictedValues": [round(v, 4) for v in predicted.tolist()],
        "slope": round(float(model.coef_[0]), 6),
        "intercept": round(float(model.intercept_), 4),
    }))


if __name__ == "__main__":
    if len(sys.argv) < 5:
        print(json.dumps({"error": "Usage: predict_trend.py <file> <variable> <lat> <lon>"}))
        sys.exit(1)
    predict_trend(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4])
