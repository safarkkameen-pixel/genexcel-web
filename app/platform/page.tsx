import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StatGrid } from "@/components/marketing/StatGrid/StatGrid";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard/SpotlightCard";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import { platformSystems, platformGames, platformComingSoon } from "@/content/data/platform";
import { platformCta } from "@/content/data/cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Platform Overview",
  description:
    "One genetic report doesn't just sit in a PDF. See every system it touches — Helix, learning, nutrition and fitness.",
  path: "/platform",
});

export default function PlatformPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Platform", path: "/platform" }])} />

      <Hero
        eyebrow="Platform Overview"
        heading="Six Systems, One Genetic Foundation"
        subhead="One genetic report doesn't just sit in a PDF. It reaches into how Helix teaches, what the diet plan targets, and how the fitness programme is shaped — here's every system it touches."
      />

      <Section spacing="sm">
        <StatGrid
          stats={[
            { value: "1,020+", label: "Genetic Traits Catalogued" },
            { value: "225,000+", label: "Textbook Passages for Helix" },
            { value: "26", label: "Genetic Trait Profiles" },
            { value: "8", label: "Playable Cognitive Games" },
          ]}
        />
      </Section>

      <Section spacing="lg">
        <div className={styles.systems}>
          {platformSystems.map((system, index) => (
            <ScrollReveal key={system.id} delay={index * 60}>
              <div className={styles.systemCard}>
                <Heading as="h3" size="display-md" className={styles.systemTitle}>
                  {system.title}
                </Heading>
                <Text size="lg" tone="muted" className={styles.systemDescription}>
                  {system.description}
                </Text>
                <ul className={styles.checklist}>
                  {system.checklist.map((item) => (
                    <li key={item}>
                      <span className={styles.check} aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section background="alt" spacing="lg">
        <div className={styles.gamesSplit}>
          <div>
            <Badge tone="violet">Games & Motivation</Badge>
            <Heading as="h2" size="display-lg" className={styles.gamesHeading}>
              Cognitive Games Dressed as Play
            </Heading>
            <Text size="lg" tone="muted">
              Eight cognitive games are playable today, each mapped back onto a genetic trait so results
              feed the picture of how a child actually performs.
            </Text>
            <ul className={styles.gamesList}>
              {platformGames.map((game) => (
                <li key={game}>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>
                  {game}
                </li>
              ))}
            </ul>
            <Badge tone="neutral">Two more games are in development</Badge>
          </div>

          <div className={styles.comingSoonCard}>
            <Heading as="h3" size="heading-sm" className={styles.comingSoonTitle}>
              Coming Soon
            </Heading>
            <Text size="sm" tone="muted" className={styles.comingSoonIntro}>
              We&apos;d rather tell you what&apos;s next than overstate what&apos;s live today. These are
              built or in progress, not yet part of the everyday product:
            </Text>
            <ul className={styles.comingSoonList}>
              {platformComingSoon.map((item) => (
                <li key={item.text}>
                  <Badge tone="indigo" className={styles.comingSoonTag}>
                    {item.tag}
                  </Badge>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section spacing="lg">
        <div className={styles.trustTeaser}>
          <div>
            <Badge tone="cyan">Built Responsibly</Badge>
            <Heading as="h3" size="display-md" className={styles.trustHeading}>
              Genetic data that isn&apos;t linked to a name. AI that never leaves India.
            </Heading>
            <Text size="lg" tone="muted">
              Every safety rule Helix follows, and every protection around your child&apos;s genetic data,
              is documented on our Trust &amp; Privacy page.
            </Text>
          </div>
          <Button href="/trust" variant="secondary" size="lg">
            See Trust &amp; Privacy →
          </Button>
        </div>
      </Section>

      <Section spacing="lg">
        <SectionIntro
          align="center"
          heading="Explore the deeper product pages"
          subhead="School Genomics, Health & Wellness and Helix each have a full page of their own, if you want to go deeper on one system."
        />
        <ScrollReveal>
          <div className={styles.deeperLinks}>
            <SpotlightCard>
              <h3 className={styles.deeperTitle}>School Genomics</h3>
              <p className={styles.deeperBody}>The student-centred product, in full.</p>
              <Button href="/school-genomics" variant="ghost" size="sm">
                Explore →
              </Button>
            </SpotlightCard>
            <SpotlightCard>
              <h3 className={styles.deeperTitle}>Health & Wellness</h3>
              <p className={styles.deeperBody}>The adult, body-centred product, in full.</p>
              <Button href="/health-wellness" variant="ghost" size="sm">
                Explore →
              </Button>
            </SpotlightCard>
            <SpotlightCard>
              <h3 className={styles.deeperTitle}>Helix, the AI Tutor</h3>
              <p className={styles.deeperBody}>Everything Helix can do, and the safety rules it follows.</p>
              <Button href="/helix" variant="ghost" size="sm">
                Explore →
              </Button>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </Section>

      <Section background="inverse" spacing="lg">
        <CTABand data={platformCta} />
      </Section>
    </>
  );
}
