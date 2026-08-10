import type { Metadata } from "next";

const SITE_NAME = "GenExcel";
const SITE_URL = "https://genexcel.ai";
const DEFAULT_DESCRIPTION =
  "GenExcel is a genomics-led learning and wellness platform for Indian families. A saliva sample becomes a genetic report, and the report changes how the AI tutor teaches, how nutrition is planned, and how fitness is coached.";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  ogImagePath?: string;
};

/** Builds a consistent per-route Metadata object (plan §10 SEO Strategy). */
export function buildMetadata({
  title,
  description,
  path,
  ogImagePath,
}: BuildMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  // The bare page title relies on the root layout's `title.template` to
  // add "| GenExcel" — except at "/" itself: per Next.js's metadata
  // rules, a template defined in a layout never applies to a title
  // defined in a page of that SAME route segment, and the homepage is
  // exactly that case. `title.absolute` bypasses the template
  // deliberately, so "/" gets the suffix too instead of silently
  // missing it.
  return {
    title: path === "/" ? { absolute: `${title} | ${SITE_NAME}` } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: ogImagePath ? [{ url: ogImagePath }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    sameAs: [] as string[],
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android",
    description: DEFAULT_DESCRIPTION,
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      priceCurrency: "INR",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION };
