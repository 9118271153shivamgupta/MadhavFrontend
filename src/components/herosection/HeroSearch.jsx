import React from 'react';
import { Search, MapPin, GraduationCap } from 'lucide-react';

const HeroSearch = () => {
  return (
    <div className="relative w-full min-h-[520px] lg:min-h-[620px] flex items-center justify-center overflow-hidden font-poppins transition-colors duration-300">
      
      {/* 🏛️ REAL COLLEGE CAMPUS BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-100 transition-transform duration-700 group-hover:scale-105"
        style={{ 
          // High quality modern university campus view
          backgroundImage: `url('./hero.png')` 
        }}
      />
      
      {/* 🎨 DYNAMIC THEME OVERLAY: Controls brightness for high text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/75 to-brand-orange/30 dark:from-slate-950/95 dark:via-slate-900/85 dark:to-brand-orange/15 transition-all duration-300" />

      {/* Main Content Layout Wrapper */}
      <div className="relative z-10 layout-wrapper text-center px-4 py-16 md:py-24 flex flex-col items-center">
        
        {/* Top Badging Pill */}
        <div className="inline-flex items-center gap-2 bg-white/10 dark:bg-brand-orange/10 border border-white/20 dark:border-brand-orange/30 backdrop-blur-md text-white dark:text-brand-orange px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-lg mb-6">
          <GraduationCap size={16} className="text-brand-orange" />
          <span>Madhav Study &bull; Academic Year 2026</span>
        </div>

        {/* 🏢 MAIN COLLEGE NAME - Large & High Impact */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl drop-shadow-md mb-4 uppercase">
          Madhav  <span className="text-brand-orange"> Study</span>
        </h1>
        
        {/* 📝 ACADEMIC TEXT / TAGLINE */}
        <p className="text-slate-100 dark:text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl font-normal leading-relaxed mb-10 drop-shadow-sm opacity-95">
          Empowering future innovators through world-class engineering, management research, and advanced technical skills. Discover 50+ streams, industry-aligned labs, and globally verified placement matrix records.
        </p>

        {/* Professional Multi-Input Responsive Search Bar */}
        <div className="w-full max-w-4xl bg-white dark:bg-slate-900 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 dark:border-slate-800/80 flex flex-col md:flex-row gap-2 transition-all duration-300">
          
          {/* Main Course/Exam Input */}
          <div className="flex-grow flex items-center gap-3 px-3 py-2.5 bg-slate-50 dark:bg-slate-800/40 rounded-lg sm:rounded-xl border border-slate-200/60 dark:border-transparent focus-within:border-brand-orange/40 transition-colors">
            <Search size={20} className="text-brand-orange shrink-0" />
            <input 
              type="text" 
              className="w-full bg-transparent text-sm md:text-base text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none font-medium"
              placeholder="What do you want to study? (e.g., Computer Science, MBA, B.Tech)"
            />
          </div>

          {/* City / Campus Location Filter */}
          <div className="hidden sm:flex md:w-64 items-center gap-3 px-3 py-2.5 bg-slate-50 dark:bg-slate-800/40 rounded-lg sm:rounded-xl border border-slate-200/60 dark:border-transparent focus-within:border-brand-orange/40 transition-colors">
            <MapPin size={20} className="text-slate-400 shrink-0" />
            <input 
              type="text" 
              className="w-full bg-transparent text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
              placeholder="Campus: New Delhi / Pune"
            />
          </div>

          {/* Trigger Button */}
          <button className="bg-brand-orange hover:bg-brand-orange/95 text-white font-semibold text-sm md:text-base px-8 py-3.5 rounded-lg sm:rounded-xl transition-all active:scale-98 shadow-lg shadow-brand-orange/20 cursor-pointer flex items-center justify-center gap-2 shrink-0">
            <Search size={18} />
            <span>Explore Campus</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroSearch;