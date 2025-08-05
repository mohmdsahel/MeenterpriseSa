import Button from "./Button";
import { GradientLight } from "./design/Benefits";

import Section from "./Section";
import { useState } from "react";
import ContactForm from "./ContactForm";
import { Gradient } from "./design/Roadmap";

const Contact = () => { 
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowModal(false);
  };
  return (
    <Section id="contact" crosses>
      <GradientLight/>
      <div className="container relative">
        <h2 className="h2 text-center mb-12">Contact Us</h2>
        
        {/* Contact Info Grid - Full width */}
        <div className="grid md:grid-cols-2 gap-8 max-w-[1200px] mx-auto mb-10">
          {/* Email Container */}
          <div className="relative p-8 bg-n-8 border border-n-6 rounded-2xl overflow-hidden hover:border-n-5 transition-colors">
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-full border-2 border-n-6 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h4 className="h4 mb-4">Email Us</h4>
                <a href="mailto:info@meenterpriseai.com" className="block text-lg mb-3 hover:text-color-1">info@meenterpriseai.com</a>
                <a href="mailto:info@letstalk-biz.com" className="block text-lg mb-3 hover:text-color-1">info@letstalk-biz.com</a>
                <a href="mailto:marketing@letstalk-biz.com" className="block text-lg hover:text-color-1">marketing@letstalk-biz.com</a>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-n-8/50 to-n-8/0 pointer-events-none"></div>
          </div>

          {/* Phone Container */}
          <div className="relative p-8 bg-n-8 border border-n-6 rounded-2xl overflow-hidden hover:border-n-5 transition-colors">
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-full border-2 border-n-6 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9987 21.4142 21.3738C21.0391 21.7489 20.5108 21.9596 19.96 21.96C16.4289 21.6883 13.0155 20.5197 10.02 18.56C7.22 16.7704 4.85 14.4003 3.06 11.6C1.09 8.58881 -0.0781 5.15305 -0.35 1.60003C-0.350582 1.05008 -0.140133 0.522141 0.234287 0.147043C0.608707 -0.228055 1.13592 -0.439661 1.686 -0.440033H4.686C5.69275 -0.452123 6.54459 0.318477 6.7 1.31003C6.88563 2.61339 7.21142 3.88848 7.673 5.11003C7.95862 5.90676 7.76756 6.79618 7.18 7.39003L5.833 8.74003C7.50191 11.6212 9.87883 13.9981 12.76 15.67L14.11 14.32C14.7039 13.7324 15.5933 13.5414 16.39 13.827C17.6116 14.2886 18.8867 14.6144 20.19 14.8C21.1955 14.9569 21.9739 15.8263 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h4 className="h4 mb-4">Call Us</h4>
                <a href="tel:+442037696179" className="block text-lg mb-3 hover:text-color-1">+44 20 3769 6179</a>
                <a href="tel:+97152953979" className="block text-lg hover:text-color-1">+971 52 953 9979</a>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-n-8/50 to-n-8/0 pointer-events-none"></div>
          </div>

         

        </div>

        <Button
          className="flex w-full  mx-auto"
          onClick={() => setShowModal(true)}
          white={true}
        >
          Get in Touch
        </Button>

        <ContactForm 
          showModal={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
        />
      </div>
    </Section>
  );
};

export default Contact;
