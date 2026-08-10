export type PricingTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  popular: boolean;
  cta: string;
  href: string;
  features: string[];
};

/**
 * Homepage pricing-teaser tiers — confirmed real figures, provided
 * directly for this merge (see the "GenExcel Landing v3" reference).
 *
 * NOTE: this is a separate, marketing-facing presentation of pricing
 * from content/data/pricing.ts (the BASIC/PRO feature-comparison table
 * on the dedicated /pricing page, sourced verbatim from the Product
 * Guide §5.2). The two aren't reconciled — /pricing still shows
 * BASIC/PRO. Worth squaring away which is authoritative before launch.
 */
export const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "The AI tutor and lifestyle tools, on us",
    popular: false,
    cta: "Get started free",
    href: "/get-the-app",
    features: [
      "Helix AI tutor, chat and voice",
      "Textbook-grounded homework help",
      "Study plans, lesson learner and roadmaps",
      "Diet plans, NutriScan and water tracking",
      "Fitness plans and gym logging",
      "1 child profile",
    ],
  },
  {
    name: "Premium",
    price: "₹2,999",
    period: "per year",
    description: "Everything in Free, plus your child's genetic report",
    popular: true,
    cta: "Order genetic test",
    href: "/demo",
    features: [
      "Everything in Free",
      "Genetic test kit included",
      "Full My Traits report across five domains",
      "Genetic adjustments in nutrition and fitness",
      "Genetic counsellor consultations",
      "Priority email support",
    ],
  },
  {
    name: "Family",
    price: "₹7,999",
    period: "per year",
    description: "For families with multiple children",
    popular: false,
    cta: "Get family plan",
    href: "/demo",
    features: [
      "Everything in Premium",
      "Up to 4 children on genetic reports",
      "Family health comparisons",
      "Combined genetic insights",
      "Priority consultation booking",
      "Dedicated family support",
    ],
  },
];
