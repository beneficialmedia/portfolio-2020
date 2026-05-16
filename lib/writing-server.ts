import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import type { Writing, WritingFrontmatter } from "./writing";

const WRITING_DIR = path.join(process.cwd(), "content", "writing");

export function getWritingSlugs(): string[] {
  if (!fs.existsSync(WRITING_DIR)) return [];
  return fs
    .readdirSync(WRITING_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getWriting(slug: string): Writing {
  const filePath = path.join(WRITING_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    frontmatter: { slug, ...(data as Omit<WritingFrontmatter, "slug">) },
    body: content,
  };
}

export function getAllWriting(): Writing[] {
  return getWritingSlugs()
    .map((slug) => getWriting(slug))
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}
