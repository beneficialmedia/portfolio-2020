export type Social = {
  email: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
  stackOverflow?: string;
  resume?: string;
};

export type Profile = {
  name: string;
  shortName: string;
  title: string;
  location?: string;
  hero: {
    h1: string;
    h2: string;
    typewriter: string[];
    availableForWork: boolean;
  };
  about: {
    bio: string;
    principles: { title: string; body: string }[];
  };
  social: Social;
  meta: {
    siteUrl: string;
    description: string;
    keywords: string[];
  };
};

export const profile: Profile = {
  name: "Dylan Kilgore",
  shortName: "DK",
  title: "Product designer & UX engineer · AI-native · Design systems · I write code.",
  location: "Elko, Nevada",

  hero: {
    h1: "Hi, I'm Dylan Kilgore.",
    h2: "I design products at the intersection of AI, infrastructure, and developer experience. At Pulumi, I lead product design for a platform engineering teams use to build and manage cloud infrastructure at scale.",
    typewriter: [
      "I write production code daily.",
      "I work directly with LLM-powered interfaces and agentic workflows.",
      "I prototype in the real stack — not screens.",
      "I bridge design and engineering.",
      "I'm at my best on hard, ambiguous problems.",
    ],
    availableForWork: true,
  },

  about: {
    bio: "I design products at the intersection of AI, infrastructure, and developer experience. At Pulumi, I lead product design for a platform used by engineering teams building and managing cloud infrastructure at scale. My practice is AI-native — not just in the tools I use, but in how I approach design problems. I work directly with LLM-powered interfaces, agentic workflows, and AI-augmented design systems, and I bring a developer's sensibility to every surface I design. I write production code daily, which means I prototype in the real stack, speak fluently with engineers, and collapse the distance between concept and shipped product. Previously at Microsoft, I helped take the Immersive Reader from a concept to 46M monthly active users, originated the Microsoft Education assignments schema, and shipped Fresh Paint in-box on Windows. At Eightfold, I built the Octuple design system from zero to 10,000+ implementation points in eight months. I'm at my best on hard, ambiguous problems — the kind where design, engineering, and product strategy have to move together.",
    principles: [
      {
        title: "AI-native by default",
        body: "Not as a tool layer on top of the work, but as a substrate underneath it. LLMs, agentic workflows, and AI-augmented systems are how I think, prototype, and ship.",
      },
      {
        title: "Systems over screens",
        body: "Design tokens, primitives, and patterns multiply velocity. Octuple grew from zero to 10,000+ touchpoints in eight months because the system carried the weight.",
      },
      {
        title: "Write the code",
        body: "I prototype in the real stack daily. It collapses the distance between concept and shipped product, and lets me speak fluently with the engineers I work with.",
      },
      {
        title: "Hard, ambiguous problems",
        body: "I'm at my best where design, engineering, and product strategy have to move together — the seams nobody else has time for.",
      },
    ],
  },

  social: {
    email: "dkilgore@gmail.com",
    twitter: "beneficialmedia",
    github: "beneficialmedia",
    linkedin: "beneficialmedia",
    stackOverflow: "1279090/dylan",
    resume: "/resume",
  },

  meta: {
    siteUrl: "https://www.beneficialmedia.com",
    description:
      "Dylan Kilgore — product designer and UX engineer at Pulumi. AI-native UX, design systems, and production code at the intersection of AI, infrastructure, and developer experience.",
    keywords: [
      "Product Designer",
      "UX Engineer",
      "Principal Product Designer",
      "Staff Product Designer",
      "Senior Product Designer",
      "Design Engineer",
      "AI-Native UX",
      "LLM-powered Interfaces",
      "Agentic Workflows",
      "Design Systems",
      "Design Tokens",
      "Octuple",
      "Pulumi",
      "Immersive Reader",
      "Accessibility",
      "Front-end Engineer",
      "React",
      "TypeScript",
      "Next.js",
    ],
  },
};

// Colors resolve through CSS custom properties defined in app/globals.css so
// they flip with light/dark mode while preserving WCAG 4.5:1 contrast in both.
export const navLinks = [
  { name: "home", title: "Home", color: "var(--accent-home)", href: "/" },
  { name: "work", title: "Work", color: "var(--accent-work)", href: "/work" },
  { name: "writing", title: "Writing", color: "var(--accent-writing)", href: "/writing" },
  { name: "about", title: "About", color: "var(--accent-about)", href: "/about" },
] as const;

export type NavLink = (typeof navLinks)[number];
