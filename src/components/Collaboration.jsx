import { service1, } from "../assets";

import { associatePartners, exhibitingPartners, seriesPartners, SlidingPartnersLeft, SlidingPartnersRight } from "../constants";

import { GradientLight } from "./design/Benefits";
import Heading from "./Heading";
import Section from "./Section";
import { motion } from "framer-motion";


const Collaboration = () => {
  return (
    <Section id="partners" crosses>
      <GradientLight/>
      <div className="container ">
       
        <div className="relative z-1 flex flex-col items-center min-h-[20rem] mb-5 p-4 border border-n-1/10 rounded-3xl overflow-hidden 
          sm:p-3 
          md:min-h-[30rem] md:p-4 
          lg:p-10 lg:min-h-[39rem] 
          xl:min-h-[46rem]">
          <div className="relative z-1 w-full">
            
          <Heading className="text-center bg-gradient-to-br from-slate-100 to-slate-500 bg-clip-text text-transparent" title="2025 THOUGHT LEADERSHIP PARTNERS" />

          <div className="py-6 px-2 xl:px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* First row with 3 main partners */}
              <div className="flex flex-col items-center">
                <span className="text-sm sm:text-base text-center tagline font-extrabold text-white mb-4">
                  EVERYDAY AI PARTNER
                </span>
                <div className="rounded-2xl flex items-center mb-4 justify-center  p-4">
                  <a href="#" target="_blank">
                    <img 
                      src={seriesPartners[0]?.icon} 
                      width={180} 
                      height={180}
                      className="object-contain" 
                    />
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-sm sm:text-base text-center tagline font-extrabold text-white mb-4">
                  PREMIUM BRONZE PARTNER
                </span>
                <div className="rounded-2xl flex items-center mb-4 justify-center p-4">
                  <a href="#" target="_blank">
                    <img 
                      src={seriesPartners[1]?.icon} 
                      width={180} 
                      height={180}
                      className="object-contain" 
                    />
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-sm sm:text-base text-center tagline font-extrabold text-white mb-4">
                  REAL-TIME DATA PLATFORM PARTNER
                </span>
                <div className="rounded-2xl flex items-center mb-4 justify-center p-4">
                  <a href="#" target="_blank">
                    <img 
                      src={seriesPartners[2]?.icon} 
                      width={180} 
                      height={180}
                      className="object-contain" 
                    />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Second row with 2 categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="flex flex-col items-center">
                <span className="text-sm sm:text-base text-center tagline font-extrabold text-white mb-4">
                  EXHIBITING PARTNERS
                </span>
                <div className="flex flex-row flex-wrap justify-center gap-6">
                  {exhibitingPartners.slice(0, 2).map((item, index) => (
                    <div key={index} className="rounded-2xl flex items-center mb-4 justify-center  p-4">
                      <a href={item.link} target="_blank">
                        <img 
                          src={item.icon} 
                          width={150} 
                          height={150}
                          className="object-contain" 
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-sm sm:text-base text-center tagline font-extrabold text-white mb-4">
                  ASSOCIATE PARTNER
                </span>
                <div className="flex flex-row flex-wrap justify-center gap-6">
                  {associatePartners.slice(0, 2).map((item, index) => (
                    <div key={index} className="rounded-2xl flex items-center mb-4 justify-center  p-4">
                      <a href={item.link} target="_blank">
                        <img 
                          src={item.icon} 
                          width={150} 
                          height={150}
                          className="object-contain" 
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
            <img
              className="w-full h-full object-cover opacity-20"
              width={800}
              alt=""
              height={730}
              src={service1}
            />
          </div>
        </div>

        <Heading className="mt-10 text-center " title="Series Partners" />

        <div className="overflow-hidden container w-full">
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-max"
          >
            <ul className="flex flex-row flex-nowrap gap-6">
              {SlidingPartnersRight.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center gap-1 w-[100px] sm:w-[125px] md:w-[150px]"
                >
                  <div className="rounded-2xl flex items-center mb-4 justify-center  bg-[#a826ff] w-full">
                    <img 
                      src={item.icon} 
                      width={150} 
                      height={150}
                      className="object-contain" 
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <Heading className="mt-10 text-center" title="Media Partners" />

        <div className="overflow-hidden container w-full">
          <motion.div
            animate={{
              x: [-1000, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-max"
          >
            <ul className="flex flex-row flex-nowrap gap-6">
              {SlidingPartnersLeft.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center gap-1 w-[100px] sm:w-[125px] md:w-[150px]"
                >
                  <div className="rounded-2xl flex items-center mb-4 justify-center bg-[#a826ff] w-full">
                    <img 
                      src={item.icon} 
                      width={150} 
                      height={150}
                      className="object-contain" 
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;


