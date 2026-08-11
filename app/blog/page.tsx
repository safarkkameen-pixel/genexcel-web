import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { getAllPosts } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Insights & Updates",
  description: "Expert articles on pediatric health, genetics, nutrition, and child wellness.",
  path: "/blog",
});

const CATEGORIES = ["All", "Genetics", "Nutrition", "Parenting", "Health Tips", "Product Updates", "Research"];

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <Section spacing="md">
      <Heading as="h1" size="display-lg" className={styles.title}>
        Insights &amp; Updates
      </Heading>
      <Text size="lg" tone="muted" className={styles.intro}>
        Expert articles on pediatric health, genetics, nutrition, and child wellness.
      </Text>

      <div className={styles.categories} role="list" aria-label="Filter by category">
        {CATEGORIES.map((category) => (
          <span key={category} className={styles.categoryPill} role="listitem">
            {category}
          </span>
        ))}
      </div>

      {posts.length === 0 ? (
        <div className={styles.empty}>
          <Text tone="muted">No posts yet. Check back soon!</Text>
        </div>
      ) : (
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.frontmatter.slug}>
              <Link href={`/blog/${post.frontmatter.slug}`} className={styles.card}>
                <span className={styles.cardTitle}>{post.frontmatter.title}</span>
                <span className={styles.cardExcerpt}>{post.frontmatter.excerpt}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
