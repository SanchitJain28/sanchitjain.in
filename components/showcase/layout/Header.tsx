"use client";

import { NAV_LINKS } from "@/lib/showcase/data";
import { useState, useEffect } from "react";

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("work");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["work", "services", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#121416]/80 backdrop-blur-xl">
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="font-[Manrope] text-xl font-bold tracking-tighter text-white">
          SANCHIT JAIN
        </div>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                className={`font-[Manrope] tracking-tight text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#a9d55a] font-bold border-b-2 border-[#a9d55a] pb-1"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
        <button className="bg-gradient-to-r from-[#a9d55a] to-[#577b00] text-[#243600] px-6 py-2.5 rounded-full font-[Manrope] text-sm font-bold tracking-tight hover:scale-105 active:scale-95 transition-all duration-300">
          Hire Me
        </button>
      </nav>
    </header>
  );
}
