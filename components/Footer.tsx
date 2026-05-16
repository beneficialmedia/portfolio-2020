import Link from "next/link";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[var(--border)] py-12 print:hidden">
      <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-[var(--fg-muted)]">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="text-xs text-[var(--fg-muted)]">
            {profile.title}
            {profile.location ? ` · ${profile.location}` : ""}
          </p>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-4 text-sm text-[var(--fg-muted)]"
        >
          <a
            href={`mailto:${profile.social.email}`}
            className="inline-flex items-center gap-1.5 hover:text-[var(--fg)]"
          >
            <Mail size={14} aria-hidden /> Email
          </a>
          {profile.social.linkedin && (
            <a
              href={`https://linkedin.com/in/${profile.social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--fg)]"
            >
              <Linkedin size={14} aria-hidden /> LinkedIn
            </a>
          )}
          {profile.social.github && (
            <a
              href={`https://github.com/${profile.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--fg)]"
            >
              <Github size={14} aria-hidden /> GitHub
            </a>
          )}
          {profile.social.resume && (
            <Link
              href={profile.social.resume}
              className="inline-flex items-center gap-1.5 hover:text-[var(--fg)]"
            >
              <FileText size={14} aria-hidden /> Resume
            </Link>
          )}
        </nav>
      </div>
    </footer>
  );
}
