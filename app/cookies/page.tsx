import type { Metadata } from "next";
import { LegalDocument } from "@/components/content/LegalDocument";
import { JsonLd } from "@/components/content/JsonLd";
import { cookiePolicy } from "@/content/data/cookiePolicy";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: cookiePolicy.title,
  description: cookiePolicy.subhead,
  path: "/cookies",
});

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Cookie Policy", path: "/cookies" },
        ])}
      />
      <LegalDocument doc={cookiePolicy} />
    </>
  );
}
