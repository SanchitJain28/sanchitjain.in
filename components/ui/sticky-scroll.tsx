"use client";

import React, { useRef, useState } from "react";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  useTransform,
} from "motion/react"; 
import { cn } from "@/lib/utils";
import Image from "next/image";

interface StickyScrollProps {
  content: {
    title: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
  mode?: "multiple" | "single-long";
  longImageUrl?: string;
}

export const StickyScroll = ({
  content,
  contentClassName,
  mode = "multiple",
  longImageUrl,
}: StickyScrollProps) => {
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

  const longImageTranslateY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-70%"],
  );

  return (
    <div
      ref={ref}

      className="relative flex h-svh lg:h-[85vh] w-full flex-col lg:flex-row border-4 border-surface bg-[#FFFFFF] overflow-y-auto overflow-x-hidden rounded-none"
    >
      <div
        className={cn(

          "sticky top-0 z-20 flex h-[45svh] lg:h-full w-full lg:w-1/2 items-center justify-center overflow-hidden border-b-4 lg:border-b-0 lg:border-l-4 border-surface bg-[#FFFFFF] lg:order-last shrink-0",
          contentClassName,
        )}
      >
        {mode === "single-long" && longImageUrl ? (
          <motion.div
            style={{ y: longImageTranslateY }}
            className="absolute top-0 left-0 w-full"
          >
            <Image
              src={longImageUrl}
              alt="PROJECT ARCHITECTURE"
              className="w-full h-auto object-cover grayscale-50 contrast-125"
              width={1920}
              height={1080}
              priority
            />
          </motion.div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#FFFFFF]">
            <div className="w-full h-full relative overflow-hidden">
              {content[activeCard].content}
            </div>
          </div>
        )}
      </div>

      {/* --- SCROLLING TEXT AREA --- */}
      <div className="relative z-10 flex items-start w-full lg:w-1/2 px-4 lg:px-12 py-8 lg:py-16 lg:order-first">
        <div className="max-w-xl w-full mx-auto">
          {content.map((item, index) => {
            const isActive = activeCard === index;

            return (
              <div
                key={item.title + index}
                className="mb-[45svh] lg:mb-[40vh] flex flex-col justify-start"
              >
                <div
                  className={cn(
                    "mb-4 p-6 lg:p-8 transition-none border-4 border-surface",
                    isActive
                      ? "bg-surface text-[#FFFFFF]"
                      : "bg-[#FFFFFF] text-surface opacity-50 lg:opacity-100", 
                  )}
                >
                  <div className="font-mono text-[10px] lg:text-xs font-bold uppercase mb-6 tracking-widest flex items-center gap-2">
                    <span
                      className={cn(
                        "w-2 h-2 block",
                        isActive ? "bg-[#FFFFFF]" : "bg-surface",
                      )}
                    ></span>
                    SECTION: {String(index + 1).padStart(2, "0")}
                  </div>

                  <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter leading-[0.9]">
                    {item.title}
                  </h2>

                  <p
                    className={cn(
                      "mt-6 text-sm lg:text-base font-['Inter'] leading-[1.3] font-medium",
                      isActive ? "text-[#FFFFFF]" : "text-surface",
                    )}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="h-[45svh] lg:h-[40vh] w-full" />
        </div>
      </div>
    </div>
  );
};
