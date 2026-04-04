"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "@/components/ui/animated-modal";
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
} from "@tabler/icons-react";
import { Button as StatefulButton } from "@/components/ui/stateful-button";
import Link from "next/link";

// --- Extracted Form Component to access useModal() hook ---
const ModalForm = () => {
  const { setOpen } = useModal();

  const handleTransmit = async () => {
    // Fake 2-second API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Closes the modal half a second after the success checkmark appears
    setTimeout(() => {
      setOpen(false);
    }, 600);
  };

  return (
    <ModalContent className="!bg-[#d9b5b5] !border !border-[#000000] !rounded-none !shadow-none w-full max-w-xl p-0 relative overflow-hidden flex flex-col">
      {/* Editorial Header */}
      <div className="border-b border-[#000000] p-8 md:p-12 relative z-10 bg-[#FFFFFF]">
        <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold uppercase tracking-tighter text-[#000000] leading-none mb-4">
          Project
          <br />
          Inquiry
        </h2>
        {/* Typographic rule to separate header from content */}
        <div className="w-16 h-1 bg-[#000000]"></div>
      </div>

      {/* Form Fields - Clean, No Brackets */}
      <div className="p-8 md:p-12 flex flex-col gap-8 relative z-10 bg-[#FFFFFF]">
        <div className="flex flex-col gap-1">
          <Label
            htmlFor="name"
            className="font-['Space_Grotesk'] text-xs font-bold text-[#000000] uppercase tracking-widest"
          >
            Full Name
          </Label>
          <Input
            id="name"
            placeholder="Jane Doe"
            type="text"
            className="!border-0 !border-b !border-[#000000] !rounded-none !bg-transparent !px-0 !shadow-none focus-visible:!ring-0 focus-visible:!border-b-[3px] !text-[#000000] placeholder:text-[#000000]/30 font-['Inter'] transition-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label
            htmlFor="email"
            className="font-['Space_Grotesk'] text-xs font-bold text-[#000000] uppercase tracking-widest"
          >
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="jane@example.com"
            type="email"
            className="!border-0 !border-b !border-[#000000] !rounded-none !bg-transparent !px-0 !shadow-none focus-visible:!ring-0 focus-visible:!border-b-[3px] !text-[#000000] placeholder:text-[#000000]/30 font-['Inter'] transition-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label
            htmlFor="message"
            className="font-['Space_Grotesk'] text-xs font-bold text-[#000000] uppercase tracking-widest"
          >
            Brief Details
          </Label>
          <textarea
            id="message"
            placeholder="Tell me about the project scope..."
            className="w-full border-0 border-b border-[#000000] rounded-none bg-transparent px-0 py-2 font-['Inter'] text-sm text-[#000000] focus:outline-none focus:border-b-[3px] focus:border-[#000000] resize-none min-h-[80px] placeholder:text-[#000000]/30 transition-none"
          ></textarea>
        </div>
      </div>

      {/* Footer Actions */}
      <ModalFooter className="!bg-[#FFFFFF] !border-t !border-[#000000] p-0 flex justify-between relative z-10 !rounded-none gap-0 mt-auto flex-col-reverse md:flex-row">
        {/* Cancel Button explicitly calls setOpen(false) */}
        <button
          onClick={() => setOpen(false)}
          className="w-full md:w-1/2 font-['Space_Grotesk'] text-sm font-bold uppercase tracking-tight bg-[#FFFFFF] text-[#000000] py-5 hover:bg-[#000000] hover:text-[#FFFFFF] transition-none border-t md:border-t-0 border-r-0 md:border-r border-[#000000] flex justify-center items-center"
        >
          Cancel
        </button>

        {/* Submit Button handles the API state via our Brutalist StatefulButton */}
        <StatefulButton
          onClick={handleTransmit}
          className="w-full md:w-1/2 !px-0 !py-5 !border-0 !text-sm"
        >
          Submit →
        </StatefulButton>
      </ModalFooter>
    </ModalContent>
  );
};

// --- Main Header Component ---
export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "LINKEDIN",
      href: "https://linkedin.com/in/sanchitjain",
      icon: <IconBrandLinkedin className="w-6 h-6 shrink-0" stroke={1.5} />,
    },
    {
      label: "GITHUB",
      href: "https://github.com/sanchitjain",
      icon: <IconBrandGithub className="w-6 h-6 shrink-0" stroke={1.5} />,
    },
    {
      label: "TWITTER",
      href: "https://twitter.com/sanchitjain",
      icon: <IconBrandX className="w-6 h-6 shrink-0" stroke={1.5} />,
    },
    {
      label: "PROJECTS",
      href: "#projects",
      icon: <IconCode className="w-6 h-6 shrink-0" stroke={1.5} />,
    },
  ];

  return (
    <Sidebar open={open} setOpen={setOpen} animate={true}>
      <SidebarBody className="justify-between bg-[#FFFFFF]">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <div className="pb-6 mb-6 border-b border-surface">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="h-8 w-8 min-w-8 bg-surface text-[#FFFFFF] flex items-center justify-center font-['Space_Grotesk'] text-sm font-bold transition-none border border-[#000000] group-hover:bg-[#FFFFFF] group-hover:text-[#000000] shrink-0">
                SJ
              </div>
              <motion.span
                animate={{
                  opacity: open ? 1 : 0,
                  display: open ? "inline-block" : "none",
                }}
                transition={{ duration: 0.1, ease: "linear" }}
                className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-[#000000] uppercase whitespace-pre"
              >
                Sanchit Jain
              </motion.span>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            {/* Kept [INFO] tag only for the smallest metadata category as per design spec */}
            <motion.span
              animate={{
                opacity: open ? 1 : 0,
                display: open ? "inline-block" : "none",
              }}
              transition={{ duration: 0.1 }}
              className="font-['Space_Grotesk'] text-[0.75rem] mb-2 text-[#000000] tracking-widest whitespace-pre font-bold"
            >
              [INFO] DIRECTORY
            </motion.span>

            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#000000] mt-auto">
          <Modal>
            <ModalTrigger className="w-full bg-[#000000] text-[#FFFFFF] font-['Space_Grotesk'] text-sm font-bold tracking-tight h-12 flex items-center justify-center border border-[#000000] hover:bg-[#FFFFFF] hover:text-[#000000] transition-none group overflow-hidden">
              {open ? (
                <div className="flex items-center justify-between w-full px-4 pointer-events-none">
                  <span className="font-['Space_Grotesk'] text-xs font-normal whitespace-pre flex items-center gap-2">
                    ENTER <IconArrowRight className="w-4 h-4" />
                  </span>
                  <span className="whitespace-pre">HIRE ME</span>
                </div>
              ) : (
                <IconPlus
                  className="w-6 h-6 shrink-0 pointer-events-none"
                  stroke={2}
                />
              )}
            </ModalTrigger>

            <ModalBody className="!bg-black/80 backdrop-blur-sm z-[200]">
              {/* Inserted the extracted form component here */}
              <ModalForm />
            </ModalBody>
          </Modal>
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
