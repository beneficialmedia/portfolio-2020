# Portfolio Rebuild — Plan & Log

A record of the plan, the decisions, and the deviations from the rebuild that
replaced the 2020 Gatsby site with the current Next.js 16 portfolio. Kept so
future-Dylan (or anyone else) can answer "why is it like this?" without
re-deriving the reasoning.

## Context

The site at `c:/source/portfolio-2020` was built in 2020 on Gatsby 2 + React 16
via `@christiandavid/gatsby-theme-byfolio`. Both Gatsby 2 and React 16 are EOL.
Content, IA, and tone reflected a 2020 "front-end developer" positioning —
emoji-heavy typewriter intro, Flash/ActionScript skills, "20+ years" inflation,
hardcoded `availableToHire: false`, WordPress blog link.

Goal: **a clearly evolutional rebuild** — same DNA, modern execution,
repositioned for a senior+ product designer / UX engineer audience with an
AI-native through-line. Build at the repo root, retire the Gatsby site.

## Stack

- **Next.js 16** (App Router, RSC) + **React 19** + **TypeScript 5**
- **Tailwind CSS v4** (CSS-first config, `@theme` blocks, no JS config file)
- **MDX** via `@next/mdx` + `next-mdx-remote` for case studies + essays
- **Motion 11** (Framer Motion) for interactions and route transitions
- **next/font/google** — Source Sans 3 (display) + Jost (Futura-inspired body)
- **next-themes** for dark mode (system-aware, persisted)
- **Lucide React** for line icons
- **Puppeteer** (devDependency) for résumé PDF generation
- Deploy target: **Vercel**, domain `beneficialmedia.com`

## IA refinement

The 2020 site had 5 nav items (Home / Experience / Skills / About / Blog →
external). Collapsed to **4 items**, with a parallel `/resume` route surfaced
from the About page and footer:

| 2020                         | 2026                                       | Notes                                                                                  |
|------------------------------|--------------------------------------------|----------------------------------------------------------------------------------------|
| Home (`/`)                   | Home (`/`)                                 | Typewriter rhythm kept, emoji-free copy                                                |
| Experience                   | **Work** (`/work` + `/work/[slug]`)        | Renamed; case studies on dedicated detail routes                                       |
| Skills                       | Merged into `/about`                       | Categorized chips, not a wall of logos                                                 |
| —                            | **Writing** (`/writing` + `/writing/[slug]`)| New surface for essays                                                                 |
| About me                     | **About** (`/about`)                       | Bio + principles + skills + timeline + education                                       |
| —                            | **Résumé** (`/resume`)                     | Print-optimized; linked from About + Footer; downloadable PDF artifact                 |
| Blog (external WordPress)    | Removed                                    | Replaced by in-site `/writing`                                                         |

Footer carries email, LinkedIn, GitHub, résumé link, copyright.

## Visual essence preserved (evolutional DNA)

1. **SVG morphing liquid menu** — three-shape clip-path reveal in
   [components/menu/Menu.tsx](components/menu/Menu.tsx), replacing the 2020
   site's raw `requestAnimationFrame` Bézier morphing. Same essence, modern
   primitive.
2. **Color-coded sections** — Home black, Work indigo, Writing teal, About red.
   Driven by `--accent-*` CSS custom properties in [globals.css](app/globals.css)
   that flip between light and dark mode while preserving WCAG 4.5:1.
3. **Hero typewriter** — kept the rhythm, dropped the emoji, reframed copy
   around AI-native design.
4. **Masonry-flavored work cards → image-rich detail pages** — preserved.
5. **Source Sans typographic voice** — Source Sans Pro (Adobe, paid) →
   Source Sans 3 (Google Fonts, free). Body type swapped from Futura PT
   (paid) to Jost (Google Fonts Futura-inspired alternative).
6. **Page transitions** — `template.tsx` AnimatePresence fade-up replaces the
   2020 `AniLink paintDrip` plugin.

## Build progression

Order the major moves happened tonight. Each step uncovered context that
changed the plan for the next.

### 1. Scaffold + first content port (initial plan)

- Scaffolded Next.js 16 + React 19 + TS + Tailwind v4 + MDX + Motion at
  `v2/` (subdirectory; Gatsby kept at root for reference)
- Ported three case studies (Amazon, Microsoft, Metia) from the 2020 MD files
- Wrote first-pass `profile.ts` / `skills.ts` / `experience.ts` from inference
  + the 2020 `about-me.json`
- Built shell: layout, morphing menu, footer, theme toggle, section accents
- Built home, work index/detail, about, resume, not-found, loading, template
- Bug fixes along the way: dark-mode accent contrast (WCAG 4.5:1), scrollbar
  gutter shift when menu opens (locked at `html`, not `body`)

### 2. Adding the Pulumi case study (speculative)

