import React from 'react';
import { Link } from 'react-router-dom';

const PublicDashboard = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display">
      {/* Top Banner */}
      <div className="w-full bg-amber-100 dark:bg-amber-900/30 border-b border-amber-200 dark:border-amber-800 py-2 px-4 flex justify-center items-center gap-4 text-amber-800 dark:text-amber-200 text-sm font-medium">
        <span>Free Plan · 2 of 3 analyses used</span>
        <Link to="/public" className="flex items-center gap-1 hover:underline text-primary dark:text-primary">
          Upgrade to Pro <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shrink-0 overflow-y-auto">
          <div className="flex items-center gap-3 px-2 mb-8 mt-2">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
              <span className="material-symbols-outlined">tsunami</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">PyClima</h2>
          </div>
          
          <nav className="flex flex-col gap-1 flex-1">
            <Link to="/public" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-semibold">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
              <span className="text-sm">Dashboard</span>
            </Link>
            <Link to="/public" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">database</span>
              <span className="text-sm">Data Explorer</span>
            </Link>
            <div className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-400 dark:text-slate-500 cursor-not-allowed">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">public</span>
                <span className="text-sm">3D Globe</span>
              </div>
              <span className="material-symbols-outlined text-sm">lock</span>
            </div>
            <div className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-400 dark:text-slate-500 cursor-not-allowed">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">query_stats</span>
                <span className="text-sm">Predictions</span>
              </div>
              <span className="material-symbols-outlined text-sm">lock</span>
            </div>
          </nav>
          
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 mt-auto">
            <Link to="/public" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm">Settings</span>
            </Link>
            
            <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium">Usage</span>
                <span className="text-xs text-slate-500">2/3</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mb-2">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '66%' }}></div>
              </div>
              <p className="text-[10px] text-slate-500">Resetting in 12 days</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          {/* Navbar */}
          <header className="flex h-[60px] items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-10 shrink-0">
            <div className="flex items-center gap-4 md:hidden">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
                <span className="material-symbols-outlined text-sm">tsunami</span>
              </div>
            </div>
            <div className="flex-1 max-w-md hidden sm:block">
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input 
                  readOnly
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary" 
                  placeholder="Search datasets, sensors or locations..." 
                  type="text" 
                />
              </div>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <Link to="/public" className="flex items-center gap-2 bg-primary text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-bold hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-sm md:text-base">bolt</span>
                <span className="hidden sm:inline">Upgrade to Pro</span>
                <span className="sm:hidden">Pro</span>
              </Link>
              <div 
                className="size-8 md:size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-slate-300 dark:border-slate-600 shadow-sm bg-cover bg-center shrink-0" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5mYn5mPeLGC9SRIkHoV3py-MySqA-i7eVyrEXKNr6EvoxUfzjD70owGwQDP2L1vkTtUb7_RTo04hQ8crLOlTxLXCpLfcI5NsSEviUOuh9b4ddjj1k3LGHzvGnDfW7k-qzoFS32uRVOuB9_OxNW4gDjsGwly11XIuFnjZ8qwQyl8WAulcCcB7RLHhz7q_JH7GHwzSdVeksuNiEcmZ4vH3pZKxYed642X-SijgGvF5lKFFI-RXf1JSkCgs0_gscwyZSZ9kDp-KsYI0')" }}
              ></div>
            </div>
          </header>

          <div className="p-6 md:p-8 max-w-7xl mx-auto w-full">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">Public Dashboard</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Overview of real-time climate telemetry and historical data points.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
              <div className="bg-white dark:bg-slate-900 p-5 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                    <span className="material-symbols-outlined">analytics</span>
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Analyses</p>
                <h3 className="text-2xl md:text-3xl font-bold mt-1">2</h3>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-lg">
                    <span className="material-symbols-outlined">data_object</span>
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Data Points</p>
                <h3 className="text-2xl md:text-3xl font-bold mt-1">1.2M</h3>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 rounded-lg">
                    <span className="material-symbols-outlined">sensors</span>
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Sensors</p>
                <h3 className="text-2xl md:text-3xl font-bold mt-1">14</h3>
              </div>
            </div>

            {/* Main Feature Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Recent Activity Table */}
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
                <div className="p-5 md:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <h4 className="font-bold text-base md:text-lg">Historical Analysis Log</h4>
                  <button className="text-primary text-xs md:text-sm font-semibold hover:underline">Export CSV</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left whitespace-nowrap">
                    <thead>
                      <tr className="text-slate-500 text-xs font-bold uppercase tracking-wider bg-slate-50 dark:bg-slate-800/50">
                        <th className="px-4 md:px-6 py-3 md:py-4">Analysis Name</th>
                        <th className="px-4 md:px-6 py-3 md:py-4">Status</th>
                        <th className="px-4 md:px-6 py-3 md:py-4">Date</th>
                        <th className="px-4 md:px-6 py-3 md:py-4">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      <tr>
                        <td className="px-4 md:px-6 py-3 md:py-4 font-medium text-sm">North Atlantic SST Trend</td>
                        <td className="px-4 md:px-6 py-3 md:py-4"><span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold rounded-full uppercase">Completed</span></td>
                        <td className="px-4 md:px-6 py-3 md:py-4 text-sm text-slate-500">Oct 24, 2026</td>
                        <td className="px-4 md:px-6 py-3 md:py-4 text-sm font-medium text-slate-700 dark:text-slate-300">+1.2°C Dev</td>
                      </tr>
                      <tr>
                        <td className="px-4 md:px-6 py-3 md:py-4 font-medium text-sm">Sahara Dust Projection</td>
                        <td className="px-4 md:px-6 py-3 md:py-4"><span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold rounded-full uppercase">Completed</span></td>
                        <td className="px-4 md:px-6 py-3 md:py-4 text-sm text-slate-500">Oct 21, 2026</td>
                        <td className="px-4 md:px-6 py-3 md:py-4 text-sm font-medium text-slate-700 dark:text-slate-300">Moderate</td>
                      </tr>
                      <tr className="bg-slate-50/50 dark:bg-slate-800/20">
                        <td className="px-4 md:px-6 py-3 md:py-4 font-medium text-sm italic text-slate-400">Analysis Slot 3</td>
                        <td className="px-4 md:px-6 py-3 md:py-4 text-sm text-slate-400" colSpan="3">Available on request</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Locked Map Section */}
              <div className="relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden group">
                <div className="p-5 md:p-6 border-b border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-base md:text-lg">Global Climate Map</h4>
                </div>
                <div className="flex-1 bg-slate-100 dark:bg-slate-800 relative h-64 lg:h-auto overflow-hidden">
                  <div className="w-full h-full opacity-40 grayscale bg-cover bg-center" style={{ backgroundImage: "url('https://placeholder.pics/svg/300')" }}></div>
                  
                  {/* Lock Overlay */}
                  <div className="absolute inset-0 bg-white/70 dark:bg-slate-900/80 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center z-10">
                    <div className="size-12 md:size-16 bg-primary rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/30">
                      <span className="material-symbols-outlined text-2xl md:text-3xl">lock</span>
                    </div>
                    <h5 className="text-lg md:text-xl font-bold mb-2">Upgrade to Pro</h5>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-6">Access interactive real-time heatmaps and high-resolution climate overlays.</p>
                    <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform">
                      Unlock Premium Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-primary to-blue-700 text-white flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-black mb-2">Ready for deeper insights?</h2>
                <p className="text-blue-50/80 max-w-lg text-sm sm:text-base">Get unlimited analyses, 3D globe visualization, ML-driven weather predictions, and API access to 100+ years of historical data.</p>
              </div>
              <Link to="/public" className="w-full md:w-auto bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-base sm:text-lg shadow-xl shadow-black/20 hover:bg-blue-50 transition-colors shrink-0 text-center">
                Upgrade Now
              </Link>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default PublicDashboard;
