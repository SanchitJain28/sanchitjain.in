import Image from "next/image";
const imageBasePath = "/project-1-shopify-app-ai_upsell_and_cross_sell";

export const projectContent = [
  {
    title: "Intelligent Recommendations",
    description:
      "Automated product discovery. Replaces manual curation by calculating and displaying high-converting related items directly alongside the main product.",
    content: (
      <Image
        src={`${imageBasePath}/1.png`}
        alt="AI Powered Recommendations"
        fill
        className="object-cover object-top"
      />
    ),
  },
  {
    title: "Widget Configuration",
    description:
      "Complete control over targeting rules. Define exact placement parameters, filter by specific collections, or exclude individual products without writing code.",
    content: (
      <Image
        src={`${imageBasePath}/2.png`}
        alt="Full Control and Customization"
        fill
        className="object-cover object-top"
      />
    ),
  },
  {
    title: "Interface Customization",
    description:
      "Match your store's exact branding. Provides direct access to color hex codes, typography settings, and pre-built layout themes for seamless visual blending.",
    content: (
      <Image
        src={`${imageBasePath}/3.png`}
        alt="Widget Appearance Customization"
        fill
        className="object-cover object-top"
      />
    ),
  },
  {
    title: "Omnipresent Placement",
    description:
      "Inject product suggestions on any page. Break away from rigid templates and position upsell blocks on the home page, collections, or cart to maximize visibility.",
    content: (
      <Image
        src={`${imageBasePath}/4.png`}
        alt="Universal Website Placement"
        fill
        className="object-cover object-top"
      />
    ),
  },
  {
    title: "Responsive Architecture",
    description:
      "Built to function perfectly across all screen sizes. The layout dynamically restructures itself for mobile and desktop viewports, ensuring a consistent user experience.",
    content: (
      <Image
        src={`${imageBasePath}/5.png`}
        alt="Seamless Experience Across Devices"
        fill
        className="object-cover object-top"
      />
    ),
  },
  {
    title: "Automated Context",
    description:
      "The underlying algorithm analyzes product tags and user behavior to serve relevant matches. It removes manual guesswork and naturally increases the average order value.",
    content: (
      <Image
        src={`${imageBasePath}/6.png`}
        alt="Perfect Matches Automatically"
        fill
        className="object-cover object-top"
      />
    ),
  },
];
