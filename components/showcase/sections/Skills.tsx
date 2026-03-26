"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Autoplay from "embla-carousel-autoplay";
import { Icon } from "@/components/ui/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SKILLS } from "@/lib/showcase/data";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Add refs to the array dynamically
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      // 1. Staggered Entrance Animation for Carousel Cards
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Triggers when the top of the section hits 75% down the viewport
          toggleActions: "play none none reverse",
        },
      });

      // 2. Infinite Marquee Animation
      if (marqueeInnerRef.current) {
        const marqueeAnim = gsap.to(marqueeInnerRef.current, {
          xPercent: -50, // Moves exactly half the width (since we duplicated the content)
          repeat: -1,
          duration: 25,
          ease: "linear",
        });

        // Pause Marquee on Hover
        marqueeInnerRef.current.addEventListener("mouseenter", () =>
          marqueeAnim.pause(),
        );
        marqueeInnerRef.current.addEventListener("mouseleave", () =>
          marqueeAnim.play(),
        );

        return () => {
          marqueeInnerRef.current?.removeEventListener("mouseenter", () =>
            marqueeAnim.pause(),
          );
          marqueeInnerRef.current?.removeEventListener("mouseleave", () =>
            marqueeAnim.play(),
          );
        };
      }
    },
    { scope: sectionRef },
  );

  // 3. GSAP Hover Effects for individual cards
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -8,
      scale: 1.02,
      duration: 0.4,
      ease: "power3.out",
      boxShadow: "0px 10px 30px -10px rgba(169,213,90,0.15)",
      borderColor: "#a9d55a",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
      boxShadow: "0px 0px 0px 0px rgba(169,213,90,0)",
      borderColor: "rgba(62, 73, 68, 0.2)",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#121416] overflow-hidden relative"
      id="skills"
    >
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <div className="mb-12">
          <h2 className="font-[Manrope] text-[1.75rem] font-bold text-white mb-2">
            Technical Arsenal
          </h2>
          <div className="w-20 h-1 bg-[#a9d55a] rounded-full" />
        </div>

        {/* --- CAROUSEL GRID --- */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          // Autoplay plugin included here
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {SKILLS.map((skill, index) => (
              // basis-full for mobile, basis-1/2 for tablet, basis-1/3 or 1/4 for desktop
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/4"
              >
                <div
                  ref={addToRefs}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="bg-[#1e2022] border border-[#3e4944]/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 h-48 cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-[#0c5345]/30 flex items-center justify-center">
                    <Icon
                      name={skill.icon}
                      className="text-[#a9d55a] text-3xl"
                    />
                  </div>
                  <h3 className="font-[Manrope] font-bold text-white text-center">
                    {skill.name}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Controls */}
          <div className="flex justify-end gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 translate-x-0 bg-[#0c0e10] border-[#3e4944]/20 text-[#bdc9c2] hover:bg-[#a9d55a] hover:text-[#243600] w-12 h-12" />
            <CarouselNext className="static translate-y-0 translate-x-0 bg-[#0c0e10] border-[#3e4944]/20 text-[#bdc9c2] hover:bg-[#a9d55a] hover:text-[#243600] w-12 h-12" />
          </div>
        </Carousel>
      </div>

      {/* --- INFINITE MARQUEE --- */}
      <div className="w-full mt-12 bg-[#1a1c1e] py-6 border-y border-[#3e4944]/10">
        <div className="flex w-max items-center" ref={marqueeInnerRef}>
          {/* We map the skills array TWICE to create a perfectly seamless loop */}
          {[1, 2].map((iteration) => (
            <div key={iteration} className="flex items-center">
              {SKILLS.map((skill, idx) => (
                <div
                  key={`${iteration}-${idx}`}
                  className="flex items-center gap-3 px-8 text-[#bdc9c2] hover:text-[#a9d55a] transition-colors duration-300 cursor-default"
                >
                  <Icon name={skill.icon} className="text-xl" />
                  <span className="font-[Inter] font-medium tracking-wide whitespace-nowrap">
                    {skill.name}
                  </span>
                  {/* Small separator dot */}
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3e4944] ml-8" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
