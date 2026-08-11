import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Features } from "@/components/marketing/Features/Features";
import { StatGrid } from "@/components/marketing/StatGrid/StatGrid";
import { ImageSlot } from "@/components/marketing/ImageSlot/ImageSlot";
import { MagicBento } from "@/components/react-bits/MagicBento/MagicBento";
import { TestimonialCarousel } from "@/components/marketing/TestimonialCarousel/TestimonialCarousel";
import { PricingTeaser } from "@/components/marketing/PricingTeaser/PricingTeaser";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import { howItWorksHome } from "@/content/data/howItWorksHome";
import { testimonials } from "@/content/data/testimonials";
import { pricingTiers } from "@/content/data/pricingTiers";
import { platformBentoItems } from "@/content/data/platformBento";
import { homeFinalCta } from "@/content/data/cta";
import { buildMetadata, softwareApplicationJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "One genetic report, read by a tutor, a diet plan and a coach",
  description:
    "1,020+ genetic traits, an AI tutor grounded in your child's own textbooks, and daily nutrition and fitness guidance — all from one saliva sample.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd()} />

      <Hero
        topography
        eyebrow="Purpose of GenExcel"
        heading="One genetic report, read by a tutor, a diet plan and a coach"
        subhead="1,020+ genetic traits, an AI tutor grounded in your child's own textbooks, and daily nutrition and fitness guidance — all from one saliva sample."
        imageAspectRatio="21/10"
        imageSrc="/hero.png"
        caption="DPDP compliant · Accredited labs"
        actions={
          <>
            <Button href="/platform" size="lg">
              Meet Helix, the AI tutor
            </Button>
            <Button href="/science" variant="ghost" size="lg">
              Explore the traits →
            </Button>
          </>
        }
      />

      <Section spacing="sm">
        <StatGrid
          columns={3}
          stats={[
            { value: "1,020+", label: "Genetic traits" },
            { value: "26", label: "Trait profiles" },
            { value: "2019", label: "Building since" },
          ]}
        />
      </Section>

      <Section spacing="lg">
        <Features />
      </Section>

      <Section background="alt" spacing="lg">
        <div className={styles.aboutTeaser}>
          <div className={styles.aboutVisual}>
            <ImageSlot aspectRatio="4/5" radius="lg" />
            <div className={styles.aboutCard}>
              <Badge tone="violet">GENEXCEL</Badge>
              <div className={styles.aboutCardRow}>
                <span className={styles.aboutCardLabel}>Since</span>
                <span className={styles.aboutCardValue}>2019</span>
              </div>
              <Text size="sm" tone="muted">
                Built by Curanova Global Med LLP with accredited partner laboratories.
              </Text>
            </div>
          </div>
          <div className={styles.aboutText}>
            <Badge tone="cyan">About us</Badge>
            <Heading as="h2" size="display-lg" className={styles.aboutHeading}>
              To turn your child&apos;s genetic code into software that teaches, feeds and coaches them,
              not just a report they read once.
            </Heading>
            <Text size="lg" tone="muted">
              GenExcel.ai is India&apos;s genomics-led learning and wellness platform — pairing accredited
              laboratory sequencing with Helix, an AI tutor grounded in your child&apos;s own textbooks,
              plus nutrition and fitness guidance that carries the same genetic adjustments.
            </Text>
            <div className={styles.aboutActions}>
              <Button href="/platform" variant="secondary" size="md">
                Learn more →
              </Button>
              <Text size="sm" tone="muted" className={styles.aboutContact}>
                For any questions — <a href="mailto:hello@genexcel.ai">hello@genexcel.ai</a>
              </Text>
            </div>
          </div>
        </div>
        <div className={styles.aboutStats}>
          <StatGrid
            columns={4}
            stats={[
              { value: "1,020+", label: "Genetic traits catalogued" },
              { value: "225,000+", label: "Textbook passages for Helix" },
              { value: "26", label: "Genetic trait profiles" },
              { value: "8", label: "Playable cognitive games" },
            ]}
          />
        </div>
      </Section>

      <Section spacing="lg">
        <SectionIntro
          eyebrow="The platform"
          heading="Six systems, written from the genome out."
          subhead="One saliva sample feeds six systems — from a tutor that reads your child's textbooks to a diet plan adjusted to their genes."
        />
        <div className={styles.bento}>
          <MagicBento items={platformBentoItems} />
        </div>
      </Section>

      <Section background="alt" spacing="lg">
        <div className={styles.sciencePanel}>
          <Heading as="h2" size="display-lg">
            The science behind our service
          </Heading>
          <Text size="lg" tone="muted" className={styles.scienceIntro}>
            From one saliva sample to a tutor that teaches differently — accredited lab sequencing paired
            with a reading engine that checks its own work four ways.
          </Text>
          <div className={styles.stepsGrid}>
            {howItWorksHome.map((step) => (
              <div key={step.num} className={styles.step}>
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepTitle}>{step.title}</div>
                <Text size="sm" tone="faint">
                  {step.text}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section spacing="lg">
        <SectionIntro eyebrow="Families & clinicians" heading="What parents notice first." />
        <div className={styles.testimonials}>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </Section>

      <Section background="alt" spacing="lg">
        <SectionIntro
          align="center"
          eyebrowTone="violet"
          eyebrow="Simple Pricing"
          heading="Choose Your Plan"
          subhead="Start free, upgrade when ready. All plans include the GenExcel app with core features."
        />
        <div className={styles.pricing}>
          <PricingTeaser tiers={pricingTiers} />
        </div>
        <ul className={styles.trustRow}>
          <li>No credit card required</li>
          <li>Cancel anytime</li>
          <li>30-day money back</li>
        </ul>
      </Section>

      <Section background="inverse" spacing="lg">
        <CTABand data={homeFinalCta} />
      </Section>
    </>
  );
}
