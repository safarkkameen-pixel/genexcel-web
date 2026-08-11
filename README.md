# GenExcel Marketing Website

The official marketing website for GenExcel, built in Next.js (App Router) with CSS Modules/Sass. This
document is written so a new developer can understand the project and start editing it within minutes.

Everything on this site is sourced from the GenExcel Product & Feature Guide and the Website Outline —
only features marked `available` in the product's own Feature Availability Summary are marketed here. See
[`content/data/availability.ts`](content/data/availability.ts) for how that rule is enforced in code.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint      # ESLint
```

## Folder structure

```
app/                      Routes (Next.js App Router — one folder per URL segment)
  layout.tsx               Root layout: fonts, Header, Footer, skip link, global JSON-LD
  page.tsx                 Homepage
  <route>/page.tsx          One page per route; co-located page.module.scss for page-specific layout only
  sitemap.ts, robots.ts     Generated from the same route list — see "Adding a page" below
  not-found.tsx             404 page

components/
  ui/                       Design-system primitives — Button, Badge, Container, Section, Heading, Text,
                             Divider, SectionIntro. No page-specific logic lives here.
  react-bits/               Animated components adapted from the React Bits library (MaskedHeading,
                             GradualBlur, CountUp, ScrollReveal, SpotlightCard, MagicBento, Magnet,
                             StarBorder, Stepper). Each is its own folder with a .tsx and .module.scss.
  marketing/                Composed sections used across pages — Header, Footer, Hero, TrustStrip,
                             DifferentiatorGrid, StatRow, ProductSplit, PersonaTeaserGrid, RoleTabs,
                             CTABand, TestimonialCarousel, ChatDemo, AudienceTemplate.
  content/                  Content-rendering components — FAQAccordion, CategoryAccordion,
                             TableOfContents, LongFormLayout, LegalPageTemplate, PricingTable,
                             RoadmapList, JsonLd.
  forms/                    LeadForm (used by both /demo and /contact)

