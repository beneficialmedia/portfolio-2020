import { skills } from "@/content/skills";

export function Skills() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {skills.map((cat) => (
        <section key={cat.id}>
          <header className="mb-4">
            <h3 className="text-lg font-bold">{cat.title}</h3>
            <p className="text-sm text-[var(--fg-muted)]">{cat.caption}</p>
          </header>
          <ul className="flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <li
                key={item}
                className="inline-flex rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 text-xs text-[var(--fg)] transition-colors hover:border-[var(--section-accent)] hover:text-[var(--section-accent)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
