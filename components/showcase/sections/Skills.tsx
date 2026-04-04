"use client";
import { SKILLS } from "@/lib/showcase/data";
import { BrutalistMarquee } from "@/components/ui/brutalist-marquee";
import { motion } from "motion/react";


const BrutalistPrimitive = ({ index }: { index: number }) => {
  const shapes = [
    <rect
      key="1"
      x="4"
      y="4"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />,
    // Triangle
    <path
      key="2"
      d="M12 2L22 22H2L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />,
    // Diamond
    <path
      key="3"
      d="M12 2L22 12L12 22L2 12Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />,
    // X Cross
    <g key="4">
      <line
        x1="4"
        y1="4"
        x2="20"
        y2="20"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="20"
        y1="4"
        x2="4"
        y2="20"
        stroke="currentColor"
        strokeWidth="2"
      />
    </g>,
    // Plus Cross
    <g key="5">
      <line
        x1="2"
        y1="12"
        x2="22"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="12"
        y1="2"
        x2="12"
        y2="22"
        stroke="currentColor"
        strokeWidth="2"
      />
    </g>,
    // Solid Block
    <rect key="6" x="6" y="6" width="12" height="12" fill="currentColor" />,
  ];
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 text-inherit">
      {shapes[index % shapes.length]}
    </svg>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1, ease: "linear" as const },
  },
};

export function Skills() {
  return (
    <section className=" bg-[#FFFFFF]" id="skills">
      {/* Editorial Header */}
      <div className="mx-auto md:px-12 px-4 mb-16">
        <div className="border-t-4 border-surface pt-8 flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-surface mb-4 block">
              [ DIRECTORY: 02 ]
            </span>
            <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-bold uppercase tracking-tighter text-surface leading-none">
              Technical <br /> Arsenal
            </h2>
          </div>
          <p className="font-mono text-xs font-bold uppercase text-surface max-w-50 text-left md:text-right">
            Core computational capabilities & logic frameworks
          </p>
        </div>
      </div>

      {/* The Architectural Grid */}
      <div className="mx-auto md:px-12 px-4 mb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1px] bg-[#000000] border border-[#000000]"
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#FFFFFF] p-6 flex flex-col items-start justify-between aspect-square hover:bg-[#000000] hover:text-[#FFFFFF] transition-none group cursor-crosshair"
            >
              {/* Geometric Primitive Icon */}
              <div className="w-12 h-12 flex items-center justify-center border-2 border-[#000000] group-hover:border-[#FFFFFF] mb-auto">
                <BrutalistPrimitive index={index} />
              </div>

              {/* Typographic Identity */}
              <div className="mt-8">
                <span className="font-mono text-[0.65rem] font-bold tracking-widest uppercase block mb-2 group-hover:opacity-70">
                  [ SYS.{index < 9 ? `0${index + 1}` : index + 1} ]
                </span>
                <h3 className="font-['Space_Grotesk'] font-bold text-lg md:text-xl leading-tight uppercase">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* The Brutalist Infinite Ticker */}
      <BrutalistMarquee items={SKILLS.map((s) => s.name)} />
    </section>
  );
}
