import React from 'react';
import { 
  CheckCircle2, 
  Target, 
  Compass, 
  Users, 
  GraduationCap, 
  MessageSquare, 
  PhoneCall,
  MapPin,
  BookOpen
} from 'lucide-react';

const AboutUs = () => {

  // WhatsApp click redirection handler mapping the core number directly
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "918744077832"; // Primary asset contact coordinate
    const message = encodeURIComponent("Hello Madhav Study Team, I want to book a free career consultation session for MBA/BBA/BCA/B.Com/BA/B.Ed/LLB admissions.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="w-full bg-bg-main min-h-screen font-poppins transition-colors duration-300">
      
      {/* 🌟 1. HERO HEADER AREA */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-brand-blue py-20 md:py-28 px-4 overflow-hidden shadow-inner">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-cover bg-center" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80')` }} />
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full filter blur-3xl" />
        
        <div className="layout-wrapper relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full font-semibold text-xs uppercase tracking-widest mb-4 border border-brand-orange/20">
            <GraduationCap size={14} />
            <span>India's Leading Education Portal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            About <span className="text-brand-orange">Madhav Study</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg mt-3 max-w-2xl mx-auto font-light">
            Your trusted partner for career-focused admissions in India's top universities.
          </p>
        </div>
      </div>

      {/* 📊 2. REAL-TIME PLATFORM DATA METRICS RIBBON */}
      

      {/* 🏢 3. CORE VALUE IDENTITY SEGMENT */}
      <div className="layout-wrapper py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-main tracking-tight">
                We are <span className="text-brand-orange">, who we are.</span>
              </h2>
              <div className="w-16 h-1 bg-brand-orange rounded-full mt-2" />
            </div>
            
            <p className="text-text-muted text-sm sm:text-base leading-relaxed font-light">
              Based in Delhi NCR, <strong>Madhav Study</strong> is a premier admission consulting company committed to assisting students all throughout India get spots at elite schools and institutions. Whether your goal is a B.Ed., BA, LLB, MBA, BBA, BCA or B.Com, we simplify and ensure your whole admittance process is successful.
            </p>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed font-light">
              Supported by a group of very seasoned admission counselors, we provide individualized and open advice for undergraduate and postgraduate programs in various fields: law, management, commerce, arts, and education.
            </p>
          </div>

          {/* Interactive Core Strategy Sidebar */}
          <div className="lg:col-span-5 bg-card-bg border border-border-main p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full" />
            <h3 className="text-lg font-bold text-text-main mb-6 flex items-center gap-2">
              <Users size={20} className="text-brand-orange" />
              <span>Counseling Matrix</span>
            </h3>
            <ul className="space-y-4">
              {[
                { title: "Authorized Enrollment Desk", desc: "Direct official linkages ensuring direct corporate processing inside campus cells." },
                { title: "Standard Fee Infrastructures", desc: "Absolute tracking matching official University parameters with zero middleman scaling." }
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <div className="bg-brand-orange/10 text-brand-orange p-1.5 rounded-lg mt-0.5 text-xs font-bold">
                    0{index + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-main">{item.title}</h4>
                    <p className="text-xs text-text-muted mt-0.5 font-light">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* 🚀 4. WHY CHOOSE SECTION */}
      <div className="bg-slate-50 dark:bg-slate-900/40 py-16 md:py-24 border-y border-border-main/50">
        <div className="layout-wrapper">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-main tracking-tight">
              Why choose Madhav Study?
            </h2>
            <div className="w-12 h-1 bg-brand-orange rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "100% Transparent Admission Process",
              "Direct College Admission Assistance",
              "UGC/AICTE/NCTE/BCI Approved University Tie-ups",
              "Fast & Easy Form Filling and Counseling",
              "Free Career Counseling Sessions",
              "No Hidden Charges or Misleading Promises"
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-card-bg border border-border-main p-5 rounded-xl shadow-sm flex items-start gap-3 group"
              >
                <CheckCircle2 size={18} className="text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-text-main group-hover:text-brand-orange transition-colors">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 📚 5. EXCLUSIVE DOMAIN AND STREAM MATRIX */}
      {/* <div className="layout-wrapper py-16 md:py-24">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-main tracking-tight">
            For which courses should one seek admission guidance?
          </h2>
          <p className="text-text-muted text-xs sm:text-sm mt-2 font-light">
            We assist in student admission into:
          </p>
          <div className="w-12 h-1 bg-brand-orange rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Education & Teaching Programs", desc: "Top NCTE accredited institutions for both B.Ed. and M.Ed. Leading business schools and universities.", target: "B.Ed" },
            { title: "Legal & Corporate Law Streams", desc: "BA LLB / LLB – Law institutions acknowledged by BCI.", target: "BA LLB • LLB" },
            { title: "Executive Management Blocks", desc: "BBA / MBA – Leading business schools and universities.", target: "BBA • MBA" },
            { title: "Professional Graduate Portfolios", desc: "BCA / B.Com / BA undergraduate professional structural pathways.", target: "BCA • B.Com • BA" },
            { title: "Approved Alternative Learning", desc: "Valid and UGC-approved distance/online education pathways for specialized courses.", target: "UGC Approved Distance" }
          ].map((domain, index) => (
            <div key={index} className="bg-card-bg border border-border-main p-6 rounded-xl flex flex-col justify-between group hover:border-brand-orange/40 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-brand-blue/5 dark:bg-slate-800 text-brand-blue dark:text-brand-orange px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                    Official Channel
                  </span>
                  <BookOpen size={18} className="text-text-muted/40 group-hover:text-brand-orange transition-colors" />
                </div>
                <h3 className="text-base font-bold text-text-main mb-2">{domain.title}</h3>
                <p className="text-xs text-text-muted font-light leading-relaxed mb-4">{domain.desc}</p>
              </div>
              <div className="pt-3 border-t border-border-main/40 text-xs text-brand-orange font-semibold">
                🎓 {domain.target}
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* 🎯 6. STRATEGIC MISSION & VISION STACK */}
      <div className="bg-slate-900 text-white py-16 md:py-20 relative">
        <div className="layout-wrapper grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="space-y-3 p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center">
              <Target size={20} />
            </div>
            <h3 className="text-xl font-bold">Our Vision and Objective</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Our goal is to provide every student with accurate, straightforward, and moral professional advice that results in successful admission and a promising future.
            </p>
          </div>

          <div className="space-y-3 p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Compass size={20} />
            </div>
            <h3 className="text-xl font-bold">Core Focus Positioning</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Vision: Leading future professionals across all sectors, becoming India's most trusted and student-centric admission consultant.
            </p>
          </div>

        </div>
      </div>

      {/* 📞 7. GET IN TOUCH WITH US & WHATSAPP REDIRECTION DESK */}
      <div className="layout-wrapper py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto bg-card-bg border border-border-main p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          
          <div className="space-y-6 relative z-10">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main tracking-tight">
                Get In Touch With Us
              </h2>
              <p className="text-text-muted text-sm max-w-xl mx-auto font-light mt-1">
                Your quest stops here if you are trying to find the top admission consultant in Delhi NCR. Allow Madhav Study to direct your path of career.
              </p>
            </div>

            {/* Address Meta Ribbons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left pt-2">
              <div className="flex items-center gap-3 text-white bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-border-main/60">
                <MapPin size={18} className="text-brand-orange shrink-0" />
                <span className="text-xs font-light leading-tight">Plot No. 11/1, Knowledge Park III, Greater Noida, UP</span>
              </div>
              <div className="flex items-center gap-3 text-white bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-border-main/60">
                <PhoneCall size={16} className="text-brand-orange shrink-0" />
                <span className="text-xs font-semibold tracking-wide">+91 8744077832</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleWhatsAppRedirect}
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-98 cursor-pointer"
              >
                <MessageSquare size={18} />
                <span>Book A Free Consultation Session</span>
              </button>
              <p className="text-[10px] text-text-muted mt-2 font-light">
                ⚡ Connects directly with our verified admission helpdesk on WhatsApp
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AboutUs;