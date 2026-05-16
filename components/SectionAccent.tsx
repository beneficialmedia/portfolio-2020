"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { navLinks } from "@/content/profile";

// Drives the --section-accent custom property based on the current route.
// This is what powers selection color, focus rings, and hover accents.
export function SectionAccent() {
  const pathname = usePathname();

  useEffect(() => {
    const match =
      navLinks.find((l) =>
        l.href === "/" ? pathname === "/" : pathname.startsWith(l.href),
      ) ?? navLinks[0];
    document.documentElement.style.setProperty(
      "--section-accent",
      match.color,
    );
  }, [pathname]);

  return null;
}
