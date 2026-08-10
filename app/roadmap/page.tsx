import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Button } from "@/components/ui/Button";
import { RoadmapList } from "@/components/content/RoadmapList";
import { JsonLd } from "@/components/content/JsonLd";
import { roadmapItems } from "@/content/data/roadmap";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Vision / Roadmap",
  description:
    "What's next for GenExcel — led by the nature-versus-nurture correlation engine, the product's stated central thesis. Presented as direction, not shipped features.",
  path: "/roadmap",
});

export default function RoadmapPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our Vision / Roadmap", path: "/roadmap" },
        ])}
      />

      <Hero
        eyebrow="Our vision"
        heading="What's next, honestly"
        subhead="Everything on this page is direction, not a shipped feature — the Feature Availability Summary in our product documentation is the authority on what's live today. We'd rather tell you what's coming than let a demo overpromise."
        actions={
          <Button href="/trust" variant="secondary" size="lg">
            See what&apos;s available today
          </Button>
        }
      />

      <Section>
        <SectionIntro
          eyebrow="The central thesis"
          heading="Nature versus nurture — the largest opportunity"
          subhead="This is the idea GenExcel is built around, and the one piece of it that isn't finished yet."
        />
        <RoadmapList items={roadmapItems} />
      </Section>
    </>
  );
}
