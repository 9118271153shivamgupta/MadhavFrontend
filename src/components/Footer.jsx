import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks } from '../data/footerData';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 dark:bg-slate-950 dark:text-slate-400 border-t border-slate-800 transition-colors duration-300 font-poppins pt-16 pb-8">
      <div className="layout-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
        
        {/* Brand Section */}
        <div className="lg:col-span-2 space-y-5">
          <Link to="/" className="inline-block">
            <img 
              src="/logo_bcada4.png" // Public folder logo reference point
              alt="Madhav Study Logo" 
              className="h-12 w-auto object-contain brightness-110 contrast-125 dark:brightness-100"
              onError={(e) => {
                e.target.style.display = 'none';
                document.getElementById('brand-text-fallback').style.display = 'block';
              }}
            />
            <div id="brand-text-fallback" className="hidden text-2xl font-black text-white tracking-tight">
              Madhav <span className="text-brand-orange">Study</span>
            </div>
          </Link>
          
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            India's leading education portal driving career counseling insights, direct institutional tie-ups, and verified counselor allocations.
          </p>

          {/* Social Icons Inline SVGs to avoid Vite build export failures */}
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-brand-orange text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700/50">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.87 0-4 1.25-4 4v2z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-brand-orange text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700/50">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-brand-orange text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700/50">
              <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" w="20" h="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        {/* 🚀 Dynamic Portal Links Column from your uploaded Image */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-slate-800 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {footerLinks.navigation.map((link, i) => (
              <li key={i}>
                {/* Maps exactly to: Home, About us, College, Admission, Course, Contact us */}
                <Link to={link.path} className="hover:text-brand-orange flex items-center gap-1 group transition-colors">
                  <span>{link.name}</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services / Utilities Column */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-slate-800 inline-block">
            Counseling Tools
          </h4>
          <ul className="space-y-3 text-sm">
            {footerLinks.services.map((link, i) => (
              <li key={i}>
                <Link to={link.path} className="hover:text-brand-orange flex items-center gap-1 group transition-colors">
                  <span>{link.name}</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Coordinates Panel */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-slate-800 inline-block">
            Get In Touch
          </h4>
          <ul className="space-y-4 text-xs sm:text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-orange shrink-0 mt-0.5" />
              <span className="text-slate-400">G-Block, Sector 63, Noida, Uttar Pradesh - 201301</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-brand-orange shrink-0" />
              <a href="tel:+919876543210" className="hover:text-brand-orange font-medium">+91 98765 43210</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brand-orange shrink-0" />
              <a href="mailto:info@madhavstudy.com" className="hover:text-brand-orange font-medium">info@madhavstudy.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Area */}
      <div className="border-t border-slate-800/80 pt-8 mt-4 text-center text-xs text-slate-500 font-medium">
        <div className="layout-wrapper flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 Madhav Study. All rights reserved by Academic Partners.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;