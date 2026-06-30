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
  title: "Product designer & full-stack UX engineer · AI-native · Design systems · I write code.",
  location: "Elko, Nevada",

  hero: {
    h1: "Hi, I'm Dylan Kilgore.",
    h2: "I design products at the intersection of AI, infrastructure, and developer experience. At Pulumi, I lead product design for a platform engineering teams use to build and manage cloud infrastructure at scale.",
    typewriter: [
      "I write production code daily, front end and back end.",
      "I work directly with LLM-powered interfaces and agentic workflows.",
      "I prototype in the real stack, not screens.",
      "I vibe-code with Claude Code and Cursor.",
      "I bridge design and engineering, from Figma to shipped code.",
      "I'm fluent across the Adobe ecosystem and GenAI creative pipelines.",
      "I'm at my best on hard, ambiguous problems.",
    ],
    availableForWork: true,
  },

  about: {
    bio: "I design products at the intersection of AI, infrastructure, and developer experience. At Pulumi, I lead product design for a platform used by engineering teams building and managing cloud infrastructure at scale. My practice is AI-native, not just in the tools I use but in how I approach design problems. I work directly with LLM-powered interfaces, agentic workflows, and AI-augmented design systems, and I bring a developer's sensibility to every surface I design. I write production code daily across the stack: TypeScript and React on the front end, Go and Node services and REST/GraphQL APIs on the back end. That means I prototype in the real stack, speak fluently with engineers, and collapse the distance between Figma and shipped product. I vibe-code with Claude Code, Cursor, and Windsurf, and I run a GenAI creative pipeline across Midjourney, Firefly, ComfyUI, Runway, and ElevenLabs alongside the full Adobe ecosystem. Previously at Microsoft, I helped take the Immersive Reader from a concept to 46M monthly active users, including shaping the public Immersive Reader SDK, originated the Microsoft Education assignments schema, and shipped Fresh Paint in-box on Windows. At Eightfold, I built the Octuple design system from zero to 10,000+ implementation points in eight months. I'm at my best on hard, ambiguous problems, the kind where design, engineering, and product strategy have to move together.",
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
        title: "Write the code, full stack",
        body: "I prototype in the real stack daily: TypeScript and React on the front end, Go and Node services and REST/GraphQL APIs behind them. Vibe-coded with Claude Code and Cursor, shipped through the same pipeline as anything else.",
      },
      {
        title: "Figma to shipped, in one head",
        body: "Figma for systems, specs, and exploration; the full Adobe ecosystem and GenAI pipelines for editorial, motion, and creative; the codebase for the result. The handoffs people normally chain together happen inside one workflow.",
      },
      {
        title: "Hard, ambiguous problems",
        body: "I'm at my best where design, engineering, and product strategy have to move together, in the seams nobody else has time for.",
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
      "Dylan Kilgore. Product designer and full-stack UX engineer at Pulumi. AI-native UX, design systems, full-stack production code, vibe coding, and GenAI creative workflows at the intersection of AI, infrastructure, and developer experience.",
    keywords: [
      "Product Designer",
      "UX Engineer",
      "Full-stack Designer",
      "Full-stack UX Engineer",
      "Principal Product Designer",
      "Staff Product Designer",
      "Senior Product Designer",
      "Design Engineer",
      "AI-Native UX",
      "LLM-powered Interfaces",
      "Agentic Workflows",
      "Vibe Coding",
      "Claude Code",
      "Cursor",
      "Windsurf",
      "GitHub Copilot",
      "GenAI Creative Workflows",
      "Midjourney",
      "Adobe Firefly",
      "ComfyUI",
      "Runway",
      "Design Systems",
      "Design Tokens",
      "Octuple",
      "Pulumi",
      "Facet",
      "Immersive Reader",
      "Immersive Reader SDK",
      "Accessibility",
      "Front-end Engineer",
      "React",
      "TypeScript",
      "Next.js",
      "Web Components",
      "Node.js",
      "Go",
      "REST API Design",
      "GraphQL",
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe After Effects",
      "Adobe Premiere",
      "Adobe Creative Cloud",
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
