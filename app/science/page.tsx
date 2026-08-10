import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import { CategoryAccordion } from "@/components/content/CategoryAccordion";
import { DifferentiatorGrid } from "@/components/marketing/DifferentiatorGrid/DifferentiatorGrid";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import { traitCategories, reportReaders } from "@/content/data/science";
import { homeFinalCta } from "@/content/data/cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Genetic Reports & The Science",
  description:
    "What a GenExcel genetic report actually contains: 113 to 117 traits per person from a catalogue of ~1,020, across five categories — and the one rule the platform never breaks: a high result is not always a bad thing.",
  path: "/science",
});

export default function SciencePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Genetic Reports & Science", path: "/science" },
        ])}
      />

      <Hero
        eyebrow="Genetic Reports & The Science"
        heading="113 to 117 traits, read automatically, framed carefully"
        subhead="A single individual's report is drawn from a master catalogue of around 1,020 traits, organised into 26 profiles across five categories — every trait carrying a result, the genes behind it, and what to do about it."
        ambient
        actions={
          <>
            <Button href="/trust" variant="secondary" size="lg">
              Read our privacy commitments
            </Button>
            <Button href="/how-it-works" variant="ghost" size="lg">
              See how it works
            </Button>
          </>
        }
      />

      <Section>
        <SectionIntro eyebrow="Five categories" heading="What a report actually contains" />
        <CategoryAccordion categories={traitCategories} />
      </Section>

      <Section background="inverse">
        <div className={styles.ruleCallout}>
          <SectionIntro
            eyebrow="The one rule that matters most"
            heading="A “high” result is not always a bad thing"
            tone="inverse"
            align="center"
          />
          <Text size="lg" tone="inverse-muted" className={styles.ruleBody}>
            Only for health risks, addiction susceptibility and injury risk does a high band genuinely mean
            elevated risk — shown in red, amber and green. Everywhere else, a high creativity result, a high
            verbal ability, a high personality dimension are simply levels, shown in neutral styling, never
            as risks. The platform enforces this distinction consistently across the child&apos;s, parent&apos;s,
            counsellor&apos;s and administrator&apos;s views.
          </Text>
        </div>
      </Section>

      <Section background="alt">
        <SectionIntro
          eyebrow="How reports are read"
          heading="Two readers, depending on the report layout"
          subhead="Both check their own work before anything reaches a family."
        />
        <div className={styles.readersVisual}>
          <Image
            src="/science-reader-comparison.png"
            alt="Side-by-side comparison of exact reading and AI-assisted reading, each shown as a document being scanned"
            width={1536}
            height={1024}
            sizes="(min-width: 900px) 900px, 100vw"
            className={styles.readersVisualImage}
          />
        </div>
        <div className={styles.readers}>
          {reportReaders.map((reader) => (
            <div key={reader.name} className={styles.reader}>
              <h3 className={styles.readerName}>{reader.name}</h3>
              <p className={styles.readerSpeed}>{reader.speed}</p>
              <p className={styles.readerDetail}>{reader.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionIntro eyebrow="Why this matters" heading="The differentiators this makes possible" />
        <ScrollReveal>
          <DifferentiatorGrid usedOn="science" />
        </ScrollReveal>
      </Section>

      <Section background="inverse" spacing="lg">
        <CTABand data={homeFinalCta} />
      </Section>
    </>
  );
}
