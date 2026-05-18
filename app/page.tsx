import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/Hero";
import { WorkGrid } from "@/components/WorkGrid";
import { getAllWork } from "@/lib/work-server";
import { getAllWriting } from "@/lib/writing-server";

function formatEssayDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function HomePage() {
  const featured = getAllWork().slice(0, 3);
  const recentEssays = getAllWriting().slice(0, 2);

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

      {recentEssays.length > 0 && (
        <section className="container-page mt-12 md:mt-24">
          <header className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]">
                Latest writing
              </p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Essays</h2>
            </div>
            <Link
              href="/writing"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-[var(--fg-muted)] hover:text-[var(--fg)]"
            >
              All essays
              <ArrowRight
                size={14}
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {recentEssays.map(({ frontmatter }) => (
              <Link
                key={frontmatter.slug}
                href={`/writing/${frontmatter.slug}`}
                className="group block rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition-colors hover:border-[var(--section-accent)]"
                style={
                  frontmatter.accent
                    ? ({
                        ["--section-accent" as string]: frontmatter.accent,
                      } as React.CSSProperties)
                    : undefined
                }
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                  {formatEssayDate(frontmatter.date)}
                  {frontmatter.readMinutes
                    ? ` · ${frontmatter.readMinutes} min read`
                    : ""}
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-tight transition-colors group-hover:text-[var(--section-accent)]">
                  {frontmatter.title}
                </h3>
                {frontmatter.subtitle && (
                  <p className="mt-2 text-[var(--fg-muted)]">
                    {frontmatter.subtitle}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
