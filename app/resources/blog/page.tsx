import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { getAllPosts } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Blog & guides",
  description: "Genomics-for-parents explainers, study tips, and wellness guides from GenExcel.",
  path: "/resources/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <Section spacing="md">
      <Heading as="h1" size="display-lg" className={styles.title}>
        Blog &amp; guides
      </Heading>
      <Text size="lg" tone="muted" className={styles.intro}>
        Explainers on genomics, learning and wellness, written for parents, teachers and clinicians.
      </Text>

      {posts.length === 0 ? (
        <div className={styles.empty}>
          <Text tone="muted">
            We&apos;re working on our first articles. In the meantime, the{" "}
            <Link href="/how-it-works">How It Works</Link> and <Link href="/science">Science</Link> pages
            cover most of what a first guide would.
          </Text>
        </div>
      ) : (
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.frontmatter.slug}>
              <Link href={`/resources/blog/${post.frontmatter.slug}`} className={styles.card}>
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
