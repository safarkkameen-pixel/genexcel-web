import { readdirSync, readFileSync, existsSync } from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogFrontmatter = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  ogImage?: string;
};

export type BlogPost = {
  frontmatter: BlogFrontmatter;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/**
 * Reads content/blog/*.mdx at build time. No posts ship yet — the
 * directory is empty rather than seeded with placeholder articles, per
 * the "no placeholder content" rule. Publishing is: drop an .mdx file
 * with this frontmatter shape into content/blog/ and rebuild.
 */
export function getAllPosts(): BlogPost[] {
  if (!existsSync(BLOG_DIR)) return [];

  return readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return { frontmatter: data as BlogFrontmatter, content };
    })
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.frontmatter.slug === slug);
}
