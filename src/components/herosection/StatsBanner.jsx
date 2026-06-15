import React from 'react';
import { School, BookOpen, GraduationCap, Users } from 'lucide-react';

const StatsBanner = () => {
  // Balanced professional core tracking vectors setup arrays
  const statisticsPayload = [
    { id: 1, numeric: "5000+", metric: "Colleges & Universities", icon: <School size={28} /> },
    { id: 2, numeric: "50+", metric: "Professional Courses", icon: <BookOpen size={28} /> },
    { id: 3, numeric: "40,000+", metric: "Students Enrolled Active", icon: <GraduationCap size={28} /> },
    { id: 4, numeric: "1.4 Million", metric: "Students Counseled Today", icon: <Users size={28} /> }
  ];

  return (
    <div className="w-full bg-brand-orange text-white py-6 md:py-8 shadow-inner transition-colors duration-300 font-poppins">
      <div className="layout-wrapper">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 md:gap-8 justify-items-center text-center">
          
          {statisticsPayload.map((stat) => (
            <div key={stat.id} className="flex flex-col sm:flex-row items-center gap-3 max-w-xs group transition-transform duration-200 hover:scale-102">
              
              {/* Floating translucent backing circle wrapper */}
              <div className="p-3 bg-white/15 rounded-xl border border-white/10 flex items-center justify-center shrink-0 shadow-md">
                {stat.icon}
              </div>

              <div className="flex flex-col sm:text-left">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight drop-shadow-sm select-none">
                  {stat.numeric}
                </span>
                <span className="text-xs sm:text-sm text-white/90 font-medium tracking-wide">
                  {stat.metric}
                </span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default StatsBanner;