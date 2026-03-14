import React from 'react';

const ClimatePredictions = () => {
  return (
    <>
      {/* Topbar */}
      <header className="h-[60px] border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
            <input 
              readOnly
              className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50" 
              placeholder="Search datasets or models..." 
              type="text" 
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      {/* Page Body */}
      <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1 bg-background-light dark:bg-background-dark">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white font-display">Climate Predictions</h2>
            <p className="text-slate-500 mt-1">Generate multi-decadal climate forecasts using ensemble ML models.</p>
          </div>
          <div className="flex gap-2 text-xs font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700">
            <span className="text-slate-400">RUN_ID:</span>
            <span className="text-primary">CP-2026-X92</span>
          </div>
        </div>

        {/* Config Bar */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Dataset</label>
              <select className="w-full h-11 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary">
                <option>ERA5 Land Hourly</option>
                <option>CMIP6 Global</option>
                <option>NOAA GHCN-D</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Variable</label>
              <select className="w-full h-11 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary">
                <option>Avg Temperature (°C)</option>
                <option>Precipitation (mm)</option>
                <option>Surface Pressure</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Historical Range</label>
              <select className="w-full h-11 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary">
                <option>1990 - 2026</option>
                <option>2000 - 2026</option>
                <option>1950 - 2026</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Predict Through</label>
              <select className="w-full h-11 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary">
                <option>2035</option>
                <option>2050</option>
                <option>2100</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">ML Model</label>
              <select className="w-full h-11 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary">
                <option>LSTM Ensemble</option>
                <option>Random Forest</option>
                <option>Prophet V3</option>
              </select>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white font-bold h-11 px-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all">
              <span className="material-symbols-outlined text-lg">auto_awesome</span>
              Generate
            </button>
          </div>
        </div>

        {/* Forecast Chart Card */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">monitoring</span>
              <h3 className="font-bold text-lg">Temperature Forecast — New Delhi</h3>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-0.5 bg-primary"></span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-tight">Historical</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-0.5 border-t border-dashed border-amber-500"></span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-tight">Predicted</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-amber-500/20 rounded-sm"></span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-tight">Confidence (95%)</span>
              </div>
            </div>
          </div>
          
          <div className="h-96 w-full p-4 sm:p-8 relative flex flex-col justify-end min-h-[400px]">
            {/* Abstract Chart Visualization */}
            <div className="absolute inset-0 px-4 sm:px-12 py-12 flex items-end">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 300">
                {/* Grid Lines */}
                <line className="text-slate-200 dark:text-slate-800" stroke="currentColor" strokeWidth="1" x1="0" x2="1000" y1="50" y2="50"></line>
                <line className="text-slate-200 dark:text-slate-800" stroke="currentColor" strokeWidth="1" x1="0" x2="1000" y1="150" y2="150"></line>
                <line className="text-slate-200 dark:text-slate-800" stroke="currentColor" strokeWidth="1" x1="0" x2="1000" y1="250" y2="250"></line>
                
                {/* Uncertainty Band */}
                <path d="M 600 150 Q 700 120 800 100 Q 900 80 1000 60 L 1000 140 Q 900 160 800 180 Q 700 200 600 150" fill="rgba(245, 158, 11, 0.15)"></path>
                
                {/* Historical Line */}
                <path d="M 0 220 Q 50 230 100 200 Q 150 170 200 190 Q 250 210 300 180 Q 350 160 400 175 Q 450 190 500 160 Q 550 130 600 150" fill="none" stroke="#2a77f4" strokeLinecap="round" strokeWidth="3"></path>
                
                {/* Predicted Line */}
                <path d="M 600 150 Q 700 120 800 100 Q 900 80 1000 60" fill="none" stroke="#f59e0b" strokeDasharray="8 6" strokeLinecap="round" strokeWidth="3"></path>
                
                {/* Current Indicator */}
                <line className="text-slate-300 dark:text-slate-700" stroke="currentColor" strokeDasharray="4" strokeWidth="1" x1="600" x2="600" y1="0" y2="300"></line>
              </svg>
              <div className="absolute top-8 sm:left-[600px] left-[50%] -translate-x-1/2 bg-slate-900 text-white px-2 py-1 rounded text-[10px] font-bold">JAN 2026</div>
            </div>
            
            {/* Axis Labels */}
            <div className="flex justify-between mt-4 border-t border-slate-100 dark:border-slate-800 pt-4 text-[10px] sm:text-xs font-medium text-slate-400 font-mono uppercase tracking-widest relative z-10">
              <span className="hidden sm:inline">2015</span>
              <span>2018</span>
              <span>2022</span>
              <span className="text-primary font-bold">2026</span>
              <span>2030</span>
              <span>2034</span>
              <span className="hidden sm:inline">2038</span>
            </div>
          </div>
        </div>

        {/* Insight Card */}
        <div className="bg-[#EFF6FF] dark:bg-primary/10 border border-primary/20 p-6 rounded-xl flex gap-4 items-start shadow-sm">
          <div className="bg-primary text-white p-2 rounded-lg shrink-0">
            <span className="material-symbols-outlined">info</span>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-primary text-sm uppercase tracking-wider">Model Insight Summary</h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed max-w-4xl">
              The LSTM Ensemble model projects a <span className="font-bold text-primary">+1.8°C trend</span> for the New Delhi region over the next decade. 
              The widening uncertainty band after 2030 suggests increased variance in monsoon intensity which may impact seasonal temperature averages. 
              Confidence levels are highest (0.94) for the 2026-2030 period based on current El Niño-Southern Oscillation (ENSO) correlations.
            </p>
          </div>
        </div>

        {/* Stats/Grid info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Confidence Score</p>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-black font-mono">94.2%</span>
              <span className="text-emerald-500 text-xs font-bold pb-1 flex items-center"><span className="material-symbols-outlined text-sm">arrow_upward</span> High</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">RMSE Variation</p>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-black font-mono">0.24°C</span>
              <span className="text-slate-400 text-xs font-bold pb-1">Stable</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Data Integrity</p>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-black font-mono">99.8%</span>
              <span className="text-primary text-xs font-bold pb-1">Verified</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClimatePredictions;