- Initial Pulumi case study drafted from public knowledge of Pulumi products
  (ESC, Insights, Copilot) without firsthand knowledge of what Dylan owned
- Every specific claim marked `TODO(dylan)`
- Draft banner added to the detail page so it was visibly provisional

### 3. LinkedIn-driven correction (major pivot)

When the LinkedIn PDF was provided, the plan changed substantially. Key
corrections applied across content:

- **Title**: Senior UX Designer (not Principal Product Designer)
- **Pulumi start date**: July 2024, not 2021. Only ~2 years tenure.
- **Eightfold (Feb 2022 – Jul 2024)** as Lead UX Engineer — entirely missing
  from initial draft. Founded **Octuple**, scaled to 10K+ touchpoints in
  8 months, won the 2022 Innovation Award.
- **Immersive Reader scale**: 46M MAU (corrected from 20M)
- **Microsoft Education assignments schema** — originated in 2014; major
  missing credit
- **Fresh Paint** (Aquent contract, 2012–2013): sole UI dev, 1B MAU, invented
  **BoundsType** property — added as its own case study
- **Location**: Elko, Nevada (not Seattle)
- **AI-native practice** — the core differentiator (LLM, agentic workflows,
  Meta AI / LLAMA, Google Gemini) — moved to a top-of-page skill category
- **Marine Corps Combat Motion Photographer (1998–2006)** — formative
  non-design background, added as final timeline row
- **Harvard Extension M.S. CSE (2018–2021)** — added to an Education section
  on About

After this pivot:
- 6 case studies total: Pulumi, Eightfold (new), Microsoft, Fresh Paint (new),
  Amazon, Metia
- Pulumi case study rewritten around real owned surfaces (Facet, Insights,
  ESC onboarding & approvals, VCS integrations, Policy as Code, Pulumi Neo)
- Microsoft case study expanded with the **"Designing for AI, before AI was the
  phrase"** framing — Microsoft Cognitive Services (neural TTS, neural MT, NLP,
  speech) as the AI substrate underneath Immersive Reader and Live Captions

### 4. Brand logos + imagery

- User provided real PNG logos for Pulumi, Eightfold, Fresh Paint; placeholder
  SVG wordmarks deleted
- `next.config.mjs` `remotePatterns` added for `pulumi.com`, `eightfoldai.github.io`,
  `raw.githubusercontent.com`, `upload.wikimedia.org`, `blogs.windows.com` — to
  source public product imagery for galleries until self-hosted screenshots are
  added
- Fresh Paint imagery: initially Wikipedia (66×66 icon, 421×236 screenshot —
  bot-shrunk for fair use); replaced with Microsoft Windows Experience Blog
  imagery (full quality artwork)
- Fresh Paint logo treatment: `logoBg: "#F4B400"` + `logoScale: 0.9` to
  reduce visible bitmap aliasing while keeping the apparent poster size
  consistent with the other cards (amber tile surrounding a 90%-scale PNG)

### 5. Two hiring manager passes

After build was substantially complete, ran a structured "would I hire you?"
review twice. The first pass identified gaps; the second pass confirmed most
were closed.

**First pass gaps**:
- Pulumi/Eightfold/Fresh Paint had no visuals
- AI-native claim was unevidenced
- Pulumi case study read like a job description
- Process-led content (what I decided, not just what I did) was missing
- Title/positioning was inconsistent (LinkedIn Senior vs. work that read at
  Principal+)
- Aquent timeline rows looked like job-hopping

**Iterations between passes**:
- Pulumi case study rewritten around 6 named project surfaces with real imagery
- Microsoft case study added the AI substrate framing
- Amazon case study reframed as the Flash → HTML5 inflection point
- Real brand logos replaced placeholder wordmarks
- Higher-quality Fresh Paint imagery sourced
- Essay written and `/writing` route added

**Second pass remaining gaps** (items 4 and 5 — applied as the last big edit):
- Consolidate Aquent rows on the /about timeline
- Make the positioning call: pick Senior or Principal-track, align everything

**Resolution**:
- Added `omitFromTimeline?: boolean` and `timelineOnly?: boolean` flags to
  `ExperienceEntry`. The 4 granular Aquent rows are now `omitFromTimeline:
  true` (still on /resume), and a single synthetic Aquent rollup is
  `timelineOnly: true` (visible on /about, hidden from /resume). The timeline
  went from 12 visible rows with 5 Aquent reads to 9 visible rows with 1
  Aquent rollup. /resume kept full granularity.
- Positioning: dropped "Senior" prefix entirely from `profile.title`. Now reads
  "Product designer & UX engineer · AI-native · Design systems · I write code."
  Altitude-agnostic; lets the work establish the level rather than fight a
  Senior label that the case studies (Octuple founding, Facet contribution,
  Immersive Reader 46M MAU, Fresh Paint 1B MAU, AI-native essay) read past.