content/
  data/*.ts                 Every reusable piece of copy/data on the site — navigation, differentiators,
                             stats, pricing, personas, journeyStages, availability, testimonials, faq,
                             cta, roleViews, products, science, roadmap, help, legal.
  glossary.json             Transcribed from the Product Guide's glossary section.
  blog/*.mdx                Blog posts (empty today — see "Adding a blog post" below).

lib/
  seo.ts                    buildMetadata() and JSON-LD builders — every page uses these, never ad hoc.
  actions.ts                Server Action behind the Demo/Contact forms.
  mdx.ts                    Reads content/blog/*.mdx at build time.
  useReducedMotion.ts        Shared prefers-reduced-motion hook.
  useInView.ts               Shared IntersectionObserver hook for scroll-triggered animation.

styles/
  tokens.scss               Every design token: color, spacing, radius, motion, type (CSS custom properties).
  mixins.scss                Shared Sass mixins (container, focus ring, visually-hidden, long-form measure).
  globals.scss               Resets, base typography, global prefers-reduced-motion guarantee.
```

## The content rule: never hardcode copy in a component

If text appears on more than one page, or is the kind of fact that changes when the product changes (a
stat, a price, a feature's availability), it lives in `content/data/*.ts` — never inline in JSX. A page's
`page.tsx` should mostly be import statements and layout composition. Compare
[`app/school-genomics/page.tsx`](app/school-genomics/page.tsx) — it composes six shared components and
reads from four data files; there is barely any prose written directly in the file.

## Component guide

Four layers, in order of how much a change to one ripples outward:

1. **Tokens** (`styles/tokens.scss`) — change a color, spacing value, or radius here and it updates
   everywhere.
2. **Primitives** (`components/ui/`) — `Button`, `Heading`, `Text`, `Badge`, `Container`, `Section`,
   `SectionIntro`. These are Server Components (no `"use client"`) — they carry no interactivity.
3. **React Bits islands** (`components/react-bits/`) — the animated pieces. Each is a Client Component
   (`"use client"`), gated by `useReducedMotion()`, and themed via `styles/tokens.scss` CSS variables
   rather than any hardcoded color.
4. **Marketing organisms** (`components/marketing/`) — composed sections built from layers 2 and 3, plus a
   `content/data/*.ts` import. `MagicBento`, for example, takes a `BentoItem[]` prop — it never hardcodes
   which cards it shows.

**Rule of thumb for new components:** default to a Server Component. Only add `"use client"` if it needs
browser APIs, local state, or is one of the animated React Bits pieces.

## Animation guide

Principles:

- Motion should read as calm and precise, not flashy — this is a site for a platform handling children's
  genetic and medical data.
- Every animated component respects `prefers-reduced-motion` via the shared `useReducedMotion()` hook —
  never re-implement this check per component.
- At most one ambient/looping background effect per page.
- Trust, Legal, FAQ, and Glossary pages are deliberately the calmest on the site — minimal to no motion.
- `CountUp`, `MaskedHeading` and `ScrollReveal` all render their real, final content immediately in
  server-rendered HTML — the animation is a transient layer added client-side when scrolled into view, not
  the resting state. This matters for SEO and no-JS correctness; don't change that pattern without
  re-reading `components/react-bits/CountUp/CountUp.tsx`'s comments.

**Adding a new React Bits component:** create a folder under `components/react-bits/<Name>/` with
`<Name>.tsx` and `<Name>.module.scss`. Pull the React Bits **TS-CSS** variant as your visual reference, but
re-theme every color to a `var(--color-*)` token — never leave React Bits' default palette in place. Wrap
any animation in a `useReducedMotion()` check.

## Content editing

| To change... | Edit... |
| --- | --- |
| Navigation menu | `content/data/navigation.ts` |
| The six differentiators | `content/data/differentiators.ts` |
| Platform stats | `content/data/stats.ts` |
| BASIC vs PRO pricing table | `content/data/pricing.ts` |
| Families/Schools/Clinicians page copy | `content/data/personas.ts` |
| The 8-stage journey | `content/data/journeyStages.ts` |
| Feature availability (what can be marketed) | `content/data/availability.ts` |
| FAQ | `content/data/faq.ts` |
| Glossary | `content/glossary.json` |
| Help centre articles | `content/data/help.ts` |
| Roadmap items | `content/data/roadmap.ts` |
| Trust & Privacy page sections | `content/data/trust.ts` |

### Adding a blog post

Drop an `.mdx` file into `content/blog/` with this frontmatter, then rebuild:

```mdx
---
title: "Post title"
slug: "post-title"
date: "2026-01-15"
excerpt: "One-sentence summary shown on the index page."
author: "Author name"
tags: ["genomics", "parenting"]
---

Post content in Markdown/MDX here.
```

It will automatically appear on `/resources/blog`, get its own `/resources/blog/[slug]` route, and be
included in `sitemap.xml` and its `Article` JSON-LD — nothing else needs to change.

## Adding a page

1. Create `app/<route>/page.tsx`. Export `metadata` via `buildMetadata()` from `lib/seo.ts` — never write a
   raw `<title>` tag.
2. Compose the page from existing `components/marketing/` organisms and `content/data/*.ts` where
   possible, rather than writing new bespoke markup.
3. Add the route to `app/sitemap.ts`'s `staticRoutes` array.
4. Add the route to `content/data/navigation.ts` if it should appear in the header or footer.
5. If the page makes a feature claim, check `content/data/availability.ts` first — don't market anything
   marked `publicSiteVisible: false`.

## Adding SEO to a page

Every page should export:

```tsx
export const metadata: Metadata = buildMetadata({
  title: "Page title",       // buildMetadata appends "| GenExcel" via the root layout's title template —
  description: "...",         // don't add the suffix yourself, or it will double.
  path: "/the-route",
});
```

Add a `JsonLd` component for anything with structured-data value — see `lib/seo.ts` for
`breadcrumbJsonLd()`, `faqJsonLd()`, `organizationJsonLd()`, `softwareApplicationJsonLd()`. Sections used on
more than one page (like the differentiators) should link back to their fuller treatment for internal
linking.

## Changing the theme

All color, spacing, radius and motion values are CSS custom properties defined once in
`styles/tokens.scss`. Change a value there and it updates across the entire site — no component should
ever hardcode a hex color or a pixel spacing value directly.

Typography is a single variable sans-serif family (`--font-sans`, wired to `next/font/google`'s Inter in
`app/layout.tsx` today) with a Noto fallback chain for non-Latin scripts, since the product itself supports
Arabic (RTL), Hindi, Tamil, Malayalam and Kannada content. Swapping the primary typeface means changing the
font import in `app/layout.tsx` and the `--font-sans` variable it sets — nothing else.

## Before launch

A few things are deliberately stubbed for a website-architecture build and need real infrastructure wired
in before this goes live:

- **Lead form delivery** — `lib/actions.ts`'s `submitLeadForm` validates and logs today. Connect it to a
  real email/CRM endpoint (see the `TODO(launch)` comment in that file).
- **App Store / Google Play links** — `/get-the-app` intentionally doesn't link to store URLs that don't
  exist yet; add real badges once the app is publicly listed.
- **Staff/partner portal URLs** — `/login` routes non-family users to Contact rather than guessing a portal
  URL; wire in the real addresses once they're finalized.
- **The four legal documents** — `/legal/*` pages describe what each document covers in the product's own
  terms; the binding legal text itself should come from CuraNovaAI's legal counsel before launch.

## Deployment

This is a static-first Next.js app (every marketing page is statically generated; blog posts use
Incremental Static Regeneration). It deploys to any Next.js-compatible host — Vercel requires zero
configuration; for others, run `npm run build` and serve with `next start`, or use `output: "export"` in
`next.config.ts` if fully static hosting is preferred (note: Server Actions for the lead forms would need
an alternative, e.g. a serverless function, under a fully static export).
