# GenExcel — Style Reference
> A Swiss-design productivity tool that occasionally lets a genetics report glow. Near-white canvas, ink-black structure, one yellow switch — and, layered on top of that restraint, a handful of soft cyan/violet glass renders standing in for a genomics brand that hasn't fully let go of its old accent color yet.

**Theme:** light + dark (real toggle, `data-theme` attribute, localStorage + OS-preference on first load)

GenExcel is a Next.js 16 marketing site for a genomics-led learning/wellness platform for Indian families. Its design system was restyled mid-project onto a Swiss/"Programa" reference (near-white canvas, four grays, one scarce yellow accent, hairline borders, zero shadows, single neo-grotesque typeface) — but the restyle was deliberately layered on **top of** an existing architecture rather than a rebuild, so it carries real seams worth knowing before a redesign: a second "informational-only" cyan/violet accent pair survives in badges and a few decorative renders; six AI-generated 3D glass-render images and ~19 line icons exist in full color across the site; and the yellow accent is scarce by hand-authored discipline (exactly one `Button` variant, applied to one button per page) rather than by a hard system constraint.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ink Black | `#1a1a1a` | `--color-ink-black` | Primary text, structural borders (buttons/inputs), dark-mode canvas |
| Paper White | `#ffffff` | `--color-paper-white` | Page canvas, card surfaces, dark-mode text |
| Fog Gray | `#f4f4f4` | `--color-fog-gray` | Alternate section background (`Section background="alt"`) |
| Ash Gray | `#a3a3a3` | `--color-ash-gray` | Muted/secondary text, placeholders, faint text (both muted and faint collapse to this one gray) |
| Highlighter Yellow | `#fbff2b` | `--color-highlighter-yellow` | The single scarce accent — **only** consumed by `Button`'s `"accent"` variant, applied to exactly one button per page |
| Info Cyan | `#0891b2` | `--color-info-cyan` | Informational-only: Badge's default dot, the Helix chat demo's "student" speech bubble |
| Violet (secondary accent) | `#7c3aed` / `#a78bfa` (dark) | `--color-accent-secondary` | Informational-only: "Popular" badges, decorative StaggeredMenu panel wash, 404 glitch ghost layer |
| Error red | `#c4432e` / `#e2604a` (dark) | `--color-error-500` | Form validation only — a deliberate, disclosed exception to "one accent," treated as a utility color rather than a brand accent |

**The neutral "interactive" tone.** `--color-accent` (used for hover states, focus rings, active tab indicators, and link colors in ~30 places across the codebase) resolves to ink-black/paper-white, **not** a color — hover/focus feedback everywhere is weight- or underline-based, matching the "hierarchy through weight, not hue" philosophy. This is the main thing a redesigner should know: reserving cyan for "the accent" (as a first instinct might suggest) would need to touch every one of those ~30 call sites, not just the token definition.

**Dark mode is a literal ink/paper inversion.** Dark canvas = `#1a1a1a`, dark text = `#ffffff`. The yellow accent is byte-identical in both themes (never shifts). The "inverse" contrast band (`Section background="inverse"`, used by `CTABand` and the footer) flips the *other* direction in dark mode — it becomes a bright white band on an otherwise dark page, always the maximum-contrast surface relative to whatever the current canvas is, rather than a fixed color.

## Tokens — Typography

**Single typeface family**, both display and body roles: Inter (loaded via `next/font/google` as `--font-sans`), standing in for Neue Haas Grotesk Text (not available as a web font) — chosen from that face's own documented substitute list, alongside a Noto Sans fallback chain for Arabic/Devanagari/Tamil/Malayalam/Kannada (the product supports non-Latin scripts). The old two-typeface system (Inter body + Sora display) was collapsed to one during the restyle.

- **Weights:** 400 (default), 500 (emphasis) — hard-capped; the codebase had 36 separate instances of 600/700-weight text before an audit brought everything down to this two-weight system.
- **Letter-spacing:** `-0.03em` at every single size, no exceptions — including uppercase labels/badges, which conventionally would want *positive* tracking; this codebase deliberately doesn't.
- **Scale:**

| Role | Size (mobile → desktop) | Weight | Line height | Token |
|------|------|------|------|-------|
| Hero (`display-xl`) | `clamp(34px, 5vw, 60px)` | 500 | 1.1 | — |
| Page heading (`display-lg`) | `clamp(28px, 3.2vw, 42px)` | 500 | 1.1 | — |
| Section heading (`display-md`) | `clamp(20px, 2vw, 24px)` | 500 | 1.2 | — |
| Card/subsection heading (`heading-sm`) | `clamp(17px, 1.4vw, 20px)` | 500 | 1.4 | — |
| Lead body (`text-lg`) | 20px | 400 | 1.4 | — |
| Body (`text-base`) | 16px | 400 | 1.4 | — |
| Caption (`text-sm`) | 14px | 400 | 1.4 | — |
| Label (uppercase) | 14px | 500 | — | — |

