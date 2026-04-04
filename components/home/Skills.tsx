export default function Skills() {
  const skills = [
    "JAVASCRIPT",
    "TYPESCRIPT",
    "REACT",
    "NEXT.JS",
    "NODE.JS",
    "POSTGRESQL",
    "AWS_INFRA",
    "TAILWIND",
  ];

  return (
    <section
      className="py-6 md:p-12 border-b-2 border-white bg-white text-black"
      id="skills"
    >
      <h2 className="font-headline text-xl font-bold uppercase mb-8">
        STACK_ANALYSIS:
      </h2>
      <div className="flex flex-wrap gap-y-4 font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter">
        {skills.map((skill, index) => (
          <React.Fragment key={skill}>
            <span className="hover:bg-black hover:text-white px-2 cursor-crosshair">
              {skill}
            </span>
            {index !== skills.length - 1 && (
              <span className="px-2 opacity-20">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
import React from "react";
