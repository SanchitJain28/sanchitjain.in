"use client";

import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import ScrollProgress from "@/components/home/ScrollProgress";
import GithubManifest from "@/components/home/GithubManifest";
import { Header } from "@/components/showcase/layout/Header";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-[#FFFFFF] text-[#000000] font-['Inter'] selection:bg-[#000000] selection:text-[#FFFFFF] overflow-hidden">
      <Header />

      <div className="flex-1 overflow-y-auto relative bg-[#FFFFFF] custom-scrollbar">
        <ScrollProgress />

        <main className="w-full flex flex-col">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
          <GithubManifest />
        </main>

        <Footer />
      </div>
    </div>
  );
}
