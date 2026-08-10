import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/content/JsonLd";
import { buildMetadata, breadcrumbJsonLd, organizationJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "GenExcel is a genomics-led learning and wellness platform for Indian families, built on the premise that a genetic report should change how software teaches, feeds and coaches a person.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <Hero
        eyebrow="About GenExcel"
        heading="A genetic report should change how software teaches, not just be displayed to a family"
        subhead="GenExcel is built by CuraNovaAI. Most genetic testing products hand over a beautiful PDF and the family reads it once. We built the opposite: a platform where the report is the input, and the AI tutor, the nutrition plan and the fitness programme all respond to it."
      />

      <Section>
        <SectionIntro eyebrow="Our mission" heading="Genomics that changes behaviour, not just a report" />
        <Text size="lg" tone="muted" className={styles.body}>
          Once a report is linked to a child&apos;s account, four things change: the AI tutor teaches
          differently, the nutrition plan is adjusted, the fitness programme is shaped, and the adults
          around the child see something useful. We think that&apos;s what a genetic test should have always
          done.
        </Text>
      </Section>

      <Section background="alt">
        <SectionIntro
          eyebrow="Our vision"
          heading="Two products, one genetic foundation, built for Indian families"
          subhead="School Genomics for students, Health & Wellness for adults — sharing the same account, household, genetic foundation and AI companion. Every AI feature runs on Indian data-centre infrastructure, and genetic data is never stored against a person's name."
        />
      </Section>

      <Section>
        <SectionIntro eyebrow="Team & credibility" heading="Who's behind it" />
        <Text tone="muted" className={styles.body}>
          We&apos;re adding founder, clinical and scientific advisor profiles to this page as they&apos;re
          ready to publish. In the meantime, the most credible thing we can show you is the product itself
          — see how it works, or book a demo with our team.
        </Text>
        <div className={styles.actions}>
          <Button href="/how-it-works" variant="secondary" size="md">
            See how it works
          </Button>
          <Button href="/demo" variant="accent" size="md">
            Book a demo
          </Button>
        </div>
      </Section>

      <Section background="alt">
        <SectionIntro eyebrow="Careers" heading="Building this with us" />
        <Text tone="muted" className={styles.body}>
          Interested in joining the team behind GenExcel?
        </Text>
        <div className={styles.actions}>
          <Button href="/careers" variant="secondary" size="md">
            See careers
          </Button>
          <Button href="/contact" variant="ghost" size="md">
            Contact us
          </Button>
        </div>
      </Section>
    </>
  );
}
