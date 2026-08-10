import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getAllPosts } from "@/lib/mdx";

const staticRoutes = [
  "/",
  "/school-genomics",
  "/health-wellness",
  "/helix",
  "/science",
  "/how-it-works",
  "/families",
  "/schools",
  "/clinicians",
  "/trust",
  "/pricing",
  "/about",
  "/roadmap",
  "/careers",
  "/contact",
  "/get-the-app",
  "/demo",
  "/resources",
  "/resources/blog",
  "/resources/faq",
  "/resources/glossary",
  "/resources/help",
  "/legal/privacy-policy",
  "/legal/terms-of-service",
  "/legal/disclaimer",
  "/legal/consent-and-data",
  "/login",
];

/** Generated from the same route list as navigation.ts — sitemap and nav can never silently drift apart (plan §10). */
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/resources/blog/${post.frontmatter.slug}`,
    lastModified: post.frontmatter.date,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date().toISOString(),
    })),
    ...posts,
  ];
}