The Hero tier (`34px → 60px`) is the one deliberate departure from a literal "Programa" scale, which tops out at 42px — this site needed real hero-marketing impact that a pure content-page reference doesn't cover.

## Tokens — Spacing & Shapes

**Base unit:** 6px (was 4px before the restyle — some steps collapsed to duplicate values in the process, e.g. `--space-8` and `--space-10` are both 36px, `--space-20`/`24`/`32`/`40` are all 96px; worth cleaning up in a redesign rather than carrying forward).

| Token | Value |
|-------|-------|
| `--space-1` / `--space-2` | 6px |
| `--space-3` / `--space-4` | 12px |
| `--space-5` | 18px |
| `--space-6` | 24px |
| `--space-8` / `--space-10` | 36px |
| `--space-12` / `--space-16` | 48px |
| `--space-20` / `--space-24` / `--space-32` / `--space-40` | 96px |

**Border radius:** capped at 16px everywhere rectangular (`--radius-sm: 10px` for buttons/inputs, `--radius-md`/`--radius-lg: 16px` for cards/menus — collapsed to the same value). Fully circular controls (theme toggle, trust-strip pill chips) use `--radius-pill: 999px` and are treated as a different geometry than the 16px cap, not an exception to it.

**Elevation:** zero. Every `--shadow-*` token resolves to `none` — depth comes from a 1px border (`--color-border: rgba(26,26,26,0.14)` for quiet dividers/card outlines, `--color-border-strong` = literal ink-black/paper-white for buttons and form inputs specifically) and surface-color shifts (`--color-bg` → `--color-bg-alt`), never a drop shadow.

**Layout:** 1200px max content width, 1440px wide header container (the nav has 7 top-level items and needed more room than the reading column). Section vertical rhythm: 48–96px between sections.

## Components

### Header
**Role:** Sticky nav — transparent over hero content, becomes an opaque flat bar (no blur/glass) on scroll or when a menu is open.

