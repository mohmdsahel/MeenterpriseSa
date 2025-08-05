import Button from "./Button";
import Section from "./Section";

import { check, gradient, wsa } from "../assets";

import { collabContent, keyTopics, whyAttend, whySponsor } from "../constants";
import {  grid } from "../assets";
import { Gradient } from "./design/Roadmap";
import Heading from "./Heading";
import Stats from "./Container";
import { useState } from "react";
import ContactForm from "./ContactForm";

const Roadmap = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowModal(false);
  };

  return (
    <Section crosses className="overflow-hidden " id="agenda">
      <div className="container md:pb-10">
       
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
         
                <div
                  className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6 hover:bg-conic-gradient">
                    <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                      <div className="absolute top-0 left-0 max-w-full">
                        <img
                          className="w-full"
                          src={grid}
                          width={550}
                          height={550}
                          alt="Grid"
                        />
                      </div>
                      <div className="relative z-1">
                        

                      


                        <h4 className="h3 mb-4">Target Audience</h4>
                        <p className="body-2 mb-4">C-levels – CEO/CIO/CTO/CISO/COO/CMO, Senior Vice Presidents, Vice Presidents, Heads of AI & Analytics department, AI & ML enthusiast involved in:</p>
                        {/* <ul className="list-disc text-center list-inside body-2 text-n-3 [&>li]:mb-2"> */}
                        <ul className="mb-10 md:mb-14">
                  {collabContent.map((item) => (
                    <li className="mb-4 py-2" key={item.id}>
                      <div className="flex items-center">
                        <div className="bg-purple-500 rounded-full p-1">
                          <img src={wsa} width={20} height={20} alt="check" />
                        </div>
                        <p className="body-2 ml-5">{item.title}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                        
                      </div>
                    </div>
                  </div>
                  <div
                    className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6 hover:bg-conic-gradient">
                    <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                      <div className="absolute top-0 left-0 max-w-full">
                        <img
                          className="w-full"
                          src={grid}
                          width={550}
                          height={550}
                          alt="Grid"
                        />
                      </div>
                      <div className="relative z-1">
                        

                        
                        <h4 className="h3 mb-4">Key Benefits of Attending</h4>
                        <ul className=" mb-10 md:mb-14">
                  {whyAttend.map((item) => (
                    <li className="mb-2 py-2" key={item.id}>
                      <div className="flex items-center">
                        <img src={check} width={24} height={24} alt="check" />
                        <h6 className="body-2 ml-5">{item.title}</h6>
                      </div>
                      {item.text && (
                        <p className="body-2 mt-3 text-n-4">{item.text}</p>
                      )}
                    </li>
                  ))}
                </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6 hover:bg-conic-gradient">
                    <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                      <div className="absolute top-0 left-0 max-w-full">
                        <img
                          className="w-full"
                          src={grid}
                          width={550}
                          height={550}
                          alt="Grid"
                        />
                      </div>
                      
                     

                      <div className="relative z-1">
                        <h4 className="h3 mb-4">Key topics</h4>
                        <ul className=" mb-10 md:mb-14">
                  {keyTopics.map((item) => (
                    <li className="mb-3 py-2" key={item.id}>
                      <div className="flex items-center">
                        <img src={item.icon} width={35} height={35} />
                        <h6 className="body-2 font-bold ml-5">{item.title}</h6>
                      </div>
                     
                    </li>
                  ))}
                </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6 hover:bg-conic-gradient">
                    <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                      <div className="absolute top-0 left-0 max-w-full">
                        <img
                          className="w-full"
                          src={grid}
                          width={550}
                          height={550}
                          alt="Grid"
                        />
                      </div>
                      <div className="relative z-1">
                        

                        
                        <h4 className="h3 mb-4">Why sponsor?</h4>
                       <ul className=" mb-10 md:mb-14">
                  {whySponsor.map((item) => (
                    <li className="mb-2 py-2" key={item.id}>
                      <div className="flex items-center">
                        <div className="bg-purple-00 rounded-full p-1">
                          <img src={item.icon} width={35} height={35} alt="check" />
                          </div>
                        <h6 className="body-2 ml-">{item.title}</h6>
                      </div>
                      {item.text && (
                        <p className="body-2 mt-3 text-n-4">{item.text}</p>
                      )}
                    </li>
                  ))}
                </ul>
                      </div>
                    </div>
                  </div>
                  <Gradient />
               
                  <div className="absolute bottom-[18.25rem] -right-[30.375rem] w-[56.625rem] opacity-40 mix-blend-color-dodge pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
              <img
                className="w-full"
                src={gradient}
                width={942}
                height={942}
                alt="Gradient"
              />
            </div>
          </div>

          <div className="absolute top-[18.25rem] -right-[30.375rem] w-[56.625rem] opacity-40 mix-blend-color-dodge pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
              <img
                className="w-full"
                src={gradient}
                width={942}
                height={942}
                alt="Gradient"
              />
            </div>
          </div>
                
          <div className="absolute bottom-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-40 mix-blend-color-dodge pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
              <img
                className="w-full"
                src={gradient}
                width={942}
                height={942}
                alt="Gradient"
              />
            </div>
          </div>
                
                  

             
            
          </div>

           
          <div className="m-8 p-4"><Stats/></div>
          <div className="flex text-center justify-center mt-12 md:mt-15 xl:mt-20">
             <Heading 
             title="Download The Middle East Enterprise AI & Analytics Agenda here:" 
             text="The Programme will take a deep dive into how public and private organizations are responding to the multiple drivers of AI & Analytics. The insight will be delivered by individuals with hands on experience from the industry in the vanguard of digital transformation through case studies, interviews, panel debates and workshops."
             />
        </div>
        <div className="flex justify-center">
            <Button onClick={() => setShowModal(true)}>Download The Agenda</Button>
        </div>

        <ContactForm 
          showModal={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
        />

        {/* Summit Highlights Section */}
        <div className="mt-20">
          <h1 className="text-center h2 mb-12 text-4xl font-bold">
            2024 SUMMIT HIGHLIGHTS
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="aspect-video rounded-2xl overflow-hidden">
              
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/ZoMnri8GxgM" title="4th Middle East Enterprise AI &amp; Analytics Summit | KSA Edition" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/kj7vsRasFKw" title="5th Enterprise AI &amp; Analytics Summit | Qatar Edition" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/KeraAmOuRG4" title="7th Middle East Enterprise AI &amp; Analytics Summit 2024 | KSA Edition" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             </div>
          </div>
        </div>
        </div>
        
      </Section>
    );
};

export default Roadmap;
