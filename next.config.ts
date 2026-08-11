import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Permanent redirects from the pre-restructure route names to the
  // inventory's URL scheme (Solutions hub, top-level Blog/FAQs/Help,
  // top-level legal docs) — kept here rather than deleting the old
  // paths outright so existing links/bookmarks still resolve.
  redirects() {
    return [
      { source: "/families", destination: "/solutions/families", permanent: true },
      { source: "/schools", destination: "/solutions/schools", permanent: true },
      { source: "/clinicians", destination: "/solutions/healthcare", permanent: true },
      { source: "/resources/faq", destination: "/faqs", permanent: true },
      { source: "/resources/blog", destination: "/blog", permanent: true },
      { source: "/resources/blog/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/resources/help", destination: "/help", permanent: true },
      { source: "/legal/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/legal/terms-of-service", destination: "/terms", permanent: true },
    ];
  },
};

export default nextConfig;
