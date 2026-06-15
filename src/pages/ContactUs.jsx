import React from 'react';

const ContactUs = () => {
  return (
    <div className="max-w-xl mx-auto px-4 pt-20 font-poppins">
      <h1 className="text-3xl font-bold text-white text-center mb-2">Contact Our Support</h1>
      <p className="text-gray-400 text-center mb-8">Have doubts? Drop your question below.</p>
      
      <form className="space-y-4 bg-[#122237] p-6 rounded-lg border border-gray-800" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="text-sm text-gray-400 block mb-1">Your Name</label>
          <input type="text" className="w-full bg-[#0b1523] border border-gray-700 rounded p-2 text-white focus:outline-none focus:border-brand-orange" placeholder="Madhav" />
        </div>
        <div>
          <label className="text-sm text-gray-400 block mb-1">Query Description</label>
          <textarea rows="4" className="w-full bg-[#0b1523] border border-gray-700 rounded p-2 text-white focus:outline-none focus:border-brand-orange" placeholder="Ask about admissions, cutoff details..."></textarea>
        </div>
        <button type="submit" className="btn-orange w-full justify-center">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;