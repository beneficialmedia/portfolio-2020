"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const next = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--fg)] transition-colors hover:bg-[var(--section-accent)] hover:text-[var(--accent-fg)]"
    >
      {mounted ? (
        resolvedTheme === "dark" ? (
          <Sun size={16} aria-hidden />
        ) : (
          <Moon size={16} aria-hidden />
        )
      ) : (
        <span className="block h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
