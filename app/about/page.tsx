import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Text } from "@/components/ui/Text";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard/SpotlightCard";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import { JsonLd } from "@/components/content/JsonLd";
import { buildMetadata, breadcrumbJsonLd, organizationJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "GenExcel is a genomics-led learning and wellness platform for Indian families, built on the premise that a genetic report should change how software teaches, feeds and coaches a person.",
  path: "/about",
});

const values = [
  {
    title: "Child Safety First",
    body: "Everything we build prioritizes the safety and well-being of children. Age-appropriate content, strict privacy controls, and clinical oversight.",
  },
  {
    title: "Scientific Rigor",
    body: "Our insights are grounded in a genetic reading pipeline that checks its own work, and reviewed by a human before anything uncertain reaches a family. We never overstate what genetics can tell us.",
  },
  {
    title: "Data Privacy",
    body: "Your family's genetic data is sacred. We use industry-leading encryption, comply with DPDP regulations, and never share data without explicit consent.",
  },
  {
    title: "Family Empowerment",
    body: "We believe parents should have access to the best information about their child's learning and health. We make complex science accessible and actionable.",
  },
];

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
        eyebrow="Our Mission"
        heading="Building the Future of Learning & Health"
        subhead="To make a genetic report the input to software, not the output a family reads once. We believe every child deserves a tutor, a diet plan and a coach that already know how they learn, eat and grow."
      />

      <Section spacing="lg">
        <SectionIntro
          align="center"
          eyebrow="Our Story"
          heading="From a Simple Question to a Revolution"
        />
        <div className={styles.storyBody}>
          <Text size="lg" tone="muted" className={styles.paragraph}>
            GenExcel was born from a simple question: what if we could understand each child&apos;s unique
            genetic makeup and use that knowledge to help them learn, thrive and grow?
          </Text>
          <Text size="lg" tone="muted" className={styles.paragraph}>
            GenExcel combines genetic science with AI-powered insights to build a genomics-led learning and
            wellness platform — one where the genetic report shapes an AI tutor, a diet plan and a fitness
            coach, not just a PDF a family reads once.
          </Text>
          <Text size="lg" tone="muted" className={styles.paragraph}>
            We believe every child deserves personalized guidance based on who they truly are — not generic
            advice meant for everyone. Our mission is to empower families with the knowledge and tools they
            need to unlock their child&apos;s full potential.
          </Text>
        </div>
      </Section>

      <Section background="alt" spacing="lg">
        <SectionIntro align="center" eyebrow="Our Values" heading="What We Stand For" />
        <div className={styles.grid}>
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 80}>
              <SpotlightCard>
                <h3 className={styles.cardTitle}>{value.title}</h3>
                <p className={styles.cardBody}>{value.body}</p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
        <div className={styles.note}>
          <Text tone="muted">
            We&apos;re building out our team and company story pages next — check back soon to meet the
            people behind GenExcel.
          </Text>
        </div>
      </Section>
    </>
  );
}
