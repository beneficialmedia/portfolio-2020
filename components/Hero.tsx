"use client";

import { motion } from "motion/react";
import { Typewriter } from "./Typewriter";
import { profile } from "@/content/profile";

const easeOut = [0.19, 1, 0.22, 1] as const;

export function Hero() {
  return (
    <section className="container-page relative flex min-h-[88vh] flex-col justify-center pt-24">
      {profile.hero.availableForWork && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 text-xs font-medium uppercase tracking-wider text-[var(--fg-muted)]"
        >
          <span
            aria-hidden
            className="relative inline-flex h-2 w-2"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
            <span className="relative inline-block h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for select engagements
        </motion.p>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
        className="text-display max-w-5xl font-bold"
      >
        {profile.hero.h1}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
        className="mt-6 max-w-3xl text-balance text-lg text-[var(--fg-muted)] md:text-xl"
      >
        {profile.hero.h2}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.4 }}
        className="mt-12 text-base text-[var(--fg)] md:text-lg"
      >
        <Typewriter phrases={profile.hero.typewriter} />
      </motion.div>
    </section>
  );
}
