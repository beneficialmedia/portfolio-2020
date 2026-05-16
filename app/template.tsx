"use client";

import { motion } from "motion/react";

// template.tsx re-mounts on every route change, so this fade-up runs per page.
// Subtle replacement for the 2020 AniLink paintDrip transition (the menu
// reveal already carries the "drip" character on nav clicks).
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
    >
      {children}
    </motion.div>
  );
}
