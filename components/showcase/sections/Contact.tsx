"use client";

import React from "react";
import { Boxes } from "@/components/ui/background-boxes";

export function Contact() {
  return (
    <section
      className="relative min-h-[80vh] w-full overflow-hidden bg-surface flex flex-col items-center justify-center py-16 px-4 md:px-12 border-t border-surface"
      id="contact"
    >
      {/* Architectural Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
        <Boxes />
      </div>

      {/* 
        Central Content 
        Removed the white box. Text is now centered and inverted to white to blend with the grid.
        pointer-events-none allows the user to hover over the grid "through" the text.
      */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center pointer-events-none">
        {/* Editorial Header */}
        <div className="mb-8 w-full">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FFFFFF] mb-6 block">
            [ DIRECTORY: 04 ]
          </span>
          <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#FFFFFF] leading-none mb-6">
            Establish <br className="hidden md:block" /> Connection
          </h2>
        </div>

        <p className="font-['Inter'] text-lg md:text-xl text-[#FFFFFF] font-medium leading-relaxed max-w-2xl mb-16 opacity-80">
          Currently accepting new projects. Whether it&apos;s architecting a new
          application or scaling an existing logic system, initialize contact.
        </p>

        {/* 
          Action Links Array 
          pointer-events-auto re-enables clicking on the buttons.
          Uses a white background on the gap to create stark 1px white grid lines.
        */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#FFFFFF] border border-[#FFFFFF] pointer-events-auto">
          {/* Main Email Block */}
          <a
            href="mailto:mythichuman28@gmail.com"
            className="md:col-span-2 group flex flex-col items-center justify-center bg-[#000000] text-[#FFFFFF] px-6 py-12 hover:bg-[#FFFFFF] hover:text-[#000000] transition-none"
          >
            <span className="font-mono text-[0.65rem] font-bold uppercase tracking-widest mb-4 opacity-60 group-hover:opacity-100">
              Primary Node [Email]
            </span>
            <span className="font-['Space_Grotesk'] text-xl md:text-3xl font-bold uppercase tracking-tight">
              mythichuman28@gmail.com
            </span>
          </a>

          {/* Secondary Links Stack */}
          <div className="flex flex-col gap-[1px] md:col-span-1 bg-[#FFFFFF]">
            <a
              href="https://linkedin.com/in/sanchitjain"
              className="group flex items-center justify-between bg-[#000000] text-[#FFFFFF] px-8 py-6 flex-1 hover:bg-[#FFFFFF] hover:text-[#000000] transition-none"
            >
              <span className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-widest">
                [ LinkedIn ]
              </span>
              <span className="font-mono text-xl font-bold group-hover:translate-x-1 transition-transform duration-100">
                ↗
              </span>
            </a>
            <a
              href="https://github.com/sanchitjain"
              className="group flex items-center justify-between bg-[#000000] text-[#FFFFFF] px-8 py-6 flex-1 hover:bg-[#FFFFFF] hover:text-[#000000] transition-none"
            >
              <span className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-widest">
                [ Github ]
              </span>
              <span className="font-mono text-xl font-bold group-hover:translate-x-1 transition-transform duration-100">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
