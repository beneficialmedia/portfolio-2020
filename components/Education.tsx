import { education } from "@/content/experience";

export function Education() {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {education.map((e) => (
        <li
          key={`${e.school}-${e.from}`}
          className="rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-elevated)] p-6"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--fg-muted)]">
            {e.from} – {e.to}
          </p>
          <h3 className="mt-2 text-lg font-bold leading-tight">{e.school}</h3>
          <p className="mt-1 text-sm text-[var(--fg-muted)]">{e.credential}</p>
        </li>
      ))}
    </ul>
  );
}
