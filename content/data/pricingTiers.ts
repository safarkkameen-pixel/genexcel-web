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
 * The single, authoritative pricing model — Free / Premium / Family —
 * per the content inventory (Home §3.6, Pricing §12.2). The previous
 * BASIC/PRO feature-comparison table (content/data/pricing.ts) has been
 * retired from /pricing in favour of this model.
 */
export const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "The AI tutor and lifestyle tools, on us",
    popular: false,
    cta: "Get Started Free",
    href: "/get-the-app",
    features: [
      "Helix AI tutor, chat and voice",
      "Textbook-grounded homework help",
      "Study plans, lesson learner and roadmaps",
      "Diet plans, NutriScan and water tracking",
      "Fitness plans and gym logging",
      "Lifestyle tracking (My Traits unlocks on PRO)",
      "1 child profile",
    ],
  },
  {
    name: "Premium",
    price: "₹2,999",
    period: "per year",
    description: "Everything in Free, plus your child's genetic report",
    popular: true,
    cta: "Order Genetic Test",
    href: "/demo",
    features: [
      "Everything in Free",
      "Genetic test kit included",
      "Full My Traits report: diet, learning, fitness, personality and health",
      "Genetic adjustments in nutrition and fitness plans",
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
    cta: "Get Family Plan",
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
