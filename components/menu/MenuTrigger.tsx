"use client";

import { cn } from "@/lib/cn";

type Props = {
  open: boolean;
  onToggle: () => void;
};

export function MenuTrigger({ open, onToggle }: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="primary-menu"
      className={cn(
        "fixed right-5 top-5 z-50 grid h-11 w-11 place-items-center rounded-full",
        "border border-[var(--border)] bg-[var(--bg-elevated)] backdrop-blur",
        "transition-colors hover:bg-[var(--section-accent)] hover:text-[var(--accent-fg)]",
        "md:right-8 md:top-8",
        "print:hidden",
      )}
    >
      <span className="sr-only">Menu</span>
      <span
        aria-hidden
        className="relative block h-3 w-5"
      >
        <span
          className={cn(
            "absolute left-0 top-0 block h-[2px] w-full bg-current transition-transform duration-500",
            "ease-[cubic-bezier(0.19,1,0.22,1)]",
            open && "translate-y-[5px] rotate-45",
          )}
        />
        <span
          className={cn(
            "absolute left-0 top-[5px] block h-[2px] w-full bg-current transition-opacity duration-300",
            open && "opacity-0",
          )}
        />
        <span
          className={cn(
            "absolute bottom-0 left-0 block h-[2px] w-full bg-current transition-transform duration-500",
            "ease-[cubic-bezier(0.19,1,0.22,1)]",
            open && "-translate-y-[5px] -rotate-45",
          )}
        />
      </span>
    </button>
  );
}
