import type { Metadata } from "next";
import { WorkGrid } from "@/components/WorkGrid";
import { getAllWork } from "@/lib/work-server";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Microsoft Education, Amazon Advertising, Metia Solutions, and earlier Microsoft contract work.",
};

export default function WorkIndexPage() {
  const items = getAllWork();

  return (
    <section className="container-page pt-32">
      <header className="mb-14 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]">
          Work
        </p>
        <h1 className="mt-3 text-4xl font-bold md:text-6xl">
          Selected case studies
        </h1>
        <p className="mt-6 text-lg text-[var(--fg-muted)]">
          A reverse-chronological selection of the work I've shipped — from
          early ad-tech experiments to accessibility-first products at scale.
        </p>
      </header>

      <WorkGrid items={items.map((w) => w.frontmatter)} />
    </section>
  );
}
