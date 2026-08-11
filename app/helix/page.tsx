import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Button } from "@/components/ui/Button";
import { MagicBento } from "@/components/react-bits/MagicBento/MagicBento";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import { ChatDemo } from "@/components/marketing/ChatDemo/ChatDemo";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import { helixCapabilities, helixSafetyRules } from "@/content/data/helix";
import { homeFinalCta } from "@/content/data/cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Helix — the AI Learning Companion",
  description:
    "Helix is GenExcel's AI companion: a tutor to a child, a professional assistant to a parent. It answers schoolwork questions from your child's own textbooks, and it cannot be talked out of its child-safety rules.",
  path: "/helix",
});

export default function HelixPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Helix", path: "/helix" },
        ])}
      />

      <Hero
        eyebrow="Meet Helix"
        heading="A tutor to your child. A professional assistant to you."
        subhead="Helix is present throughout the application, not confined to a chat page — reached from a raised centre button, by voice, or by asking about whatever is already on screen."
        ambient
        actions={
          <>
            <Button href="/get-the-app" size="lg">
              Try Helix in the app
            </Button>
            <Button href="/science" variant="secondary" size="lg">
              See the science behind it
            </Button>
          </>
        }
      />

      <Section>
        <SectionIntro
          eyebrow="Textbook grounding"
          heading="It answers from your child's actual prescribed textbook"
          subhead="More than 225,000 searchable passages, in English and in Indian languages. When the book doesn't cover something, Helix says so and offers the chapters it does have — a refusal becomes a redirect, not a dead end."
        />
        <ChatDemo />
      </Section>

      <Section background="alt">
        <SectionIntro
          eyebrow="What Helix can do"
          heading="Around thirty distinct actions, all through ordinary conversation"
        />
        <ScrollReveal>
          <MagicBento items={helixCapabilities} />
        </ScrollReveal>
      </Section>

      <Section background="inverse">
        <SectionIntro
          eyebrow="Enforced, not guidelines"
          heading="The safety rules Helix cannot be talked out of"
          subhead="These apply to every Helix surface, and a child cannot override them by asking differently."
          tone="inverse"
        />
        <ScrollReveal>
          <ul className={styles.rules}>
            {helixSafetyRules.map((rule) => (
              <li key={rule} className={styles.rule}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                {rule}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </Section>

      <Section spacing="lg">
        <CTABand data={homeFinalCta} />
      </Section>
    </>
  );
}
