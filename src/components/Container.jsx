import React from 'react';
import { motion } from 'framer-motion';

import {  stats1, stats2, stats3, stats4 } from '../assets';

const StatsBox = ({ label, num, bgImage }) => {
  return (
    <motion.div
      className="stats__box aspect-square p-4 border border-n-6 rounded-lg relative overflow-hidden"
      whileHover="hover"
      initial="initial"
    >
      {/* Video background container */}
      <div className="absolute inset-0 z-0 opacity-50 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={bgImage} type="video/webm" />
        </video>
      </div>
      
      {/* Rest of the component remains unchanged */}
      <motion.div
        className="absolute inset-0 bg-purple-500 z-5"
        variants={{
          initial: { y: '100%' },
          hover: { y: '0%' },
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      ></motion.div>
      
      <motion.div
        className="relative z-10 text-white flex flex-col justify-center items-center h-full"
        variants={{
          hover: { color: '#ffffff' },
          initial: { color: '#ffffff' },
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div className="stats__box-label text-lg font-semibold text-center mb-2">{label}</div>
        <div className="line black h-0.5 bg-white my- w-36"></div>
        <div className="stats__box-num text-3xl font-bold mt-2">{num}</div>
      </motion.div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <div className="stats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsBox
        label="AI & Analytics Thought Leaders"
        num="30"
        bgImage={stats1}
        
      />
      <StatsBox
        label="LIVE/Tech DEMOS/EXHIBITORS"
        num="15"
        bgImage={stats2}
       
      />
      <StatsBox
        label="INDUSTRY LEADERS ATTENDING"
        num="300"
        bgImage={stats3}
        
      />
      <StatsBox
        label="AWARDS"
        num="30+"
        bgImage={stats4}
       
      />
    </div>
  );
};

export default Stats;