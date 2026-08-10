import type { LegalDoc } from "@/content/data/legal";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Badge } from "@/components/ui/Badge";
import styles from "./LegalPageTemplate.module.scss";

/** Shared template for all four legal pages — data-driven, no duplication. */
export function LegalPageTemplate({ doc }: { doc: LegalDoc }) {
  return (
    <Section spacing="md">
      <Heading as="h1" size="display-lg" className={styles.title}>
        {doc.title}
      </Heading>
      <Text size="lg" tone="muted" className={styles.summary}>
        {doc.summary}
      </Text>

      <Badge tone="indigo" className={styles.badge}>
        What this document covers
      </Badge>
      <ul className={styles.covers}>
        {doc.covers.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className={styles.notice}>
        <Text tone="muted" size="sm">
          The full legal text of this document is maintained by CuraNovaAI&apos;s legal counsel and is
          published here once finalised. The summary above reflects exactly what the product does today,
          as documented in the GenExcel Product &amp; Feature Guide — it is provided for clarity and is not
          itself the binding legal document.
        </Text>
      </div>
    </Section>
  );
}
