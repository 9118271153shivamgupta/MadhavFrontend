import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Moon, Sun, User, Menu, X, Coffee } from 'lucide-react';

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Utility checking helper to see if route path matching is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-card-bg border-b border-border-main w-full sticky top-0 z-50 transition-colors duration-300">
      <div className="layout-wrapper">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Title - Managed & Responsive */}
          <Link to="/" className="flex-shrink-0 select-none block py-2">
            <div className="h-12 w-auto max-w-[150px] sm:max-w-[180px] md:max-w-[220px] flex items-center justify-start">
              <img 
                src="./logo.jpeg" 
                alt="College Logo" 
                className="h-full w-full object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Links - Hidden below Laptop breakpoint (lg) */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            <Link to="/" className={`nav-link ${isActive('/') ? 'text-brand-orange font-semibold' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'text-brand-orange font-semibold' : ''}`}>About us</Link>
            <Link to="/college" className={`nav-link ${isActive('/college') ? 'text-brand-orange font-semibold' : ''}`}>College</Link>
            <Link to="/admission" className={`nav-link ${isActive('/admission') ? 'text-brand-orange font-semibold' : ''}`}>Admission</Link>
            <Link to="/course" className={`nav-link ${isActive('/course') ? 'text-brand-orange font-semibold' : ''}`}>Course</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'text-brand-orange font-semibold' : ''}`}>Contact us</Link>
          </div>

          {/* Action Tools Section (Adjusts responsively) */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <button className="bg-counselor-blue text-white px-3 py-2 rounded-md text-xs xl:text-sm flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all">
              <Coffee size={15} className="text-orange-400" />
              <span>Coffee with the Counselor</span>
            </button>
            
            <button className="bg-brand-orange text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:opacity-95 active:scale-95 transition-all">
              <User size={15} />
              <span>Login / Register</span>
            </button>

            {/* Global Theme Toggle Engine Button */}
            <button 
              onClick={() => setIsDark(!isDark)}
              className="text-text-main p-2 rounded-full hover:bg-bg-main transition-colors cursor-pointer"
            >
              {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
            </button>
            
            <button className="text-text-main p-2 hover:text-brand-orange transition-colors"><Search size={18} /></button>
          </div>

          {/* Tablet & Mobile Layout Handlers */}
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={() => setIsDark(!isDark)} className="text-text-main p-2 rounded-full">
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
            </button>
            <button className="text-text-main p-2"><Search size={20} /></button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-main p-2 transition-transform duration-200">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Dropdown Panel */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full z-50 bg-black/15 backdrop-blur-md border-b border-white/10 transition-colors duration-300">
          <div className="flex flex-col space-y-1">
            <Link to="/" onClick={() => setIsOpen(false)} className={`py-3 px-2 rounded-md block ${isActive('/') ? 'bg-brand-orange/10 text-brand-orange font-semibold' : 'text-text-main'}`}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={`py-3 px-2 rounded-md block ${isActive('/about') ? 'bg-brand-orange/10 text-brand-orange font-semibold' : 'text-text-main'}`}>About us</Link>
            <Link to="/college" onClick={() => setIsOpen(false)} className={`py-3 px-2 rounded-md block ${isActive('/college') ? 'bg-brand-orange/10 text-brand-orange font-semibold' : 'text-text-main'}`}>College</Link>
            <Link to="/admission" onClick={() => setIsOpen(false)} className={`py-3 px-2 rounded-md block ${isActive('/admission') ? 'bg-brand-orange/10 text-brand-orange font-semibold' : 'text-text-main'}`}>Admission</Link>
            <Link to="/course" onClick={() => setIsOpen(false)} className={`py-3 px-2 rounded-md block ${isActive('/course') ? 'bg-brand-orange/10 text-brand-orange font-semibold' : 'text-text-main'}`}>Course</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={`py-3 px-2 rounded-md block ${isActive('/contact') ? 'bg-brand-orange/10 text-brand-orange font-semibold' : 'text-text-main'}`}>Contact us</Link>
          </div>
          
          <div className="pt-4 border-t border-border-main flex flex-col sm:flex-row gap-3">
            <button className="bg-counselor-blue text-white py-3 px-4 rounded-md flex items-center justify-center gap-2 flex-1 text-sm"><Coffee size={16} /> Coffee with the Counselor</button>
            <button className="bg-brand-orange text-white py-3 px-4 rounded-md flex items-center justify-center gap-2 flex-1 text-sm"><User size={16} /> Login / Register</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;