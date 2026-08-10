export type PricingRow = {
  capability: string;
  basic: boolean | string;
  pro: boolean | string;
};

/** BASIC vs PRO comparison — Guide §5.2, verbatim. */
export const pricingRows: PricingRow[] = [
  { capability: "Account, household, profiles", basic: true, pro: true },
  { capability: "AI tutor, chat and voice", basic: true, pro: true },
  { capability: "Textbook-grounded schoolwork help", basic: true, pro: true },
  { capability: "Learning hub, lesson learner, study plans, roadmaps", basic: true, pro: true },
  { capability: "Academic results, report-card scanning, mastery mapping", basic: true, pro: true },
  { capability: "Psychometric learning profile", basic: true, pro: true },
  { capability: "Diet plans, food scanning, water and weight tracking", basic: true, pro: true },
  { capability: "Fitness plans, gym logging, habits, achievements", basic: true, pro: true },
  { capability: "Step tracking, wearables, health metrics", basic: true, pro: true },
  { capability: "Games, rewards, journey", basic: true, pro: true },
  { capability: "Genetic report assignment", basic: false, pro: true },
  { capability: "My Traits section", basic: "Lifestyle section instead", pro: true },
  { capability: "Genetic personalisation of the tutor", basic: false, pro: true },
  { capability: "Genetic adjustments in nutrition and fitness", basic: false, pro: true },
];

export const pricingNote =
  "On a BASIC account the navigation bar shows a Lifestyle tab in place of Traits, and the AI tutor operates under a strict instruction never to mention genes, DNA, genotypes or “your traits” at all — it offers an upgrade instead of a partial answer. Upgrading is a request-and-approval flow: request PRO in the app, an administrator approves it, and the unlock takes effect on your device immediately, with no need to sign out or restart.";
