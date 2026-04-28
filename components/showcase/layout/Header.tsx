"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
  IconCode,
  IconPlus,
  IconArrowRight,
  IconX,
} from "@tabler/icons-react";
import { Button as StatefulButton } from "@/components/ui/stateful-button";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Icons } from "@/icons/ICONS";

export const SheetForm = ({ onSuccess }: { onSuccess: () => void }) => {
  //? handle submit , currently a mock async function to simulate form submission delay
  const handleSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    onSuccess();
  };

  return (
    <div className="flex flex-col h-full bg-[#FFFFFF] border-t-4 border-surface w-full">
      <div className="border-b-4 border-surface p-8 md:p-12 relative z-10 bg-[#FFFFFF] flex justify-between items-start">
        <div>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold uppercase tracking-tighter text-surface leading-none mb-4">
            PROJECT
            <br />
            INQUIRY
          </h2>
          <div className="w-16 h-1 bg-surface"></div>
        </div>
        <SheetClose asChild>
          <button title="Close" className="w-10 h-10 border-2 border-surface flex items-center justify-center hover:bg-surface hover:text-[#FFFFFF] transition-none bg-[#FFFFFF] text-surface rounded-none cursor-crosshair">
            <IconX stroke={2} className="w-6 h-6" />
          </button>
        </SheetClose>
      </div>

      <div className="p-8 md:p-12 flex flex-col gap-8 flex-1 overflow-y-auto bg-[#FFFFFF]">
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="name"
            className="font-['Space_Grotesk'] text-xs font-bold text-surface uppercase tracking-widest"
          >
            FULL NAME
          </Label>
          <Input
            id="name"
            placeholder="JOHN DOE"
            type="text"
            className="border-x-0 border-t-0 border-b-2 border-surface rounded-none bg-transparent px-0 py-2 shadow-none focus-visible:ring-0 focus-visible:border-x-0 focus-visible:border-t-0 focus-visible:border-b-4 text-surface placeholder:text-surface/30 font-['Inter'] transition-none h-auto"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="email"
            className="font-['Space_Grotesk'] text-xs font-bold text-surface uppercase tracking-widest"
          >
            EMAIL ADDRESS
          </Label>
          <Input
            id="email"
            placeholder="JOHN@EXAMPLE.COM"
            type="email"
            className="border-x-0 border-t-0 border-b-2 border-surface rounded-none bg-transparent px-0 py-2 shadow-none focus-visible:ring-0 focus-visible:border-x-0 focus-visible:border-t-0 focus-visible:border-b-4 text-surface placeholder:text-surface/30 font-['Inter'] transition-none h-auto"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="message"
            className="font-['Space_Grotesk'] text-xs font-bold text-surface uppercase tracking-widest"
          >
            PROJECT SCOPE
          </Label>
          <textarea
            id="message"
            placeholder="SPECIFY REQUIREMENTS..."
            className="w-full border-x-0 border-t-0 border-b-2 border-surface rounded-none bg-transparent px-0 py-2 font-['Inter'] text-sm text-surface focus:outline-none focus:border-x-0 focus:border-t-0 focus:border-b-4 focus:border-surface resize-none min-h-30 placeholder:text-surface/30 transition-none"
          ></textarea>
        </div>
      </div>

      <div className="bg-[#FFFFFF] border-t-4 border-surface flex flex-col sm:flex-row mt-auto">
        <SheetClose asChild>
          <button className="w-full sm:w-1/2 font-['Space_Grotesk'] text-sm font-bold uppercase tracking-tight bg-[#FFFFFF] text-surface py-5 hover:bg-surface hover:text-[#FFFFFF] transition-none border-b-2 sm:border-b-0 sm:border-r-2 border-surface flex justify-center items-center rounded-none cursor-crosshair">
            CANCEL
          </button>
        </SheetClose>

        <StatefulButton
          onClick={handleSubmit}
          className="relative overflow-hidden w-full sm:w-1/2 px-0 py-5 border-0 text-sm rounded-none bg-surface text-[#FFFFFF] hover:bg-surface hover:text-[#FFFFFF] transition-none font-['Space_Grotesk'] tracking-tight font-bold uppercase cursor-crosshair flex justify-center items-center outline-none ring-0 group"
        >

          <div className="absolute inset-0 w-full h-full bg-[#FFFFFF] opacity-0 group-hover:opacity-100 transition-none z-0 border-2 border-surface"></div>
          <span className="relative z-10 text-[#FFFFFF] group-hover:text-surface transition-none flex items-center gap-2">
            SUBMIT INQUIRY <IconArrowRight className="w-4 h-4" />
          </span>
        </StatefulButton>
      </div>
    </div>
  );
};

