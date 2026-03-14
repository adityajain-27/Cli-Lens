import React from 'react';
import { Link } from 'react-router-dom';

const GlobeView = () => {
  return (
    <div className="bg-[#0A0F1E] font-display text-slate-100 overflow-hidden h-screen w-screen relative">
      {/* 3D Earth Visualization Container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Atmosphere Glow */}
        <div 
          className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full flex items-center justify-center"
          style={{ boxShadow: '0 0 80px 20px rgba(42, 119, 244, 0.15)' }}
        >
          {/* The Earth Sphere */}
          <div 
            className="w-full h-full rounded-full relative overflow-hidden border border-primary/20"
            style={{ background: 'radial-gradient(circle at 30% 30%, #1e293b 0%, #0f172a 70%, #020617 100%)' }}
          >
            {/* Map Texture Overlay */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://placeholder.pics/svg/800')] bg-cover mix-blend-screen"></div>
            {/* Temperature Data Layer */}
            <div 
              className="absolute inset-0 mix-blend-overlay"
              style={{ background: 'radial-gradient(circle at center, rgba(234, 88, 12, 0.4) 0%, rgba(59, 130, 246, 0.2) 100%)' }}
            ></div>
            {/* Cloud/Atmosphere Layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* UI Overlay Layer */}
      <div className="relative z-10 flex flex-col h-full w-full p-6 pointer-events-none">
        {/* Top Navigation */}
        <div className="flex justify-between items-start w-full pointer-events-auto">
          <Link 
            to="/dashboard" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-slate-200"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            <span className="text-sm font-medium hidden sm:block">Back to Dashboard</span>
          </Link>
          <div className="flex flex-col items-end">
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase">PyClima Explorer</h1>
            <p className="text-[10px] sm:text-xs font-mono text-primary">3D_VISUALIZATION_ENGINE_V2.0</p>
          </div>
        </div>

        {/* Middle Spacer */}
        <div className="flex-grow"></div>

        {/* Bottom Controls Area */}
        <div className="flex flex-col sm:flex-row justify-between items-end w-full gap-4">
          {/* Legend Card (Bottom Left) */}
          <div className="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl w-full sm:w-64 shadow-2xl">
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3">Temperature Scale</p>
            <div className="h-3 w-full rounded-full bg-gradient-to-r from-blue-600 via-yellow-400 to-red-600 mb-2"></div>
            <div className="flex justify-between font-mono text-[10px] text-slate-300">
              <span>-20°C</span>
              <span>15°C</span>
              <span>+50°C</span>
            </div>
          </div>

          {/* Floating Control Panel (Bottom Right) */}
          <div className="pointer-events-auto bg-white/95 text-slate-900 p-5 rounded-xl w-full sm:w-[280px] shadow-2xl flex flex-col gap-5">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">settings_input_component</span>
                Globe Controls
              </h2>
            </div>
            
            {/* Variable Selector */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase">Variable</label>
              <div className="relative">
                <select className="w-full bg-slate-100 border-none rounded-lg text-sm font-medium py-2 px-3 appearance-none focus:ring-2 focus:ring-primary/20 cursor-pointer">
                  <option>Surface Temperature</option>
                  <option>Precipitation</option>
                  <option>Cloud Coverage</option>
                  <option>Sea Level Pressure</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-2 text-slate-400 pointer-events-none text-xl">expand_more</span>
              </div>
            </div>

            {/* Year Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-slate-500 uppercase">Year</label>
                <span className="text-sm font-mono font-bold text-primary">2024</span>
              </div>
              <input 
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" 
                max="2024" 
                min="2000" 
                type="range" 
                defaultValue="2024"
              />
            </div>

            {/* Opacity Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-slate-500 uppercase">Layer Opacity</label>
                <span className="text-xs font-mono">75%</span>
              </div>
              <input 
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" 
                max="100" 
                min="0" 
                type="range" 
                defaultValue="75"
              />
            </div>

            {/* Toggles */}
            <div className="flex flex-col gap-3 pt-2 border-t border-slate-200">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-medium text-slate-700">Auto Rotate</span>
                <div className="relative inline-flex items-center">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </div>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-medium text-slate-700">Atmosphere Glow</span>
                <div className="relative inline-flex items-center">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </div>
              </label>
            </div>
            <Link to="/dashboard" className="w-full bg-primary text-white font-bold py-2.5 rounded-lg text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20 text-center block">
              Apply Rendering
            </Link>
          </div>
        </div>
      </div>

      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#2a77f4 1px, transparent 1px), linear-gradient(90deg, #2a77f4 1px, transparent 1px)', backgroundSize: '80px 80px' }}
      ></div>
    </div>
  );
};

export default GlobeView;
