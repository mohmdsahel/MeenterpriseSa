import { heroBackground, video } from "../assets";

import Section from "./Section";



import Countdown from "./Countdown";

const Hero = () => {
  

  return (
    <Section
      className="min-h-screen pt-[8rem] sm:pt-[8rem] md:pt-[12rem] -mt-[8.25rem] relative overflow-hidden flex flex-col justify-center"
      crosses
     
      customPaddings
      id="hero"
    >
      <div className="absolute inset-0 w-full h-full">
        <video
          src={heroBackground}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          alt="hero"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative px-4 sm:px-6 flex flex-col justify-between h-full">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-4 sm:mb-8 md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 text-[1.25rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] mb-3 sm:mb-6">
            10th Middle East Enterprise{' '}
            AI & Analytics Summit
          </h1>
          <h5 className="tagline font-extrabold text-xs sm:text-base mb-3 sm:mb-6 text-center text-n-1">
            <i className="fa-solid fa-calendar"></i> August 28th 2025 <br/>
            <i className="fa-solid fa-location-dot"></i> Hyatt Regency Riyadh Olaya
          </h5>
          <div>
            <Countdown/>
            <div className="relative z-10 mt-3 sm:mt-6">
              <h5 className="tagline text-sm sm:text-lg font-extrabold mb-3 sm:mb-6 text-center text-n-1 px-2">
                Accelerating Innovation in Enterprises with Applied AI & Analytics Strategies
              </h5>
            </div>
          </div>
        </div>
        
        <div className="relative max-w-[16rem] sm:max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover object-center"
                  width={1024}
                  height={490}
                  alt="AI"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </Section>
  );
};

export default Hero;
