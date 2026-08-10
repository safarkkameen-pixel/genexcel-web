import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { JsonLd } from "@/components/content/JsonLd";
import glossaryData from "@/content/glossary.json";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Glossary",
  description: "Every GenExcel term, defined plainly — from AURE profile to trait.",
  path: "/resources/glossary",
});

type GlossaryTerm = { term: string; definition: string };
const glossary = glossaryData as GlossaryTerm[];
const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));

export default function GlossaryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Glossary", path: "/resources/glossary" },
        ])}
      />

      <Section spacing="md">
        <Heading as="h1" size="display-lg" className={styles.title}>
          Glossary
        </Heading>
        <Text size="lg" tone="muted" className={styles.intro}>
          Every term used across GenExcel and this site, defined in one place.
        </Text>

        <dl className={styles.list}>
          {sorted.map((entry) => (
            <div key={entry.term} id={entry.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className={styles.entry}>
              <dt className={styles.term}>{entry.term}</dt>
              <dd className={styles.definition}>{entry.definition}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
