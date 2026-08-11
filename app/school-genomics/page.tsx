import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Button } from "@/components/ui/Button";
import { MagicBento } from "@/components/react-bits/MagicBento/MagicBento";
import { Stepper } from "@/components/react-bits/Stepper/Stepper";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import { RoleTabs } from "@/components/marketing/RoleTabs/RoleTabs";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import { journeyStages } from "@/content/data/journeyStages";
import { schoolGenomicsFeatures, schoolGenomicsGames } from "@/content/data/schoolGenomics";
import { roleViews } from "@/content/data/roleViews";
import { schoolsCta as schoolCta } from "@/content/data/cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "School Genomics",
  description:
    "The student-centred product: a child's genetic profile and learning-style assessment together change how that child is taught — an AI tutor, study plans, lessons and academic insight.",
  path: "/school-genomics",
});

export default function SchoolGenomicsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "School Genomics", path: "/school-genomics" },
        ])}
      />

      <Hero
        eyebrow="Product · School Genomics"
        heading="A child's genetics and learning style, changing how they're taught"
        subhead="School Genomics is the platform's central proposition: a child's genetic profile and learning-style assessment together change how that child is taught — visibly and actionably for the child, the parent, the teacher and the counsellor, without ever telling a child they carry a risk."
        ambient
        actions={
          <>
            <Button href="/get-the-app" size="lg">
              Get the app
            </Button>
            <Button href="/how-it-works" variant="secondary" size="lg">
              See how it works
            </Button>
          </>
        }
      />

      <Section>
        <SectionIntro
          eyebrow="The journey"
          heading="From a saliva sample to personalised teaching"
          subhead="Onboarding, the learning-style assessment, sample collection, report reading, review and assignment — six stages later, the tutor is quietly different for this child."
        />
        <Stepper items={journeyStages} />
      </Section>

      <Section background="alt">
        <SectionIntro
          eyebrow="Study tools"
          heading="A learning hub, lesson learner, study plans and roadmaps"
          subhead="Everything a student needs to study, and everything a teacher needs to see how a class is actually learning."
        />
        <ScrollReveal>
          <MagicBento items={schoolGenomicsFeatures} />
        </ScrollReveal>
      </Section>

      <Section>
        <SectionIntro
          eyebrow="Games"
          heading={schoolGenomicsGames.title}
          subhead={schoolGenomicsGames.body}
        />
      </Section>

      <Section background="alt">
        <SectionIntro
          eyebrow="Privacy by design"
          heading="What each person sees"
          subhead="The same report produces four different views, each shaped for who's looking — and the child's own view is deliberately the most protected."
        />
        <RoleTabs roles={roleViews} />
      </Section>

      <Section background="inverse" spacing="lg">
        <CTABand data={schoolCta} />
      </Section>
    </>
  );
}
