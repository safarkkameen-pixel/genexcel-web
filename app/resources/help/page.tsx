import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { JsonLd } from "@/components/content/JsonLd";
import { helpArticles, type HelpArticle } from "@/content/data/help";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Help centre",
  description: "Onboarding, account, consent and troubleshooting help for GenExcel.",
  path: "/resources/help",
});

const categories = Array.from(new Set(helpArticles.map((a) => a.category))) as HelpArticle["category"][];

export default function HelpCentrePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Help centre", path: "/resources/help" },
        ])}
      />

      <Section spacing="md">
        <Heading as="h1" size="display-lg" className={styles.title}>
          Help centre
        </Heading>
        <Text size="lg" tone="muted" className={styles.intro}>
          Onboarding, account, consent and troubleshooting — the practical questions.
        </Text>

        {categories.map((category) => (
          <div key={category} className={styles.category}>
            <h2 className={styles.categoryTitle}>{category}</h2>
            <div className={styles.articles}>
              {helpArticles
                .filter((article) => article.category === category)
                .map((article) => (
                  <details key={article.id} className={styles.article}>
                    <summary className={styles.summary}>{article.title}</summary>
                    <p className={styles.body}>{article.body}</p>
                  </details>
                ))}
            </div>
          </div>
        ))}
      </Section>
    </>
  );
}
