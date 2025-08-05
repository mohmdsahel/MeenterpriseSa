import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PlusSvg from "../assets/svg/PlusSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to handle the animated gradient balls
  const renderGradientBalls = (isRight) => {
    const getRandomDelay = () => Math.random() * 5;
    const getRandomDuration = () => 30 + Math.random() * 20;
    const getRandomSize = () => 4 + Math.random() * 6;

    return (
      <motion.svg 
        className="absolute"
        style={{
          top: 0,
          left: "-10px", // Offset to center on the line
          width: "20px", // Make wider than the line
          height: "100%"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <defs>
          <linearGradient id="gradient-0" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
          </linearGradient>
          <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0.4)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
          </linearGradient>
          <linearGradient id="gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 0, 255, 0.25)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.15)" />
          </linearGradient>
        </defs>
        
        {[...Array(5)].map((_, index) => (
          <motion.circle
            key={index}
            cx="50%"
            cy={0}
            r={getRandomSize()}
            className={`${mounted ? "opacity-100" : "opacity-0"}`}
            fill={`url(#gradient-${index % 3})`}
            initial={{ y: isRight ? "110%" : "-10%" }}
            animate={{ y: isRight ? "-10%" : "110%" }}
            transition={{
              duration: getRandomDuration(),
              repeat: Infinity,
              ease: "linear",
              delay: getRandomDelay()
            }}
          />
        ))}
      </motion.svg>
    );
  };

  // Handle the crosses
  const renderCrosses = () => {
    return (
      <>
        <PlusSvg
          className={`hidden absolute -top-[0.3125rem] left-[1.5625rem] ${
            crossesOffset || ""
          } pointer-events-none lg:block xl:left-[2.1875rem]`}
        />

        <PlusSvg
          className={`hidden absolute -top-[0.3125rem] right-[1.5625rem] ${
            crossesOffset || ""
          } pointer-events-none lg:block xl:right-[2.1875rem]`}
        />
      </>
    );
  };

  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10">
        {renderGradientBalls(false)}
      </div>
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10">
        {renderGradientBalls(true)}
      </div>

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset || ""
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          {crossesOffset && renderCrosses()}
          {renderCrosses()}
        </>
      )}
    </div>
  );
};

export default Section;
