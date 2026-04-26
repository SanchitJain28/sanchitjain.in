import { FOOTER_LINKS } from "@/lib/showcase/data";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";

export function Footer() {
  const locationMarker: GlobeMarker[] = [
    {
      lat: 28.429868719568894,
      lng: 77.10722316567866,
      src: "/profile-photo.jpeg",
      label: "Sanchit Jain",
      size: 1.2,
    },
  ];

  return (
    <footer className="w-full bg-[#000000] text-[#FFFFFF] border-t-4 border-[#FFFFFF] relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto w-full">
        <div className="flex flex-col justify-between p-8 md:p-16 border-b lg:border-b-0 ">
          <div className="mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FFFFFF] mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFFFFF] block"></span>
              DIRECTORY
            </span>
            <h2 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-bold uppercase tracking-tighter text-[#FFFFFF] leading-[0.9]">
              Sanchit <br /> Jain.
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="group flex items-center justify-between border-b border-[#FFFFFF] py-3 text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] transition-none px-2"
                >
                  <span className="font-['Space_Grotesk'] text-lg font-bold uppercase tracking-tight">
                    {link.label}
                  </span>
                  <span className="font-mono text-sm font-bold opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-transform duration-100">
                    VIEW ↗
                  </span>
                </a>
              ))}
            </div>

            <div className="font-mono text-[0.65rem] tracking-widest uppercase text-[#FFFFFF] flex flex-col gap-1">
              <span>© {new Date().getFullYear()} Sanchit Jain.</span>
              <span>Architecture & Engineering for Shopify Plus.</span>
              <span>All rights reserved.</span>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[500px] lg:h-auto bg-[#000000] overflow-hidden flex items-center justify-center">
          <Globe3D
            className="w-full h-full cursor-move"
            markers={locationMarker}
            config={{
              backgroundColor: "#000000",
              atmosphereColor: "#ffffff",
              atmosphereIntensity: 0.5,
              autoRotateSpeed: 0,
              initialRotation: { x: 0.496, y: -2.916 },
            }}
          />

          <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 flex flex-col gap-1 border-2 border-[#FFFFFF] bg-[#000000] p-6 text-[#FFFFFF] z-20 pointer-events-none">
            <span className="font-mono text-[0.6rem] font-bold tracking-widest uppercase opacity-70">
              CURRENT LOCATION
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl lg:text-2xl font-bold uppercase tracking-tighter leading-none mb-2 mt-1">
              28.4298° N, 77.1072° E
            </h3>
            <span className="font-mono text-xs uppercase bg-[#FFFFFF] text-[#000000] px-2 py-1 w-fit font-bold">
              NEW DELHI NCR, INDIA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
