import type { Metadata } from "next";
import { AudienceTemplate } from "@/components/marketing/AudienceTemplate/AudienceTemplate";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import { personas } from "@/content/data/personas";
import { clinicianCta } from "@/content/data/cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

const persona = personas.find((p) => p.slug === "clinicians")!;

export const metadata: Metadata = buildMetadata({
  title: "For Clinicians & Counsellors",
  description: persona.intro,
  path: "/clinicians",
});

export default function CliniciansPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "For Clinicians & Counsellors", path: "/clinicians" },
        ])}
      />
      <AudienceTemplate persona={persona} />
      <Section background="inverse" spacing="lg">
        <CTABand data={clinicianCta} />
      </Section>
    </>
  );
}
