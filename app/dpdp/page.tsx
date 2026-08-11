import type { Metadata } from "next";
import { LegalDocument } from "@/components/content/LegalDocument";
import { JsonLd } from "@/components/content/JsonLd";
import { dpdpNotice } from "@/content/data/dpdpNotice";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: dpdpNotice.title,
  description: dpdpNotice.subhead,
  path: "/dpdp",
});

export default function DpdpNoticePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "DPDP Compliance Notice", path: "/dpdp" },
        ])}
      />
      <LegalDocument doc={dpdpNotice} />
    </>
  );
}
