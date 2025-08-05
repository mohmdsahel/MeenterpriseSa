import { useState } from "react";

const ContactForm = ({ onSubmit, onClose, showModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2 sm:p-4 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-md p-4 sm:p-6 rounded-[1.5rem] bg-gradient-to-br from-[#2B1867]/20 to-[#4c0674] border border-white/20 backdrop-blur-xl my-4">
        <button 
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-n-4 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
        
        <h4 className="text-center mb-3 sm:mb-4 h4 text-lg sm:text-xl">
          GET IN <span className="text-[#C019FF]">TOUCH</span>
        </h4>
        
        <form onSubmit={onSubmit} className="space-y-2 sm:space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div className="w-full">
              <label className="block text-n-4 mb-1 text-xs">Your Name*:</label>
              <input 
                type="text" 
                required
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-xs sm:text-sm"
              />
            </div>
            <div className="w-full">
                    <label className="block text-n-4 mb-1 text-xs">Your Email*:</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-xs sm:text-sm"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-n-4 mb-1 text-xs">Your Phone Number:</label>
                    <input 
                      type="tel"
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-xs sm:text-sm"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-n-4 mb-1 text-xs">Your Organization:</label>
                    <input 
                      type="text"
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-xs sm:text-sm"
                    />
                  </div>
                
                </div>
                
                <div className="w-full">
                  <label className="block text-n-4 mb-1 text-xs">Your Interest In:</label>
                  <select 
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-xs sm:text-sm [&>option]:bg-[#47176c]"
                  >
                    <option value=""></option>
                    <option value="1">Attending</option>
                    <option value="2">Sponsoring/Exhibiting</option>
                    <option value="3">Speaking</option>
                    <option value="4">Other</option>
                  </select>
                </div>
                
               
                
                
                <div className="w-full">
                  <label className="block text-n-4 mb-1 text-xs">Message:</label>
                  <textarea 
                    rows="2"
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#C019FF] outline-none text-white text-xs sm:text-sm overflow-y-auto resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="button px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-[#C019FF] to-[#8A2BE2] hover:opacity-90 text-white font-bold text-xs sm:text-sm transition-all duration-200"
                  >
                    SUBMIT FORM
                  </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm; 