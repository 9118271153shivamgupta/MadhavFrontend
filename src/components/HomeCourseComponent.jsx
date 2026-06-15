import React from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { ArrowRight, Calendar, GraduationCap } from 'lucide-react';

const HomeCourseComponent = () => {
  return (
    /* 🎨 bg-bg-main pure background ko dynamic banata hai */
    <div className="w-full py-12 md:py-16 bg-bg-main transition-colors duration-300 font-poppins">
      <div className="layout-wrapper">
        
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm uppercase tracking-wider mb-2">
            <GraduationCap size={16} />
            <span>Academic Programs</span>
          </div>
          {/* 🌓 text-text-main use kiya taaki light me dark-blue aur dark me white dikhe */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-main tracking-tight">
            Explore Our <span className="text-brand-orange">Top Courses</span>
          </h2>
          <p className="text-text-muted text-xs sm:text-sm md:text-base mt-2 max-w-2xl">
            Choose from our industry-aligned undergraduate and postgraduate streams engineered for high-impact careers.
          </p>
        </div>

        {/* Dynamic Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {coursesData.map((course) => (
            <div 
              key={course.id}
              /* 🃏 bg-card-bg card ka rang dynamic switch karega */
              className="bg-card-bg border border-border-main p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all duration-300 flex flex-col group relative overflow-hidden"
            >
              {/* Corner accent decal */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-brand-orange/5 dark:bg-brand-orange/10 rounded-bl-full flex items-center justify-center font-bold text-xl text-brand-orange pl-4 pb-4">
                {course.icon}
              </div>

              {/* Course Title metadata */}
              <div className="pr-8 mb-3">
                <h3 className="text-lg font-bold text-text-main group-hover:text-brand-orange transition-colors duration-200 line-clamp-1">
                  {course.id.toUpperCase()}
                </h3>
                <p className="text-xs text-text-muted font-medium mt-0.5 line-clamp-2 min-h-[32px]">
                  {course.name}
                </p>
              </div>

              {/* Mini specs list */}
              <div className="space-y-2 mb-6 pt-3 border-t border-border-main/50 text-xs">
                <div className="flex items-center gap-2 text-text-muted">
                  <Calendar size={14} className="text-brand-orange" />
                  <span>Duration: <strong className="text-text-main">{course.duration}</strong></span>
                </div>
                <div className="flex items-start gap-2 text-text-muted">
                  <GraduationCap size={14} className="text-brand-orange shrink-0 mt-0.5" />
                  <span className="line-clamp-1">Eligibility: <strong className="text-text-main">{course.eligibility}</strong></span>
                </div>
              </div>

              {/* 🎯 Updated Button: Default and Hover states optimized for both themes */}
              <Link 
                to={`/course-details/${course.id}`}
                className="mt-auto bg-slate-100 dark:bg-slate-800 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 group-hover:bg-brand-orange group-hover:text-white shadow-sm"
              >
                <span>View Course Details</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HomeCourseComponent;