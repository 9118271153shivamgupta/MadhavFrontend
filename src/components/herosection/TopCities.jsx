import React from 'react';

const TopCities = () => {
  // Cities configuration package tracking target models arrays
  const municipalMatrix = [
    { name: "Pune", iconUrl: "🏛️" },
    { name: "Bengaluru", iconUrl: "🏢" },
    { name: "Mumbai", iconUrl: "🌊" },
    { name: "Ahmedabad", iconUrl: "🕌" },
    { name: "Delhi", iconUrl: "🗼" },
    { name: "Noida", iconUrl: "🚀" }
  ];

  return (
    <div className="w-full py-12 md:py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-poppins">
      <div className="layout-wrapper">
        
        {/* Section Title Header Block Layout */}
        <div className="mb-8 md:mb-12 flex flex-col items-start">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-text-main relative pb-2 select-none tracking-tight">
            Explore Top Cities
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-brand-orange rounded-full" />
          </h2>
          <p className="text-text-muted text-xs sm:text-sm mt-2 font-medium">
            Find premium college institutions operating inside your favorite metropolitan tech zones.
          </p>
        </div>

        {/* Responsive Flex/Grid Grid Engine scaling on Mobile, Tablets & Desktop configs smoothly */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {municipalMatrix.map((city, indexes) => (
            <div 
              key={indexes} 
              className="flex flex-col items-center group cursor-pointer"
            >
              
              {/* Geometric Circle Marker Module Stack matching screenshots layout */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-card-bg border-4 border-border-main group-hover:border-brand-orange p-1 shadow-md group-hover:shadow-xl transition-all duration-300 flex items-center justify-center scale-95 group-hover:scale-100">
                
                {/* Central circular core container displaying vector icons hooks */}
                <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-900/50 flex flex-col items-center justify-center text-2xl sm:text-3xl transition-colors">
                  {city.iconUrl}
                </div>

                {/* Pin pointer accent marker hook representation matching image profile layout */}
                <div className="absolute -bottom-2 w-4 h-4 bg-brand-orange rotate-45 border-r border-b border-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Structural Text Details Output Block labels */}
              <span className="mt-4 text-sm sm:text-base font-bold text-text-main group-hover:text-brand-orange transition-colors tracking-wide">
                {city.name}
              </span>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TopCities;