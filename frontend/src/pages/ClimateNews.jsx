import React from 'react';
import { Link } from 'react-router-dom';

const ClimateNews = () => {
  return (
    <>
      {/* Topbar */}
      <header className="h-[60px] bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-10 shrink-0">
        <div className="relative w-full max-w-sm hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
          <input 
            className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400 text-slate-900 dark:text-white" 
            placeholder="Search climate news..." 
            type="text" 
            readOnly
          />
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 transition-colors">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        </div>
      </header>

      <div className="p-6 md:p-8 flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-display">Climate News</h2>
            
            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2 text-sm">
              <button className="px-5 py-1.5 rounded-full bg-primary text-white font-medium">All</button>
              <button className="px-5 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:border-primary transition-colors">Flooding</button>
              <button className="px-5 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:border-primary transition-colors">Drought</button>
              <button className="px-5 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:border-primary transition-colors">Temperature</button>
              <button className="px-5 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:border-primary transition-colors">Arctic</button>
              <button className="px-5 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:border-primary transition-colors">Oceans</button>
            </div>
          </div>

          {/* Main Layout */}
          <div className="mt-8 flex flex-col lg:flex-row gap-8">
            {/* News Feed (Left Column) */}
            <div className="flex-1 space-y-6">
              {/* Featured News Card */}
              <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col relative group">
                {/* Blue Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary z-10"></div>
                
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    alt="Arctic Ice" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNRMCJj-tKQMk0e3lfleW9LSmaHL5VrHpXgHOhg0tpCtOLexYjllE5rJrXBHlY1ME8VY8jIrprRJM6u20f9RTlAD4eoCwgWg50nzwtYMZZTOX63ajbfDiTe2qW5KpGYrqELUzJ_3p0cVy_EBFppTuqWy3DHFP47VWn8Vu_DvH1xNT9IFYv_jzByrnES6CqV6tMjsPRHMkfdoIv6QmuqmhUszbYYE2bD3U6at54ECV3cyQBhT9JDppfiTwNNyAhT45mbuMSXaGHxfM" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-primary">Breaking News</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-primary uppercase">NASA Climate</span>
                    <span className="text-xs text-slate-400">• Oct 24, 2026</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 hover:text-primary transition-colors">Arctic Ice Reaches Record Low</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    New satellite data reveals that Arctic sea ice extent has dropped to its lowest level since records began, signaling a rapid acceleration in polar warming. The implications for global ocean currents and weather patterns remain a critical area of study.
                  </p>
                  <Link className="inline-flex items-center text-primary font-semibold text-sm hover:underline" to="/dashboard/news">
                    Read more 
                    <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Secondary News Card */}
              <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-0 sm:gap-6 p-4">
                <div className="w-full sm:w-48 h-48 sm:h-32 shrink-0 rounded-lg overflow-hidden mb-4 sm:mb-0">
                  <img 
                    alt="Forest Fire" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgAKJl8PDG0Hf7vatn6UCJP8Z1HHTAEWYhW_wkELE-LJ0YRYWqpnZcFz1oY6yyFCZcV1IBwJ7VAYH5xuIlF77H9RB2UEnHaBgfhXSQ43wjm3Wmx7teQ0-FouaX-olj73T-a8O4uXc66yte2mvIUo2vS_rSh_qsvXzHb_hxJCb9LHTGAhOkjqNbc1Oe_VYt_OPHA_DWBhNxdY9q2wdy_Jj8ilXgZs64H7Q_TLH34nJKxdYj50luP-yHr7Cxtja4dwamqh-29sdPQhI" 
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Environment Agency</span>
                    <span className="text-[10px] text-slate-400">• Oct 22, 2026</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">Wildfire frequency increases by 20% in boreal regions</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">Recent analysis shows a significant uptick in forest fire activity across the northern hemisphere due to rising summer temperatures...</p>
                </div>
              </div>

              {/* Tertiary News Card */}
              <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-0 sm:gap-6 p-4">
                <div className="w-full sm:w-48 h-48 sm:h-32 shrink-0 rounded-lg overflow-hidden mb-4 sm:mb-0">
                  <img 
                    alt="Ocean Pollution" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGmMtXZk1Z-FxSOeSFkAt4TBfWA3YKwIqijRfO_6Ijd1hJXbAgiwSXxN_gbHtfJyICsQkolANFJC2sH6ZsfzhnJacuZWG04PprqdthEXvnPvQ3jDmkZbv981LZISi3QcDeMuf5lq_E-xImiE7S8tV5sUMhf9FRmMkmC6JbJiC1mUEC9Wowa81gQFcNayxNqG5YbC5Vbhjatyn__MVzwR5v5docXRdkuQoT6EvXtLLvvgLGeGoMYchMyZ3Aruq1EDuMAjaNlzPwNwg" 
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Ocean Insights</span>
                    <span className="text-[10px] text-slate-400">• Oct 20, 2026</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">New coral restoration project launched in Great Barrier Reef</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">Scientists are testing resilient coral species to combat the effects of bleaching caused by ocean acidification and warming.</p>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-full lg:w-[280px] lg:shrink-0 space-y-6">
              <section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">auto_awesome</span>
                  Related to your analysis
                </h5>
                <div className="space-y-5">
                  <div className="group cursor-pointer">
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">Global Weather Network</p>
                    <h6 className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">El Niño patterns expected to intensify next season</h6>
                  </div>
                  <div className="group cursor-pointer">
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">Green Policy Monitor</p>
                    <h6 className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">Carbon tax implications for industrial manufacturers in 2026</h6>
                  </div>
                  <div className="group cursor-pointer">
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">Satellite Data Daily</p>
                    <h6 className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">Methane leak detected in Central Asian oil fields</h6>
                  </div>
                  <div className="group cursor-pointer">
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">Climate Science Journal</p>
                    <h6 className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">Permafrost thaw rates exceed previous IPCC predictions</h6>
                  </div>
                </div>
                <Link to="/dashboard/news" className="block text-center w-full mt-6 py-2 px-4 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  View all insights
                </Link>
              </section>

              <section className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">Newsletter</h5>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">Get the weekly climate digest directly in your inbox.</p>
                <input 
                  className="w-full text-xs py-2 px-3 rounded border border-slate-200 dark:border-slate-700 mb-2 bg-white dark:bg-slate-800 focus:ring-1 focus:ring-primary outline-none" 
                  placeholder="email@example.com" 
                  type="email" 
                />
                <button className="w-full bg-primary text-white text-xs font-bold py-2 rounded-lg hover:bg-primary/90 transition-opacity shadow-sm">
                  Subscribe
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClimateNews;
