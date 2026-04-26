import Link from "next/link";

const projectData = [
  {
    id: "01",
    title: "AI UPSELL ENGINE",
    desc: "AI-powered recommendation engine analyzing product data points to automate cross-sell and upsell placements with zero configuration.",
    tags: ["SHOPIFY APP", "AI / ML", "CRO"],
    href: "/projects/ai-upsell-and-cross-sell",
  },
  {
    id: "02",
    title: "PAIRLY BUNDLES",
    desc: "Smart bundling architecture featuring fixed, volume, and AI-recommended pairings. Engineered with zero-layout-shift storefront widgets.",
    tags: ["SHOPIFY APP", "REACT", "LIQUID"],
    href: "/projects/pairly-bundles",
  },
  {
    id: "03",
    title: "RECOVERX",
    desc: "Conversion-optimized sports ecommerce platform featuring custom Liquid architecture across home, product, and cart flows.",
    tags: ["ECOMMERCE", "SHOPIFY PLUS", "UI/UX"],
    href: "/projects/recoverx",
  },
  {
    id: "04",
    title: "FUN CIRCLE",
    desc: "Comprehensive event ticket booking application featuring a low-latency real-time chat architecture and user management systems.",
    tags: ["FULLSTACK", "WEBSOCKETS", "NEXT.JS"],
    href: "/projects/fun-circle",
  },
  {
    id: "05",
    title: "SOCIAL DRAW",
    desc: "Collaborative, real-time drawing environment built for multi-user interaction and low-latency canvas rendering.",
    tags: ["CANVAS API", "WEBSOCKETS", "REACT"],
    href: "/projects/social-draw",
  },
  {
    id: "06",
    title: "DELHI BOOK MARKET",
    desc: "Scalable online bookstore interface managing extensive product catalogs, search filtering, and complex cart logic.",
    tags: ["ECOMMERCE", "DATABASE ARCHITECTURE"],
    href: "/projects/delhi-book-market",
  },
  {
    id: "07",
    title: "TWEETO",
    desc: "High-density social media platform focusing on rapid interaction and structural content feeds.",
    tags: ["SOCIAL", "NODE.JS", "REACT"],
    href: "/projects/tweeto",
  },
  {
    id: "08",
    title: "PROP-TECH INTERFACES",
    desc: "High-performance Next.js landing pages for the real estate sector, engineered for maximum conversion speed.",
    tags: ["NEXT.JS", "FRONTEND", "PERFORMANCE"],
    href: "/projects/nextjs-landing-pages",
  },
  {
    id: "09",
    title: "MAISON LUXE & IRON CRATE",
    desc: "Dual ecommerce implementations focusing on brand-specific structural rhythms and custom purchasing experiences.",
    tags: ["ECOMMERCE", "LIQUID", "CSS"],
    href: "/projects/maison-luxe-iron-crate",
  },
  {
    id: "10",
    title: "GIFTBU",
    desc: "Advanced product customizer allowing real-time personalization and visual rendering prior to checkout.",
    tags: ["ECOMMERCE", "CUSTOMIZATION LOGIC"],
    href: "/projects/giftbu",
  },
  {
    id: "11",
    title: "EDITORIAL ENGINE",
    desc: "Minimalist publishing platform for long-form content, prioritizing typography and reading density.",
    tags: ["FULLSTACK", "CMS", "TYPOGRAPHY"],
    href: "/projects/blog-app",
  },
];

export default function Projects() {
  return (
    <section
      className="p-6 md:p-12 lg:p-24 bg-[#FFFFFF] text-surface lg:border-b-4 border-surface"
      id="projects"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-4">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-surface block"></span>
            INDEX
          </span>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
            PROJECT ARCHIVE
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
        {projectData.map((project) => (
          <Link
            key={project.id}
            href={project.href}
            className="group flex flex-col justify-between border border-surface bg-[#FFFFFF] p-6 hover:bg-surface hover:text-[#FFFFFF] transition-none min-h-70 -mx-8 md:mx-0 lg:mx-0 border-b-0 lg:border-b lg:border-r border-surface last:border-b lg:last:border-b-0"
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-xs font-bold tracking-widest uppercase">
                  ID: {project.id}
                </span>
                {/* Brutalist Arrow SVG replacing the Material Icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-surface group-hover:text-[#FFFFFF]"
                >
                  <path
                    d="M5 19L19 5M19 5V19M19 5H5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </svg>
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl lg:text-3xl font-bold uppercase leading-[1.1] mb-4 tracking-tighter">
                {project.title}
              </h3>
              <p className="font-['Inter'] text-sm leading-snug mb-8 font-medium opacity-90 group-hover:opacity-100 max-w-md">
                {project.desc}
              </p>
            </div>

            {/* TAGS */}
            <div className="font-mono text-[0.65rem] font-bold flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-surface group-hover:border-[#FFFFFF] px-2 py-1 tracking-widest uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
