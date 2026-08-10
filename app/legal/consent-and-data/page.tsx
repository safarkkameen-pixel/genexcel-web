import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/content/LegalPageTemplate";
import { legalDocs } from "@/content/data/legal";
import { buildMetadata } from "@/lib/seo";

const doc = legalDocs.find((d) => d.slug === "consent-and-data")!;

export const metadata: Metadata = buildMetadata({
  title: doc.title,
  description: doc.summary,
  path: "/legal/consent-and-data",
});

export default function ConsentAndDataPage() {
  return <LegalPageTemplate doc={doc} />;
}
