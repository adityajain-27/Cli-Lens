import React from 'react';

const DatasetComparison = () => {
  return (
    <>
      {/* TopBar */}
      <header className="h-[60px] border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-10 shrink-0">
        <h1 className="text-lg font-semibold font-display">Compare Datasets</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <span className="material-symbols-outlined">help</span>
          </button>
        </div>
      </header>

      <div className="p-6 md:p-8 space-y-6 max-w-7xl mx-auto w-full flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
        {/* Selector Row */}
        <section className="bg-white dark:bg-slate-900 p-5 md:p-[20px] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_1fr_auto] gap-6 items-end">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Dataset A</label>
              <select className="w-full h-11 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary">
                <option>Historical CMIP6 (1990-2000)</option>
                <option>ERA5 Reanalysis</option>
              </select>
            </div>
            <div className="flex items-center justify-center pb-2 hidden lg:flex">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">VS</div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Dataset B</label>
              <select className="w-full h-11 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary">
                <option>Projected SSP5-8.5 (2020-2030)</option>
                <option>HadCRUT5 Observations</option>
              </select>
            </div>
            <div className="space-y-2 lg:border-l lg:border-slate-200 dark:lg:border-slate-700 lg:pl-6">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Variable</label>
              <select className="w-full h-11 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary">
                <option>Surface Temperature (K)</option>
                <option>Precipitation Flux (kg m-2 s-1)</option>
                <option>Sea Level Pressure (Pa)</option>
              </select>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white font-bold h-11 px-8 rounded-lg transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">play_arrow</span>
              Run Comparison
            </button>
          </div>
        </section>

        {/* Results Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Heatmap Card 1 */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">calendar_today</span>
                1990 Temperature
              </h3>
              <span className="text-[10px] font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">AVG: 287.42K</span>
            </div>
            <div 
              className="aspect-video rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 relative group" 
              style={{ backgroundImage: 'linear-gradient(to right, #3b82f6, #60a5fa, #93c5fd, #fde68a, #f87171)' }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white scale-150">zoom_in</span>
              </div>
            </div>
          </div>

          {/* Heatmap Card 2 */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">event</span>
                2020 Temperature
              </h3>
              <span className="text-[10px] font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">AVG: 288.65K</span>
            </div>
            <div 
              className="aspect-video rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 relative group" 
              style={{ backgroundImage: 'linear-gradient(to right, #3b82f6, #93c5fd, #fde68a, #fbbf24, #ef4444, #b91c1c)' }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white scale-150">zoom_in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Anomaly Delta Map (Full Width) */}
        <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-red-500">difference</span>
                Anomaly Delta Map
              </h3>
              <p className="text-sm text-slate-500 font-mono">ΔT = T_2020 - T_1990</p>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 p-2 rounded-lg">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-[10px] font-bold">Cooling</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-[10px] font-bold">Warming</span>
              </div>
            </div>
          </div>
          <div 
            className="h-80 rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden relative" 
            style={{ background: 'radial-gradient(circle at center, #fee2e2 10%, #fca5a5 30%, #fecaca 50%, #dbeafe 80%, #93c5fd 100%)' }}
          >
            <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-xl">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Max Warming</span>
                <span className="text-sm font-mono text-red-600 font-bold">+4.28°C (Arctic)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trend Comparison (Full Width) */}
        <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">timeline</span>
              Trend Comparison
            </h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-4 h-1 bg-cyan-400 rounded-full"></span>
                <span className="text-xs font-medium">1990 Cycle</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-1 bg-amber-500 rounded-full"></span>
                <span className="text-xs font-medium">2020 Cycle</span>
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end gap-1 px-4 relative">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between py-2 border-b border-slate-200 dark:border-slate-800">
              <div className="border-t border-slate-100 dark:border-slate-800/50 w-full h-0"></div>
              <div className="border-t border-slate-100 dark:border-slate-800/50 w-full h-0"></div>
              <div className="border-t border-slate-100 dark:border-slate-800/50 w-full h-0"></div>
              <div className="border-t border-slate-100 dark:border-slate-800/50 w-full h-0"></div>
            </div>
            {/* Pseudo Dual Line Chart */}
            <svg className="absolute inset-0 w-full h-full px-4" preserveAspectRatio="none" viewBox="0 0 1000 256">
              {/* Cyan Line (1990) */}
              <path d="M0,180 L100,160 L200,175 L300,140 L400,150 L500,130 L600,145 L700,110 L800,120 L900,135 L1000,120" fill="none" stroke="#22d3ee" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
              {/* Amber Line (2020) */}
              <path d="M0,140 L100,120 L200,110 L300,90 L400,100 L500,70 L600,85 L700,50 L800,60 L900,45 L1000,30" fill="none" stroke="#f59e0b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
            </svg>
            {/* Legend Labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 pb-2 text-[10px] font-mono text-slate-400">
              <span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DatasetComparison;
