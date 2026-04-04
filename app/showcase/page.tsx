import { Footer } from "@/components/showcase/layout/Footer";
import { Header } from "@/components/showcase/layout/Header";
import { Contact } from "@/components/showcase/sections/Contact";
import { Hero } from "@/components/showcase/sections/Hero";
import { Services } from "@/components/showcase/sections/Services";
import { Skills } from "@/components/showcase/sections/Skills";
import { Work } from "@/components/showcase/sections/Work";

export default function Portfolio() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      
      <div className="flex flex-col md:flex-row h-screen w-full bg-[#FFFFFF] text-[#000000] font-['Inter'] selection:bg-[#000000] selection:text-[#FFFFFF] overflow-hidden">
        <Header />

        {/* Scrollable Content Canvas */}
        <div className="flex-1 overflow-y-auto relative bg-[#FFFFFF]">
          <main className="w-full mx-auto md:py-12 flex flex-col">
            <Hero />
            <Work />
            <Skills />
            <Services />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
