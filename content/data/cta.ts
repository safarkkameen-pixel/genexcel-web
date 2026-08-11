export type CtaBand = {
  id: string;
  eyebrow?: string;
  headline: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

/** Home §3.7 closing CTA. */
export const homeFinalCta: CtaBand = {
  id: "home-final",
  headline: "Give your child a head start written in their own code.",
  body: "Kits ship in 3–5 days. Results in 2–3 weeks. A tutor, a diet plan and a coach that keep reading from it.",
  primaryCta: { label: "Order the genetic kit", href: "/pricing" },
  secondaryCta: { label: "Talk to our team", href: "/contact" },
};

/** Platform §5.6 closing CTA. */
export const platformCta: CtaBand = {
  id: "platform-final",
  headline: "Ready to See It on Your Child's Textbooks?",
  body: "Start free with Helix and the lifestyle tools, or order the genetic kit to unlock the full report.",
  primaryCta: { label: "Get Started Free", href: "/pricing" },
  secondaryCta: { label: "See How It Works", href: "/how-it-works" },
};

/** How It Works §6.5 closing CTA. */
export const howItWorksCta: CtaBand = {
  id: "how-it-works-final",
  headline: "See the Whole Platform",
  body: "Genetics, Helix, learning, nutrition and fitness — every system this report feeds, in one place.",
  primaryCta: { label: "Explore the Platform", href: "/platform" },
  secondaryCta: { label: "Talk to Our Team", href: "/contact" },
};

/** The Science §7.7 closing CTA. */
export const scienceCta: CtaBand = {
  id: "science-final",
  headline: "See the Science Behind Your Child's Report",
  body: "From lab report to a tutor that teaches differently — backed by a reading pipeline that checks its own work.",
  primaryCta: { label: "Get Started", href: "/pricing" },
  secondaryCta: { label: "Talk to a Scientist", href: "/contact" },
};

/** Solutions hub §8.3 closing CTA. */
export const solutionsCta: CtaBand = {
  id: "solutions-final",
  headline: "Not Sure Which Solution is Right for You?",
  body: "Our team can help you find the perfect fit for your needs. Schedule a free consultation today.",
  primaryCta: { label: "Contact Us", href: "/contact" },
};

/** Solutions — Families §9.5 closing CTA. */
export const familiesCta: CtaBand = {
  id: "families-final",
  headline: "Start Your Family's Health Journey Today",
  body: "Join thousands of families who are unlocking the power of personalized, genetics-informed health guidance.",
  primaryCta: { label: "Get Started Free", href: "/pricing" },
  secondaryCta: { label: "Learn More", href: "/how-it-works" },
};

/** Solutions — Healthcare §10.6 closing CTA. */
export const healthcareCta: CtaBand = {
  id: "healthcare-final",
  headline: "Ready to Transform Your Practice?",
  body: "Schedule a clinical demo to see how GenExcel can enhance your pediatric care with genetics-informed insights.",
  primaryCta: { label: "Schedule Clinical Demo", href: "/demo" },
  secondaryCta: { label: "Contact Medical Team", href: "/contact" },
};

/** Solutions — Schools §11.6 closing CTA. */
export const schoolsCta: CtaBand = {
  id: "schools-final",
  headline: "Ready to Transform Your School?",
  body: "Join 50+ schools already using GenExcel to improve student health and learning outcomes.",
  primaryCta: { label: "Request a Demo", href: "/demo" },
  secondaryCta: { label: "Talk to Sales", href: "/contact" },
};

/** Trust & Privacy §19.5 closing CTA. */
export const trustCta: CtaBand = {
  id: "trust-final",
  headline: "Questions About How We Handle Data?",
  body: "Our team can walk you through exactly how consent, encryption and access controls work.",
  primaryCta: { label: "Talk to Our Team", href: "/contact" },
};
