import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-[240px] bg-[#0F172A] flex-shrink-0 flex flex-col text-slate-300 h-full overflow-y-auto">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary rounded-lg p-1 flex items-center justify-center">
          <span className="material-symbols-outlined text-white">public</span>
        </div>
        <Link to="/" className="text-white text-lg font-bold font-display tracking-tight">PyClimaExplorer</Link>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-1">
        <p className="px-2 pb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Main</p>
        <NavLink 
          to="/dashboard" 
          end
          className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary/20 text-white' : 'hover:bg-slate-800'}`}
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink 
          to="/dashboard/upload" 
          className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary/20 text-white' : 'hover:bg-slate-800'}`}
        >
          <span className="material-symbols-outlined">cloud_upload</span>
          <span>Upload Dataset</span>
        </NavLink>
        <NavLink 
          to="/dashboard/compare" 
          className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary/20 text-white' : 'hover:bg-slate-800'}`}
        >
          <span className="material-symbols-outlined">compare_arrows</span>
          <span>Compare</span>
        </NavLink>
        <NavLink 
          to="/dashboard/globe" 
          className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary/20 text-white' : 'hover:bg-slate-800'}`}
        >
          <span className="material-symbols-outlined">language</span>
          <span>3D Globe</span>
        </NavLink>
        <NavLink 
          to="/dashboard/predictions" 
          className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary/20 text-white' : 'hover:bg-slate-800'}`}
        >
          <span className="material-symbols-outlined">trending_up</span>
          <span>Predictions</span>
        </NavLink>
        
        <p className="px-2 pt-6 pb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Tools</p>
        <NavLink 
          to="/dashboard/stories" 
          className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary/20 text-white' : 'hover:bg-slate-800'}`}
        >
          <span className="material-symbols-outlined">auto_stories</span>
          <span>Story Mode</span>
        </NavLink>
        <NavLink 
          to="/dashboard/news" 
          className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary/20 text-white' : 'hover:bg-slate-800'}`}
        >
          <span className="material-symbols-outlined">newspaper</span>
          <span>Climate News</span>
        </NavLink>
        <NavLink 
          to="/dashboard/reports" 
          className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary/20 text-white' : 'hover:bg-slate-800'}`}
        >
          <span className="material-symbols-outlined">description</span>
          <span>Reports</span>
        </NavLink>
      </nav>
      <div className="p-4 border-t border-slate-800 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-slate-700 overflow-hidden shrink-0 flex items-center justify-center text-white font-bold text-sm">
          AT
        </div>
        <div className="flex flex-col truncate">
          <span className="text-white text-sm font-medium truncate">Dr. Aris Thorne</span>
          <span className="text-slate-500 text-xs">Researcher Pro</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
