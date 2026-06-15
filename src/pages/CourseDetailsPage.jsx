import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { ArrowLeft, ShieldCheck, HelpCircle, X, Send } from 'lucide-react';

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const [isFormOpen, setIsFormOpen] = useState(false); // Modal state trigger handle
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle Form Submission and Redirect to WhatsApp with updated target number
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "919319891418"; // Updated tracking number structure
    
    const rawMessage = `*New Stream Admission Request* 🎓\n\n` +
                       `👤 *Name:* ${formData.name}\n` +
                       `📧 *Email:* ${formData.email || 'Not Provided'}\n` +
                       `📞 *Phone:* ${formData.phone}\n` +
                       `📚 *Applied Course:* ${course.name}\n\n` +
                       `Please assist me with the registration guidelines.`;

    const encodedMessage = encodeURIComponent(rawMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    // Reset parameters safely
    setIsFormOpen(false);
    setFormData({ name: '', email: '', phone: '' });
  };

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

          {/* Apply Button - Added 'lg:hidden' to hide completely on desktop view */}
          <button 
            onClick={() => setIsFormOpen(true)}
            className="w-full lg:hidden bg-brand-orange hover:bg-brand-orange/95 text-white font-bold text-sm py-3.5 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer text-center"
          >
            Apply Now For This Stream
          </button>
        </div>

      </div>

      {/* 🌟 DYNAMIC ADMISSION MODAL POP-UP FORM FOR MOBILE 🌟 */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 border border-border-main max-w-md w-full p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-bl-full" />
            
            {/* Close Button */}
            <button 
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-6 space-y-1 text-left">
              <h3 className="text-lg font-extrabold text-black dark:text-white tracking-tight">Stream Registration</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-light">You are applying for <span className="font-semibold text-brand-orange">{course.name}</span></p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
              <div>
                <input 
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-xs text-black dark:text-white focus:outline-none focus:border-brand-orange transition-colors font-medium placeholder:text-gray-400"
                />
              </div>

              <div>
                <input 
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-xs text-black dark:text-white focus:outline-none focus:border-brand-orange transition-colors font-medium placeholder:text-gray-400"
                />
              </div>

              <div>
                <input 
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-xs text-black dark:text-white focus:outline-none focus:border-brand-orange transition-colors font-medium placeholder:text-gray-400"
                />
              </div>

              {/* Form Action Submit Button */}
              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 tracking-wide cursor-pointer uppercase mt-2"
              >
                <Send size={14} />
                <span>Submit Application</span>
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default CourseDetailsPage;