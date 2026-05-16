export type WritingFrontmatter = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  readMinutes?: number;
  accent?: string;
  description: string;
};

export type Writing = {
  frontmatter: WritingFrontmatter;
  body: string;
};
