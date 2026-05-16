// Client-safe types + pure helpers. Anything that touches the filesystem
// lives in lib/work-server.ts so it never gets bundled for the browser.

export type WorkGalleryLayout = "1" | "2" | "3" | "4";

export type WorkGallery = {
  title: string;
  description: string;
  layout: WorkGalleryLayout;
  caption: string;
  files: string[];
};

export type WorkFrontmatter = {
  slug: string;
  company: string;
  role: string;
  team?: string;
  logo?: string;
  /** Override the poster card background. Defaults to a soft tint of `accent`.
   *  Useful when the logo itself carries a strong brand color and the surrounding
   *  tile should match (e.g. Fresh Paint's amber-on-amber treatment). */
  logoBg?: string;
  /** Scale (0–1) applied to the logo inside the poster card. Defaults to 1.
   *  Use < 1 to shrink the rendered logo while the matching `logoBg` keeps the
   *  apparent poster size consistent — reduces visible bitmap aliasing. */
  logoScale?: number;
  from: string;
  to: string;
  accent: string;
  summary: string;
  galleries: WorkGallery[];
  /** Case studies marked draft show a banner; surface for honest user review. */
  draft?: boolean;
};

export type Work = {
  frontmatter: WorkFrontmatter;
  body: string;
};

// All galleries render in a single uniform grid of ~200px tiles regardless of
// the per-case-study `layout` value from the 2020 site. Tiles use object-contain
// so portrait/landscape/skyscraper ad units all stay fully visible side by side.
// The `layout` value is kept in frontmatter for back-compat but no longer drives
// column count.
export function galleryGridClass(_layout: WorkGalleryLayout): string {
  return "grid grid-cols-[repeat(auto-fill,minmax(140px,200px))] gap-3";
}

export function formatDateRange(from: string, to: string): string {
  const fmt = (s: string) => {
    const [y, m] = s.split("-");
    if (!m) return y;
    const month = new Date(`${s}-01`).toLocaleString("en-US", {
      month: "short",
    });
    return `${month} ${y}`;
  };
  return `${fmt(from)} — ${fmt(to)}`;
}
