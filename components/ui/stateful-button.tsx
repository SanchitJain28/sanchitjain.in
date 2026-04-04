"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion, AnimatePresence, useAnimate } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ className, children, ...props }: ButtonProps) => {
  const [scope, animate] = useAnimate();

  const animateLoading = async () => {
    await animate(
      ".loader",
      { width: "20px", scale: 1, display: "block" },
      { duration: 0.1, ease: "linear" },
    );
  };

  const animateSuccess = async () => {
    await animate(
      ".loader",
      { width: "0px", scale: 0, display: "none" },
      { duration: 0.1, ease: "linear" },
    );
    await animate(
      ".check",
      { width: "20px", scale: 1, display: "block" },
      { duration: 0.1, ease: "linear" },
    );

    // Optional: Hide checkmark after a few seconds to reset
    await animate(
      ".check",
      { width: "0px", scale: 0, display: "none" },
      { delay: 1.5, duration: 0.1, ease: "linear" },
    );
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    await animateLoading();
    await props.onClick?.(event);
    await animateSuccess();
  };

  const {
    onClick,
    onDrag,
    onDragStart,
    onDragEnd,
    onAnimationStart,
    onAnimationEnd,
    ...buttonProps
  } = props;

  return (
    <motion.button
      layout
      layoutId="button"
      ref={scope}
      className={cn(
        "flex min-w-[140px] cursor-pointer items-center justify-center gap-3 bg-[#000000] px-6 py-4 font-['Space_Grotesk'] text-sm font-bold uppercase tracking-tight text-[#FFFFFF] border border-[#000000] transition-none hover:bg-[#FFFFFF] hover:text-[#000000] disabled:opacity-50 disabled:cursor-not-allowed group",
        className,
      )}
      {...buttonProps}
      onClick={handleClick}
    >
      <motion.div layout className="flex items-center gap-2">
        <Loader />
        <CheckIcon />
        <motion.span layout className="whitespace-nowrap">
          {children}
        </motion.span>
      </motion.div>
    </motion.button>
  );
};

// Brutalist geometric loader (Spinning Square)
const Loader = () => {
  return (
    <motion.svg
      animate={{ rotate: [0, 90, 180, 270, 360] }}
      initial={{ scale: 0, width: 0, display: "none" }}
      style={{ scale: 0.8, display: "none" }}
      transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="loader text-inherit"
    >
      <rect x="6" y="6" width="12" height="12" />
    </motion.svg>
  );
};

// Brutalist geometric check (Sharp Lines)
const CheckIcon = () => {
  return (
    <motion.svg
      initial={{ scale: 0, width: 0, display: "none" }}
      style={{ scale: 0.8, display: "none" }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className="check text-inherit"
    >
      <path d="M4 12l5 5L20 6" />
    </motion.svg>
  );
};
