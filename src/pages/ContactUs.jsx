import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  GraduationCap
} from 'lucide-react';

const ContactUs = () => {
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

  // Click hone par yeh function WhatsApp par message redirect karega naye number ke sath
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "919319891418"; // New primary number updated
    
    // Formatting the WhatsApp text professionally
    const rawMessage = `*New Admission Consultation Request* 🎓\n\n` +
                       `👤 *Name:* ${formData.name}\n` +
                       `📧 *Email:* ${formData.email || 'Not Provided'}\n` +
                       `📞 *Phone:* ${formData.phone}\n` +
                       `📚 *Selected Course:* ${formData.branch}\n\n` +
                       `Please guide me with the further admission process.`;

    const encodedMessage = encodeURIComponent(rawMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleWhatsAppChat = () => {
    const phoneNumber = "919319891418"; // Mapped from new primary asset
    const textMessage = encodeURIComponent("Hello Madhav Study Team, I am looking forward to connecting with your support helpdesk for admission consultation.");
    window.open(`https://wa.me/${phoneNumber}?text=${textMessage}`, '_blank');
  };

  return (
    <div className="w-full bg-bg-main min-h-screen font-poppins text-text-main transition-colors duration-300">
      
      {/* 🌟 1. HERO BANNER SECTION */}
      <div className="relative w-full bg-gradient-to-r from-slate-900 via-slate-800 to-brand-blue py-16 md:py-24 text-center overflow-hidden shadow-inner">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-cover bg-center"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80')` }} />
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full filter blur-3xl" />
        
        <div className="relative z-10 max-w-xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 bg-brand-orange/10 text-brand-orange border border-brand-orange/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
            <GraduationCap size={12} /> Get Verified Counselling
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Contact Us</h1>
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-300 font-light mt-2 tracking-wide uppercase">
            <span>ADMISSION HUB</span>
            <span className="text-brand-orange font-bold">•</span>
            <span className="text-brand-orange font-medium">CONTACT</span>
          </div>
        </div>
      </div>

      {/* 🏢 2. CORE CONTENT CORE AREA (Dual Column Layout) */}
      <div className="layout-wrapper py-16 md:py-24 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: DYNAMIC INFO CARDS & SOCIAL FOOTPRINT */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-bold text-brand-orange">Reach Out Today</h4>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main tracking-tight">
                Contact Information
              </h2>
              <div className="w-12 h-1 bg-brand-orange rounded-full mt-1" />
              <p className="text-text-muted text-sm leading-relaxed font-light pt-2 max-w-xl">
                Our Admission Assistance Service offers fast and efficient solutions at raw educational criteria tracking. Our certified counselors ensure your career stream system is processed securely and safely for extreme structural performance.
              </p>
            </div>

            {/* Information Grid Boxes Array */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address Box */}
              <div className="bg-card-bg border border-border-main p-5 rounded-2xl flex items-start gap-4 shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all duration-300">
                <div className="bg-brand-orange/10 p-3 rounded-xl text-brand-orange shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold tracking-tight text-text-main">Our Address</h4>
                  <p className="text-xs text-text-muted leading-relaxed font-light">
                    Plot No. 11/1, Knowledge Park III,<br />
                    Greater Noida, Gautam Buddha Nagar,<br />
                    Uttar Pradesh - 201310
                  </p>
                </div>
              </div>

              {/* Phone Info Box */}
              <div className="bg-card-bg border border-border-main p-5 rounded-2xl flex items-start gap-4 shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all duration-300">
                <div className="bg-brand-blue/10 dark:bg-brand-orange/10 p-3 rounded-xl text-brand-blue dark:text-brand-orange shrink-0">
                  <Phone size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold tracking-tight text-text-main">Phone Number</h4>
                  <p className="text-xs text-text-muted font-medium tracking-wide space-y-1">
                    {/* Primary Number Updated */}
                    <span className="block text-brand-orange font-semibold">+91 9319891418</span>
                    {/* <span className="block opacity-80">+91 8368665374</span> */}
                    {/* <span className="block opacity-80">+91 8882215030</span> */}
                  </p>
                </div>
              </div>

              {/* Email Box */}
              <div className="bg-card-bg border border-border-main p-5 rounded-2xl flex items-start gap-4 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-300">
                <div className="bg-brand-blue/10 dark:bg-brand-orange/10 p-3 rounded-xl text-brand-blue dark:text-brand-orange shrink-0">
                  <Mail size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold tracking-tight text-text-main">Email Address</h4>
                  <p className="text-xs text-text-muted font-light break-all pt-0.5">
                    admissions.madhav@gmail.com
                  </p>
                </div>
              </div>

              {/* Working Hours Box */}
              <div className="bg-card-bg border border-border-main p-5 rounded-2xl flex items-start gap-4 shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all duration-300">
                <div className="bg-brand-orange/10 p-3 rounded-xl text-brand-orange shrink-0">
                  <Clock size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold tracking-tight text-text-main">Working Hours</h4>
                  <p className="text-xs text-text-muted font-light leading-relaxed">
                    Mon to Sat: 9:30 AM - 6:00 PM<br />
                    <span className="text-amber-500 font-medium">Sunday: Closed</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Premium Social Footer Footprint */}
            <div className="space-y-3 pt-4 border-t border-border-main/50">
              <h4 className="text-xs uppercase tracking-widest font-bold text-brand-orange">Follow The Social Media:</h4>
              <p className="text-xs text-text-muted font-light">Keep your admission sync running securely by following our standard social channels:</p>
              <div className="flex items-center gap-3">
                
                {/* LinkedIn Custom SVG */}
                <a href="#" className="w-9 h-9 rounded-xl bg-card-bg border border-border-main flex items-center justify-center text-text-muted hover:text-brand-orange hover:border-brand-orange/40 transition-all shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                {/* Twitter / X Custom SVG */}
                <a href="#" className="w-9 h-9 rounded-xl bg-card-bg border border-border-main flex items-center justify-center text-text-muted hover:text-brand-orange hover:border-brand-orange/40 transition-all shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>

                {/* YouTube Custom SVG */}
                <a href="#" className="w-9 h-9 rounded-xl bg-card-bg border border-border-main flex items-center justify-center text-text-muted hover:text-brand-orange hover:border-brand-orange/40 transition-all shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>

                {/* Facebook Custom SVG */}
                <a href="#" className="w-9 h-9 rounded-xl bg-card-bg border border-border-main flex items-center justify-center text-text-muted hover:text-brand-orange hover:border-brand-orange/40 transition-all shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: HIGH CONVERTING APPOINTMENT FORM MODULE */}
          <div className="lg:col-span-5 bg-card-bg border border-border-main p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-bl-full" />
            
            <div className="mb-6 space-y-1">
              <h3 className="text-lg font-extrabold text-text-main tracking-tight">Book Admission Consult</h3>
              <p className="text-xs text-text-muted font-light">Fill out the form below to book a free career guidance slot.</p>
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
                  className="w-full bg-white border border-border-main rounded-xl px-4 py-3 text-xs text-black focus:outline-none focus:border-brand-orange transition-colors font-medium placeholder:text-gray-400"
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
                  className="w-full bg-white border border-border-main rounded-xl px-4 py-3 text-xs text-black focus:outline-none focus:border-brand-orange transition-colors font-medium placeholder:text-gray-400"
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
                  className="w-full bg-white border border-border-main rounded-xl px-4 py-3 text-xs text-black focus:outline-none focus:border-brand-orange transition-colors font-medium placeholder:text-gray-400"
                />
              </div>

              <div>
                <select
                  name="branch"
                  required
                  value={formData.branch}
                  onChange={handleInputChange}
                  className={`w-full bg-white border border-border-main rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-orange transition-colors font-medium appearance-none cursor-pointer ${formData.branch ? 'text-black' : 'text-gray-400'}`}
                  style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23888888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '14px' }}
                >
                  <option value="" disabled className="text-gray-400">Branch</option>
                  <option value="MBA" className="text-black">MBA (Master of Business Administration)</option>
                  <option value="BBA" className="text-black">BBA (Bachelor of Business Administration)</option>
                  <option value="BCA" className="text-black">BCA (Bachelor of Computer Applications)</option>
                  <option value="BCom" className="text-black">B.Com (Bachelor of Commerce)</option>
                  <option value="BA" className="text-black">BA (Bachelor of Arts)</option>
                  <option value="BEd" className="text-black">B.Ed (Bachelor of Education)</option>
                  <option value="LLB" className="text-black">LLB (Bachelor of Laws)</option>
                </select>
              </div>

              {/* Form Action Button */}
              <button 
                type="submit"
                className="w-full bg-brand-orange hover:bg-orange-500 text-white font-semibold text-xs py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 tracking-wide cursor-pointer uppercase mt-2"
              >
                <Send size={14} />
                <span>Appointment Submit</span>
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* 🗺️ 3. DYNAMIC SATELLITE MAP HUB */}
      <div className="w-full h-[350px] md:h-[450px] border-t border-border-main relative bg-slate-100">
        <iframe 
          title="Madhav Study Center Terminal Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.1703277866386!2d77.4875070749246!3d28.474416691244365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0da9777f6f%3A0x34ea9dfc8642a624!2s11%2F1%2C%20Knowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1781528977045!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-95 dark:invert dark:hue-rotate-180"
        />
      </div>

      {/* 🟢 4. DYNAMIC FLOATING COUNSELOR DESK WHATSAPP TRIGGER OVERLAY */}
      <button
        onClick={handleWhatsAppChat}
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer group"
        title="Chat with Verified Counselor Hub"
      >
        <MessageSquare size={24} className="group-hover:rotate-12 transition-transform duration-200" />
        <span className="absolute right-14 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase tracking-wider">
          Chat Live Desk
        </span>
      </button>

    </div>
  );
};

export default ContactUs; 