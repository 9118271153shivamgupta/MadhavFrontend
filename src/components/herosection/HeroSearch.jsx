import React, { useState } from 'react';
import { GraduationCap, Phone, MessageSquare, X, Send } from 'lucide-react';

const HeroSearch = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); // WhatsApp Form Modal State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Form Submit hone par WhatsApp par Redirect karne ka function
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "918744077832";
    
    const rawMessage = `*New Admission Consultation Request* 🎓\n\n` +
                       `👤 *Name:* ${formData.name}\n` +
                       `📧 *Email:* ${formData.email || 'Not Provided'}\n` +
                       `📞 *Phone:* ${formData.phone}\n` +
                       `📚 *Selected Course:* ${formData.branch}\n\n` +
                       `Please guide me with the further admission process.`;

    const encodedMessage = encodeURIComponent(rawMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    // Form close aur clear karna
    setIsFormOpen(false);
    setFormData({ name: '', email: '', phone: '', branch: '' });
  };

  return (
    <div className="relative w-full min-h-[520px] lg:min-h-[620px] flex items-center justify-center overflow-hidden font-poppins transition-colors duration-300">
      
      {/* 🏛️ REAL COLLEGE CAMPUS BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-100 transition-transform duration-700 group-hover:scale-105"
        style={{ 
          backgroundImage: `url('./hero.png')` 
        }}
      />
      
      {/* 🎨 DYNAMIC THEME OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/75 to-brand-orange/30 dark:from-slate-950/95 dark:via-slate-900/85 dark:to-brand-orange/15 transition-all duration-300" />

      {/* Main Content Layout Wrapper */}
      <div className="relative z-10 layout-wrapper text-center px-4 py-16 md:py-24 flex flex-col items-center">
        
        {/* Top Badging Pill */}
        <div className="inline-flex items-center gap-2 bg-white/10 dark:bg-brand-orange/10 border border-white/20 dark:border-brand-orange/30 backdrop-blur-md text-white dark:text-brand-orange px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-lg mb-6">
          <GraduationCap size={16} className="text-brand-orange" />
          <span>Madhav Study &bull; Academic Year 2026</span>
        </div>

        {/* 🏢 MAIN COLLEGE NAME */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl drop-shadow-md mb-4 uppercase">
          Madhav  <span className="text-brand-orange"> Study</span>
        </h1>
        
        {/* 📝 ACADEMIC TEXT / TAGLINE */}
        <p className="text-slate-100 dark:text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl font-normal leading-relaxed mb-10 drop-shadow-sm opacity-95">
          Empowering future innovators through world-class engineering, management research, and advanced technical skills. Discover 50+ streams, industry-aligned labs, and globally verified placement matrix records.
        </p>

        {/* 🛠️ ACTION BUTTONS (Replaced Search Bar) */}
        <div className="w-full max-w-xl flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-300">
          
          {/* WhatsApp Us Button */}
          <button 
            onClick={() => setIsFormOpen(true)}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm md:text-base px-8 py-4 rounded-xl transition-all active:scale-98 shadow-lg shadow-emerald-600/20 cursor-pointer flex items-center justify-center gap-2.5"
          >
            <MessageSquare size={20} />
            <span>WhatsApp Us</span>
          </button>

          {/* Call Us Button */}
          <a 
            href="tel:+918744077832"
            className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/95 text-white font-semibold text-sm md:text-base px-8 py-4 rounded-xl transition-all active:scale-98 shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2.5"
          >
            <Phone size={19} />
            <span>Call Us: +91 8744077832</span>
          </a>
          
        </div>

      </div>

      {/* 🌟 WHATSAPP MODAL POP-UP FORM 🌟 */}
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
              <h3 className="text-lg font-extrabold text-black dark:text-white tracking-tight">Book Admission Consult</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-light">Fill out the form below to connect on WhatsApp.</p>
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

              <div>
                <select
                  name="branch"
                  required
                  value={formData.branch}
                  onChange={handleInputChange}
                  className={`w-full bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-orange transition-colors font-medium appearance-none cursor-pointer ${formData.branch ? 'text-black dark:text-white' : 'text-gray-400'}`}
                  style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23888888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '14px' }}
                >
                  <option value="" disabled className="text-gray-400">Branch</option>
                  <option value="MBA" className="text-black dark:text-white bg-white dark:bg-slate-900">MBA (Master of Business Administration)</option>
                  <option value="BBA" className="text-black dark:text-white bg-white dark:bg-slate-900">BBA (Bachelor of Business Administration)</option>
                  <option value="BCA" className="text-black dark:text-white bg-white dark:bg-slate-900">BCA (Bachelor of Computer Applications)</option>
                  <option value="BCom" className="text-black dark:text-white bg-white dark:bg-slate-900">B.Com (Bachelor of Commerce)</option>
                  <option value="BA" className="text-black dark:text-white bg-white dark:bg-slate-900">BA (Bachelor of Arts)</option>
                  <option value="BEd" className="text-black dark:text-white bg-white dark:bg-slate-900">B.Ed (Bachelor of Education)</option>
                  <option value="LLB" className="text-black dark:text-white bg-white dark:bg-slate-900">LLB (Bachelor of Laws)</option>
                </select>
              </div>

              {/* Form Action Button */}
              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 tracking-wide cursor-pointer uppercase mt-2"
              >
                <Send size={14} />
                <span>Appointment Submit</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSearch;