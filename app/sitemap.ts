import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getAllPosts } from "@/lib/mdx";

const staticRoutes = [
  "/",
  "/platform",
  "/school-genomics",
  "/health-wellness",
  "/helix",
  "/science",
  "/how-it-works",
  "/solutions",
  "/solutions/families",
  "/solutions/schools",
  "/solutions/healthcare",
  "/trust",
  "/pricing",
  "/about",
  "/roadmap",
  "/careers",
  "/press",
  "/contact",
  "/get-the-app",
  "/demo",
  "/resources",
  "/blog",
  "/faqs",
  "/resources/glossary",
  "/help",
  "/privacy",
  "/terms",
  "/cookies",
  "/dpdp",
  "/delete-account",
  "/legal/disclaimer",
  "/legal/consent-and-data",
  "/login",
];

/** Generated from the same route list as navigation.ts — sitemap and nav can never silently drift apart (plan §10). */
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.frontmatter.slug}`,
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
