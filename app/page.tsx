import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";
import ScrollProgress from "@/components/home/ScrollProgress";
import GithubManifest from "@/components/home/GithubManifest";
import { Header } from "@/components/showcase/layout/Header";
import { Footer } from "@/components/showcase/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanchit Jain | Shopify Expert Developer",
  description:
    "Shopify Expert Developer based in Delhi, India. Building custom Shopify apps, headless storefronts, and API integrations. 2 live apps on Shopify App Store serving 50+ merchants.",
  keywords: [
    "Shopify Developer",
    "Shopify Expert",
    "Shopify App Developer India",
    "RemixJS",
    "Node.js",
  ],
  authors: [{ name: "Sanchit Jain", url: "https://www.sanchitjain.in" }],
  openGraph: {
    title: "Sanchit Jain | Shopify Expert Developer",
    description:
      "2 live Shopify apps. 50+ merchants. Custom apps, headless storefronts, API integrations.",
    url: "https://www.sanchitjain.in",
    siteName: "Sanchit Jain",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanchit Jain | Shopify Expert Developer",
    description: "Shopify Expert. 2 live apps. 50+ merchants.",
  },
  alternates: {
    canonical: "https://www.sanchitjain.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sanchit Jain",
  jobTitle: "Shopify Expert Developer",
  url: "https://www.sanchitjain.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
  sameAs: [
    "https://linkedin.com/in/sanchitjain28",
    "https://github.com/SanchitJain28",
  ],
  knowsAbout: [
    "Shopify",
    "RemixJS",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "Next.js",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
