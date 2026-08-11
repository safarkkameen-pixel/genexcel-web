import type { Metadata } from "next";
import { LegalDocument } from "@/components/content/LegalDocument";
import { JsonLd } from "@/components/content/JsonLd";
import { privacyPolicy } from "@/content/data/privacyPolicy";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: privacyPolicy.title,
  description: privacyPolicy.subhead,
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <LegalDocument doc={privacyPolicy} />
    </>
  );
}
