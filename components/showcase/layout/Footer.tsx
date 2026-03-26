import { FOOTER_LINKS } from "@/lib/showcase/data";

export function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-[#1a1c1e]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="font-[Manrope] font-black text-white">SANCHIT JAIN</div>
        <div className="flex gap-8">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-[Inter] text-xs tracking-widest uppercase text-slate-500 hover:text-[#a9d55a] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="font-[Inter] text-xs tracking-widest uppercase text-slate-500">
          © 2024 Sanchit Jain. Built for Shopify Plus.
        </div>
      </div>
    </footer>
  );
}
