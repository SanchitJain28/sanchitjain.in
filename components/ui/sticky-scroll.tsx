/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef, useState } from "react";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface StickyScrollProps {
  content: {
    title: string;
    description: string;
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
      // Changed to flex-col for mobile, lg:flex-row for desktop
      className="relative flex h-[85vh] w-full flex-col lg:flex-row border border-black bg-white overflow-y-auto rounded-none"
    >
      {/* 
        IMAGE/VISUAL COLUMN
        Mobile: Sticky at top (h-[40vh]), border bottom.
        Desktop: order-last (Right side), full height, border left.
      */}
      <div
        className={cn(
          "sticky top-0 z-10 flex h-[40vh] lg:h-full w-full lg:w-1/2 items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-l border-black bg-white lg:order-last",
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
              alt="Project full scroll"
              className="w-full h-auto object-cover"
              width={1920}
              height={1080}
            />
          </motion.div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full border relative overflow-hidden bg-white">
              {content[activeCard].content}
            </div>
          </div>
        )}
      </div>

      {/* 
        TEXT COLUMN
        Mobile: Scrolls normally below the sticky image.
        Desktop: order-first (Left side).
      */}
      <div className="relative z-0 flex items-start w-full lg:w-1/2 px-4 lg:px-8 py-8 lg:py-10 lg:order-first">
        <div className="max-w-xl w-full">
          {content.map((item, index) => {
            const isActive = activeCard === index;

            return (
              <div
                key={item.title + index}
                // Slightly smaller gap on mobile to fit the narrower screen better
                className="mb-[30vh] lg:mb-[40vh] flex flex-col justify-start pt-4 lg:pt-8"
              >
                <div
                  className={cn(
                    "mb-4 p-5 lg:p-6 transition-colors duration-100 ease-linear",
                    isActive
                      ? "bg-black text-white"
                      : "bg-white text-black border border-black",
                  )}
                >
                  <div className="font-mono text-[10px] lg:text-xs font-bold uppercase mb-4 tracking-widest">
                    SECTION: {String(index + 1).padStart(2, "0")}
                  </div>

                  <h2 className="font-sans text-2xl lg:text-3xl font-bold uppercase tracking-tighter leading-[0.9]">
                    {item.title}
                  </h2>

                  <p
                    className={cn(
                      "mt-4 lg:mt-6 text-sm leading-[1.2]",
                      isActive ? "text-gray-300" : "text-black",
                    )}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
          {/* Bottom spacer to allow the final item to scroll fully up */}
          <div className="h-[40vh]" />
        </div>
      </div>
    </div>
  );
};
