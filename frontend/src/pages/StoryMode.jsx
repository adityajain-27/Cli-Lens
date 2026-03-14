import React from 'react';
import { Link } from 'react-router-dom';

const StoryMode = () => {
  return (
    <>
      {/* TopBar */}
      <header className="h-[60px] border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-20 shrink-0">
        <div className="flex-1 max-w-xl">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
            <input 
              readOnly
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary" 
              placeholder="Search stories, regions, or data sets..." 
              type="text" 
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <div className="p-6 md:p-8 max-w-7xl mx-auto w-full flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
        {/* Page Title */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-2 font-display">Climate Stories</h1>
          <p className="text-slate-500 text-lg">Guided data narratives for everyone</p>
        </div>

        {/* Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
            <div className="aspect-video relative overflow-hidden bg-slate-200">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
              <img 
                alt="Arctic Ice" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnoMIC_7HcdpTfuXBHPoMtP7mLD4pxv9OYh3j2ka9hTA1ANGU1ZUEdVB3d3ize-qFVUuePXlDyaxQ8LHheAdNVRRsqAKlJfFYTqtNtA-0wPMzwxv-pj522CAjVx2wfMHaUzholB6b8ZuRM-YyoV8KhbgKTBrNCbF33FKANiaT6p9yIsGn8KiIO12uS9EMnCCpCCcooL-0UJd5hQyaVxYXMC0_drhrRrBDcLsrNXDLdqweY6kuDaqSkReFsO_fxTX7Gsq1_ZOg9yNk" 
              />
              <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-20">Atmosphere</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Arctic Warming Crisis</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">A deep dive into the rapid melting of polar ice caps and its global impact on sea levels.</p>
              <Link className="inline-flex items-center text-primary font-bold text-sm hover:underline" to="/dashboard">
                Explore Story <span className="material-symbols-outlined ml-1 text-base">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
            <div className="aspect-video relative overflow-hidden bg-slate-200">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
              <img 
                alt="Heavy Rain" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALOb7CkOuGuYvtPdfJZZPUPAIpT5uW9OdjbJr7nApjm7NlbNC42zIXYL7o7r1t5LBnhh13vvDplStgpPMtYdOEupvbIgyptuP24hyMXdCWKakKg7nIx7200zCpnXaF9-JELCExPCbBwvToERvuEMjpuRM4-v4WfDZPS2BBadIoJGCgkSDYTEasKTWp6CF6cQEdYrpN7PjfLH7wjYcc9CNU8tqJg85cPIaqJ2GsbM2ZdwvyibAnZgNeR5uKqgWeW6He-Ewb7Z8acIM" 
              />
              <span className="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-20">Hydrology</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Extreme Rainfall Zones</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">Analyzing the shift in precipitation patterns and identifying high-risk urban flood areas.</p>
              <Link className="inline-flex items-center text-primary font-bold text-sm hover:underline" to="/dashboard">
                Explore Story <span className="material-symbols-outlined ml-1 text-base">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
            <div className="aspect-video relative overflow-hidden bg-slate-200">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
              <img 
                alt="Sun Heat" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQjngHCTiV2uxYLR2uY-KPenabCNBtivXOYA0t1SKnvRbBPfygO-I3cgK1NBQYDlW9y7u4J-JhXPBa14FdSpqBjBuiemQh_Xo1MObX1rS-YS5DcEtNbfD1GUv1wkG8plOJGD1eUxe4TQkkKbcuSttfK-Nn1Qcx1eVv3AyCIKfBC7sSYlUOolWk08QU1kxMKTgIz9XzDyq8zsDI7Ng95630f2SzOcGphGfWyS6_DlRLF1K0vsQRSzRSxZFyAo_-ghRQdKAW0-FTXXY" 
              />
              <span className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-20">Temperature</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Rising Global Temperatures</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">Tracking the steady 1.2°C increase in average global surface temperatures since 1880.</p>
              <Link className="inline-flex items-center text-primary font-bold text-sm hover:underline" to="/dashboard">
                Explore Story <span className="material-symbols-outlined ml-1 text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Story Detail View Section (Active View Simulation) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl mb-12">
          {/* Progress Header */}
          <div className="h-16 bg-slate-50 dark:bg-slate-800/50 flex flex-wrap items-center justify-between px-4 sm:px-8 border-b border-slate-100 dark:border-slate-800">
            <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
            </div>
            <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest hidden sm:block">Part 3 of 5</div>
          </div>

          {/* Story Content 2-Col Layout */}
          <div className="flex flex-col lg:flex-row">
            {/* Text Column */}
            <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Oceanic Influence</span>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black mb-8 leading-tight">The Albedo Effect & Surface Absorption</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-400">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Why the Arctic is warming 4x faster</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  As white ice melts, it exposes the dark ocean water beneath. This creates a dangerous feedback loop known as the <strong className="text-slate-900 dark:text-white">Ice-Albedo Feedback</strong>. White ice reflects up to 80% of solar radiation back into space, while dark open water absorbs 90% of it.
                </p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Regional Disparity in Heat Capture</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  Data from the last decade shows a significant correlation between reduced ice thickness in the Beaufort Sea and localized heat spikes in the upper atmosphere. This thermal energy isn't just staying in the Arctic; it’s disrupting the jet stream and causing extreme weather events in the mid-latitudes.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary p-4 sm:p-6 rounded-r-xl">
                  <p className="italic text-primary-900 dark:text-primary-100">"The Arctic is the refrigerator of the planet. As it warms, the door is effectively being left open, affecting climate stability globally."</p>
                  <p className="text-sm font-bold mt-2">— IPCC Special Report on Oceans and Cryosphere</p>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 flex flex-wrap gap-4">
                <Link to="/dashboard" className="px-6 sm:px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors flex items-center gap-2">
                  Continue <span className="material-symbols-outlined">arrow_right_alt</span>
                </Link>
                <Link to="/dashboard" className="px-6 sm:px-8 py-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold rounded-xl hover:bg-slate-200 transition-colors inline-block">
                  Back
                </Link>
              </div>
            </div>

            {/* Visuals Column */}
            <div className="w-full lg:w-2/5 bg-slate-50 dark:bg-slate-950/50 p-6 sm:p-8 lg:p-12 flex flex-col gap-8">
              {/* Heatmap Visual */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-sm">Thermal Anomaly Map</h4>
                  <span className="text-[10px] text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">2014 - 2024</span>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden relative">
                  {/* Gradient Mesh Background simulating heatmap */}
                  <div className="absolute inset-0 opacity-80" style={{ background: 'radial-gradient(circle at 70% 30%, #f43f5e 0%, transparent 40%), radial-gradient(circle at 30% 60%, #fb923c 0%, transparent 50%), radial-gradient(circle at 10% 10%, #3b82f6 0%, transparent 40%), #1e293b' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white/20 text-9xl">public</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="flex flex-col gap-1 w-full max-w-[120px]">
                      <div className="h-2 w-full rounded bg-gradient-to-r from-blue-500 via-orange-400 to-red-600"></div>
                      <div className="flex justify-between text-[8px] text-white/70 uppercase">
                        <span>-2.0°C</span>
                        <span>+4.5°C</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Line Chart Visual */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-bold text-sm">Ice Coverage Loss %</h4>
                  <span className="material-symbols-outlined text-slate-400">trending_down</span>
                </div>
                <div className="h-40 relative flex items-end gap-1 sm:gap-2">
                  {/* Simplified Bar/Line Hybrid Visualization */}
                  <div className="flex-1 bg-primary/20 rounded-t h-[90%] relative group">
                    <div className="absolute inset-x-0 bottom-0 bg-primary rounded-t h-[70%] group-hover:h-[75%] transition-all"></div>
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-t h-[85%] relative group">
                    <div className="absolute inset-x-0 bottom-0 bg-primary rounded-t h-[60%] group-hover:h-[65%] transition-all"></div>
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-t h-[80%] relative group">
                    <div className="absolute inset-x-0 bottom-0 bg-primary rounded-t h-[55%] group-hover:h-[60%] transition-all"></div>
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-t h-[70%] relative group">
                    <div className="absolute inset-x-0 bottom-0 bg-primary rounded-t h-[40%] group-hover:h-[45%] transition-all"></div>
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-t h-[60%] relative group">
                    <div className="absolute inset-x-0 bottom-0 bg-primary rounded-t h-[30%] group-hover:h-[35%] transition-all"></div>
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-t h-[55%] relative group">
                    <div className="absolute inset-x-0 bottom-0 bg-primary rounded-t h-[20%] group-hover:h-[25%] transition-all"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-4 text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  <span>2000</span>
                  <span>2005</span>
                  <span>2010</span>
                  <span>2015</span>
                  <span>2020</span>
                  <span>2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Tracker Footer */}
        <div className="bg-slate-200 dark:bg-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-20 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">auto_stories</span>
            </div>
            <div>
              <p className="font-bold text-sm">Overall Learning Progress</p>
              <p className="text-xs text-slate-500">2 of 12 stories completed</p>
            </div>
          </div>
          <div className="flex-1 w-full md:max-w-md mx-0 md:mx-12">
            <div className="h-2 w-full bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: '16%' }}></div>
            </div>
          </div>
          <Link to="/dashboard" className="text-sm font-bold text-primary hover:underline whitespace-nowrap">View Badges</Link>
        </div>
      </div>
    </>
  );
};

export default StoryMode;
