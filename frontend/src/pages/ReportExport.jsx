import React from 'react';
import { Link } from 'react-router-dom';

const ReportExport = () => {
  return (
    <>
      {/* TopBar */}
      <header className="h-[60px] border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-sm hidden sm:inline">Reports</span>
          <span className="text-slate-400 text-sm hidden sm:inline">/</span>
          <span className="text-sm font-semibold">Export Report</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="size-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <Link to="/dashboard" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
            New Project
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-background-light dark:bg-background-dark">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-black tracking-tight mb-2 font-display">Export Report</h1>
            <p className="text-slate-500">Review your generated analysis and customize the final document output.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Report Preview (60%) */}
            <div className="lg:w-[60%] flex flex-col gap-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Live Preview</h3>
                <div className="flex gap-2">
                  <button className="size-8 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined text-sm">zoom_in</span>
                  </button>
                  <button className="size-8 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined text-sm">zoom_out</span>
                  </button>
                </div>
              </div>

              {/* Paper Document */}
              <div 
                className="bg-white w-full max-w-[600px] mx-auto p-6 sm:p-12 border border-slate-100 text-slate-900 flex flex-col aspect-[1/1.414]"
                style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="flex justify-between items-start border-b-2 border-slate-900 pb-8 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="size-10 bg-slate-900 rounded flex items-center justify-center text-white shrink-0">
                      <span className="material-symbols-outlined">ac_unit</span>
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-black">PyClima Explorer</h2>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 hidden sm:block">Scientific Reporting Systems</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-mono text-slate-500 uppercase">Report Ref: PCX-2026-0941</p>
                    <p className="text-[10px] font-mono text-slate-500">Date: 2026-10-24 14:22:01</p>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black mb-6">Climate Analysis Report</h1>
                
                <div className="bg-slate-50 p-4 sm:p-6 rounded-lg mb-8 font-mono text-xs">
                  <div className="grid grid-cols-2 gap-y-3">
                    <div className="text-slate-500 uppercase font-bold tracking-tighter">Project Name:</div>
                    <div className="text-slate-900">Global Warming Trends v4.2</div>
                    <div className="text-slate-500 uppercase font-bold tracking-tighter">Data Source:</div>
                    <div className="text-slate-900">NOAA Global Surface Temp</div>
                    <div className="text-slate-500 uppercase font-bold tracking-tighter">Range:</div>
                    <div className="text-slate-900">Jan 1980 - Oct 2026</div>
                    <div className="text-slate-500 uppercase font-bold tracking-tighter">Confidence:</div>
                    <div className="text-slate-900">98.4% (Interval 1.2σ)</div>
                  </div>
                </div>

                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-slate-200 pb-1">Temperature Variance Visualisation</h3>
                
                <div className="w-full h-48 bg-slate-100 rounded flex flex-col items-center justify-center relative overflow-hidden mb-8 border border-slate-200">
                  <div 
                    className="absolute inset-0 opacity-10" 
                    style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)', backgroundSize: '20px 20px' }}
                  ></div>
                  <div className="w-4/5 h-1/2 flex items-end gap-1 relative z-10">
                    <div className="flex-1 bg-slate-300 h-[20%]"></div>
                    <div className="flex-1 bg-slate-300 h-[25%]"></div>
                    <div className="flex-1 bg-slate-300 h-[40%]"></div>
                    <div className="flex-1 bg-slate-400 h-[35%]"></div>
                    <div className="flex-1 bg-slate-400 h-[55%]"></div>
                    <div className="flex-1 bg-slate-500 h-[70%]"></div>
                    <div className="flex-1 bg-primary h-[85%]"></div>
                    <div className="flex-1 bg-primary h-[95%]"></div>
                  </div>
                  <p className="mt-4 text-[10px] font-mono text-slate-400 italic">Fig 1: Surface Temperature Anomaly Distribution</p>
                </div>

                <div className="flex-1 font-mono text-[10px] sm:text-[11px] leading-relaxed text-slate-600">
                  <p className="mb-4">The analysis reveals a persistent upward trajectory in global surface temperatures, specifically accelerating post-2010. Data points collected across 14,000 meteorological stations indicate a mean variance of +1.12°C compared to the 1951-1980 baseline.</p>
                  <p>Primary drivers identified through the PyClima predictive engine suggest a strong correlation with atmospheric composition changes. Statistical significance was verified using the Monte Carlo method (N=10,000).</p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-slate-400 uppercase tracking-widest hidden sm:flex">
                  <span>Confidential Scientific Document</span>
                  <span>Page 1 / 14</span>
                </div>
              </div>
            </div>

            {/* Right: Export Settings (40%) */}
            <div className="lg:w-[40%] space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h2 className="text-xl font-bold mb-6">Export Settings</h2>
                
                <div className="space-y-6">
                  {/* Options */}
                  <div className="space-y-4">
                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="text-sm font-semibold">Include Predictions</span>
                      <div className="relative inline-flex items-center">
                        <input defaultChecked className="sr-only peer" type="checkbox" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </div>
                    </label>
                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="text-sm font-semibold">Include Comparison</span>
                      <div className="relative inline-flex items-center">
                        <input className="sr-only peer" type="checkbox" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </div>
                    </label>
                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="text-sm font-semibold">Add Annotations</span>
                      <div className="relative inline-flex items-center">
                        <input defaultChecked className="sr-only peer" type="checkbox" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </div>
                    </label>
                  </div>
                  
                  <hr className="border-slate-100 dark:border-slate-800" />
                  
                  {/* Format Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">File Format</label>
                    <div className="relative">
                      <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg py-3 px-4 appearance-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm font-medium">
                        <option>PDF Document (.pdf)</option>
                        <option>Spreadsheet (.xlsx)</option>
                        <option>Raw CSV (.csv)</option>
                        <option>JSON Data (.json)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <span className="material-symbols-outlined text-slate-400">expand_more</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Download Button */}
                  <div className="pt-4">
                    <Link to="/dashboard" className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-lg shadow-amber-500/20 block text-center">
                      <span className="material-symbols-outlined">download</span>
                      Download as PDF
                    </Link>
                    <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-tighter">Approx. file size: 4.8 MB</p>
                  </div>
                </div>
              </div>
              
              {/* Additional Card */}
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">cloud_upload</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">Cloud Sync</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Your generated report will be automatically synced to the analysis cloud for future access.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ReportExport;
