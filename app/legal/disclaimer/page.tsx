import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/content/LegalPageTemplate";
import { legalDocs } from "@/content/data/legal";
import { buildMetadata } from "@/lib/seo";

const doc = legalDocs.find((d) => d.slug === "disclaimer")!;

export const metadata: Metadata = buildMetadata({
  title: doc.title,
  description: doc.summary,
  path: "/legal/disclaimer",
});

export default function DisclaimerPage() {
  return <LegalPageTemplate doc={doc} />;
}
