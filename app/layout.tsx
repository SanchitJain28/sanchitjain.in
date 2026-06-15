import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { FloatingChat } from "@/components/FloatingChat";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "700"],
});

const BASE_URL = "https://www.sanchitjain.in";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Sanchit Jain | Shopify Expert Developer",
    template: "%s | Sanchit Jain",
  },
  description:
    "Shopify Expert Developer based in Delhi, India. 2 live apps on Shopify App Store, 50+ merchants served. Custom apps, headless storefronts, GraphQL & API integrations.",
  keywords: [
    "Shopify Expert Developer Delhi",
    "Shopify App Developer India",
    "Custom Shopify App Development",
    "Shopify Hydrogen Developer",
    "Headless Shopify Developer",
    "Freelance Shopify Developer India",
  ],
  authors: [{ name: "Sanchit Jain", url: BASE_URL }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Sanchit Jain",
    title: "Sanchit Jain | Shopify Expert Developer",
    description:
      "2 live Shopify apps. 50+ merchants. Custom apps, headless storefronts, GraphQL & API integrations. Delhi, India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sanchit Jain — Shopify Expert Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanchit Jain | Shopify Expert Developer",
    description:
      "2 live Shopify apps. 50+ merchants. Delhi-based Shopify Expert.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("dark scroll-smooth font-sans", geist.variable)}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          inter.variable,
          spaceGrotesk.variable,
          "font-body selection:bg-white selection:text-black ascii-bg min-h-screen",
        )}
      >
        {children}
        <FloatingChat />
      </body>
    </html>
  );
}
