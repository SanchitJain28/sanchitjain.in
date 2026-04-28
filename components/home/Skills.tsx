import React from "react";
import { Icons } from "@/icons/ICONS";

export default function Skills() {
  const skillsData = [
    { name: "JAVASCRIPT", Icon: Icons.Javascript },
    { name: "TYPESCRIPT", Icon: Icons.Typescript },
    { name: "REACT", Icon: Icons.React },
    { name: "NEXT.JS", Icon: Icons.NextJs },
    { name: "NODE.JS", Icon: Icons.NodeJs },
    { name: "POSTGRESQL", Icon: Icons.PostgreSql },
    { name: "TAILWIND", Icon: Icons.Tailwind },
    { name: "FIREBASE", Icon: Icons.Firebase },
    { name: "GRAPHQL", Icon: Icons.GraphQl },
    { name: "SHOPIFY", Icon: Icons.Shopify },
    { name: "LIQUID", Icon: Icons.Liquid },
    { name: "HTML/CSS", Icon: Icons.HtmlCss },
    { name: "FIGMA", Icon: Icons.Figma },
    { name: "SUPABASE", Icon: Icons.Supabase },
    { name: "PRISMA", Icon: Icons.Prisma },
    { name: "MONGODB", Icon: Icons.MongoDb },
    { name: "REDIS", Icon: Icons.Redis },
    { name: "DOCKER", Icon: Icons.Docker },
    { name: "EXPRESS.JS", Icon: Icons.ExpressJs },
    { name: "WEBSOCKETS", Icon: Icons.Websockets },
    { name: "ECOMMERCE", Icon: Icons.Ecommerce },
    { name: "CMS", Icon: Icons.Cms },
  ];

  return (
    <section
      className="p-6 md:p-12 lg:p-24 bg-[#FFFFFF] text-surface border-b-4 border-surface"
      id="skills"
    >
      <div className="mb-12 lg:mb-16">
        <span className="font-mono text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-surface block"></span>
          CAPABILITIES
        </span>
        <h2 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
          TECHNICAL STACK
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-t-2 border-l-2 border-surface">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="group aspect-square flex flex-col items-center justify-center gap-4 border-b-2 border-r-2 border-surface bg-[#FFFFFF] hover:bg-surface hover:text-[#FFFFFF] transition-none p-4 text-center cursor-crosshair"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-surface group-hover:text-[#FFFFFF] group-hover:invert transition-none *:w-full *:h-full">
              {skill.Icon && <skill.Icon />}
            </div>

            <span className="font-mono text-[0.65rem] md:text-[0.75rem] font-bold tracking-widest uppercase mt-2">
              {skill.name}
            </span>
          </div>
        ))}

        <div className="hidden lg:block border-b-2 border-r-2 border-surface bg-[#FFFFFF] opacity-20 pointer-events-none"></div>
        <div className="hidden lg:block border-b-2 border-r-2 border-surface bg-[#FFFFFF] opacity-20 pointer-events-none"></div>
      </div>
    </section>
  );
}
