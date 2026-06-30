import Link from "next/link";
import { experience } from "@/content/experience";

function fmt(s: string) {
  if (s === "present") return "Present";
  const [y, m] = s.split("-");
  if (!m) return y;
  const month = new Date(`${s}-01`).toLocaleString("en-US", { month: "short" });
  return `${month} ${y}`;
}

export function Timeline() {
  const visible = experience.filter((e) => !e.omitFromTimeline);
  return (
    <ol className="relative space-y-10 border-l border-[var(--border)] pl-6">
      {visible.map((entry, i) => (
        <li key={`${entry.company}-${i}`} className="relative">
          <span
            aria-hidden
            className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-[var(--bg)] bg-[var(--section-accent)]"
          />
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--fg-muted)]">
            {fmt(entry.from)} – {fmt(entry.to)}
          </p>
          <h3 className="mt-1 text-xl font-bold">{entry.company}</h3>
          <p className="text-sm text-[var(--fg-muted)]">{entry.role}</p>
          <p className="mt-3 max-w-2xl leading-relaxed">{entry.summary}</p>
          {entry.workSlug && (
            <Link
              href={`/work/${entry.workSlug}`}
              className="mt-3 inline-block text-sm font-medium text-[var(--section-accent)] hover:underline"
            >
              See case study →
            </Link>
          )}
        </li>
      ))}
    </ol>
  );
}
