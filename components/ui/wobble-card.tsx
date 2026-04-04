"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
  inverted = false, // Added variable to enforce the "Interchangeable Inversion" rule
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  inverted?: boolean;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
          : "translate3d(0px, 0px, 0)",
        transition: "transform 0.1s linear", // Enforced linear transition over ease-out
      }}
      className={cn(
        "mx-auto w-full relative overflow-hidden transition-colors duration-0", // Zero duration color shifts
        inverted
          ? "bg-[#000000] text-[#FFFFFF]"
          : "bg-[#FFFFFF] text-[#000000]",
        containerClassName,
      )}
    >
      {/* Removed soft shadows and rounded corners */}
      <div className="relative h-full overflow-hidden">
        <motion.div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.02, 1.02, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.1s linear",
          }}
          className={cn("h-full px-6 py-12 md:px-10 md:py-16", className)}
        >
          {/* Replaced image Noise with systemic ASCII texturing */}
          <AsciiNoise inverted={inverted} />
          <div className="relative z-10">{children}</div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Signature ASCII Pattern Texture
const AsciiNoise = ({ inverted }: { inverted: boolean }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none opacity-[0.03] font-mono text-[0.5rem] leading-none overflow-hidden break-all whitespace-pre-wrap select-none",
        inverted ? "text-[#FFFFFF]" : "text-[#000000]",
      )}
    >
      {/* Repeat signature texture + pattern */}
      {"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++".repeat(
        50,
      )}
    </div>
  );
};
