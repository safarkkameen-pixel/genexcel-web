import type { Metadata } from "next";
import { AudienceTemplate } from "@/components/marketing/AudienceTemplate/AudienceTemplate";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import { personas } from "@/content/data/personas";
import { schoolCta } from "@/content/data/cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

const persona = personas.find((p) => p.slug === "schools")!;

export const metadata: Metadata = buildMetadata({
  title: "For Schools",
  description: persona.intro,
  path: "/schools",
});

export default function SchoolsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "For Schools", path: "/schools" },
        ])}
      />
      <AudienceTemplate persona={persona} />
      <Section background="inverse" spacing="lg">
        <CTABand data={schoolCta} />
      </Section>
    </>
  );
}
