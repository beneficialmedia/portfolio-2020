"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import type { WorkFrontmatter } from "@/lib/work";
import { formatDateRange } from "@/lib/work";

type Props = {
  work: WorkFrontmatter;
  index?: number;
};

const easeOut = [0.19, 1, 0.22, 1] as const;

export function WorkCard({ work, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: easeOut, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-elevated)]"
    >
      <Link
        href={`/work/${work.slug}`}
        className="block"
        aria-label={`View ${work.company} case study`}
      >
        <div
          className="relative aspect-[4/3] w-full overflow-hidden"
          style={{
            background:
              work.logoBg ??
              `color-mix(in oklab, ${work.accent} 8%, var(--bg-elevated))`,
          }}
        >
          {work.logo ? (
            <div className="absolute inset-0 grid place-items-center p-10">
              <div
                className="relative h-full w-full"
                style={
                  work.logoScale
                    ? { transform: `scale(${work.logoScale})` }
                    : undefined
                }
              >
                <Image
                  src={work.logo}
                  alt={`${work.company} logo`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </div>
          ) : (
            <div
              aria-hidden
              className="absolute inset-0 grid place-items-center"
            >
              <span
                className="text-3xl font-bold"
                style={{ color: work.accent }}
              >
                {work.company}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-start justify-between gap-4 p-6">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--fg-muted)]">
              {formatDateRange(work.from, work.to)}
            </p>
            <h3 className="mt-2 text-xl font-bold leading-tight">
              {work.company}
            </h3>
            <p className="mt-1 text-sm text-[var(--fg-muted)]">{work.role}</p>
          </div>
          <span
            className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] transition-colors group-hover:border-transparent"
            style={{
              backgroundColor: "transparent",
            }}
          >
            <ArrowUpRight
              size={16}
              aria-hidden
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>

        <p className="px-6 pb-6 text-sm leading-relaxed text-[var(--fg-muted)]">
          {work.summary}
        </p>

        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
          style={{ backgroundColor: work.accent }}
        />
      </Link>
    </motion.article>
  );
}
