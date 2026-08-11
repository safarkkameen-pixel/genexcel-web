import type { LegalBlock, LegalDocument as LegalDocumentType } from "@/content/data/legalDocuments";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Badge } from "@/components/ui/Badge";
import { LongFormLayout } from "@/components/content/LongFormLayout";
import styles from "./LegalDocument.module.scss";

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return (
        <Text tone="muted" size="lg" className={styles.paragraph}>
          {block.text}
        </Text>
      );
    case "quote":
      return (
        <blockquote className={styles.quote}>
          {block.text.map((line, index) => (
            <Text key={index} tone="muted" size="lg" className={styles.paragraph}>
              {line}
            </Text>
          ))}
        </blockquote>
      );
    case "list":
      return block.ordered ? (
        <ol className={styles.list}>
          {block.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      ) : (
        <ul className={styles.list}>
          {block.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

/** Shared renderer for the full-text legal documents — plain header, no ambient motion (same calm-page precedent as Trust). */
export function LegalDocument({ doc }: { doc: LegalDocumentType }) {
  return (
    <>
      <Section spacing="md">
        <Badge tone="indigo" className={styles.eyebrow}>
          {doc.eyebrow}
        </Badge>
        <Heading as="h1" size="display-lg" className={styles.title}>
          {doc.title}
        </Heading>
        <Text size="lg" tone="muted" className={styles.subhead}>
          {doc.subhead}
        </Text>
      </Section>

      <Section background="alt">
        <LongFormLayout sections={doc.sections}>
          {doc.sections.map((section) => (
            <div key={section.id} id={section.id}>
              <Heading as="h2" size="display-md" className={styles.sectionTitle}>
                {section.title}
              </Heading>
              {section.subsections.map((subsection, index) => (
                <div key={index} className={styles.subsection}>
                  {subsection.title && (
                    <Heading as="h3" size="heading-sm" className={styles.subsectionTitle}>
                      {subsection.title}
                    </Heading>
                  )}
                  {subsection.intro && (
                    <Text tone="muted" size="lg" className={styles.paragraph}>
                      {subsection.intro}
                    </Text>
                  )}
                  {subsection.blocks.map((block, blockIndex) => (
                    <Block key={blockIndex} block={block} />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </LongFormLayout>
      </Section>
    </>
  );
}
