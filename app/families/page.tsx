import type { Metadata } from "next";
import { AudienceTemplate } from "@/components/marketing/AudienceTemplate/AudienceTemplate";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import { personas } from "@/content/data/personas";
import { homeFinalCta } from "@/content/data/cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

const persona = personas.find((p) => p.slug === "families")!;

export const metadata: Metadata = buildMetadata({
  title: "For Families",
  description: persona.intro,
  path: "/families",
});

export default function FamiliesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "For Families", path: "/families" },
        ])}
      />
      <AudienceTemplate persona={persona} />
      <Section background="inverse" spacing="lg">
        <CTABand data={homeFinalCta} />
      </Section>
    </>
  );
}
