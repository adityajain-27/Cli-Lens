import React from 'react';
import { Link } from 'react-router-dom';

const ResearcherDashboard = () => {
  return (
    <>
      {/* Top Bar */}
      <header className="h-[60px] bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between shrink-0">
        <h2 className="text-xl font-medium text-slate-900 dark:text-white font-display">Dashboard</h2>
        <div className="flex items-center gap-4">
          <div className="relative w-64 hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
            <input 
              readOnly
              className="w-full pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50" 
              placeholder="Search datasets, maps..." 
              type="text" 
            />
          </div>
          <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
          <Link to="/dashboard/upload" className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors whitespace-nowrap">
            <span className="material-symbols-outlined text-lg">cloud_upload</span>
            <span className="hidden sm:inline">Upload Dataset</span>
          </Link>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#F8FAFC] dark:bg-background-dark">
        {/* Stat Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Datasets Uploaded</p>
            <p className="text-3xl font-bold font-mono text-slate-900 dark:text-white">12</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Variables Tracked</p>
            <p className="text-3xl font-bold font-mono text-slate-900 dark:text-white">4</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Collaborators</p>
            <p className="text-3xl font-bold font-mono text-slate-900 dark:text-white">5</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Reports Generated</p>
            <p className="text-3xl font-bold font-mono text-slate-900 dark:text-white">3</p>
          </div>
        </div>

        {/* Map Row */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-white dark:bg-slate-900 z-10">
            <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">map</span>
              Global Climate Map
            </h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">Temperature</button>
              <button className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">Precipitation</button>
            </div>
          </div>
          <div className="relative aspect-[21/9] min-h-[300px] bg-slate-200 dark:bg-slate-800 group">
            <div className="absolute inset-0 bg-cover bg-center opacity-90 transition-opacity" style={{ backgroundImage: 'linear-gradient(45deg, rgba(239, 68, 68, 0.4) 0%, rgba(245, 158, 11, 0.3) 25%, rgba(16, 185, 129, 0.2) 50%, rgba(59, 130, 246, 0.3) 75%, rgba(99, 102, 241, 0.4) 100%)' }}></div>
            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 p-3 rounded-lg border border-slate-200 dark:border-slate-700 backdrop-blur-sm pointer-events-none">
              <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Temp Variance (°C)</p>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono">-5.0</span>
                <div className="w-32 h-2 rounded-full bg-gradient-to-r from-blue-500 via-green-400 to-red-500"></div>
                <span className="text-[10px] font-mono">+5.0</span>
              </div>
            </div>
            {/* Map Controls Floating */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button className="w-8 h-8 bg-white dark:bg-slate-800 rounded shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors"><span className="material-symbols-outlined">add</span></button>
              <button className="w-8 h-8 bg-white dark:bg-slate-800 rounded shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors"><span className="material-symbols-outlined">remove</span></button>
            </div>
          </div>
        </div>

        {/* Grid Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Temperature Trend Chart */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Temperature Trend</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">New Delhi, Annual Analysis</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-emerald-500 flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  +1.2%
                </span>
                <select className="text-xs bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-md py-1 px-2 focus:ring-primary/30">
                  <option>2023-2024</option>
                  <option>2022-2023</option>
                </select>
              </div>
            </div>
            <div className="relative flex-1 min-h-[240px] w-full mt-auto">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200" preserveAspectRatio="none">
                <path d="M0 160 Q 50 140, 100 150 T 200 100 T 300 80 T 400 40 T 500 20" fill="none" stroke="#2a77f4" strokeWidth="3"></path>
                <path d="M0 160 Q 50 140, 100 150 T 200 100 T 300 80 T 400 40 T 500 20 L 500 200 L 0 200 Z" fill="url(#chartGradient)" opacity="0.1"></path>
                <defs>
                  <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#2a77f4"></stop>
                    <stop offset="100%" stopColor="#2a77f4" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line stroke="#e2e8f0" strokeDasharray="4" x1="0" x2="500" y1="40" y2="40"></line>
                <line stroke="#e2e8f0" strokeDasharray="4" x1="0" x2="500" y1="80" y2="80"></line>
                <line stroke="#e2e8f0" strokeDasharray="4" x1="0" x2="500" y1="120" y2="120"></line>
                <line stroke="#e2e8f0" strokeDasharray="4" x1="0" x2="500" y1="160" y2="160"></line>
              </svg>
              <div className="absolute bottom-0 w-full flex justify-between mt-4 px-2 translate-y-6">
                <span className="text-[10px] text-slate-400 font-mono">Jan</span>
                <span className="text-[10px] text-slate-400 font-mono">Mar</span>
                <span className="text-[10px] text-slate-400 font-mono">May</span>
                <span className="text-[10px] text-slate-400 font-mono">Jul</span>
                <span className="text-[10px] text-slate-400 font-mono">Sep</span>
                <span className="text-[10px] text-slate-400 font-mono">Nov</span>
              </div>
            </div>
          </div>

          {/* Recent Datasets Card */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h3 className="font-semibold text-slate-900 dark:text-white">Recent Datasets</h3>
              <Link to="/dashboard/upload" className="text-xs font-medium text-primary hover:underline">View All</Link>
            </div>
            <div className="flex-1">
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                
                <div className="p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="w-10 h-10 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined">table_chart</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Arctic_Ice_Thickness_2024.csv</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Modified 2h ago • 14.5MB</p>
                  </div>
                  <button className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
                
                <div className="p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="w-10 h-10 rounded bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Sahara_Precipitation_Model.json</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Modified 5h ago • 2.1MB</p>
                  </div>
                  <button className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
                
                <div className="p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="w-10 h-10 rounded bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600">
                    <span className="material-symbols-outlined">map</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Himalayan_Glacier_Flow_Map.tif</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Modified yesterday • 89.0MB</p>
                  </div>
                  <button className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>

                <div className="p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="w-10 h-10 rounded bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600">
                    <span className="material-symbols-outlined">description</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Annual_Report_DRAFT_v2.pdf</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Modified yesterday • 5.4MB</p>
                  </div>
                  <button className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ResearcherDashboard;