Logo + wordmark left ("Gen" in ink-black, "Excel" in `--color-accent" — currently the same ink-black as "Gen" as a result of the accent-token change, so the two-tone wordmark effect is presently invisible; worth a decision in a redesign). Desktop mega-menu nav center-right (hover **and** click **and** keyboard-focus all open it; a padding-bridge technique keeps the panel geometrically continuous with its trigger so mousing down into it doesn't close it; a 200ms cancelable close-delay is layered on top for fast pointer movement). Utility cluster: a muted text "Log in" link, a `secondary`-variant button, and a `primary`-variant button (ink-black fill — **never** the yellow accent, since the header is persistent across every page and yellow is scarce per-page). Theme toggle (sun/moon, pure-CSS icon swap keyed on `[data-theme]`, no JS-driven visual state). Mobile: a hamburger driving a full-screen `StaggeredMenu` (React Bits, hand-ported) with a flat list of ~10 real destinations (no nested mega-menu on mobile).

### Button
**Role:** Four variants, one of which is intentionally rare.

- `primary` — solid ink-black fill, paper-white text. The site's general "structural" CTA — **not** the yellow one.
- `secondary` — card-background fill, `--color-border-strong` (literal ink-black) outline.
- `ghost` — transparent, underline on hover (no color shift, since hover feedback is weight/decoration-based throughout).
- `accent` — the single yellow-filled treatment (`--color-highlight-bg` fill, ink-black text and border). **Applied to exactly one button per page** — audited across all 15 files rendering a primary-style button and hand-assigned to whichever is that page's single most important action (usually the Hero's primary CTA, sometimes a lead-gen form's submit button). The Header's own CTA and `CTABand`'s CTA are deliberately never this variant, since they coexist on a page with another accent button.

10px radius, no shadow, no hover lift/transform — opacity fade only.

### Badge
**Role:** Small uppercase eyebrow label + colored dot, used as a section kicker on nearly every page.

Text always ink-black/ash-gray depending on tone. The dot is the one place cyan survives as a literal color (`--color-info-cyan`) for the default tone; a `violet` tone exists for "Popular"/featured callouts; a `neutral` tone uses ash-gray. No filled pill background — text + a 6px dot, not a chip.

### Card grids (MagicBento / SpotlightCard)
**Role:** Feature grids on 6 pages (Homepage, School Genomics, Health & Wellness, Helix, Science, Trust).

Each cell is a `SpotlightCard`: 1px hairline border, no shadow at rest, a subtle ink-black-tinted radial pointer-glow on hover (`rgba(26,26,26,0.05)`), plus a modest border-color darkening. Cards now carry small (22px) full-color raster icons (a 12-icon custom set, generated once and cropped per card) — the one place genuine illustration survives inside otherwise flat, monochrome UI chrome.

### Pricing cards (`PricingTeaser`)
**Role:** Three-tier card grid (Free / Premium / Family with real ₹ pricing), used identically on the homepage and the dedicated `/pricing` page.

Equal-height grid (`align-items: stretch`); each card is a flex column with a fixed-height description block (`min-height: 3em`, so a 2-line description doesn't misalign the checklist below it versus 1-line neighbors) and a bottom-pinned CTA button (`margin-top: auto` plus a `48px` minimum-gap floor above it, so the button never crowds the last checklist item regardless of feature-count differences between tiers). "Popular" tier gets an ink-black (not colored) border to stand out — hierarchy via border weight, not hue.

### Form inputs (`LeadForm`, used by /demo and /contact)
**Role:** Name / Email / Message, one submit button (the page's single accent-variant CTA in both cases).

1px literal ink-black border (`--color-border-strong`, not the softer tinted `--color-border` used for dividers), 10px radius, focus outline stays ink-black (no color shift on focus, matching the "focus communicated through weight/ring, not hue" rule).

### CTABand
**Role:** Full-bleed dark closing band, used at the bottom of ~10 pages.

Centered text column, max-width 640px, on a `Section background="inverse"`. Carries an extremely subtle full-bleed background texture image (a soft violet-top-left/cyan-bottom-right dark gradient, ~1536×1024, at low visual weight) behind the text via a full-bleed CSS trick (`left:50%; width:100vw; transform:translateX(-50%)`) so it escapes the centered column without needing changes to the shared `Section` component.

### Footer
**Role:** Dark inverse section, 2→5 column link grid, bottom bar with a small logo + copyright + one plain-text lab-accreditation line (no visual trust badges/icon chips despite the compliance-adjacent copy).

## Imagery

Two very different regimes coexist, and a redesign should pick one:

1. **Most of the site is pure UI** — typography, color, hairline borders, hover-glow cards. No photography anywhere in the project (`public/` never had any); dozens of card grids, tables, and accordions are text-only by original design intent.
2. **Six full-color AI-generated 3D glass-render images** exist and are wired in: `hero.png` (a DNA helix branching into book/leaf/heartbeat light-trails, homepage hero, 21:10), `genereport.png` / `helix.png` / `feature-nutrition-fitness.png` (the homepage's 3-card FeatureTrio row, 4:3 each), `about-split.png` (a report transforming into three light-streams, tall 4:4.4 portrait), and `science-reader-comparison.png` (a split "exact reading vs. AI-assisted reading" comparison with baked-in text labels, used once on the Science page). All share one visual language: frosted/translucent glass material, cyan-and-violet accent lighting, soft studio light, generous negative space, off-white seamless backgrounds. **These images were briefly converted to grayscale mid-project to match the monochrome restyle, then reverted back to full color at the user's request** — so full color is the current, intentional, final state, not an oversight.
3. **A small custom icon set** (~19 raster PNGs, `public/icons/{bento,roles,devices}/`) in the same glass/light-trail visual language as the six hero images — populating previously-empty icon slots in the MagicBento card grids, the RoleTabs (Child/Parent/Teacher/Counsellor) tab bar, and the Get the App device-requirements list.

**The tension a redesign needs to resolve:** the UI chrome (buttons, borders, focus states, hover feedback) is strict monochrome-plus-one-scarce-yellow-accent, Swiss-editorial in spirit — but the imagery is soft, colorful, glassy 3D render art with its own cyan/violet identity that predates and doesn't fully match that system. They currently coexist by treating imagery as a carved-out exception ("photography/renders can stay full-color even though interface elements can't"), which works but isn't a fully resolved visual language.

## Do's and Don'ts (current system)

### Do
- Reserve `--color-highlighter-yellow` for exactly one `Button variant="accent"` per page — its entire effect depends on scarcity holding across the whole page, not just within one component.
- Use `--color-accent` for anything interactive (hover, focus, active state) — it resolves to neutral ink-black/paper-white, never a color.
- Keep cyan/violet strictly on non-interactive, informational elements (badges, decorative renders) if continuing this pattern — never on a link, button, or focus state.
- Cap radius at 16px on anything rectangular; reserve full-round (`999px`) for circular icon-only controls.
- Communicate card/tier emphasis (e.g. "Popular") through border weight/color-neutral treatment, not a second accent hue.

### Don't
- Don't add a second *interactive* accent color — the one collapsed system (`--color-accent` = neutral) is load-bearing for the yellow's scarcity effect.
- Don't reintroduce shadows — every `--shadow-*` token is `none` by design; elevation is border + surface-color only.
- Don't exceed weight 500 or introduce positive letter-spacing — both were swept out of the whole codebase (36 weight violations, 5 tracking violations) to match the single-typeface, tight-tracking rule.
- Don't assume the six hero/feature images and the ~19 icons are placeholder-safe to discard casually — they're real, final, deliberately-full-color assets restored after an earlier accidental desaturation pass.

## Surfaces

| Level | Name | Light | Dark | Purpose |
|-------|------|-------|------|---------|
| 0 | Canvas | `#ffffff` | `#1a1a1a` | Page background |
| 1 | Card | `#ffffff` (same as canvas) | `#1a1a1a` (same as canvas) | Cards/panels — separated by border, not color, in light mode |
| 1.5 | Alt section | `#f4f4f4` | `#262626` (this site's own dark-mode analog, not from the reference) | Alternating section background |
| 2 | Inverse band | `#1a1a1a` | `#ffffff` | CTABand / footer — always the maximum-contrast surface relative to current canvas |
| Accent | Highlight | `#fbff2b` | `#fbff2b` (unchanged) | The one scarce yellow CTA fill |

## Elevation

None. Depth is communicated entirely through a 1px border (quiet `rgba(26,26,26,0.14)` hairline for dividers/cards, literal ink-black for buttons/inputs) and surface-color shifts between canvas and alt-section fog-gray. No box-shadow anywhere in the compiled CSS.

## Layout

Centered, max-width layout (1200px content column; 1440px for the header specifically, to fit a 7-item nav). Hero sections are full-width, centered text over an optional image panel. Most pages compose from a small set of shared templates (`Hero` → feature grid → narrative/CTA), not bespoke one-off layouts. Sticky header, transparent-over-hero → solid-on-scroll. No sidebar navigation anywhere; long-form pages (Trust, Legal) use a sticky in-page table-of-contents instead.

## Suggested starting questions for a redesign

1. **Imagery direction** — keep the six glass-render images and extend that visual language further (icons, new sections), or move toward the stricter monochrome-UI aesthetic and phase out full-color imagery entirely?
2. **The wordmark's dead two-tone effect** — "Gen"/"Excel" is coded as two colors but both currently resolve to the same ink-black. Worth either re-introducing a real second tone there or simplifying the markup.
3. **Cyan/violet's role** — keep them as the "informational, never interactive" carve-out, fold them into the yellow-only system entirely, or promote one of them back to a real second interactive accent?
4. **Spacing scale cleanup** — several steps in the 6px-grid migration collapsed to duplicate values (`--space-8`/`--space-10` both 36px, four different tokens all resolving to 96px) — worth a clean re-derivation rather than carrying the collapsed scale forward.

## Quick Start — Current CSS Custom Properties

```css
:root {
  /* Colors */
  --color-ink-black: #1a1a1a;
  --color-paper-white: #ffffff;
  --color-fog-gray: #f4f4f4;
  --color-ash-gray: #a3a3a3;
  --color-highlighter-yellow: #fbff2b;
  --color-info-cyan: #0891b2;
  --color-accent-secondary: #7c3aed;

  /* Semantic (light mode) */
  --color-bg: var(--color-paper-white);
  --color-bg-card: var(--color-paper-white);
  --color-bg-alt: var(--color-fog-gray);
  --color-bg-inverse: var(--color-ink-black);
  --color-text: var(--color-ink-black);
  --color-text-muted: var(--color-ash-gray);
  --color-border: rgba(26, 26, 26, 0.14);
  --color-border-strong: var(--color-ink-black);
  --color-accent: var(--color-ink-black); /* neutral, interactive */
  --color-cta-bg: var(--color-ink-black);
  --color-cta-text: var(--color-paper-white);
  --color-highlight-bg: var(--color-highlighter-yellow); /* scarce, one button/page */
  --color-highlight-text: var(--color-ink-black);

  /* Typography */
  --font-display: 'Inter', 'Neue Haas Grotesk Text', 'Helvetica Neue', sans-serif;
  --font-body: var(--font-display);
  /* letter-spacing: -0.03em at every size, everywhere */
  /* font-weight: 400 default / 500 emphasis — nothing above 500 */

  /* Spacing (6px base) */
  --space-3: 12px; --space-6: 24px; --space-8: 36px; --space-12: 48px; --space-24: 96px;

  /* Radius */
  --radius-sm: 10px;  /* buttons, inputs */
  --radius-lg: 16px;  /* cards, menus — cap */
  --radius-pill: 999px; /* circular controls only */

  /* Elevation */
  --shadow-sm: none; --shadow-md: none; --shadow-lg: none;

  /* Layout */
  --content-max: 1200px;
}
```
