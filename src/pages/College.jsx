import React from 'react';
import PartnerUniversities from '../components/PartnerUniversities';

const College = () => {
  return (
    <div>
      {/* Isme aapka pehle wala header info block already included hai */}
      <PartnerUniversities isAllView={true} />
    </div>
  );
};

export default College;




// import React from 'react';

// const College = () => {
//   return (
//     <div className="layout-wrapper py-8 sm:py-12 lg:py-16 transition-colors duration-300">
      
//       {/* Header Info Block */}
//       <div className="mb-8 lg:mb-12">
//         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-main mb-2">
//           Featured Institutional Profiles
//         </h1>
//         <p className="text-text-muted text-sm sm:text-base max-w-2xl">
//           Browse premier engineering colleges, technology schools, and top university clusters currently accepting applications.
//         </p>
//       </div>
      
//       {/* Fully Adaptive Grid: Mobile (1) | Tablet (2) | Laptop (3) | Ultra-Wide Screens (4 Columns) */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
//         {[1, 2, 3, 4, 5, 6].map((item) => (
//           <div 
//             key={item} 
//             className="bg-card-bg p-5 rounded-xl border border-border-main hover:border-brand-orange/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col group"
//           >
//             {/* Visual Block Container */}
//             <div className="w-full h-44 bg-gray-200 dark:bg-slate-800 rounded-lg mb-4 flex items-center justify-center text-text-muted text-xs font-medium transition-colors duration-300 overflow-hidden relative">
//               Campus Showcase Block Image
//               <div className="absolute top-2 right-2 bg-brand-orange text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
//                 Verified
//               </div>
//             </div>

//             {/* Info Title Data */}
//             <h3 className="text-lg font-bold text-text-main mb-1 group-hover:text-brand-orange transition-colors">
//               Madhav University of Technology
//             </h3>
//             <p className="text-text-muted text-xs sm:text-sm mb-4">
//               📍 New Delhi, India &bull; Estd. 1998
//             </p>

//             <div className="mt-auto pt-2 border-t border-border-main/50 flex items-center justify-between">
//               <span className="text-xs text-brand-orange font-semibold">B.Tech &bull; MBA</span>
//               <button className="bg-counselor-blue text-white text-xs px-3 py-1.5 rounded hover:opacity-90 transition-opacity">
//                 View Profile
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default College;