export function Header() {
  const [open, setOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const links = [
    {
      label: "LINKEDIN",
      href: "https://linkedin.com/in/sanchitjain",
      icon: <Icons.Linkedin className="w-6 h-6 shrink-0"  />,
    },
    {
      label: "GITHUB",
      href: "https://github.com/sanchitjain",
      icon: <Icons.Github className="w-6 h-6 shrink-0" />,
    },
    {
      label: "TWITTER",
      href: "https://twitter.com/sanchitjain",
      icon: <Icons.Twitter className="w-6 h-6 shrink-0" />,
    },
    {
      label: "PROJECTS",
      href: "#projects",
      icon: <Icons.Projects className="w-6 h-6 shrink-0" />,
    },
  ];

  return (
    <Sidebar open={open} setOpen={setOpen} animate={true}>
      <SidebarBody className="justify-between bg-[#FFFFFF] border-r-2 border-surface">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <div className="pb-6 mb-6 border-b-2 border-surface">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="h-8 w-8 min-w-8 bg-surface text-[#FFFFFF] flex items-center justify-center font-['Space_Grotesk'] text-sm font-bold transition-none border border-surface group-hover:bg-[#FFFFFF] group-hover:text-surface shrink-0 cursor-crosshair">
                SJ
              </div>
              <motion.span
                animate={{
                  opacity: open ? 1 : 0,
                  display: open ? "inline-block" : "none",
                }}
                transition={{ duration: 0.1, ease: "linear" }}
                className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-surface uppercase whitespace-pre"
              >
                SANCHIT JAIN
              </motion.span>
            </Link>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <motion.span
              animate={{
                opacity: open ? 1 : 0,
                display: open ? "inline-block" : "none",
              }}
              transition={{ duration: 0.1, ease: "linear" }}
              className="font-['Space_Grotesk'] text-[0.7rem] mb-4 text-surface tracking-widest whitespace-pre font-bold border border-surface px-2 py-1 w-fit uppercase"
            >
              DIRECTORY
            </motion.span>

            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>

        <div className="pt-6 border-t-2 border-surface mt-auto">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button className="w-full bg-[#FFFFFF] text-surface font-['Space_Grotesk'] text-sm font-bold tracking-tight h-12 flex items-center justify-center border-2 border-surface hover:bg-surface hover:text-[#FFFFFF] transition-none group overflow-hidden cursor-crosshair rounded-none">
                {open ? (
                  <div className="flex items-center justify-between w-full px-4 pointer-events-none">
                    <span className="font-['Space_Grotesk'] text-xs font-bold whitespace-pre flex items-center gap-2 tracking-widest uppercase">
                      INQUIRE <IconArrowRight className="w-4 h-4" />
                    </span>
                    <span className="whitespace-pre uppercase tracking-tight text-xs font-bold">
                      HIRE ME
                    </span>
                  </div>
                ) : (
                  <IconPlus
                    className="w-6 h-6 shrink-0 pointer-events-none"
                    stroke={2}
                  />
                )}
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="p-0 border-none bg-transparent w-full sm:max-w-xl duration-200"
            >
              <SheetForm onSuccess={() => setSheetOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
