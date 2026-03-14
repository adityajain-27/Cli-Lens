import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-[160px] pb-[160px] bg-slate-50 dark:bg-slate-950 flex flex-col items-center px-6">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[12px] font-bold mb-8">
          Climate Intelligence Platform
        </div>
        <h1 className="text-[56px] font-light leading-tight text-slate-900 dark:text-white text-center max-w-[720px] mb-6">
          Visualize our planet's climate data like never before.
        </h1>
        <p className="text-[17px] text-slate-500 dark:text-slate-400 text-center mb-10 max-w-[800px]">
          Upload NetCDF datasets, explore global heatmaps, and predict climate trends.
        </p>
        <div className="flex items-center gap-3 mb-20">
          <Link to="/dashboard" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:shadow-lg hover:shadow-primary/20 transition-all">Start Exploring Free</Link>
          <Link to="/components" className="bg-transparent text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-white dark:hover:bg-slate-900 transition-all text-center">UI Components</Link>
        </div>
        {/* Dashboard Preview */}
        <div className="relative w-full max-w-[1000px] aspect-[16/9] bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-slate-50 dark:bg-slate-800 p-2">
            <div className="w-full h-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 relative overflow-hidden">
              {/* Browser Chrome */}
              <div className="h-10 border-b border-slate-200 dark:border-slate-800 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
              </div>
              {/* Map Mockup */}
              <div className="absolute inset-0 top-10 bg-slate-100 dark:bg-slate-800">
                <div className="w-full h-full opacity-60" style={{ background: 'radial-gradient(circle at center, #2a77f4 0%, transparent 70%)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-full bg-cover bg-center" data-alt="World map heatmap visualization dashboard mockup" data-location="World" style={{ backgroundImage: "url('https://placeholder.pics/svg/300')" }}></div>
                </div>
                {/* UI Elements */}
                <div className="absolute bottom-6 left-6 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-lg border border-slate-200 dark:border-slate-800 shadow-lg">
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">Anomalies Detected</p>
                  <p className="text-[24px] font-mono font-bold text-primary">+2.4°C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-background-dark px-6">
        <div className="max-w-[1200px] mx-auto text-center mb-16">
          <p className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-4">Platform Features</p>
          <h2 className="text-[36px] font-light text-slate-900 dark:text-white">Everything climate researchers need</h2>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Feature Cards */}
          <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all">
            <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '32px' }}>upload_file</span>
            <h3 className="text-[18px] font-semibold text-slate-900 dark:text-white mb-2">Upload &amp; Process</h3>
            <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed">Handle massive NetCDF datasets with ease using our high-performance ingestion engine.</p>
          </div>
          <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all">
            <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '32px' }}>thermostat</span>
            <h3 className="text-[18px] font-semibold text-slate-900 dark:text-white mb-2">Global Heatmaps</h3>
            <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed">Visualize temperature anomalies and moisture distributions across the entire globe.</p>
          </div>
          <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all">
            <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '32px' }}>timeline</span>
            <h3 className="text-[18px] font-semibold text-slate-900 dark:text-white mb-2">Time Series Analysis</h3>
            <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed">Analyze historical trends and seasonal cycles with millisecond precision.</p>
          </div>
          <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all">
            <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '32px' }}>compare_arrows</span>
            <h3 className="text-[18px] font-semibold text-slate-900 dark:text-white mb-2">Dataset Comparison</h3>
            <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed">Compare multiple climate models and observational data sources side by side.</p>
          </div>
          <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all">
            <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '32px' }}>auto_awesome</span>
            <h3 className="text-[18px] font-semibold text-slate-900 dark:text-white mb-2">AI Predictions</h3>
            <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed">Leverage machine learning to project future climate scenarios and potential risks.</p>
          </div>
          <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all">
            <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '32px' }}>menu_book</span>
            <h3 className="text-[18px] font-semibold text-slate-900 dark:text-white mb-2">Story Mode</h3>
            <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed">Turn your data findings into compelling narratives for stakeholders and the public.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-light text-slate-900 dark:text-white">Choose your plan</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4">Simple pricing for researchers of all levels.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-[900px] mx-auto">
            {/* Free Plan */}
            <div className="flex-1 p-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-[20px] font-bold text-slate-900 dark:text-white mb-2">Free</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-[48px] font-mono font-bold">$0</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-2 text-[14px] text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Up to 5GB Data Storage
                </li>
                <li className="flex items-center gap-2 text-[14px] text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Global Heatmap Viewer
                </li>
                <li className="flex items-center gap-2 text-[14px] text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Community Support
                </li>
              </ul>
              <Link to="/login" className="w-full py-4 border border-slate-200 dark:border-slate-800 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all block text-center">Get Started</Link>
            </div>
            {/* Researcher Pro */}
            <div className="flex-1 p-10 bg-white dark:bg-slate-900 rounded-2xl border-2 border-primary shadow-xl shadow-primary/5 relative">
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase">Most Popular</div>
              <h3 className="text-[20px] font-bold text-slate-900 dark:text-white mb-2">Researcher Pro</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-[48px] font-mono font-bold">$49</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-2 text-[14px] text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Unlimited Data Storage
                </li>
                <li className="flex items-center gap-2 text-[14px] text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  AI Trend Prediction Engine
                </li>
                <li className="flex items-center gap-2 text-[14px] text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Advanced Dataset Comparison
                </li>
                <li className="flex items-center gap-2 text-[14px] text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Priority Support
                </li>
              </ul>
              <Link to="/login" className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all block text-center">Start Free Trial</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
