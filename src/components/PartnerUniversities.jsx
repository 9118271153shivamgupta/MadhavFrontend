import React from 'react';
import { useNavigate } from 'react-router-dom';
import { School, ArrowRight } from 'lucide-react';
import { universityNetworkData } from '../data/universityNetworkData';
import PartnerCollegeCard from './PartnerCollegeCard';

const PartnerUniversities = ({ isAllView = false }) => {
  const navigate = useNavigate();

  // Home Page logic: max 16 items. College Page logic: show all 41 entries.
  const displayColleges = isAllView 
    ? universityNetworkData 
    : universityNetworkData.slice(0, 16);

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
              Our  Tie-ups <span className="text-brand-orange">Colleges</span>
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
            <span>{universityNetworkData.length} Premium Colleges Affiliated</span>
          </div>
        </div>

        {/* 💎 Fully Adaptive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {displayColleges.map((college) => (
            <PartnerCollegeCard key={college.id} college={college} />
          ))}
        </div>

        {/* 🚀 FORCE BUTTON VIEW: Hamesha dikhega Home page par */}
        {!isAllView && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => navigate('/college')}
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group active:scale-95 cursor-pointer"
            >
              <span>Explore All Colleges</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default PartnerUniversities;