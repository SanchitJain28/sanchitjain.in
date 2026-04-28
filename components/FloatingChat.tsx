"use client";

import React, { useState } from "react";
import { IconMessage, IconX } from "@tabler/icons-react";
import { Icons } from "@/icons/ICONS";
import { motion, AnimatePresence } from "motion/react";

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      label: "WHATSAPP",
      href: "https://wa.me/919650296375",
      icon: <Icons.WhatsApp />,
    },
    { label: "PHONE", href: "tel:+919650296375", icon: <Icons.Phone /> },
    {
      label: "EMAIL",
      href: "mailto:sanchitjain00028@gmail.com",
      icon: <Icons.Email />,
    },
    {
      label: "INSTAGRAM",
      href: "https://www.instagram.com/sanchit__jain_28/",
      icon: <Icons.Instagram />,
    },
  ];

  const blockVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
        ease: "linear" as const,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: 15,
      transition: {
        duration: 0.1,
        ease: "linear" as const,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.1, ease: "linear" as const },
    },
  };

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-12 lg:right-12 z-100 flex flex-col items-end gap-4 pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={blockVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col bg-[#FFFFFF] border-4 border-surface pointer-events-auto shadow-none"
          >
            <div className="border-b-4 border-surface p-4 bg-[#FFFFFF] flex justify-between items-center">
              <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-surface">
                DIRECT CONTACT
              </span>
              <div className="w-2 h-2 bg-surface"></div>
            </div>

            <div className="flex flex-col">
              {options.map((opt, idx) => (
                <motion.a
                  variants={lineVariants}
                  key={opt.label}
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 p-4 hover:bg-surface transition-none cursor-crosshair w-56 sm:w-64 ${
                    idx !== options.length - 1
                      ? "border-b-4 border-surface"
                      : ""
                  }`}
                >
                  <div className="w-8 h-8 shrink-0 group-hover:invert transition-none *:w-full *:h-full">
                    {opt.icon}
                  </div>
                  <span className="font-['Space_Grotesk'] font-bold text-surface group-hover:text-[#FFFFFF] uppercase tracking-tight text-sm sm:text-base transition-none">
                    {opt.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-[#FFFFFF] border-4 border-surface flex items-center justify-center text-surface hover:bg-surface hover:text-[#FFFFFF] transition-none cursor-crosshair pointer-events-auto rounded-none outline-none focus-visible:ring-0 group overflow-hidden relative"
      >
        {isOpen ? (
          <IconX
            stroke={2.5}
            className="w-8 h-8 md:w-10 md:h-10 text-surface group-hover:text-[#FFFFFF] transition-none"
          />
        ) : (
          <IconMessage
            stroke={2.5}
            className="w-8 h-8 md:w-10 md:h-10 text-surface group-hover:text-[#FFFFFF] transition-none"
          />
        )}
      </button>
    </div>
  );
}
