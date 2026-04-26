"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ContentItem {
  title: string;
  description: React.ReactNode | string;
  content?: React.ReactNode;
}

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: ContentItem[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="relative flex h-[70vh] w-full border border-surface bg-[#FFFFFF] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      ref={ref}
    >
      {/* Left Column: Text Content */}
      <div className="relative flex items-start px-6 md:px-12 w-full lg:w-1/2">
        <div className="max-w-2xl py-10 w-full">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="my-32 first:mt-10 last:mb-32"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                transition={{ duration: 0.1, ease: "linear" }}
                className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold uppercase tracking-tighter text-surface flex items-start gap-3"
              >
                <span
                  className={cn(
                    "text-surface w-6",
                    activeCard === index
                      ? "opacity-100 animate-pulse"
                      : "opacity-0",
                  )}
                >
                  █
                </span>
                {item.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                transition={{ duration: 0.1, ease: "linear" }}
                className="mt-8 ml-9"
              >
                {item.description}
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Right Column: Sticky Media Display */}
      <div
        className={cn(
          "sticky top-0 hidden h-[70vh] w-1/2 overflow-hidden border-l border-surface bg-surface lg:flex items-center justify-center p-8",
          contentClassName,
        )}
      >
        {/* Rapid linear transition for swapping images */}
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1, ease: "linear" }}
          className="w-full h-full flex items-center justify-center"
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </div>
    </motion.div>
  );
};
