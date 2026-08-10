import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { JsonLd } from "@/components/content/JsonLd";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { buildMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import styles from "./page.module.scss";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.frontmatter.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/resources/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return buildMetadata({ title: "Not found", description: "", path: `/resources/blog/${slug}` });

  return buildMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    path: `/resources/blog/${slug}`,
    ogImagePath: post.frontmatter.ogImage,
  });
}

export default async function BlogPostPage({ params }: PageProps<"/resources/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.frontmatter.title,
          datePublished: post.frontmatter.date,
          author: { "@type": "Person", name: post.frontmatter.author },
          url: `${SITE_URL}/resources/blog/${slug}`,
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/resources/blog" },
          { name: post.frontmatter.title, path: `/resources/blog/${slug}` },
        ])}
      />

      <Section spacing="md">
        <Heading as="h1" size="display-lg" className={styles.title}>
          {post.frontmatter.title}
        </Heading>
        <Text tone="muted" size="sm" className={styles.meta}>
          {post.frontmatter.author} ·{" "}
          {new Date(post.frontmatter.date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>
        <div className={styles.article}>
          <MDXRemote source={post.content} />
        </div>
      </Section>
    </>
  );
}
