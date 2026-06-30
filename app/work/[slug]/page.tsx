import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";

import { formatDateRange, galleryGridClass } from "@/lib/work";
import { getAllWork, getWork, getWorkSlugs } from "@/lib/work-server";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const work = getWork(slug);
    return {
      title: `${work.frontmatter.company} · ${work.frontmatter.role}`,
      description: work.frontmatter.summary,
    };
  } catch {
    return { title: "Work" };
  }
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  if (!getWorkSlugs().includes(slug)) {
    notFound();
  }

  const work = getWork(slug);
  const { frontmatter, body } = work;
  const allWork = getAllWork();
  const currentIndex = allWork.findIndex(
    (w) => w.frontmatter.slug === frontmatter.slug,
  );
  const next = allWork[(currentIndex + 1) % allWork.length];

  return (
    <article className="pt-28 pb-24">
      <div className="container-page">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
        >
          <ArrowLeft size={14} aria-hidden />
          All work
        </Link>

        {frontmatter.draft && (
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-300">
            <span aria-hidden>•</span> Draft, claims marked{" "}
            <code className="rounded bg-amber-500/20 px-1 py-0.5">TODO(dylan)</code>{" "}
            pending verification
          </p>
        )}

        <header className="mt-10 grid gap-8 border-b border-[var(--border)] pb-12 md:grid-cols-[1fr_auto] md:gap-12">
          <div className="max-w-3xl">
            <p
              className="text-xs uppercase tracking-[0.22em]"
              style={{ color: frontmatter.accent }}
            >
              {formatDateRange(frontmatter.from, frontmatter.to)}
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
              {frontmatter.company}
            </h1>
            <p className="mt-3 text-xl text-[var(--fg-muted)]">
              {frontmatter.role}
              {frontmatter.team ? ` · ${frontmatter.team}` : ""}
            </p>
            <p className="mt-6 text-lg leading-relaxed">{frontmatter.summary}</p>
          </div>

          {frontmatter.logo && (
            <div
              className="hidden h-24 w-24 shrink-0 overflow-hidden rounded-[var(--radius-card)] p-[12px] md:block"
              style={
                frontmatter.logoBg ? { background: frontmatter.logoBg } : undefined
              }
            >
              <div
                className="relative h-full w-full"
                style={
                  frontmatter.logoScale
                    ? { transform: `scale(${frontmatter.logoScale})` }
                    : undefined
                }
              >
                <Image
                  src={frontmatter.logo}
                  alt={`${frontmatter.company} logo`}
                  fill
                  sizes="72px"
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </header>

        <div className="mt-12 grid gap-12 md:grid-cols-[2fr_1fr]">
          <div className="max-w-none text-[var(--fg)] [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_h4]:mb-2 [&_h4]:mt-6 [&_h4]:text-lg [&_h4]:font-semibold [&_li]:my-2 [&_li]:leading-relaxed [&_li::marker]:text-[var(--fg-muted)] [&_p]:leading-relaxed [&_p]:my-4 [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            <MDXRemote source={body} />
          </div>
          <aside className="text-sm">
            <h2 className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--fg-muted)]">
              Highlights
            </h2>
            <dl className="space-y-3 text-[var(--fg)]">
              <div>
                <dt className="text-[var(--fg-muted)]">Role</dt>
                <dd>{frontmatter.role}</dd>
              </div>
              {frontmatter.team && (
                <div>
                  <dt className="text-[var(--fg-muted)]">Team</dt>
                  <dd>{frontmatter.team}</dd>
                </div>
              )}
              <div>
                <dt className="text-[var(--fg-muted)]">When</dt>
                <dd>{formatDateRange(frontmatter.from, frontmatter.to)}</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="mt-20 space-y-24">
          {frontmatter.galleries.map((gallery) => (
            <section key={gallery.title}>
              <header className="mb-6 max-w-3xl">
                <h2 className="text-2xl font-bold md:text-3xl">
                  {gallery.title}
                </h2>
                <p className="mt-3 text-[var(--fg-muted)]">
                  {gallery.description}
                </p>
              </header>

              <div className={galleryGridClass(gallery.layout)}>
                {gallery.files.map((src) => (
                  <figure
                    key={src}
                    className="relative aspect-square overflow-hidden rounded-md bg-[var(--bg-elevated)] ring-1 ring-[var(--border)]"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="200px"
                      className="object-contain p-2"
                    />
                  </figure>
                ))}
              </div>

              {gallery.caption && (
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                  {gallery.caption}
                </p>
              )}
            </section>
          ))}
        </div>

        {next && next.frontmatter.slug !== frontmatter.slug && (
          <nav className="mt-24 border-t border-[var(--border)] pt-10">
            <Link
              href={`/work/${next.frontmatter.slug}`}
              className="group flex items-center justify-between gap-6"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                  Next
                </span>
                <span className="mt-1 block text-2xl font-bold transition-colors group-hover:text-[var(--section-accent)] md:text-3xl">
                  {next.frontmatter.company}
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
