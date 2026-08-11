import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Button } from "@/components/ui/Button";
import { Stepper } from "@/components/react-bits/Stepper/Stepper";
import { RoleTabs } from "@/components/marketing/RoleTabs/RoleTabs";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import { journeyStages } from "@/content/data/journeyStages";
import { roleViews } from "@/content/data/roleViews";
import { howItWorksCta } from "@/content/data/cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "How It Works",
  description:
    "The GenExcel journey, end to end: a household is set up, a sample is collected, a report is read in about ten seconds, and Helix starts teaching differently from that point on.",
  path: "/how-it-works",
});

type PlatformMode = {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  checklist: string[];
};

/** "One Platform, Two Modes" — How It Works content inventory. */
const platformModes: PlatformMode[] = [
  {
    id: "school-genomics",
    title: "School Genomics",
    subtitle: "For school-age children",
    body: "Genetic traits and a learning-style assessment shape Helix, study plans, lesson content and what a teacher can see. The home screen leads with today's plan, an exam countdown and the tutor.",
    checklist: [
      "Helix, textbook-grounded homework help",
      "Study plans, roadmaps and a lesson generator",
      "A curated learning profile for teachers",
    ],
  },
  {
    id: "health-wellness",
    title: "Health & Wellness",
    subtitle: "For adults in the household",
    body: "The same genetic foundation feeds activity rings, step tracking, diet planning and gym programming instead. The home screen leads with rings, today's plan and a wellness summary.",
    checklist: [
      "Activity rings and wearable integration",
      "Diet plans with genetic adjustments",
      "Gym plans and live workout logging",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works" },
        ])}
      />

      <Hero
        eyebrow="How It Works"
        heading="From One Sample to a Tutor That Teaches Differently"
        subhead="A genetic report shouldn't just be a PDF a family reads once. Here's exactly how one saliva sample ends up shaping how Helix teaches, what the diet plan targets, and what every adult around your child can see."
        actions={
          <Button href="/demo" variant="primary" size="lg">
            Book a demo
          </Button>
        }
      />

      <Section>
        <Stepper items={journeyStages} />
      </Section>

      <Section background="alt">
        <SectionIntro
          eyebrow="One Report, Four Views"
          heading="The Same Report Looks Different to Everyone"
          subhead="What's shown is deliberately curated by role — never a one-size-fits-all export of raw genetic data."
          align="center"
        />
        <RoleTabs roles={roleViews} />
      </Section>

      <Section>
        <SectionIntro
          eyebrow="One Platform, Two Modes"
          heading="Chosen Once, at Signup"
          subhead="Both modes share the same account, the same genetic foundation and the same Helix companion — they differ in what the home screen emphasises."
          align="center"
        />
        <ScrollReveal>
          <div className={styles.modesGrid}>
            {platformModes.map((mode) => (
              <div key={mode.id} className={styles.modeCard}>
                <h3 className={styles.modeTitle}>{mode.title}</h3>
                <p className={styles.modeSubtitle}>{mode.subtitle}</p>
                <p className={styles.modeBody}>{mode.body}</p>
                <ul className={styles.modeChecklist}>
                  {mode.checklist.map((item) => (
                    <li key={item}>
                      <span className={styles.check} aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      <Section background="inverse" spacing="lg">
        <CTABand data={howItWorksCta} />
      </Section>
    </>
  );
}
