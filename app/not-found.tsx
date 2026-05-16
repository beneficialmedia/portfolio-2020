import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)]">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold md:text-6xl">Page not found</h1>
      <p className="mt-4 max-w-md text-[var(--fg-muted)]">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-[var(--section-accent)] px-5 py-2 text-sm font-medium text-[var(--accent-fg)] transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </section>
  );
}
