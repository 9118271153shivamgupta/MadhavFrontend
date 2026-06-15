import React from 'react';
import { ExternalLink, School, MapPin, Award } from 'lucide-react';
// 🚀 Dynamic cleaner approach - Data file imported separate
import { universityNetworkData } from '../data/universityNetworkData';

const PartnerUniversities = () => {
  return (
    <div className="w-full py-16 md:py-20 bg-bg-main transition-colors duration-300 font-poppins border-t border-border-main/60">
      <div className="layout-wrapper">
        
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-orange bg-brand-orange/5 dark:bg-brand-orange/10 px-3 py-1 rounded-md font-semibold text-xs uppercase tracking-wider mb-3 justify-center lg:justify-start">
              <School size={14} />
              <span>Institutional Tie-ups</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
              Our Official University <span className="text-brand-orange">Admission Partners</span>
            </h2>
            <p className="text-text-muted text-sm md:text-base mt-2 max-w-2xl font-light">
              Madhav Study handles authorized counseling and direct institutional enrollment with top-tier education hubs across the nation.
            </p>
          </div>

          {/* Quick Counter Analytics Badge */}
          <div className="bg-brand-blue text-white dark:bg-slate-900 dark:text-brand-orange border border-brand-blue/10 dark:border-brand-orange/20 px-5 py-3 rounded-2xl font-bold text-sm shadow-md flex items-center gap-2 self-center lg:self-end">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            <span>40+ Premium Colleges Affiliated</span>
          </div>
        </div>

        {/* 💎 HIGHLY PREMIUM DESIGN COMPONENT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {universityNetworkData.map((college) => (
            <a 
              key={college.id}
              href={college.url}
              target="_blank" 
              rel="noopener noreferrer"
              /* Cards auto adapt to themes cleanly, with a fine lift-up click shadow pattern */
              className="bg-card-bg border border-border-main p-6 rounded-2xl shadow-sm hover:shadow-2xl hover:border-brand-orange/40 dark:hover:border-brand-orange/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden active:scale-98"
            >
              
              {/* Background abstract overlay element for high fidelity depth */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-orange/5 to-transparent rounded-bl-full transition-all group-hover:from-brand-orange/10" />

              <div>
                {/* Upper row: Avatar Placeholder + Meta Tag */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 text-brand-blue dark:text-brand-orange font-extrabold text-sm tracking-wider flex items-center justify-center border border-border-main/50 group-hover:bg-brand-orange group-hover:text-white dark:group-hover:text-white transition-all duration-300 shadow-sm">
                    {college.logoText}
                  </div>
                  
                  {/* Accreditation Tag */}
                  <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 text-white font-semibold text-[10px] px-2.5 py-1 rounded-md tracking-wide group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors">
                    <Award size={10} />
                    {college.rating}
                  </span>
                </div>

                {/* University Name */}
                <h3 className="text-base font-bold text-text-main group-hover:text-brand-orange transition-colors duration-200 line-clamp-1">
                  {college.shortName}
                </h3>
                
                <p className="text-xs text-text-muted font-light mt-1 line-clamp-1">
                  {college.name}
                </p>
              </div>

              {/* Bottom Metadata row */}
              <div className="mt-5 pt-3 border-t border-border-main/40 flex items-center justify-between text-xs text-text-muted">
                <div className="flex items-center gap-1 opacity-80">
                  <MapPin size={12} className="text-brand-orange" />
                  <span>{college.location}</span>
                </div>
                
                {/* Interactive Dynamic Redirect Visual */}
                <div className="flex items-center gap-1 font-bold text-[11px] text-text-muted group-hover:text-brand-orange transition-colors">
                  <span>Visit Portal</span>
                  <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PartnerUniversities;