export type SkillCategory = {
  id: string;
  title: string;
  caption: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    id: "ai-native",
    title: "AI-native practice",
    caption: "How I work — substrate, not tooling.",
    items: [
      "LLM-powered Interfaces",
      "Agentic Workflows",
      "AI-augmented Design Systems",
      "Meta AI (LLAMA)",
      "Google Gemini",
      "Anthropic Claude",
      "OpenAI",
      "Prompt Engineering",
      "Retrieval-augmented Generation",
    ],
  },
  {
    id: "design",
    title: "Design",
    caption: "How I think about people, problems, and form.",
    items: [
      "Systems Design",
      "Design Systems",
      "Design Tokens",
      "Figma",
      "Prototyping",
      "Information Architecture",
      "Interaction Design",
      "Motion",
      "Accessibility (WCAG 2.2)",
      "Typography",
      "Visual Design",
    ],
  },
  {
    id: "engineering",
    title: "Engineering",
    caption: "What I reach for to ship.",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "CSS Architecture",
      "Web Components",
      "Storybook",
      "Node.js",
      "GraphQL",
      "REST APIs",
      "Playwright",
      "Vite",
      "Git",
    ],
  },
  {
    id: "platform",
    title: "Platform",
    caption: "Where things run.",
    items: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Pulumi (IaC)",
      "Vercel",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
    ],
  },
  {
    id: "practice",
    title: "Practice",
    caption: "How I work with others.",
    items: [
      "Research Strategy",
      "Cross-functional Leadership",
      "Agile / Scrum",
      "Workshop Facilitation",
      "Mentorship",
      "Product Strategy",
      "Design Critique",
      "Regression Testing Methodology",
    ],
  },
];
