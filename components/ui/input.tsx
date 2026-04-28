"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full px-4 py-2",
          "rounded-none border-2 border-surface bg-transparent text-surface shadow-none transition-none",
          "font-['Inter'] text-base placeholder:text-surface/40",
          "focus-visible:outline-none focus-visible:ring-0 focus-visible:border-[4px]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "file:border-0 file:bg-transparent file:text-sm file:font-bold file:uppercase file:cursor-crosshair",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
