import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/Hero";
import { WorkGrid } from "@/components/WorkGrid";
import { getAllWork } from "@/lib/work-server";

export default function HomePage() {
  const featured = getAllWork().slice(0, 3);

  return (
    <>
      <Hero />

      <section className="container-page mt-12 md:mt-24">
        <header className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]">
              Selected work
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Case studies
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-[var(--fg-muted)] hover:text-[var(--fg)]"
          >
            All work
            <ArrowRight
              size={14}
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </header>

        <WorkGrid items={featured.map((w) => w.frontmatter)} />
      </section>
    </>
  );
}
