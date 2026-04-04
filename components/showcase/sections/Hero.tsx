"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Hero() {
  // Map our dummy data to the strictly designed Card component
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="relative w-full flex flex-col lg:flex-row items-stretch border-t border-b border-[#000000] bg-[#FFFFFF]">
      {/* LEFT COLUMN: Editorial Typography & Actions */}
      <div className="w-full lg:w-1/2 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-[#000000] flex flex-col justify-center">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#000000] text-[#FFFFFF] font-mono text-[0.65rem] font-bold tracking-widest uppercase mb-6 border border-[#000000]">
            [STATUS] Shopify Expert
          </span>
          <h1 className="font-['Space_Grotesk'] text-[4rem] md:text-[6rem] font-bold tracking-tighter leading-[0.9] text-[#000000] uppercase mb-8 break-words">
            Sanchit <br />
            <span className="italic block mt-2">Jain.</span>
          </h1>
          <p className="font-['Inter'] text-lg md:text-xl text-[#000000] max-w-md leading-relaxed font-medium">
            Crafting high-performance Shopify solutions. 2 live apps on the
            Shopify App Store, serving 50+ merchants globally.
          </p>
        </div>

        {/* Action Buttons strictly following the solid/outline rule */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#work"
            className="flex items-center justify-center bg-[#000000] text-[#FFFFFF] px-8 py-5 font-['Space_Grotesk'] text-sm font-bold uppercase tracking-tight border border-[#000000] hover:bg-[#FFFFFF] hover:text-[#000000] transition-none"
          >
            VIEW WORK →
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center bg-[#FFFFFF] text-[#000000] px-8 py-5 font-['Space_Grotesk'] text-sm font-bold uppercase tracking-tight border border-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] transition-none"
          >
            INITIATE LINK
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN: Brutalist Carousel Mount */}
      <div className="w-full lg:w-1/2 p-6 md:p-12 bg-[#FFFFFF] overflow-hidden flex items-center">
        <div className="w-full h-full max-w-full">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
}

// --- Dummy Content specifically formatted for the brutalist modal ---

const DummyContent = () => {
  return (
    <div className="flex flex-col gap-6 font-['Inter'] text-sm md:text-base text-[#000000] leading-relaxed">
      <p>
        <strong>OVERVIEW:</strong> This solution bridges the gap between
        merchant requirements and front-end performance. Engineered to scale
        seamlessly across varying network states while maintaining an
        uncompromised conversion funnel.
      </p>
      <div className="border-l-4 border-[#000000] pl-4 py-2 bg-black/5">
        <p className="font-mono text-xs uppercase tracking-widest font-bold mb-2">
          Technical Specs
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>React / Next.js Front-end architecture</li>
          <li>Polaris UI Integration</li>
          <li>GraphQL API optimization</li>
        </ul>
      </div>
      <img
        src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2340&auto=format&fit=crop"
        alt="Project Architecture"
        className="w-full h-auto border border-[#000000] mt-4 grayscale"
      />
    </div>
  );
};

// You can replace these images and titles with your actual Shopify Projects
const data = [
  {
    category: "Shopify App",
    title: "Checkout Extensibility.",
    src: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2340&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Storefront",
    title: "Headless Migration.",
    src: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Automation",
    title: "Inventory Sync Protocol.",
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2340&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Performance",
    title: "Core Web Vitals Boost.",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    content: <DummyContent />,
  },
];
