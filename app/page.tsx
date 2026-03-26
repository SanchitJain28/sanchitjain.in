"use client"
import TopNavBar from "@/components/home/TopNavBar";
import SideNavBar from "@/components/home/SideNavBar";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import ScrollProgress from "@/components/home/ScrollProgress";

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
