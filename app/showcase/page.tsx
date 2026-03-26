import { Footer } from "@/components/showcase/layout/Footer";
import { Header } from "@/components/showcase/layout/Header";
import { Contact } from "@/components/showcase/sections/Contact";
import { Hero } from "@/components/showcase/sections/Hero";
import { Services } from "@/components/showcase/sections/Services";
import { Work } from "@/components/showcase/sections/Work";

export default function Portfolio() {
  return (
    <>
      {/* It's usually better to put fonts in your app/layout.tsx using next/font, but leaving it here to maintain your styling structure */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Inter:wght@400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      <div className="bg-[#121416] text-[#e2e2e5] min-h-screen font-[Inter] selection:bg-[#a9d55a] selection:text-[#243600]">
        <Header />
        <main className="pt-24">
          <Hero />
          <Work />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
