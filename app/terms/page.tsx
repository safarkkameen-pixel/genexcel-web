import type { Metadata } from "next";
import { LegalDocument } from "@/components/content/LegalDocument";
import { JsonLd } from "@/components/content/JsonLd";
import { termsOfService } from "@/content/data/termsOfService";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: termsOfService.title,
  description: termsOfService.subhead,
  path: "/terms",
});

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <LegalDocument doc={termsOfService} />
    </>
  );
}
