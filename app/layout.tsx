import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/marketing/Header/Header";
import { Footer } from "@/components/marketing/Footer/Footer";
import { JsonLd } from "@/components/content/JsonLd";
import { ThemeScript } from "@/components/theme/ThemeScript";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { organizationJsonLd, SITE_NAME, DEFAULT_DESCRIPTION } from "@/lib/seo";
import "@/styles/globals.scss";

// Programa is a single-typeface system (Neue Haas Grotesk Text, not
// available as a web font here) — Inter is the closest loaded substitute
// per DESIGN.md's own fallback list, and now carries both display and
// body roles via --font-sans. Sora (the old two-typeface system's
// display face) is dropped entirely rather than left loaded unused.
const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Genomics-led learning and wellness for Indian families`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  metadataBase: new URL("https://genexcel.ai"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning only covers this element's own
    // attributes — ThemeScript sets data-theme on the client before
    // React hydrates, which the server-rendered markup can't know
    // about; without this, React would (correctly, but noisily) warn
    // about an attribute it didn't put there itself.
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <body>
        <ThemeScript />
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
