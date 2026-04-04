"use client";
import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <motion.div
      className={cn(
        "h-full px-4 py-6 hidden md:flex md:flex-col bg-[#FFFFFF] border-r border-[#000000] w-[300px] shrink-0",
        className,
      )}
      animate={{
        width: animate ? (open ? "300px" : "64px") : "300px",
      }}
      transition={{ duration: 0.1, ease: "linear" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <div
      className={cn(
        "h-14 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-[#FFFFFF] border-b border-[#000000] w-full shrink-0",
      )}
      {...props}
    >
      <div className="flex justify-between items-center z-20 w-full">
        <span className="font-['Space_Grotesk'] font-bold text-lg uppercase tracking-tight text-[#000000]">
          S. JAIN
        </span>
        <button
          className="font-mono text-xs font-bold text-[#FFFFFF] bg-[#000000] px-3 py-2 border border-[#000000] hover:bg-[#FFFFFF] hover:text-[#000000] transition-none"
          onClick={() => setOpen(!open)}
        >
          [ MENU ]
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.1,
              ease: "linear",
            }}
            className={cn(
              // Removed border-r, added strict z-index to overlay everything
              "fixed h-full w-full inset-0 bg-[#FFFFFF] p-6 z-[100] flex flex-col justify-between",
              className,
            )}
          >
            <div className="absolute right-6 top-6 z-50">
              <button
                className="font-mono text-xs font-bold text-[#FFFFFF] bg-[#000000] px-3 py-2 border border-[#000000] hover:bg-[#FFFFFF] hover:text-[#000000] transition-none"
                onClick={() => setOpen(!open)}
              >
                [ CLOSE ]
              </button>
            </div>
            {/* The menu content */}
            <div className="mt-12 flex-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
}) => {
  const { open, animate } = useSidebar();
  return (
    <a
      href={link.href}
      className={cn(
        "flex items-center justify-start gap-4 py-2 px-2 hover:bg-[#000000] hover:text-[#FFFFFF] text-[#000000] transition-none group/sidebar border border-transparent hover:border-[#000000]",
        className,
      )}
      {...props}
    >
      <div className="min-w-[20px] flex items-center justify-center text-inherit">
        {link.icon}
      </div>

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        transition={{ duration: 0.1, ease: "linear" }}
        className="font-['Space_Grotesk'] text-[0.875rem] font-bold uppercase tracking-tight whitespace-pre inline-block !p-0 !m-0 text-inherit"
      >
        {link.label}
      </motion.span>
    </a>
  );
};
