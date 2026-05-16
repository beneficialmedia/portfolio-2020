export default function Loading() {
  return (
    <div className="container-page flex min-h-[50vh] items-center justify-center">
      <div
        aria-hidden
        className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--section-accent)]"
      />
      <span className="sr-only">Loading</span>
    </div>
  );
}
