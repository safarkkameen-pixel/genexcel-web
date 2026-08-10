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
import { keyJourneys } from "@/content/data/keyJourneys";
import { homeFinalCta } from "@/content/data/cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "How It Works",
  description:
    "The GenExcel journey, end to end: a health camp, a sample kit, a report read in about ten seconds, and a tutor that quietly teaches differently from that point on.",
  path: "/how-it-works",
});

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
        eyebrow="How it works"
        heading="From a saliva sample to a tutor that teaches differently"
        subhead="This is the single story that connects every module: a school signs up, a health camp is held, a laboratory analyses the sample, GenExcel reads the report automatically, a human reviews what it was unsure about, and from that point the child, parent, teacher and counsellor each see something different — and useful."
        actions={
          <Button href="/demo" variant="accent" size="lg">
            Book a demo
          </Button>
        }
      />

      <Section>
        <SectionIntro eyebrow="Stage by stage" heading="The eight-stage journey" />
        <Stepper items={journeyStages} />
      </Section>

      <Section background="alt">
        <SectionIntro
          eyebrow="Privacy by design"
          heading="What each person sees at the end of it"
        />
        <RoleTabs roles={roleViews} />
      </Section>

      <Section>
        <SectionIntro eyebrow="Everyday use" heading="A few more journeys, once the profile is set up" />
        <ScrollReveal>
          <div className={styles.journeys}>
            {keyJourneys.map((journey) => (
              <div key={journey.id} className={styles.journey}>
                <h3 className={styles.journeyTitle}>{journey.title}</h3>
                <p className={styles.journeyBody}>{journey.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      <Section background="inverse" spacing="lg">
        <CTABand data={homeFinalCta} />
      </Section>
    </>
  );
}
