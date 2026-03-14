import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { listDatasets, getMapData } from '../services/api';
import PlotlyHeatmap from '../components/PlotlyHeatmap';

const GlobeView = () => {
  const { user, isPro } = useAuth();
  const [datasets, setDatasets] = useState([]);
  const [selectedDatasetId, setSelectedDatasetId] = useState('');
  const [variable, setVariable] = useState('');
  const [year, setYear] = useState('');
  const [mapData, setMapData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Get variables from selected dataset
  const selectedDs = datasets.find(d => d._id === selectedDatasetId);
  const dataVars = (selectedDs?.variables || []).filter(
    v => !['climatology_bounds', 'valid_yr_count', 'lat', 'lon', 'level', 'time', 'latitude', 'longitude'].includes(v)
  );

  useEffect(() => {
    listDatasets()
      .then((data) => {
        setDatasets(data);
        if (data.length > 0) {
          setSelectedDatasetId(data[0]._id);
          const vars = (data[0]?.variables || []).filter(
            v => !['climatology_bounds', 'valid_yr_count', 'lat', 'lon', 'level', 'time', 'latitude', 'longitude'].includes(v)
          );
          setVariable(vars[0] || '');
        }
      })
      .catch(() => {});
  }, []);

  const handleRender = async () => {
    if (!selectedDatasetId || !variable) {
      setError('Please select a dataset and variable.');
      return;
    }
    setError('');
    setLoading(true);
    setMapData(null);
    try {
      const data = await getMapData(selectedDatasetId, variable, year);
      setMapData(data);
    } catch (err) {
      setError(err.message || 'Failed to load map data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0A0F1E] font-display text-slate-100 overflow-hidden h-screen w-screen relative flex flex-col">
      {/* Top Navigation */}
      <div className="flex justify-between items-center p-4 sm:p-6 z-20 relative">
        <Link 
          to="/dashboard" 
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-slate-200"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          <span className="text-sm font-medium hidden sm:block">Back to Dashboard</span>
        </Link>
        <div className="flex flex-col items-end">
          <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase">PyClima Explorer</h1>
          <p className="text-[10px] sm:text-xs font-mono text-primary">GLOBAL_HEATMAP_VISUALIZER</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row gap-4 p-4 sm:p-6 pt-0 overflow-hidden z-10 relative">
        {/* Map Area */}
        <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden flex flex-col">
          {mapData ? (
            <div className="flex-1 p-4">
              <PlotlyHeatmap 
                data={mapData} 
                title={`${variable.toUpperCase()} – Global Distribution`}
              />
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              {loading ? (
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="material-symbols-outlined animate-spin text-3xl">autorenew</span>
                  <span className="text-lg">Rendering map data…</span>
                </div>
              ) : (
                <div className="text-center">
                  <span className="material-symbols-outlined text-white/10 text-[120px] block mb-4">public</span>
                  <p className="text-slate-400 text-lg">Select a dataset and variable, then click <strong className="text-primary">Render Map</strong></p>
                </div>
              )}
            </div>
          )}
          {error && (
            <div className="mx-4 mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-sm text-red-300">{error}</div>
          )}
        </div>

        {/* Control Panel */}
        <div className="w-full lg:w-[300px] bg-white/95 text-slate-900 p-5 rounded-xl shadow-2xl flex flex-col gap-5 overflow-y-auto">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-tight mb-1 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">settings_input_component</span>
              Map Controls
            </h2>
          </div>
          
          {/* Dataset Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase">Dataset</label>
            <div className="relative">
              <select
                id="globe-dataset"
                value={selectedDatasetId}
                onChange={(e) => {
                  setSelectedDatasetId(e.target.value);
                  const ds = datasets.find(d => d._id === e.target.value);
                  const vars = (ds?.variables || []).filter(
                    v => !['climatology_bounds', 'valid_yr_count', 'lat', 'lon', 'level', 'time', 'latitude', 'longitude'].includes(v)
                  );
                  setVariable(vars[0] || '');
                }}
                className="w-full bg-slate-100 border-none rounded-lg text-sm font-medium py-2 px-3 appearance-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
              >
                <option value="">— Select Dataset —</option>
                {datasets.map((ds) => (
                  <option key={ds._id} value={ds._id}>{ds.name || ds.filename}</option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-2 top-2 text-slate-400 pointer-events-none text-xl">expand_more</span>
            </div>
          </div>

          {/* Variable Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase">Variable</label>
            <div className="relative">
              <select
                id="globe-variable"
                value={variable}
                onChange={(e) => setVariable(e.target.value)}
                className="w-full bg-slate-100 border-none rounded-lg text-sm font-medium py-2 px-3 appearance-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
              >
                <option value="">— Select Variable —</option>
                {dataVars.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-2 top-2 text-slate-400 pointer-events-none text-xl">expand_more</span>
            </div>
          </div>

          {/* Year (optional) */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase">Year (optional)</label>
            <input
              id="globe-year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="e.g. 2010"
              className="w-full bg-slate-100 border-none rounded-lg text-sm font-medium py-2 px-3 focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Legend */}
          <div className="pt-2 border-t border-slate-200">
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3">Color Scale</p>
            <div className="h-3 w-full rounded-full bg-gradient-to-r from-blue-600 via-yellow-400 to-red-600 mb-2"></div>
            <div className="flex justify-between font-mono text-[10px] text-slate-500">
              <span>Low</span>
              <span>Mid</span>
              <span>High</span>
            </div>
          </div>

          <button
            id="globe-render"
            onClick={handleRender}
            disabled={loading || !selectedDatasetId || !variable}
            className="w-full bg-primary text-white font-bold py-2.5 rounded-lg text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20 text-center disabled:opacity-60"
          >
            {loading ? 'Rendering…' : 'Render Map'}
          </button>
        </div>
      </div>

      {/* Background Grid Effect */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#2a77f4 1px, transparent 1px), linear-gradient(90deg, #2a77f4 1px, transparent 1px)', backgroundSize: '80px 80px' }}
      ></div>
    </div>
  );
};

export default GlobeView;
