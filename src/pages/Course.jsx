import React, { useState } from 'react';
import { BookOpen, HelpCircle, CheckCircle, ArrowRight } from 'lucide-react';

const Course = () => {
  // Course listing filters setup extracted directly from your reference sheet
  const courseCategories = ["All Focus", "MBA", "BBA", "BCA", "B.Com", "BA", "B.Ed", "LLB"];

  // Exact dataset mapped directly from your provided structural image source grid
  const feeStructureData = [
    { course: "MBA 1st Year", regFee: "Rs. 1100/-", fees: "Rs. 95500/-", aktuFee: "Rs. 2300/-", bookBank: "Rs. 5000/-", total: "Rs. 103900/-", category: "MBA" },
    { course: "MBA 2nd Year", regFee: "-----------", fees: "Rs. 95500/-", aktuFee: "-----------", bookBank: "-----------", total: "Rs. 95500/-", category: "MBA" },
    
    { course: "BBA 1st Year", regFee: "Rs. 1100/-", fees: "Rs. 48500/-", aktuFee: "-----------", bookBank: "Rs. 3000/-", total: "Rs. 52600/-", category: "BBA" },
    { course: "BBA 2nd Year", regFee: "-----------", fees: "Rs. 48500/-", aktuFee: "-----------", bookBank: "-----------", total: "Rs. 48500/-", category: "BBA" },
    { course: "BBA 3rd Year", regFee: "-----------", fees: "Rs. 48500/-", aktuFee: "-----------", bookBank: "-----------", total: "Rs. 48500/-", category: "BBA" },
    
    { course: "BCA 1st Year", regFee: "Rs. 1100/-", fees: "Rs. 48500/-", aktuFee: "-----------", bookBank: "Rs. 3000/-", total: "Rs. 51500/-", category: "BCA" },
    { course: "BCA 2nd Year", regFee: "-----------", fees: "Rs. 48500/-", aktuFee: "-----------", bookBank: "-----------", total: "Rs. 48500/-", category: "BCA" },
    { course: "BCA 3rd Year", regFee: "-----------", fees: "Rs. 48500/-", aktuFee: "-----------", bookBank: "-----------", total: "Rs. 48500/-", category: "BCA" },
    
    { course: "B.Com 1st Year", regFee: "Rs. 1100/-", fees: "Rs. 42500/-", aktuFee: "-----------", bookBank: "Rs. 3000/-", total: "Rs. 45500/-", category: "B.Com" },
    { course: "B.Com 2nd Year", regFee: "-----------", fees: "Rs. 42500/-", aktuFee: "-----------", bookBank: "-----------", total: "Rs. 42500/-", category: "B.Com" },
    { course: "B.Com 3rd Year", regFee: "-----------", fees: "Rs. 42500/-", aktuFee: "-----------", bookBank: "-----------", total: "Rs. 42500/-", category: "B.Com" },
    
    { course: "BA 1st Year", regFee: "Rs. 1100/-", fees: "Rs. 26500/-", aktuFee: "-----------", bookBank: "Rs. 3000/-", total: "Rs. 29500/-", category: "BA" },
    { course: "BA 2nd Year", regFee: "-----------", fees: "Rs. 26500/-", aktuFee: "-----------", bookBank: "-----------", total: "Rs. 26500/-", category: "BA" },
    { course: "BA 3rd Year", regFee: "-----------", fees: "Rs. 26500/-", aktuFee: "-----------", bookBank: "-----------", total: "Rs. 26500/-", category: "BA" },
    
    { course: "B.Ed 1st Year", regFee: "Rs. 1100/-", fees: "Rs. 51250/-", aktuFee: "-----------", bookBank: "Rs. 5000/-", total: "Rs. 52350/-", category: "B.Ed" },
    { course: "B.Ed 2nd Year", regFee: "-----------", fees: "Rs. 30000/-", aktuFee: "-----------", bookBank: "-----------", total: "Rs. 30000/-", category: "B.Ed" },
    
    { course: "LLB 1st Year", regFee: "Rs. 1100/-", fees: "Rs. 55000/-", aktuFee: "-----------", bookBank: "-----------", total: "Rs. 56100/-", category: "LLB" },
    { course: "LLB 2nd Year", regFee: "-----------", fees: "Rs. 55000/-", aktuFee: "-----------", bookBank: "-----------", total: "Rs. 55000/-", category: "LLB" },
    { course: "LLB 3rd Year", regFee: "-----------", fees: "Rs. 55000/-", aktuFee: "-----------", bookBank: "-----------", total: "Rs. 55000/-", category: "LLB" }
  ];

  const [activeFilter, setActiveFilter] = useState("All Focus");

  // Filter strategy optimization
  const filteredData = activeFilter === "All Focus" 
    ? feeStructureData 
    : feeStructureData.filter(item => item.category === activeFilter);

  return (
    <div className="layout-wrapper py-8 sm:py-12 lg:py-16 transition-colors duration-300 font-poppins">
      
      {/* Page Content Header block */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm uppercase tracking-wider mb-2">
          <BookOpen size={16} />
          <span>Academic Catalogs</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight mb-3">
          Courses Offered & <span className="text-brand-orange">Fee Structures</span>
        </h1>
        <p className="text-text-muted text-sm sm:text-base max-w-3xl leading-relaxed">
          Review authentic real-time registration allocations, tuition parameters, academic Book Bank distributions, and final complete summaries validated for the 2025-26 university sessions.
        </p>
      </div>

      {/* 📊 INTERACTIVE COURSE SELECTOR PILLS FRAMEWORK */}
      <div className="flex flex-wrap items-center gap-2 mb-8 bg-card-bg p-2 rounded-xl border border-border-main shadow-sm">
        {courseCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
              activeFilter === cat 
                ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20" 
                : "text-text-main hover:bg-bg-main hover:text-brand-orange"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🖥️ DESKTOP & LAPTOP TABLE INTERFACE: Visible on Larger Framework Screens */}
      <div className="hidden md:block overflow-hidden bg-card-bg border border-border-main rounded-xl shadow-xl transition-all duration-300">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-blue text-white transition-colors">
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Course Program</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Registration</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Tuition Fees</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Reg Fees (AKTU)</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Book Bank</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider bg-brand-orange text-white text-center">Total Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-main/60">
              {filteredData.map((row, index) => (
                <tr 
                  key={index} 
                  className="hover:bg-slate-500/5 dark:hover:bg-slate-400/5 transition-colors group"
                >
                  <td className="p-4 font-bold text-text-main group-hover:text-brand-orange transition-colors">{row.course}</td>
                  <td className="p-4 text-text-muted font-medium">{row.regFee}</td>
                  <td className="p-4 text-text-muted font-medium">{row.fees}</td>
                  <td className="p-4 text-text-muted font-medium">{row.aktuFee}</td>
                  <td className="p-4 text-text-muted font-medium">{row.bookBank}</td>
                  <td className="p-4 font-extrabold text-brand-orange bg-brand-orange/5 text-center text-base tracking-tight">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 📱 MOBILE & TABLET LAYOUT ENGINE: Automatically displays stacked list view on hand-held items */}
      <div className="block md:hidden space-y-4">
        {filteredData.map((row, index) => (
          <div 
            key={index} 
            className="bg-card-bg border border-border-main p-5 rounded-xl shadow-md space-y-3 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-orange" />
            
            <div className="flex justify-between items-start pl-2">
              <h3 className="text-lg font-bold text-text-main">{row.course}</h3>
              <span className="bg-brand-orange/10 text-brand-orange font-bold text-xs px-2.5 py-1 rounded-full uppercase tracking-wide">
                {row.category}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-y-2 gap-x-2 pt-2 text-xs border-t border-border-main/40 pl-2">
              <div>
                <span className="text-text-muted block font-medium mb-0.5">Registration:</span>
                <span className="text-text-main font-semibold">{row.regFee}</span>
              </div>
              <div>
                <span className="text-text-muted block font-medium mb-0.5">Tuition Fee:</span>
                <span className="text-text-main font-semibold">{row.fees}</span>
              </div>
              <div>
                <span className="text-text-muted block font-medium mb-0.5">Reg (AKTU):</span>
                <span className="text-text-main font-semibold">{row.aktuFee}</span>
              </div>
              <div>
                <span className="text-text-muted block font-medium mb-0.5">Book Bank:</span>
                <span className="text-text-main font-semibold">{row.bookBank}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-border-main/60 flex items-center justify-between pl-2 bg-slate-500/5 -mx-5 -mb-5 p-4 rounded-b-xl">
              <span className="text-sm font-bold text-text-main">Gross Academic Payable:</span>
              <span className="text-lg font-black text-brand-orange tracking-tight">{row.total}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Legal Disclaimers mapping explicit image text configurations */}
      <div className="mt-8 p-4 bg-brand-blue/5 dark:bg-slate-900 border border-brand-blue/10 dark:border-slate-800 rounded-xl flex items-start gap-3">
        <HelpCircle size={20} className="text-brand-orange shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-text-muted font-medium leading-relaxed">
          <strong className="text-text-main font-bold">NOTE :</strong> All Courses Exam Fees (As per University Norms) will be applied systematically at the duration of final verification registration frameworks.
        </p>
      </div>

    </div>
  );
};

export default Course;