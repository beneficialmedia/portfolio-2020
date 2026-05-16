import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";

import { Principles } from "@/components/Principles";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { Education } from "@/components/Education";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: profile.about.bio.slice(0, 160),
};

export default function AboutPage() {
  return (
    <article className="pt-32 pb-24">
      <div className="container-page">
        <header className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]">
            About
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            {profile.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--fg-muted)]">
            {profile.about.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {profile.social.resume && (
              <Link
                href={profile.social.resume}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--section-accent)] px-4 py-2 text-sm font-medium text-[var(--accent-fg)] transition-opacity hover:opacity-90"
              >
                <FileText size={14} aria-hidden />
                View résumé
              </Link>
            )}
            <a
              href={`mailto:${profile.social.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2 text-sm font-medium hover:border-[var(--section-accent)] hover:text-[var(--section-accent)]"
            >
              Get in touch
            </a>
            <ThemeToggle />
          </div>
        </header>

        <section className="mt-24">
          <header className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]">
              Principles
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              How I approach the work
            </h2>
          </header>
          <Principles />
        </section>

        <section className="mt-24">
          <header className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]">
              Skills
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Tools & craft</h2>
          </header>
          <Skills />
        </section>

        <section className="mt-24">
          <header className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]">
              Experience
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Timeline</h2>
          </header>
          <Timeline />
        </section>

        <section className="mt-24">
          <header className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]">
              Education
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Where I trained
            </h2>
          </header>
          <Education />
        </section>
      </div>
    </article>
  );
}
