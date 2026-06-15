import React from 'react';

const PartnerCollegeCard = ({ college }) => {
  return (
    <div className="bg-card-bg p-5 rounded-xl border border-border-main hover:border-brand-orange/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col group">
      
      {/* 🖼️ IMAGE SHIFT FIX: Dynamic Unsplash background mapping from our new database */}
      <div 
        className="w-full h-44 bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 flex items-center justify-center transition-colors duration-300 overflow-hidden relative bg-cover bg-center group-hover:scale-[1.01] duration-500"
        style={{ backgroundImage: `url('${college.image}')` }}
      >
        {/* Semi transparent overlay wrapper layer for subtle glass finish */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors" />

        {/* Dynamic Rating/Verification badge layer */}
        <div className="absolute top-2 right-2 bg-brand-orange text-white text-[10px] uppercase font-bold px-2 py-1 rounded shadow">
          {college.rating ? college.rating.split(' ')[0] : 'Verified'}
        </div>
        
        {/* Tiny subtle short fallback overlay code */}
        {!college.image && (
          <span className="text-text-muted text-xs font-medium relative z-10">
            {college.logoText} Campus
          </span>
        )}
      </div>

      {/* Info Title Data */}
      <h3 className="text-base sm:text-lg font-bold text-text-main mb-1 group-hover:text-brand-orange transition-colors line-clamp-1">
        {college.name}
      </h3>
      
      {/* <p className="text-text-muted text-xs sm:text-sm mb-4 font-normal">
        📍 {college.location} &bull; Estd. {college.estd}
      </p> */}

      {/* Footer metadata grid area block */}
      <div className="mt-auto pt-2 border-t border-border-main/50 flex items-center w-full">
        <a 
          href={college.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-counselor-blue text-white text-xs py-2 rounded hover:opacity-90 transition-all shadow-sm active:scale-95 text-center cursor-pointer inline-block font-medium"
        >
          Visit Website
        </a>
      </div>

    </div>
  );
};

export default PartnerCollegeCard;