### 6. Real outcomes added after the second pass

- **Pulumi Insights shipped beta → GA** — surfaced in the case study summary,
  the Insights section, the timeline summary, and as the lead Pulumi résumé
  bullet
- **Octuple as source of truth** — added a "The decision" section to the
  Eightfold case study, framing the organizational advocacy and the
  attributable consequence ("it would not have happened without me pushing for
  it"). Mirrored as a dedicated résumé bullet.

### 7. Résumé PDF generator

- `scripts/generate-resume-pdf.mjs` — spawns `next start` on port 3737,
  Puppeteer renders `/resume` with `emulateMediaType("print")` + waits for
  `document.fonts.ready` so the PDF uses Source Sans 3 + Jost (not system
  fallbacks), writes Letter-format PDF with matching `@page` geometry to
  `public/dylan-kilgore-resume.pdf`
- `npm run generate:resume` (full path: build + render) and
  `npm run generate:resume:nobuild` (re-render only) added to `package.json`
- `/resume` page checks for the PDF file at build time via `fs.existsSync`;
  shows a Download PDF button only when the file exists, so there's never a
  broken link

### 8. Repo restructure (final move before deploy)

- Deleted Gatsby files at root (`.cache/`, `.vs/`, `src/`, `public/`,
  `gatsby-config.js`, root `package.json`, `yarn.lock`, root `README.md`,
  root `node_modules/`)
- Moved all `v2/*` contents to repo root
- Critical `.gitignore` swap: the Gatsby `.gitignore` excluded `public/` (which
  is Gatsby's build output) — under that rule, every image in
  `public/images/work/` plus `dylan-kilgore-resume.pdf` would have been
  excluded from the commit. Replaced with the Next.js-friendly version that
  tracks `public/` and excludes `.next/`.
- Cleaned the `v2/` prefix fallback out of `lib/work-server.ts`,
  `lib/writing-server.ts`, and `app/resume/page.tsx` since paths are now
  unambiguous
- `README.md` updated: removed `cd v2`, refreshed project-structure tree,
  dropped the "Old site" section, removed the "set root directory to v2/"
  note in the Deploy section
- `v2/` directory left in place (held by a Node process at the time of move);
  contains only `node_modules/` and `.next/`, both gitignored — safe to
  delete when the locking process is gone

## Final state

### Routes

| Route | Purpose | Source |
|-------|---------|--------|
| `/` | Hero + 3 featured case studies | [app/page.tsx](app/page.tsx) |
| `/work` | All 6 case studies in poster grid | [app/work/page.tsx](app/work/page.tsx) |
| `/work/[slug]` | Case study detail with image gallery | [app/work/[slug]/page.tsx](app/work/[slug]/page.tsx) |
| `/writing` | Essay index | [app/writing/page.tsx](app/writing/page.tsx) |
| `/writing/[slug]` | Essay detail | [app/writing/[slug]/page.tsx](app/writing/[slug]/page.tsx) |
| `/about` | Bio + principles + skills + timeline + education | [app/about/page.tsx](app/about/page.tsx) |
| `/resume` | Print-optimized résumé + Download PDF button | [app/resume/page.tsx](app/resume/page.tsx) |

### Content surfaces

| Surface | Source |
|---------|--------|
| Hero copy, bio, social, nav, metadata, principles | [content/profile.ts](content/profile.ts) |
| Skills (categorized: AI-native / design / engineering / platform / practice) | [content/skills.ts](content/skills.ts) |
| Timeline + education entries (with `omitFromTimeline` / `timelineOnly` flags) | [content/experience.ts](content/experience.ts) |
| Case studies (6) | [content/work/*.mdx](content/work/) |
| Essays (1) | [content/writing/*.mdx](content/writing/) |

### Case studies

Six case studies, reverse-chronological on `/work`:

1. **Pulumi** — Senior UX Designer · Pulumi platform · Jul 2024–present
   (Facet, Insights beta→GA, ESC onboarding & approvals, VCS, Policy, Neo)
2. **Eightfold** — Lead UX Engineer · Octuple design system · Feb 2022–Jul 2024
   (Founded Octuple, pushed for it as source of truth, 10K+ touchpoints in
   8 months, 2022 Innovation Award)
3. **Microsoft** — Senior UXD → Design Developer 2 → Design Engineer 2 ·
   Microsoft Education · Aug 2014–Feb 2022 (Immersive Reader 46M MAU,
   assignments schema, OneNote a11y Level-C, Live Captions hackathon win,
   Cognitive Services AI substrate)
4. **Fresh Paint** — Design Integrator · Prototyper · Windows 8 (via Aquent) ·
   Oct 2012–Sep 2013 (Sole UI dev, 1B MAU, BoundsType invention,
   XAML/C#/DirectX C++)
5. **Amazon** — Visual Designer · Creative Technologist · Amazon Advertising
   (via Aquent) · Oct 2013–Apr 2014 (Cover Girl × Hunger Games HTML5 takeover
   — Amazon's Flash → HTML5 inflection point)
6. **Metia** — Interactive Designer · Microsoft account · May 2011–Oct 2012
   (Microsoft Dynamics creative platform, Microsoft Case Studies app for
   Windows Phone 7.5)

### Essay

- **The Substrate, Not the Surface** (`/writing/the-substrate-not-the-surface`)
  ~1,100 words. Argues AI-native design is a substrate, not a feature. Grounded
  in the Pulumi Design Sandbox, Octuple, and the meta-example of this very
  site being rebuilt in an evening through agentic direction.

### Accessibility & polish details worth remembering

- WCAG 4.5:1 verified on every accent in both light and dark mode
  ([globals.css](app/globals.css))
- Paired `--accent-fg` token flips white (light) ↔ near-black (dark) for
  text-on-accent surfaces (résumé button, theme toggle hover, menu trigger
  hover, 404 back button)
- Scroll lock via `html.style.overflow = "hidden"` (not `body`) so the
  `scrollbar-gutter: stable` reservation on `html` survives the lock and no
  content shifts
- `print:hidden` applied to MenuTrigger, Footer, skip link so `/resume` →
  Print produces a clean PDF
- Print CSS forces light palette even when site is in dark mode
- `prefers-reduced-motion` respected globally via the `@media` query in
  globals.css

## Deploy plan

1. Commit the rebuild:
   ```bash
   git add .
   git commit -m "Replace Gatsby site with Next.js 16 portfolio"
   git push origin master
   ```
2. Connect repo to Vercel via the GitHub integration; framework auto-detects
   as Next.js. No root-directory override needed.
3. Add `beneficialmedia.com` and `www.beneficialmedia.com` as project domains
   in Vercel; update registrar DNS:
   - Apex → A record `76.76.21.21`
   - www → CNAME `cname.vercel-dns.com`
4. Verify after DNS propagation (5–60 min):
   - All routes load
   - HTTPS green
   - Lighthouse 95+ across the board
   - Download PDF button on `/resume` works (the static
     `public/dylan-kilgore-resume.pdf` is committed)

## What's deferred

Honest list of things known to be open. Not blockers; just visible to anyone
reading the code.

- **Self-host the Pulumi marketing imagery** — the fingerprinted CDN URLs in
  [content/work/pulumi.mdx](content/work/pulumi.mdx) will 404 when Pulumi
  redeploys their site. Right-click → save to
  `public/images/work/pulumi/` → swap to relative paths.
- **Self-host the Fresh Paint Windows-blog imagery** — same fragility.
- **Replace Pulumi marketing imagery with screens you specifically designed**
  — the single highest-leverage remaining change. Marketing imagery says "I
  work on Pulumi"; personal screens say "I designed this."
- **One process-led case study** — Immersive Reader is the candidate. Walk
  one decision end-to-end (option space, trade-off, outcome). ~400 extra
  words; lifts the case study to Principal-grade.
- **More essays** — one is fine to start. Two or three over time strengthens
  the writing surface.
- **LinkedIn tagline alignment** — update to match the site's "Product
  designer & UX engineer · AI-native · Design systems · I write code."
- **Two lockfiles** — `package-lock.json` AND `pnpm-lock.yaml` +
  `pnpm-workspace.yaml` are both present. Pick one package manager and
  delete the other's artifacts.
- **`v2/` directory** — locked by a Node process at the time of restructure.
  Contains only `node_modules/` and `.next/`, both gitignored. Delete after
  killing the locking process.

## Where to edit what

| Want to change…                  | Edit…                                       |
|----------------------------------|---------------------------------------------|
| Hero copy / typewriter lines     | `content/profile.ts`                        |
| Bio                              | `content/profile.ts` (`about.bio`)          |
| Principle cards                  | `content/profile.ts` (`about.principles`)   |
| Title / tagline                  | `content/profile.ts` (`title`)              |
| Skills                           | `content/skills.ts`                         |
| Timeline + education             | `content/experience.ts`                     |
| A case study's narrative         | `content/work/<slug>.mdx`                   |
| A case study's metadata/gallery  | frontmatter in `content/work/<slug>.mdx`    |
| Section accent colors            | `--accent-*` tokens in `app/globals.css`    |
| Navigation links                 | `navLinks` array in `content/profile.ts`    |
| Site metadata, social, résumé    | `content/profile.ts` (`social`, `meta`)     |
| Typography / theme tokens        | `app/globals.css`                           |
| An essay                         | `content/writing/<slug>.mdx`                |
| The downloadable résumé PDF      | re-run `npm run generate:resume` after edits|
