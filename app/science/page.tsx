import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Stepper } from "@/components/react-bits/Stepper/Stepper";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import { CategoryAccordion } from "@/components/content/CategoryAccordion";
import { DifferentiatorGrid } from "@/components/marketing/DifferentiatorGrid/DifferentiatorGrid";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import {
  traitCategories,
  scienceStats,
  scienceProcessSteps,
  reportValidationChecks,
  reportValidationFootnote,
  verifyChecklist,
  verifyCommitment,
} from "@/content/data/science";
import { scienceCta } from "@/content/data/cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "The Science",
  description:
    "A real genetic trait catalogue of 1,020+ traits across five categories, a report-reading pipeline that checks its own work four ways, and honest reporting about what genetics can and can't tell us.",
  path: "/science",
});

export default function SciencePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "The Science", path: "/science" },
        ])}
      />

      <Hero
        eyebrow="The Science"
        heading="Cutting-Edge Genomics Meets AI Innovation"
        subhead="Our platform is built on a real genetic trait catalogue, a report-reading pipeline that checks its own work, and honest reporting about what genetics can and can't tell us."
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

      <Section spacing="md">
        <ScrollReveal>
          <div className={styles.statsGrid}>
            {scienceStats.map((stat) => (
              <div key={stat.id} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      <Section background="alt">
        <SectionIntro
          eyebrow="Genetic Analysis"
          heading="5 Trait Categories, 1,020+ Genetic Traits"
          subhead="Our master catalogue organises traits into 26 profiles across five categories. Each family's report typically covers 113-117 of these traits."
        />
        <CategoryAccordion categories={traitCategories} />
      </Section>

      <Section id="our-process">
        <SectionIntro
          eyebrow="Our Process"
          heading="From Lab Report to Insights"
          subhead="GenExcel doesn't run the lab test — we read the report it produces, automatically and self-verified, before a human ever reviews it."
          align="center"
        />
        <Stepper items={scienceProcessSteps} />
      </Section>

      <Section background="alt">
        <SectionIntro
          eyebrow="Report Validation"
          heading="Every Report Passes Four Checks"
          subhead="Before a report reaches a family, it's checked against the lab document itself — automatically, every single time."
          align="center"
        />
        <ScrollReveal>
          <div className={styles.validationGrid}>
            {reportValidationChecks.map((check) => (
              <div key={check.id} className={styles.validationCard}>
                <h3 className={styles.validationTitle}>{check.title}</h3>
                <p className={styles.validationTag}>{check.tag}</p>
                <p className={styles.validationDescription}>{check.description}</p>
                <p className={styles.validationFootnote}>{reportValidationFootnote}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      <Section>
        <div className={styles.verifyGrid}>
          <div className={styles.verifyMain}>
            <Badge tone="cyan">How We Verify</Badge>
            <Heading as="h2" size="display-lg" className={styles.verifyHeading}>
              Confirmed Against the Real Product
            </Heading>
            <Text size="lg" tone="muted" className={styles.verifyBody}>
              Our report-reading pipeline was checked against the working product itself, not an early
              plan or a demo. Here&apos;s what it actually does today.
            </Text>
            <ul className={styles.verifyChecklist}>
              {verifyChecklist.map((item) => (
                <li key={item}>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="#our-process" variant="ghost" size="lg">
              See Our Full Process
            </Button>
          </div>
          <div className={styles.commitmentCard}>
            <h3 className={styles.commitmentTitle}>{verifyCommitment.title}</h3>
            <p className={styles.commitmentBody}>{verifyCommitment.body}</p>
            <ul className={styles.commitmentChecklist}>
              {verifyCommitment.checklist.map((item) => (
                <li key={item}>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section background="alt">
        <SectionIntro eyebrow="Why this matters" heading="The differentiators this makes possible" align="center" />
        <ScrollReveal>
          <DifferentiatorGrid usedOn="science" />
        </ScrollReveal>
      </Section>

      <Section background="inverse" spacing="lg">
        <CTABand data={scienceCta} />
      </Section>
    </>
  );
}
