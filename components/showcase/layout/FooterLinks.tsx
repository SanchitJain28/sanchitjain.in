import { Icons } from "@/icons/ICONS";

interface FooterLink {
  label: string;
  url: string;
  icon?: React.ReactNode; 
}

export const FOOTER_LINKS: FooterLink[] = [
  {
    label: "Email",
    url: "mailto:sanchit@sanchitjain.in",
    icon: <Icons.Email className="w-8 h-8" />,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/sanchitjain28",
    icon: <Icons.Linkedin className="w-8 h-8" />,
  },
  {
    label: "GitHub",
    url: "https://github.com/SanchitJain28",
    icon: <Icons.Github className="w-8 h-8" />,
  },
  {
    label: "Twitter",
    url: "https://twitter.com/sanchitjain",
    icon: <Icons.Twitter className="w-8 h-8" />,
  },
];
