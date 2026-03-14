import React from 'react';
import Plotly from 'plotly.js-dist-min';
import factory from 'react-plotly.js/factory';

const createPlotlyComponent = factory.default || factory;
const Plot = createPlotlyComponent(Plotly);

// Known units for common NetCDF climate variables
const VARIABLE_UNITS = {
  air: '°C',
  temperature: '°C',
  tmp: '°C',
  uwnd: 'm/s',
  vwnd: 'm/s',
  wspd: 'm/s',
  prate: 'kg/m²/s',
  precip: 'mm',
  pr: 'mm/day',
  slp: 'hPa',
  hgt: 'm',
  rhum: '%',
  sst: '°C',
};

const getUnit = (variable) => {
  if (!variable) return '';
  const key = variable.toLowerCase();
  return VARIABLE_UNITS[key] || '';
};

const PlotlyHeatmap = ({ data, title }) => {
  if (!data || !data.latitudes || !data.longitudes || !data.values) {
    return <div className="p-4 text-center text-slate-500">No data available to plot.</div>;
  }

  const unit = getUnit(data.variable);
  const colorbarTitle = data.variable
    ? `${data.variable.toUpperCase()}${unit ? ` (${unit})` : ''}`
    : 'Value';

  return (
    <div className="w-full flex justify-center bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm relative">
      <Plot
        data={[
          {
            z: data.values,
            x: data.longitudes,
            y: data.latitudes,
            type: 'heatmap',
            colorscale: 'RdBu',
            reversescale: true,
            hovertemplate:
              'Lat: %{y:.1f}°<br>Lon: %{x:.1f}°<br>Value: %{z:.3f}' +
              (unit ? ` ${unit}` : '') +
              '<extra></extra>',
            colorbar: {
              tickfont: { color: '#94a3b8', size: 11 },
              title: {
                text: colorbarTitle,
                font: { color: '#cbd5e1', size: 12 },
                side: 'right',
              },
              len: 0.85,
            },
          },
        ]}
        layout={{
          title: {
            text: title || `${data.variable ? data.variable.toUpperCase() : 'Variable'} — Global Climate Map`,
            font: { color: '#f1f5f9', size: 15, family: 'Inter, system-ui, sans-serif' },
          },
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(15,23,42,0.3)',
          margin: { t: 50, l: 65, r: 30, b: 55 },
          xaxis: {
            title: { text: 'Longitude (°E)', font: { color: '#94a3b8', size: 12 } },
            color: '#94a3b8',
            tickfont: { size: 10, color: '#94a3b8' },
            showgrid: true,
            gridcolor: 'rgba(148,163,184,0.1)',
            dtick: 60,
            ticksuffix: '°',
          },
          yaxis: {
            title: { text: 'Latitude (°N)', font: { color: '#94a3b8', size: 12 } },
            color: '#94a3b8',
            tickfont: { size: 10, color: '#94a3b8' },
            showgrid: true,
            gridcolor: 'rgba(148,163,184,0.1)',
            dtick: 30,
            ticksuffix: '°',
            scaleanchor: 'x',
            scaleratio: 1,
          },
          autosize: true,
        }}
        useResizeHandler={true}
        style={{ width: '100%', minHeight: '420px' }}
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

export default PlotlyHeatmap;
