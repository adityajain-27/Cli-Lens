import React from 'react';
import Plotly from 'plotly.js-dist-min';
import factoryModule from 'react-plotly.js/factory';

const createPlotlyComponent = factoryModule.default || factoryModule;
const Plot = createPlotlyComponent(Plotly);

// Known units for common NetCDF climate variables
const VARIABLE_UNITS = {
  air: '°C', temperature: '°C', tmp: '°C', uwnd: 'm/s', vwnd: 'm/s',
  wspd: 'm/s', prate: 'kg/m²/s', precip: 'mm', pr: 'mm/day',
  slp: 'hPa', hgt: 'm', rhum: '%', sst: '°C',
};
const getUnit = (v) => (v ? VARIABLE_UNITS[v.toLowerCase()] || '' : '');

/**
 * Advanced time-series chart with:
 *  - Raw time series line (cyan)
 *  - 12-step rolling mean (dotted white)
 *  - Linear trend line (dashed orange, with rate annotation)
 *  - Anomaly markers (red circles)
 *  - Future prediction trace (optional, amber dashed)
 *  - Rich hover tooltips
 *
 * Props:
 *   data: { times, values, rollingMean, trendLine, trendPerYear, anomalyTimes, anomalyValues, variable }
 *   title: string
 *   subtitle: string (optional, e.g. "Showing Temperature at 49.0°S, 78.0°E")
 *   historical: { years, values } (legacy fallback)
 *   future: { years, values } (optional)
 *   yAxisLabel: string
 */
const PlotlyLineChart = ({ data, historical, future, title, subtitle, yAxisLabel }) => {
  // Support both new data format and legacy format
  const useNewFormat = data && data.times && data.values;

  if (!useNewFormat && (!historical || !historical.years || !historical.values)) {
    return <div className="p-4 text-center text-slate-500">No time series data available to plot.</div>;
  }

  const variable = data?.variable || '';
  const unit = getUnit(variable) || yAxisLabel || 'Value';
  const traces = [];

  if (useNewFormat) {
    // --- Raw Time Series ---
    traces.push({
      x: data.times,
      y: data.values,
      type: 'scatter',
      mode: 'lines',
      name: variable ? `${variable.charAt(0).toUpperCase() + variable.slice(1)}` : 'Observed',
      line: { color: '#22d3ee', width: 1.8 },
      hovertemplate: `%{x}<br>${variable ? variable.toUpperCase() : 'Value'}: %{y:.3f} ${unit}<extra></extra>`,
    });

    // --- Rolling Mean ---
    if (data.rollingMean) {
      traces.push({
        x: data.times,
        y: data.rollingMean,
        type: 'scatter',
        mode: 'lines',
        name: '12-step rolling mean',
        line: { color: 'rgba(255,255,255,0.7)', width: 1.5, dash: 'dot' },
        hovertemplate: `%{x}<br>Rolling mean: %{y:.3f} ${unit}<extra></extra>`,
      });
    }

    // --- Linear Trend Line ---
    if (data.trendLine) {
      const rateStr = data.trendPerYear != null
        ? ` (${data.trendPerYear > 0 ? '+' : ''}${data.trendPerYear.toFixed(4)} ${unit}/yr)`
        : '';
      traces.push({
        x: data.times,
        y: data.trendLine,
        type: 'scatter',
        mode: 'lines',
        name: `Trend${rateStr}`,
        line: { color: '#f59e0b', width: 2, dash: 'dash' },
        hovertemplate: `%{x}<br>Trend: %{y:.3f} ${unit}<extra></extra>`,
      });
    }

    // --- Anomaly Markers ---
    if (data.anomalyTimes && data.anomalyTimes.length > 0) {
      traces.push({
        x: data.anomalyTimes,
        y: data.anomalyValues,
        type: 'scatter',
        mode: 'markers',
        name: 'Anomaly',
        marker: { color: '#ef4444', size: 8, symbol: 'circle', line: { color: '#fca5a5', width: 1.5 } },
        hovertemplate: `%{x}<br>⚠ Anomaly: %{y:.3f} ${unit}<extra></extra>`,
      });
    }
  } else {
    // Legacy format (historical + future)
    traces.push({
      x: historical.years,
      y: historical.values,
      type: 'scatter',
      mode: 'lines',
      name: 'Historical',
      line: { color: '#22d3ee', width: 2 },
    });

    if (future && future.years && future.values && future.years.length > 0) {
      const lastYear = historical.years[historical.years.length - 1];
      const lastVal = historical.values[historical.values.length - 1];
      traces.push({
        x: [lastYear, ...future.years],
        y: [lastVal, ...future.values],
        type: 'scatter',
        mode: 'lines',
        name: 'Prediction',
        line: { color: '#f59e0b', width: 2, dash: 'dash' },
      });
    }
  }

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-700/50 shadow-lg relative" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
      {subtitle && (
        <div className="px-4 pt-3 text-sm text-slate-400 text-center">{subtitle}</div>
      )}
      <Plot
        data={traces}
        layout={{
          title: {
            text: title || 'Time Series Trend Analysis',
            font: { color: '#e2e8f0', size: 15, family: 'Inter, system-ui, sans-serif' },
          },
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(15,23,42,0.6)',
          margin: { t: 55, l: 60, r: 20, b: 55 },
          xaxis: {
            title: { text: '', font: { color: '#94a3b8', size: 11 } },
            color: '#64748b',
            tickfont: { size: 10, color: '#94a3b8' },
            showgrid: true,
            gridcolor: 'rgba(100,116,139,0.15)',
            zeroline: false,
          },
          yaxis: {
            title: { text: `${variable ? variable.charAt(0).toUpperCase() + variable.slice(1) : yAxisLabel || 'Value'} (${unit})`, font: { color: '#94a3b8', size: 12 } },
            color: '#64748b',
            tickfont: { size: 10, color: '#94a3b8' },
            showgrid: true,
            gridcolor: 'rgba(100,116,139,0.15)',
            zeroline: false,
          },
          autosize: true,
          showlegend: true,
          legend: {
            orientation: 'h',
            y: 1.12,
            x: 0.5,
            xanchor: 'center',
            font: { color: '#cbd5e1', size: 10 },
            bgcolor: 'rgba(0,0,0,0)',
          },
        }}
        useResizeHandler={true}
        style={{ width: '100%', minHeight: '400px' }}
        config={{
          displayModeBar: true,
          modeBarButtonsToRemove: ['lasso2d', 'select2d', 'sendDataToCloud'],
          displaylogo: false,
          responsive: true,
        }}
      />
    </div>
  );
};

export default PlotlyLineChart;
