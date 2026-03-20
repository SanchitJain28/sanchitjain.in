"use client"
import TopNavBar from "@/components/TopNavBar";
import SideNavBar from "@/components/SideNavBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <SideNavBar />

      {/* Main Content Canvas */}
      <main className="pt-10 pb-8 md:pl-48">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <ScrollProgress />
    </>
  );
}
