"use client";
import React from "react";
import { motion } from "motion/react";

export const BrutalistMarquee = ({ items }: { items: string[] }) => {
  // Quadruple the array to ensure a perfectly seamless infinite scroll loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex w-full overflow-hidden border-y-4 border-[#000000] bg-[#000000] py-6 text-[#FFFFFF] select-none">
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {marqueeItems.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="font-['Space_Grotesk'] text-4xl md:text-6xl font-bold uppercase tracking-tighter mx-8 md:mx-12">
              {item}
            </span>
            <span className="text-[#FFFFFF] font-mono text-2xl font-bold">
              ×
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
