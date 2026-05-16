import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";

import { getAllWriting, getWriting, getWritingSlugs } from "@/lib/writing-server";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getWritingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!getWritingSlugs().includes(slug)) return { title: "Writing" };
  const essay = getWriting(slug);
  return {
    title: essay.frontmatter.title,
    description: essay.frontmatter.description,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function EssayPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  if (!getWritingSlugs().includes(slug)) {
    notFound();
  }

  const essay = getWriting(slug);
  const { frontmatter, body } = essay;

  const all = getAllWriting();
  const currentIndex = all.findIndex((e) => e.frontmatter.slug === slug);
  const next = all[(currentIndex + 1) % all.length];

  return (
    <article
      className="pt-28 pb-24"
      style={
        frontmatter.accent
          ? ({
              ["--section-accent" as string]: frontmatter.accent,
            } as React.CSSProperties)
          : undefined
      }
    >
      <div className="container-page max-w-[720px]">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
        >
          <ArrowLeft size={14} aria-hidden />
          All essays
        </Link>

        <header className="mt-10 border-b border-[var(--border)] pb-10">
          <p
            className="text-xs uppercase tracking-[0.22em]"
            style={{ color: "var(--section-accent)" }}
          >
            {formatDate(frontmatter.date)}
            {frontmatter.readMinutes
              ? ` · ${frontmatter.readMinutes} min read`
              : ""}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            {frontmatter.title}
          </h1>
          {frontmatter.subtitle && (
            <p className="mt-3 text-xl text-[var(--fg-muted)]">
              {frontmatter.subtitle}
            </p>
          )}
        </header>

        <div className="mt-10 text-[var(--fg)] [&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-[var(--section-accent)] [&_blockquote]:pl-4 [&_blockquote]:text-[var(--fg-muted)] [&_blockquote]:italic [&_code]:rounded [&_code]:bg-[var(--bg-elevated)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.9em] [&_h3]:mb-3 [&_h3]:mt-10 [&_h3]:text-xl [&_h3]:font-bold [&_li]:my-1.5 [&_li]:leading-relaxed [&_p]:my-5 [&_p]:leading-[1.75] [&_p]:text-[1.05rem] [&_strong]:font-semibold [&_ul]:my-5 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          <MDXRemote source={body} />
        </div>

        {next && next.frontmatter.slug !== frontmatter.slug && (
          <nav className="mt-24 border-t border-[var(--border)] pt-10">
            <Link
              href={`/writing/${next.frontmatter.slug}`}
              className="group flex items-center justify-between gap-6"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                  Next
                </span>
                <span className="mt-1 block text-2xl font-bold transition-colors group-hover:text-[var(--section-accent)] md:text-3xl">
                  {next.frontmatter.title}
                </span>
              </span>
              <span className="text-xl text-[var(--fg-muted)] transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </nav>
        )}
      </div>
    </article>
  );
}
