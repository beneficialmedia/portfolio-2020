import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getAllWriting } from "@/lib/writing-server";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on AI-native design, design systems, and the practice of designing in the real stack.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function WritingIndexPage() {
  const essays = getAllWriting();

  return (
    <section className="container-page pt-32">
      <header className="mb-14 max-w-5xl">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]">
          Writing
        </p>
        <h1 className="mt-3 text-4xl font-bold md:text-6xl">
          Essays
        </h1>
        <p className="mt-6 text-pretty text-lg text-[var(--fg-muted)]">
          Long-form thinking on AI-native design, design systems, and the
          practice of designing in the real stack.
        </p>
      </header>

      {essays.length === 0 ? (
        <p className="text-[var(--fg-muted)]">No essays yet. Check back soon.</p>
      ) : (
        <ul className="divide-y divide-[var(--border)] border-t border-[var(--border)]">
          {essays.map(({ frontmatter }) => (
            <li key={frontmatter.slug}>
              <Link
                href={`/writing/${frontmatter.slug}`}
                className="group grid gap-2 py-8 md:grid-cols-[160px_1fr_auto] md:items-baseline md:gap-6"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                  {formatDate(frontmatter.date)}
                  {frontmatter.readMinutes
                    ? ` · ${frontmatter.readMinutes} min read`
                    : ""}
                </p>
                <div className="min-w-0">
                  <h2
                    className="text-2xl font-bold leading-tight transition-colors group-hover:text-[var(--section-accent)] md:text-3xl"
                    style={
                      frontmatter.accent
                        ? ({
                            ["--section-accent" as string]: frontmatter.accent,
                          } as React.CSSProperties)
                        : undefined
                    }
                  >
                    {frontmatter.title}
                  </h2>
                  {frontmatter.subtitle && (
                    <p className="mt-2 text-[var(--fg-muted)]">
                      {frontmatter.subtitle}
                    </p>
                  )}
                </div>
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
