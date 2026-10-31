"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/components/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Page Content Fade & Gentle Rise */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32, ease: "easeOut", delay: 0.08 }}
      >
        {children}
      </motion.div>
    </>
  );
}
