import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import type { Work, WorkFrontmatter } from "./work";

const WORK_DIR = path.join(process.cwd(), "content", "work");

export function getWorkSlugs(): string[] {
  return fs
    .readdirSync(WORK_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getWork(slug: string): Work {
  const filePath = path.join(WORK_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    frontmatter: { slug, ...(data as Omit<WorkFrontmatter, "slug">) },
    body: content,
  };
}

export function getAllWork(): Work[] {
  return getWorkSlugs()
    .map((slug) => getWork(slug))
    .sort((a, b) =>
      a.frontmatter.from < b.frontmatter.from ? 1 : -1,
    );
}
