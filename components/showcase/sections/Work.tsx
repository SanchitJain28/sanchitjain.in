"use client";

import React from "react";
import { PROJECTS } from "@/lib/showcase/data";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export function Work() {
  const content = PROJECTS.map((project) => ({
    title: project.title,
    description: (
      <div className="flex flex-col gap-6">
        <p className="font-['Inter'] text-lg text-[#000000] leading-relaxed max-w-md">
          {project.description}
        </p>

        {/* Brutalist Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-[#000000] text-[#FFFFFF] font-mono text-[0.65rem] font-bold uppercase tracking-widest border border-[#000000]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 border border-[#000000] bg-[#FFFFFF] text-[#000000] px-6 py-3 font-mono text-xs font-bold uppercase transition-none hover:bg-[#000000] hover:text-[#FFFFFF] w-fit group"
          >
            [ LAUNCH APP ]
            <span className="group-hover:translate-x-1 transition-transform duration-100">
              →
            </span>
          </a>
        )}
      </div>
    ),
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center group">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-full object-contain border border-[#FFFFFF]/20 grayscale group-hover:grayscale-0 transition-all duration-100 ease-linear"
          />
        ) : (
          // Fallback if no image exists: Display an ASCII missing image block
          <div className="w-full h-full border border-[#FFFFFF] flex items-center justify-center font-mono text-[#FFFFFF] text-xs">
            [ MEDIA UNAVAILABLE ]
          </div>
        )}
      </div>
    ),
  }));

  return (
    <section className="bg-[#FFFFFF] md:px-12 px-4 md:py-16 py-12" id="work">
      {/* Editorial Section Header */}
      <div className="mb-12 ">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#000000] mb-4 block">
              [ DIRECTORY: 01 ]
            </span>
            <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-bold uppercase tracking-tighter text-[#000000] leading-none">
              Live Systems
            </h2>
          </div>
          <p className="font-mono text-xs font-bold uppercase text-[#000000] max-w-xs md:text-right">
            Deployed Architecture & Public Applications
          </p>
        </div>
      </div>

      <StickyScroll content={content} />
    </section>
  );
}
