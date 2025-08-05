import { motion, useScroll } from "framer-motion";
import { useRef, useMemo } from "react";
import { benefits } from "../constants";
import Section from "./Section";
import { linkedin, speakerbg } from "../assets";
import SeriesCardDemo from "./SeriesCard";

const mergeClasses = (...classes) => classes.filter(Boolean).join(' ');

const LampContainer = ({
  children,
  className
}) => {
  return (
    <div
      className={mergeClasses(
        "relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-transparent w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">

        <motion.h1
          initial={{ opacity: 0.5, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-4xl sm:text-5xl md:text-h2 mb-2 text-center tracking-tight absolute z-30 top-[10%] sm:top-[15%]"
        >
          Spotlight Speakers
        </motion.h1>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-purple-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-n-8/50 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-transparent bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-purple-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-transparent bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-n-8/50 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-48 w-full translate-y-30 scale-x-150 bg-n-8 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-40 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-purple-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-purple-400/50 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-purple-400"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-transparent"></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

// Card Component
const SpeakerCard = ({ index, title, text, image, organization, link, containerRef, imagelogo, ...restProps }) => {
  const cardRef = useRef(null);
  console.log(" =====  ==== ", restProps)
  const { } = useScroll({
    target: cardRef,
    container: containerRef,
    offset: ["start end", "start start"],
  });

  // Optimized sticky positioning with useMemo
  const stickyTop = useMemo(() =>
    `${window.innerWidth < 640 ? index * 5 + 10 : index * 3 + 50}px`,
    [index]
  );

  return (
    <motion.div
      ref={cardRef}
      className="w-[75%] sm:w-full max-w-4xl mx-auto px-1 sm:px-2 md:px-6 mb-6 sm:mb-12 md:mb-24"
      style={{
        position: "sticky",
        top: stickyTop,
        willChange: 'transform' // Add will-change for better performance
      }}
    >
      <motion.div
        className="bg-gradient-to-br from-purple-900/90 to-purple-700/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl border border-purple-500/20 shadow-2xl overflow-hidden transform-gpu"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          type: "spring",
          bounce: 0.3,
          duration: 0.7,
        }}
      >
        <div className="flex flex-col-reverse sm:flex-row items-center">
          <div className="w-full sm:w-2/3 p-3 sm:p-4 md:p-10">
            <h2 className="flex row justify-between text-xl sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2 md:mb-4 text-white/80">
              {title}
              <a
                style={{
                  height: 40,
                  columnGap: 12,
                  padding: 10
                }}
                href={link}
                target="_blank"
                className="group flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-md sm:rounded-lg bg-purple-500/30 hover:bg-purple-300/40 transition-all duration-300 border border-purple-400/20"
              >
                <span className="text-purple-200 text-[10px] sm:text-xs md:text-sm font-medium">Connect</span>
                <img
                  src={linkedin}
                  width={12}
                  height={12}
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300 sm:w-[16px] sm:h-[16px] md:w-[20px] md:h-[20px]"
                />
              </a>
            </h2>
            <p className="text-purple-100/90 mb-2 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-lg leading-relaxed">
              {text}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-purple-200/80 text-xs sm:text-sm md:text-lg italic">
                {organization}
              </p>
              {
                imagelogo &&

                <img
                  style={{
                    height: 80,
                    width: 160
                  }}
                  src={imagelogo}
                  width={160}
                  height={80}
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300 sm:w-[16px] sm:h-[16px] md:w-[20px] md:h-[20px]"
                />
              }
            </div>
          </div>
          <div className="w-full sm:w-1/3 h-[240px] md:h-64">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Cards Container Component
const SpeakerCards = ({ containerRef }) => {
  return (
    <div
      ref={containerRef}
      className="relative h-full overflow-auto overscroll-auto px-2 sm:px-4 pb-20 sm:pb-0 mask-linear-gradient"
      style={{
        scrollbarWidth: "none",
        maskImage: "linear-gradient(to bottom, white 70%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, white 70%, transparent 100%)"
      }}
    >
      {benefits.map(({ title, text, organization, imageUrl, link, ...restProps }, i) => (
        <SpeakerCard
          key={title}
          index={i}
          title={title}
          text={text}
          organization={organization}
          link={link}
          image={imageUrl}
          containerRef={containerRef}
          {...restProps}
        />
      ))}

      <div className="h-[100vh] sm:h-0"></div>
    </div>
  );
};

// Main Speaker Component
export default function Speaker() {
  const containerRef = useRef(null);

  // Add memoization to prevent unnecessary re-renders
  const MemoizedSpeakerCards = useMemo(() =>
    <SpeakerCards containerRef={containerRef} />,
    []
  );

  return (
    <Section crosses className="!p-0">
      <div className="min-h-[100svh] relative overflow-hidden flex flex-col" id="speakers">
        <div className="absolute inset-0 w-full h-full z-0" />

        {/* Add loading="eager" to video for faster load */}
        <video
          src={speakerbg}
          autoPlay
          muted
          loop
          loading="eager"
          className="absolute inset-0 w-full h-full opacity-30 object-cover z-0"
        />

        <div className="sticky top-0 z-2  w-full h-full">
          <LampContainer />
        </div>

        <div className="w-full absolute z-[3] h-[65vh] sm:h-[50vh] top-[30%] sm:top-1/3">
          {MemoizedSpeakerCards}
        </div>





        <div className="w-full relative z-[4] mt-12 sm:mt-12 mb-12 sm:mb-20">
          <motion.h1
            initial={{ opacity: 0.5, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-4xl sm:text-5xl md:h2 m-8 sm:m-12 text-center tracking-tight z-30"
          >
            Series Speakers
          </motion.h1>
          <SeriesCardDemo />
        </div>
      </div>
    </Section>
  );
}