"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full bg-[var(--section-accent)] px-4 py-2 text-sm font-medium text-[var(--accent-fg)] transition-opacity hover:opacity-90"
    >
      <Printer size={14} aria-hidden />
      Print / Save as PDF
    </button>
  );
}
