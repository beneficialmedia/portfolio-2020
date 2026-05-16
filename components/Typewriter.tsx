"use client";

import { useEffect, useState } from "react";

type Props = {
  phrases: string[];
  typeMs?: number;
  eraseMs?: number;
  holdMs?: number;
  className?: string;
};

// Lightweight typewriter — no dependency, respects prefers-reduced-motion.
export function Typewriter({
  phrases,
  typeMs = 55,
  eraseMs = 25,
  holdMs = 1800,
  className,
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">("typing");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) {
      setText(phrases[index]!);
      return;
    }
    const current = phrases[index]!;
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (text.length < current.length) {
        t = setTimeout(() => setText(current.slice(0, text.length + 1)), typeMs);
      } else {
        t = setTimeout(() => setPhase("holding"), holdMs);
      }
    } else if (phase === "holding") {
      t = setTimeout(() => setPhase("erasing"), holdMs);
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), eraseMs);
      } else {
        t = setTimeout(() => {
          setPhase("typing");
          setIndex((i) => (i + 1) % phrases.length);
        }, 200);
      }
    }
    return () => clearTimeout(t);
  }, [phase, text, index, phrases, typeMs, eraseMs, holdMs, reduced]);

  return (
    <span className={className} aria-live="polite">
      <span>{text}</span>
      <span
        aria-hidden
        className="ml-0.5 inline-block h-[1em] w-[2px] -translate-y-[2px] animate-pulse bg-[var(--section-accent)] align-middle"
      />
    </span>
  );
}
