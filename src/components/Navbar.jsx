import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Moon, Sun, Phone, Menu, X, MessageSquare, Send } from 'lucide-react';

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
  const [isFormOpen, setIsFormOpen] = useState(false); // WhatsApp Form Modal State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: ''
  });

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Form Submit hone par WhatsApp par Redirect karne ka function
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "919319891418"; // Updated to new contact coordinate
    
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
    <nav className="bg-card-bg border-b border-border-main w-full sticky top-0 z-50 transition-colors duration-300">
      <div className="layout-wrapper">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Title */}
          <Link to="/" className="flex-shrink-0 select-none block py-2">
            <div className="h-12 w-auto max-w-[150px] sm:max-w-[180px] md:max-w-[220px] flex items-center justify-start">
              <img 
                src="./logo.jpeg" 
                alt="College Logo" 
                className="h-full w-full object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            <Link to="/" className={`nav-link ${isActive('/') ? 'text-brand-orange font-semibold' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'text-brand-orange font-semibold' : ''}`}>About us</Link>
            <Link to="/college" className={`nav-link ${isActive('/college') ? 'text-brand-orange font-semibold' : ''}`}>College</Link>
            <Link to="/course" className={`nav-link ${isActive('/course') ? 'text-brand-orange font-semibold' : ''}`}>Course</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'text-brand-orange font-semibold' : ''}`}>Contact us</Link>
          </div>

          {/* Action Tools Section (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            
            {/* Call Us Button with new number */}
            <a 
              href="tel:+919319891418"
              className="bg-brand-orange text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:opacity-95 active:scale-95 transition-all"
            >
              <Phone size={15} />
              <span>Call Us: +91 9319891418</span>
            </a>

            {/* Global Theme Toggle */}
            <button 
              onClick={() => setIsDark(!isDark)}
              className="text-text-main p-2 rounded-full hover:bg-bg-main transition-colors cursor-pointer"
            >
              {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
            </button>
          </div>

          {/* Tablet & Mobile Layout Handlers */}
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={() => setIsDark(!isDark)} className="text-text-main p-2 rounded-full">
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-main p-2 transition-transform duration-200">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Dropdown Panel */}
      {isOpen && (
        <div className="fixed top-20 left-0 w-full z-50 bg-card-bg border-b border-border-main transition-colors duration-300 p-4 shadow-xl">
          <div className="flex flex-col space-y-1 mb-4">
            <Link to="/" onClick={() => setIsOpen(false)} className={`py-3 px-2 rounded-md block ${isActive('/') ? 'bg-brand-orange/10 text-brand-orange font-semibold' : 'text-text-main'}`}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={`py-3 px-2 rounded-md block ${isActive('/about') ? 'bg-brand-orange/10 text-brand-orange font-semibold' : 'text-text-main'}`}>About us</Link>
            <Link to="/college" onClick={() => setIsOpen(false)} className={`py-3 px-2 rounded-md block ${isActive('/college') ? 'bg-brand-orange/10 text-brand-orange font-semibold' : 'text-text-main'}`}>College</Link>
            <Link to="/course" onClick={() => setIsOpen(false)} className={`py-3 px-2 rounded-md block ${isActive('/course') ? 'bg-brand-orange/10 text-brand-orange font-semibold' : 'text-text-main'}`}>Course</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={`py-3 px-2 rounded-md block ${isActive('/contact') ? 'bg-brand-orange/10 text-brand-orange font-semibold' : 'text-text-main'}`}>Contact us</Link>
          </div>
          
          <div className="pt-4 border-t border-border-main flex flex-col sm:flex-row gap-3">
            {/* WhatsApp Us Button */}
            <button 
              onClick={() => { setIsOpen(false); setIsFormOpen(true); }}
              className="bg-emerald-600 text-white py-3 px-4 rounded-md flex items-center justify-center gap-2 flex-1 text-sm cursor-pointer"
            >
              <MessageSquare size={16} /> WhatsApp Us
            </button>
            {/* Call Us Button with new number */}
            <a 
              href="tel:+919319891418"
              className="bg-brand-orange text-white py-3 px-4 rounded-md flex items-center justify-center gap-2 flex-1 text-sm text-center font-medium"
            >
              <Phone size={16} /> Call Us
            </a>
          </div>
        </div>
      )}

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

            <div className="mb-6 space-y-1">
              <h3 className="text-lg font-extrabold text-black dark:text-white tracking-tight">Book Admission Consult</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-light">Fill out the form below to connect on WhatsApp.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
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
    </nav>
  );
};

export default Navbar;