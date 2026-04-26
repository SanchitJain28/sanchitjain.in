"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>

      <motion.div
        className="fixed inset-0 z-[9999] bg-[#000000] pointer-events-none"
        style={{ transformOrigin: "right" }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.25, ease: "linear" }}
      />

      <motion.div
        initial={{ x: 40, filter: "contrast(150%)" }}
        animate={{ x: 0, filter: "contrast(100%)" }}
        transition={{
          duration: 0.25,
          ease: "linear",
          delay: 0.05,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </>
  );
}
