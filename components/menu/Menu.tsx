"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { MenuTrigger } from "./MenuTrigger";
import { navLinks, profile } from "@/content/profile";

const easeOut = [0.19, 1, 0.22, 1] as const;

// Three layered liquid shapes — replaces the 2020 site's SVG-morphing menu
// with an equivalent clip-path reveal that breathes open from the trigger.
const shapeLayers = [
  { color: "#413f46", opacity: 0.7, delay: 0 },
  { color: "#e6e5ea", opacity: 0.7, delay: 0.08 },
  { color: "var(--bg-elevated)", opacity: 1, delay: 0.16 },
];

export function Menu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape; lock scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    // Lock on the html element, not body. With `scrollbar-gutter: stable`
    // applied to html in globals.css, the reserved gutter is preserved when
    // html overflow becomes hidden — so there's no layout shift in either
    // direction (scrollable page or not).
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      root.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <MenuTrigger open={open} onToggle={() => setOpen((v) => !v)} />

      <AnimatePresence>
        {open && (
          <motion.div
            id="primary-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Primary navigation"
            className="fixed inset-0 z-40"
            initial="closed"
            animate="open"
            exit="closed"
          >
            {shapeLayers.map((layer, i) => (
              <motion.div
                key={i}
                aria-hidden
                className="absolute inset-0"
                style={{ backgroundColor: layer.color, opacity: layer.opacity }}
                variants={{
                  closed: {
                    clipPath: "circle(0% at calc(100% - 2.75rem) 2.75rem)",
                  },
                  open: {
                    clipPath: "circle(150% at calc(100% - 2.75rem) 2.75rem)",
                  },
                }}
                transition={{
                  duration: 0.8,
                  ease: easeOut,
                  delay: open ? layer.delay : 0.32 - layer.delay,
                }}
              />
            ))}

            <motion.nav
              className="relative flex h-full flex-col items-center justify-center gap-2 px-6 text-center"
              variants={{
                open: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
                closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
              }}
            >
              <motion.p
                className="mb-10 text-sm uppercase tracking-[0.3em] text-[var(--fg-muted)]"
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 8 },
                }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                {profile.shortName} · {profile.title}
              </motion.p>

              <ul className="flex flex-col items-center gap-3">
                {navLinks.map((link) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <motion.li
                      key={link.name}
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 16 },
                      }}
                      transition={{ duration: 0.5, ease: easeOut }}
                    >
                      <Link
                        href={link.href}
                        className="group relative inline-block text-[clamp(2.5rem,8vw,5rem)] font-bold leading-none tracking-tight text-[var(--fg)] transition-colors hover:text-[var(--section-accent)]"
                        style={
                          {
                            ["--section-accent" as string]: link.color,
                          } as React.CSSProperties
                        }
                      >
                        {link.title}
                        <span
                          aria-hidden
                          className={`pointer-events-none absolute -bottom-1 left-1/2 h-[3px] -translate-x-1/2 origin-center bg-[var(--section-accent)] transition-[width] duration-300 ${active ? "w-1/3" : "w-0 group-hover:w-1/2"}`}
                        />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                className="mt-12 flex items-center gap-5 text-sm text-[var(--fg-muted)]"
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 8 },
                }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <a
                  href={`mailto:${profile.social.email}`}
                  className="hover:text-[var(--fg)]"
                >
                  {profile.social.email}
                </a>
                {profile.social.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${profile.social.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--fg)]"
                  >
                    LinkedIn
                  </a>
                )}
                {profile.social.github && (
                  <a
                    href={`https://github.com/${profile.social.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--fg)]"
                  >
                    GitHub
                  </a>
                )}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
