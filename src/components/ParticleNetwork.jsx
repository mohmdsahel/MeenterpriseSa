import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: { 
    opacity: 1, 
    scaleY: 1,
    transition: {
      duration: 0.5
    }
  },
};

const ParticleNetwork = () => {
  const [lines, setLines] = useState([]);
  
  useEffect(() => {
    const lineCount = 5; // 5 vertical lines
    
    const newLines = Array.from({ length: lineCount }, (_, lineIndex) => {
      const isEven = lineIndex % 2 === 0;
      const dotCount = Math.random() < 0.5 ? 2 : 1;
      
      // Add 10% padding on each side by adjusting the x calculation
      const padding = 10; // 10% padding on each side
      const availableWidth = 100 - (padding * 2); // Available width after padding
      const x = padding + (availableWidth / (lineCount - 1)) * lineIndex;
      
      return {
        x,
        isEven,
        dots: Array.from({ length: dotCount }, () => ({
          size: Math.random() * 3 + 2,
          color: Math.random() > 0.5 ? 'rgba(0, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.4)',
          startDelay: Math.random() * 4
        }))
      };
    });
    
    setLines(newLines);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.svg 
        className="absolute inset-0 w-full h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {lines.map((line, lineIndex) => (
          <motion.g key={lineIndex} variants={lineVariants}>
            {/* Vertical line */}
            <line
              x1={`${line.x}%`}
              y1="0"
              x2={`${line.x}%`}
              y2="100%"
              stroke="rgba(0, 255, 255, 0.1)"
              strokeWidth="1"
            />
            
            {/* Animated dots */}
            {line.dots.map((dot, dotIndex) => (
              <motion.circle
                key={`${lineIndex}-${dotIndex}`}
                cx={`${line.x}%`}
                r={dot.size}
                fill={dot.color}
                initial={{ y: line.isEven ? "-10%" : "110%" }}
                animate={{
                  y: line.isEven 
                    ? ["-10%", "110%"] // Even lines go down
                    : ["110%", "-10%"] // Odd lines go up
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                  delay: dot.startDelay
                }}
              />
            ))}
          </motion.g>
        ))}
      </motion.svg>
    </div>
  );
};

export default ParticleNetwork; 