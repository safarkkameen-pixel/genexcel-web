import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/content/LegalPageTemplate";
import { legalDocs } from "@/content/data/legal";
import { buildMetadata } from "@/lib/seo";

const doc = legalDocs.find((d) => d.slug === "privacy-policy")!;

export const metadata: Metadata = buildMetadata({
  title: doc.title,
  description: doc.summary,
  path: "/legal/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <LegalPageTemplate doc={doc} />;
}
