import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll";
import { projectContent } from "./data";
import { Header } from "@/components/showcase/layout/Header";
import { Footer } from "@/components/showcase/layout/Footer"; 

export default function AiUpsellProjectPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-[#FFFFFF] text-surface font-['Inter'] selection:bg-surface selection:text-[#FFFFFF] overflow-hidden">
      <Header />
      <div className="flex-1 overflow-y-auto relative bg-[#FFFFFF]">
        <main className="w-full mx-auto flex flex-col pb-24">
          <header className="px-8 py-16 md:py-24 border-b-4 border-black">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <div className="font-mono text-sm font-bold uppercase tracking-widest mb-6">
                  Category: Shopify App — 001
                </div>
                <h1 className="font-sans text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85] max-w-4xl">
                  AI Upsell & Cross-sell Engine
                </h1>
              </div>

              <div className="flex flex-col gap-2 font-mono text-xs uppercase border border-black p-4 bg-white min-w-50">
                <div className="flex justify-between border-b border-black pb-2">
                  <span>Status:</span>
                  <span className="font-bold">Deployed</span>
                </div>
                <div className="flex justify-between border-b border-black py-2">
                  <span>Stack:</span>
                  <span className="font-bold">Next.js / Prisma</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span>Integration:</span>
                  <span className="font-bold">Shopify API</span>
                </div>
              </div>
            </div>
          </header>

          <section className="max-w-360 w-full mx-auto py-16 px-4 md:px-8">
            <StickyScroll
              mode="multiple"
              content={projectContent}
              contentClassName="bg-black"
            />
          </section>

          <section className="max-w-7xl w-full mx-auto px-4 md:px-8 mt-12">
            <div className="bg-black text-white p-12 md:p-24 flex flex-col items-center text-center">
              <h2 className="font-sans text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
                Require Similar Architecture?
              </h2>
              <p className="font-mono text-sm uppercase tracking-widest max-w-xl mb-12 text-gray-300">
                Reach out to discuss architecture and implementation.
              </p>
              <a
                href="mailto:your@email.com"
                className="group relative inline-flex items-center justify-center border-2 border-white bg-black px-8 py-4 font-mono text-sm font-bold uppercase text-white transition-colors duration-100 hover:bg-white hover:text-black"
              >
                Initiate Contact &rarr;
              </a>
            </div>
          </section>
        </main>

        {/* BOTTOM DIRECTORY / FOOTER */}
        <Footer />
      </div>
    </div>
  );
}
