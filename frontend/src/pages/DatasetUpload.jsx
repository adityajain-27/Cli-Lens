import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DatasetUpload = () => {
  const [fileSelected, setFileSelected] = useState(false);

  return (
    <>
      {/* Topbar */}
      <header className="h-[60px] flex items-center justify-between px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10 shrink-0">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-slate-400">upload_file</span>
          <h2 className="font-semibold text-slate-700 dark:text-slate-200 font-display">Upload Dataset</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input 
              className="pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary w-64" 
              placeholder="Search documentation..." 
              type="text" 
              readOnly
            />
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-slate-500">notifications</span>
          </button>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 overflow-y-auto bg-slate-50 p-6 md:p-8 dark:bg-background-dark">
        <div className="max-w-4xl mx-auto w-full">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white font-display">Upload Dataset</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Supported format: NetCDF (.nc)</p>
          </div>

          {/* Upload Zone */}
          <div className="mb-10 w-full max-w-[600px] mx-auto">
            <div 
              className={`bg-white dark:bg-slate-900 rounded-xl border-2 border-dashed ${fileSelected ? 'border-primary bg-primary/5' : 'border-slate-300 dark:border-slate-700'} h-[260px] flex flex-col items-center justify-center transition-all hover:border-primary/50 group cursor-pointer`}
              onClick={() => setFileSelected(prev => !prev)}
            >
              <span className={`material-symbols-outlined text-[40px] ${fileSelected ? 'text-primary' : 'text-slate-400 dark:text-slate-500'} mb-4 group-hover:text-primary transition-colors`}>
                cloud_upload
              </span>
              <p className="text-slate-600 dark:text-slate-300 font-medium mb-1">
                {fileSelected ? 'File selected' : 'Drag & drop your .nc file here'}
              </p>
              <p className="text-slate-400 dark:text-slate-500 text-sm">
                or <span className="text-primary font-semibold hover:underline">browse files</span>
              </p>
            </div>
            <p className="text-xs text-center text-slate-400 mt-2">Click the box to simulate file selection.</p>
          </div>

          {/* Metadata Preview Card (Shows when file is selected) */}
          {fileSelected && (
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#10B981]">check_circle</span>
                  <span className="text-sm font-bold text-[#10B981] uppercase tracking-wider">Dataset Detected</span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs font-mono text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-sm">description</span>
                    era5_land_global_2023.nc
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="space-y-1">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Dataset Name</p>
                    <p className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200">ERA5-Land 2023</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Variables Found</p>
                    <p className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200">12 Variables</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Time Range</p>
                    <p className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200">2023-01 to 2023-12</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Spatial Coverage</p>
                    <p className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200">90N-90S, 180W-180E</p>
                  </div>
                </div>

                {/* Variables Section */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">list_alt</span>
                    Variables to Import
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Checkbox 1 */}
                    <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600 dark:bg-slate-700" type="checkbox" />
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Temperature</span>
                    </label>
                    {/* Checkbox 2 */}
                    <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600 dark:bg-slate-700" type="checkbox" />
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Precipitation</span>
                    </label>
                    {/* Checkbox 3 */}
                    <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <input className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600 dark:bg-slate-700" type="checkbox" />
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Wind Speed</span>
                    </label>
                    {/* Checkbox 4 */}
                    <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <input className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600 dark:bg-slate-700" type="checkbox" />
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Humidity</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Footer Action */}
              <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <Link to="/dashboard" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 shadow-sm transition-all active:scale-95 inline-flex">
                  Confirm &amp; Process Dataset
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>
          )}

          {/* Help Alert */}
          <div className="mt-8 flex items-start gap-3 p-4 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20">
            <span className="material-symbols-outlined text-primary">info</span>
            <div>
              <p className="text-sm font-semibold text-primary">Processing Note</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">Large NetCDF files may take a few minutes to index. You can continue working in the background once processing begins.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DatasetUpload;
