import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 text-white mb-6">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>public</span>
            <span className="text-[16px] font-bold">PyClimaExplorer</span>
          </div>
          <p className="text-[14px] leading-relaxed">Advancing global climate intelligence through powerful open-source visualization and machine learning.</p>
        </div>
        <div>
          <h4 className="text-white font-bold text-[14px] mb-6">Product</h4>
          <ul className="space-y-3 text-[14px]">
            <li><Link to="/public" className="hover:text-primary transition-colors">Features</Link></li>
            <li><Link to="/dashboard" className="hover:text-primary transition-colors">Integrations</Link></li>
            <li><Link to="/dashboard" className="hover:text-primary transition-colors">Enterprise</Link></li>
            <li><Link to="/public" className="hover:text-primary transition-colors">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-[14px] mb-6">Resources</h4>
          <ul className="space-y-3 text-[14px]">
            <li><Link to="/components" className="hover:text-primary transition-colors">Documentation</Link></li>
            <li><Link to="/dashboard/upload" className="hover:text-primary transition-colors">Datasets</Link></li>
            <li><Link to="/components" className="hover:text-primary transition-colors">API Reference</Link></li>
            <li><Link to="https://github.com" target="_blank" className="hover:text-primary transition-colors">GitHub</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-[14px] mb-6">Company</h4>
          <ul className="space-y-3 text-[14px]">
            <li><Link to="/public" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/dashboard/stories" className="hover:text-primary transition-colors">Climate Mission</Link></li>
            <li><Link to="/public" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/public" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[12px]">© 2026 PyClimaExplorer. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[20px]">language</span>
          </Link>
          <Link to="#" className="text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[20px]">share</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
