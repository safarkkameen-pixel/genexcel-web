export type CtaBand = {
  id: string;
  eyebrow?: string;
  headline: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export const homeFinalCta: CtaBand = {
  id: "home-final",
  eyebrow: "Start with a saliva sample",
  headline: "See what changes when a report becomes the input, not the product",
  body: "Download the app for your household, or book a demo if you're a school or a clinical partner.",
  primaryCta: { label: "Get the app", href: "/get-the-app" },
  secondaryCta: { label: "Book a demo", href: "/demo" },
};

/**
 * The homepage's own final CTA — kept separate from homeFinalCta (which
 * is shared across five other pages) so this copy change doesn't leak
 * onto pages that didn't ask for it.
 */
export const landingFinalCta: CtaBand = {
  id: "landing-final",
  headline: "A head start written in their own code.",
  body: "Kits ship in 3–5 days. Results in 2–3 weeks. A tutor, a diet plan and a coach that keep reading from it.",
  primaryCta: { label: "Get the app", href: "/get-the-app" },
  secondaryCta: { label: "Book a demo", href: "/demo" },
};

export const schoolCta: CtaBand = {
  id: "school-cta",
  headline: "Bring GenExcel to your school",
  body: "Health camps, per-student learning profiles, and lessons matched to how your class actually learns.",
  primaryCta: { label: "Book a school demo", href: "/demo" },
  secondaryCta: { label: "Talk to sales", href: "/contact" },
};

export const clinicianCta: CtaBand = {
  id: "clinician-cta",
  headline: "Partner with GenExcel",
  body: "A caseload workspace built for genetic counsellors, with the scope and audit trail clinical data deserves.",
  primaryCta: { label: "Partner with us", href: "/demo" },
};
