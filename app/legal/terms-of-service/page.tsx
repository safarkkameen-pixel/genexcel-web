import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/content/LegalPageTemplate";
import { legalDocs } from "@/content/data/legal";
import { buildMetadata } from "@/lib/seo";

const doc = legalDocs.find((d) => d.slug === "terms-of-service")!;

export const metadata: Metadata = buildMetadata({
  title: doc.title,
  description: doc.summary,
  path: "/legal/terms-of-service",
});

export default function TermsOfServicePage() {
  return <LegalPageTemplate doc={doc} />;
}
