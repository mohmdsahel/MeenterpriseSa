import { service1 } from "../assets";
import { 
  associatePartners, 
  exhibitingPartners, 
  networkingPartners, 
  seriesPartners, 
  SlidingPartnersLeft, 
  SlidingPartnersRight 
} from "../constants";

import { GradientLight } from "./design/Benefits";
import Heading from "./Heading";
import Section from "./Section";
import { motion } from "framer-motion";

const Collaboration = () => {
  return (
    <Section id="partners" crosses>
      <GradientLight/>
      <div className="container">
        <div className="relative z-1 flex flex-col items-center min-h-[20rem] mb-5 p-4 border border-n-1/10 rounded-3xl overflow-hidden 
          sm:p-3 
          md:min-h-[30rem] md:p-4 
          lg:p-10 lg:min-h-[39rem] 
          xl:min-h-[46rem]">
          <div className="relative z-1 w-full">
            <Heading 
              className="text-center bg-gradient-to-br from-slate-100 to-slate-500 bg-clip-text text-transparent" 
              title="2025 THOUGHT LEADERSHIP PARTNERS" 
            />

            <div className="py-2 px-2 xl:px-4">
              {/* First row with 3 main partners */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="flex flex-col items-center">
                  <span className="text-sm sm:text-base text-center tagline font-extrabold text-white mb-4">
                    EVERYDAY AI PARTNER
                  </span>
                  <div className="flex items-center justify-center p-4 w-full h-[100px]">
                    <a href={seriesPartners[0]?.link} target="_blank" rel="noopener noreferrer">
                      <img 
                        src={seriesPartners[0]?.icon} 
                        width={160}
                        height={80}
                        alt="Everyday AI Partner"
                        className="object-contain max-h-[120px]" 
                      />
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="text-sm sm:text-base text-center tagline font-extrabold text-white mb-4">
                    PREMIUM BRONZE PARTNER
                  </span>
                  <div className="flex items-center justify-center p-4 w-full h-[100px]">
                    <a href={seriesPartners[1]?.link} target="_blank" rel="noopener noreferrer">
                      <img 
                        src={seriesPartners[1]?.icon} 
                        width={160}
                        height={80}
                        alt="Premium Bronze Partner"
                        className="object-contain max-h-[120px]" 
                      />
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <span className="text-sm sm:text-base text-center tagline font-extrabold text-white mb-4">
                    REAL-TIME DATA PLATFORM PARTNER
                  </span>
                  <div className="flex items-center justify-center p-4 w-full h-[100px]">
                    <a href={seriesPartners[2]?.link} target="_blank" rel="noopener noreferrer">
                      <img 
                        src={seriesPartners[2]?.icon} 
                        width={160}
                        height={80}
                        alt="Real-Time Data Platform Partner"
                        className="object-contain max-h-[120px]" 
                      />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Exhibiting Partners */}
              <div className="mb-16">
                <span className="text-sm sm:text-base text-center tagline font-extrabold text-white mb-8 block">
                  EXHIBITING PARTNERS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                  {exhibitingPartners.map((item, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <div className="flex items-center justify-center p-4 w-full h-[50px]">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <img 
                            src={item.icon} 
                            width={160}
                            height={80}
                            alt={item.name || `Exhibiting Partner ${index + 1}`}
                            className="object-contain max-h-[120px]" 
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Associate Partners and Networking Partner */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex flex-col items-center">
                  <span className="text-sm sm:text-base text-center tagline font-extrabold text-white mb-8">
                    ASSOCIATE PARTNERS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                    {associatePartners.map((item, index) => (
                      <div key={index} className="flex items-center justify-center">
                        <div className="flex items-center justify-center p-4 w-full h-[100px]">
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <img 
                              src={item.icon} 
                              width={160}
                              height={80}
                              alt={item.name || `Associate Partner ${index + 1}`}
                              className="object-contain max-h-[120px]" 
                            />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Networking Partner */}
                <div className="flex flex-col items-center">
                  <span className="text-sm sm:text-base text-center tagline font-extrabold text-white mb-8">
                    NETWORKING PARTNER
                  </span>
                  <div className="flex justify-center w-full">
                    {networkingPartners.map((item, index) => (
                      <div key={index} className="flex items-center justify-center p-4 w-full max-w-[250px] h-[100px]">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <img 
                            src={item.icon} 
                            width={180}
                            height={90}
                            alt={item.name || "Networking Partner"}
                            className="object-contain max-h-[120px]" 
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

        <Heading className="mt-10 text-center" title="Series Partners" />

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
                  <div className="rounded-2xl flex items-center mb-4 justify-center bg-[#a826ff] w-full">
                    <img 
                      src={item.icon} 
                      width={150} 
                      height={150}
                      alt={`Series Partner ${index + 1}`}
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
                      alt={`Media Partner ${index + 1}`}
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


