"use client";

import React from "react";
import { SERVICES } from "@/lib/showcase/data";
import { WobbleCard } from "@/components/ui/wobble-card";

export function Services() {
  // Creates an asymmetrical layout mimicking a high-contrast printed broadsheet
  const getSpan = (index: number) => {
    switch (index) {
      case 0:
        return "col-span-1 lg:col-span-2"; // Top Left: Wide block
      case 1:
        return "col-span-1 lg:col-span-1"; // Top Right: Square block
      case 2:
        return "col-span-1 lg:col-span-1"; // Bottom Left: Square block
      case 3:
        return "col-span-1 lg:col-span-2"; // Bottom Right: Wide block
      default:
        return "col-span-1 lg:col-span-1";
    }
  };

  // Enforces Interchangeable Inversion strictly separating grid elements
  const isInverted = (index: number) => {
    return index === 1 || index === 2; // Makes the small blocks Black, wide blocks White
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#FFFFFF]" id="services">
      <div className="mx-auto">
        {/* Editorial Header */}
        <div className="mb-16 border-t-4 border-[#000000] pt-8 flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#000000] mb-4 block">
              [ DIRECTORY: 03 ]
            </span>
            <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-bold uppercase tracking-tighter text-[#000000] leading-none">
              Service <br /> Protocol
            </h2>
          </div>
          <p className="font-mono text-xs font-bold uppercase text-[#000000] max-w-[200px] text-left md:text-right">
            Systematic Execution & Engineered Deliverables
          </p>
        </div>

        {/* 
          Interlocking Grid Array:
          Using bg-black and gap-[1px] on the wrapper ensures exactly 1px solid black 
          borders between the WobbleCards without overlapping borders. 
        */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] border border-[#000000] bg-[#000000]">
          {SERVICES.map((s, index) => (
            <WobbleCard
              key={s.number}
              containerClassName={`min-h-[350px] md:min-h-[400px] ${getSpan(index)}`}
              className="flex flex-col justify-between"
              inverted={isInverted(index)}
            >
              {/* Card Meta Header */}
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-[0.65rem] font-bold tracking-widest uppercase border px-2 py-1 border-current">
                  [ TYPE: {s.title.split(" ")[0]} ]
                </span>
                <span className="font-['Space_Grotesk'] text-6xl md:text-8xl font-bold tracking-tighter leading-none opacity-20">
                  {s.number}
                </span>
              </div>

              {/* Card Main Content */}
              <div className="max-w-md mt-auto">
                <h3 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4 leading-[0.9]">
                  {s.title}
                </h3>
                <p className="font-['Inter'] text-sm md:text-base font-medium leading-relaxed opacity-90">
                  {s.description}
                </p>
              </div>
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  );
}
