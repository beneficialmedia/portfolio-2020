# Portfolio 2026

A clearly evolutional rebuild of the 2020 Gatsby portfolio, now on Next.js 15.

**Live:** https://www.beneficialmedia.com (after deploy)

## Stack

- **Next.js 15** (App Router, React Server Components) + **React 19** + **TypeScript 5**
- **Tailwind CSS v4** (CSS-first config in [`app/globals.css`](app/globals.css))
- **MDX** for case studies (`@next/mdx` + `next-mdx-remote`)
- **Motion** (Framer Motion 12+) for interactions and route transitions
- **next-themes** for dark mode (system-aware, persisted)
- **next/font/google** — Source Sans 3 (display) + Jost (Futura-inspired body)

## Run it

> Requires **Node 18.18+** (recommended: Node 22 LTS).

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build               # production build
npm run start               # serve built app
npm run lint                # next/eslint
npm run typecheck           # tsc --noEmit
npm run generate:resume     # build + render /resume to public/dylan-kilgore-resume.pdf
```

## Résumé PDF

`/resume` renders a print-optimized résumé in the browser. To produce a static
`Dylan-Kilgore-Resume.pdf` artifact (the file the "Download PDF" button on
`/resume` links to), run:

```bash
npm run generate:resume
```

Under the hood this builds the site, boots `next start` on port 3737, and uses
Puppeteer to render `/resume` with `emulateMediaType('print')`. The output
lands at `public/dylan-kilgore-resume.pdf` and gets committed alongside other
content. Re-run whenever résumé content (in `content/profile.ts`,
`content/experience.ts`, or `content/skills.ts`) changes.

> Puppeteer downloads its own Chromium on install (~170 MB). One-time cost.
> The Download PDF button on `/resume` only appears when the PDF file exists
> on disk at build time — no broken links if it hasn't been generated yet.

## Project structure

```
app/                Routes (App Router)
  layout.tsx        Root shell, fonts, theme, menu, footer
  page.tsx          Home (hero + featured work)
  template.tsx      Per-route fade-up transition
  work/             /work + /work/[slug]
  writing/          /writing + /writing/[slug]
  about/            /about
  resume/           /resume (print-optimized)
components/         Reusable UI
  menu/             Morphing nav overlay
  Hero, Typewriter, WorkGrid, WorkCard,
  Skills, Principles, Timeline, Education,
  Footer, ThemeProvider, ThemeToggle, SectionAccent
content/            Single source of truth for copy
  profile.ts        Name, hero, bio, social, nav, metadata
  skills.ts         Categorized skills
  experience.ts     Timeline + education entries
  work/*.mdx        Case studies (frontmatter + body)
  writing/*.mdx     Essays (frontmatter + body)
lib/
  work.ts           Types + pure helpers (client-safe)
  work-server.ts    fs/gray-matter loader (server-only)
  writing.ts        Types
  writing-server.ts fs/gray-matter loader (server-only)
  cn.ts             Tailwind class merge
public/
  images/work/      Case study imagery
scripts/
  generate-resume-pdf.mjs   Puppeteer → public/dylan-kilgore-resume.pdf
```

## Where to edit what

| Want to change…                  | Edit…                                    |
|----------------------------------|------------------------------------------|
| Hero copy / typewriter lines     | `content/profile.ts`                     |
| Bio                              | `content/profile.ts` (`about.bio`)       |
| Principle cards                  | `content/profile.ts` (`about.principles`)|
| Skills                           | `content/skills.ts`                      |
| Timeline                         | `content/experience.ts`                  |
| A case study's narrative         | `content/work/<slug>.mdx`                |
| A case study's metadata/gallery  | frontmatter in `content/work/<slug>.mdx` |
| Section accent colors            | `content/profile.ts` (`navLinks[].color`)|
| Site metadata, social, résumé    | `content/profile.ts` (`social`, `meta`)  |
| Typography / theme tokens        | `app/globals.css`                        |

## Evolutional DNA preserved from 2020

- Color-coded sections (Home black, Work indigo `#3a3d98`, About red `#d52d43`)
- Morphing liquid menu reveal (three layered shapes; clip-path circle animation replaces the original raw SVG `d` interpolation)
- Source Sans typographic voice (Source Sans 3 succeeds Source Sans Pro)
- Hero typewriter rhythm
- Masonry-flavored work cards → image-rich detail pages
- Layout-keyed galleries: case studies define `layout: "1" | "2" | "3" | "4"` in frontmatter; `lib/work.ts` maps to CSS Grid columns

## Notable modernizations

- App Router + RSC; case studies static-generated via `generateStaticParams`
- Dark mode via `next-themes`, system-default
- All imagery served via `next/image` with intrinsic sizing
- Accessibility-first: skip link, focus-visible rings, `prefers-reduced-motion` honored, semantic landmarks
- Fluid type via `clamp()` in `globals.css`
- No icon PNG wall — `lucide-react` line icons + text-based skill chips

## TODOs left for Dylan

Search the repo for `TODO(dylan)` — those are the spots where LinkedIn-sourced copy should replace the drafted text:

- `content/profile.ts` — `about.bio` (drafted from 2020 about-me.json + role-target inference)
- `content/experience.ts` — post-2020 roles + current company

## Deploy

Vercel — connect the repo, defaults work out of the box (no root-directory override needed; the Next.js project is at the repo root).
