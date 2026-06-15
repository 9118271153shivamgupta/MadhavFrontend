import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { ArrowLeft, CheckCircle, HelpCircle, ShieldCheck } from 'lucide-react';

const CourseDetailsPage = () => {
  const { courseId } = useParams();

  // Find targeted specific course entry from array dynamically
  const course = coursesData.find((item) => item.id === courseId.toLowerCase());

  // Error boundary protection handler if path doesn't match
  if (!course) {
    return (
      <div className="layout-wrapper py-20 text-center">
        <h2 className="text-2xl font-bold text-text-main mb-4">Course Parameters Not Found</h2>
        <Link to="/" className="text-brand-orange font-semibold hover:underline">Return to Campus Home</Link>
      </div>
    );
  }

  return (
    <div className="layout-wrapper py-8 sm:py-12 lg:py-16 font-poppins transition-colors duration-300">
      
      {/* Back button hook */}
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange mb-6 hover:underline group">
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        <span>Back to Course Streams</span>
      </Link>

      {/* Main Grid presentation panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left main data container details (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card-bg border border-border-main p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
            <span className="text-4xl">{course.icon}</span>
            <h1 className="text-2xl sm:text-3xl font-black text-text-main tracking-tight uppercase">
              {course.name}
            </h1>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Program Specifications block */}
          <div className="bg-card-bg border border-border-main p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
              <ShieldCheck className="text-brand-orange" size={20} />
              <span>Academic Requirements</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-slate-500/5 rounded-xl border border-border-main/40">
                <span className="text-text-muted block text-xs mb-0.5">Stream Duration</span>
                <span className="text-text-main font-bold">{course.duration}</span>
              </div>
              <div className="p-3 bg-slate-500/5 rounded-xl border border-border-main/40">
                <span className="text-text-muted block text-xs mb-0.5">Eligibility Criterion</span>
                <span className="text-text-main font-bold">{course.eligibility}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right contextual segment - Dynamic Fee structure breakdown (1 Col) */}
        <div className="bg-card-bg border-2 border-brand-orange/30 p-6 rounded-2xl shadow-lg space-y-5 sticky top-24">
          <div>
            <span className="bg-brand-orange text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md">
              Fee Estimate 2025-26
            </span>
            <h3 className="text-xl font-bold text-text-main mt-3">Payable Fee Breakdown</h3>
          </div>

          <div className="divide-y divide-border-main/50 text-sm">
            <div className="py-3 flex justify-between">
              <span className="text-text-muted">First Year Gross:</span>
              <span className="text-text-main font-bold">{course.firstYearFee}</span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="text-text-muted">Estimated Complete Fee:</span>
              <span className="text-text-main font-black text-brand-orange text-base">{course.totalFee}</span>
            </div>
          </div>

          <div className="p-3.5 bg-brand-orange/5 rounded-xl border border-brand-orange/10 flex gap-2">
            <HelpCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
            <p className="text-[11px] text-text-muted font-medium leading-relaxed">
              University norms check: Examination fees and practical certifications metrics are calculated processing statutory university parameters during enrollment.
            </p>
          </div>

          <button className="w-full bg-brand-orange hover:bg-brand-orange/95 text-white font-bold text-sm py-3.5 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer text-center">
            Apply Now For This Stream
          </button>
        </div>

      </div>

    </div>
  );
};

export default CourseDetailsPage;