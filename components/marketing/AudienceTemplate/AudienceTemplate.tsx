import type { Persona } from "@/content/data/personas";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard/SpotlightCard";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import styles from "./AudienceTemplate.module.scss";

/** Shared "Audience" template — Families / Schools / Clinicians, plan §4. */
export function AudienceTemplate({ persona }: { persona: Persona }) {
  return (
    <>
      <Hero
        eyebrow={persona.eyebrow}
        heading={persona.headline}
        subhead={persona.intro}
        actions={
          <>
            <Button href={persona.primaryCta.href} variant="accent" size="lg">
              {persona.primaryCta.label}
            </Button>
            {persona.secondaryCta && (
              <Button href={persona.secondaryCta.href} variant="secondary" size="lg">
                {persona.secondaryCta.label}
              </Button>
            )}
          </>
        }
      />

      <Section>
        <SectionIntro heading="What GenExcel gives you" />
        <div className={styles.grid}>
          {persona.valueProps.map((prop, index) => (
            <ScrollReveal key={prop.title} delay={index * 80}>
              <SpotlightCard>
                <h3 className={styles.title}>{prop.title}</h3>
                <p className={styles.body}>{prop.body}</p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
