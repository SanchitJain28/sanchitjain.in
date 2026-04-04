import { FOOTER_LINKS } from "@/lib/showcase/data";
import { GlareCard } from "@/components/ui/glare-card";

export function Footer() {
  return (
    <footer className="w-full bg-[#FFFFFF] border-t-4 border-[#000000] relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto w-full">
        {/* LEFT SIDE: Document Index & Directory */}
        <div className="flex flex-col justify-between p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-[#000000]">
          <div className="mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#000000] mb-8 block flex items-center gap-2">
              <span className="w-2 h-2 bg-[#000000] block"></span>
              END OF MANIFEST
            </span>
            <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-bold uppercase tracking-tighter text-[#000000] leading-[0.9]">
              Sanchit <br /> Jain.
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="group flex items-center justify-between border-b border-[#000000] py-3 text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF] transition-none px-2"
                >
                  <span className="font-['Space_Grotesk'] text-lg font-bold uppercase tracking-tight">
                    {link.label}
                  </span>
                  <span className="font-mono text-sm font-bold opacity-0 group-hover:opacity-100 group-hover:translate-x-[-8px] transition-transform duration-100">
                    [ GOTO ] ↗
                  </span>
                </a>
              ))}
            </div>

            <div className="font-mono text-[0.65rem] tracking-widest uppercase text-[#000000] flex flex-col gap-1">
              <span>© {new Date().getFullYear()} Sanchit Jain.</span>
              <span>Architecture & Engineering for Shopify Plus.</span>
              <span>All systems nominal.</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Physical ID Badge (Glare Card) */}
        <div className="flex items-center justify-center p-8 md:p-16 bg-[#FFFFFF] relative">
          {/* Faint background texture to ground the 3D card */}
          <div className="absolute inset-0 opacity-[0.03] font-mono text-[0.5rem] leading-none overflow-hidden text-[#000000] select-none pointer-events-none break-all whitespace-pre-wrap">
            {"/////////////////////////////////////////////////////////////////////////".repeat(
              50,
            )}
          </div>

          <GlareCard className="flex flex-col bg-[#000000] text-[#FFFFFF] p-6 justify-between">
            {/* Badge Header */}
            <div className="flex justify-between items-start border-b border-[#FFFFFF] pb-4">
              <span className="font-mono text-[0.65rem] font-bold tracking-widest uppercase">
                [ AUTH: LEVEL 01 ]
              </span>
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-[#FFFFFF]"
                fill="currentColor"
              >
                <rect x="4" y="4" width="16" height="16" />
                <rect x="8" y="8" width="8" height="8" fill="#000000" />
              </svg>
            </div>

            {/* Photo Placeholder (Xerox Grayscale effect) */}
            <div className="w-full aspect-square border border-[#FFFFFF] my-6 relative overflow-hidden bg-[#FFFFFF] group flex items-center justify-center">
              {/* 
                  Replace this URL with your actual headshot URL. 
                  The grayscale and contrast classes give it that harsh printed look. 
               */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                alt="Sanchit Jain ID"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-0"
              />

              {/* Scanner line overlay effect */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent_0px,transparent_2px,rgba(0,0,0,0.1)_3px,rgba(0,0,0,0.1)_4px)] pointer-events-none mix-blend-overlay"></div>
            </div>

            {/* Badge Footer Info */}
            <div className="flex flex-col gap-1 border-t border-[#FFFFFF] pt-4 mt-auto">
              <span className="font-mono text-[0.6rem] font-bold tracking-widest uppercase opacity-70">
                IDENTIFIER
              </span>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase tracking-tighter leading-none mb-2">
                Sanchit Jain
              </h3>
              <span className="font-mono text-xs uppercase bg-[#FFFFFF] text-[#000000] px-2 py-1 w-fit font-bold">
                SHOPIFY_DEV
              </span>
            </div>
          </GlareCard>
        </div>
      </div>
    </footer>
  );
}
