"use client";

import { motion } from "motion/react";
import { profile } from "@/content/profile";

const easeOut = [0.19, 1, 0.22, 1] as const;

export function Principles() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {profile.about.principles.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease: easeOut, delay: i * 0.08 }}
          className="rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-elevated)] p-6"
        >
          <h3 className="text-lg font-bold">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
            {p.body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
