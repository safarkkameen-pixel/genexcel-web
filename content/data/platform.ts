export type PlatformSystem = {
  id: string;
  title: string;
  description: string;
  checklist: string[];
};

/** Platform §5.3 — the six stacked system-detail cards. */
export const platformSystems: PlatformSystem[] = [
  {
    id: "genetic-reports",
    title: "Genetic Reports & My Traits",
    description:
      "A saliva sample becomes a report across diet, learning, fitness, personality and health — read from the lab PDF in about ten seconds and checked four ways before anyone sees it.",
    checklist: [
      "1,020+ traits in the master catalogue, 26 profiles across 5 categories",
      "Each report covers roughly 113 to 117 traits for that person",
      "Every trait shows a result, the genes behind it and what to do about it",
      "Risk-related traits are shown to parents and counsellors, never to the child",
    ],
  },
  {
    id: "helix",
    title: "Helix, the AI Learning Companion",
    description:
      "A tutor to a child, a professional assistant to a parent. Helix answers homework strictly from your child's own prescribed textbook — not general knowledge — and is never allowed to mention that genetics shaped how it teaches.",
    checklist: [
      "225,000+ searchable textbook passages, in English and Indian languages",
      "Text chat and push-to-talk voice, with replies spoken as they're produced",
      "Practice quizzes with an honest score, and teach-back sessions",
      "Manages a student's day plan by conversation — add, reschedule, mark done",
    ],
  },
  {
    id: "learning-school-genomics",
    title: "Learning & School Genomics",
    description:
      "A learning-style assessment plus the genetic profile shape study plans, lesson content and what a teacher can see — expressed as a simple one-to-ten profile, never raw genetic data.",
    checklist: [
      "Study plans, goal-driven roadmaps and a per-chapter lesson learner",
      "A lesson generator supporting 15 teaching methods for classroom use",
      "Report-card scanning with automatic mark reading and mastery mapping",
      "A curated 9-indicator learning profile for teachers, never genetics",
    ],
  },
  {
    id: "nutrition-nutriscan",
    title: "Nutrition & AI NutriScan",
    description:
      "A seven-day diet plan with calorie and macro targets that carry genetic adjustments — plus food recognition that turns a photo into a full nutritional breakdown.",
    checklist: [
      "NutriScan: photograph any meal for macros, allergens and a health score",
      "The nutrition blueprint shows exactly how genetics adjusted your targets",
      "Meal swaps, grocery lists, and water and weight tracking",
      "Meal-scan replaces planned nutrition with what was actually eaten",
    ],
  },
  {
    id: "fitness-gym-habits",
    title: "Fitness, Gym & Habits",
    description:
      "Programmed training that reflects a genetic disposition for power versus endurance, recovery tendencies and injury-risk considerations — plus live logging in the gym.",
    checklist: [
      "Generated workout plans, or build one manually day by day",
      "Live gym sessions with set logging, rest timers and live heart rate",
      "Step tracking, Apple Health and Health Connect integration",
      "Habits, points and achievements that encourage — never shame",
    ],
  },
  {
    id: "family-household",
    title: "Family & Household",
    description:
      "One household account for up to five children, PIN-protected profile switching, and consent that a parent grants and can withdraw at any time.",
    checklist: [
      "Each child gets their own real account — their own history, their own report",
      "Layered consent: legal documents, genetic testing, per-category revocation",
      "A parent sees what to act on; a genetic counsellor sees the full picture",
      "Telehealth booking, consultation notes and prescriptions",
    ],
  },
];

/** Platform §5.4 — 8 playable cognitive games. */
export const platformGames: string[] = [
  "Focus Fortress",
  "Pattern Quest",
  "Memory Maze",
  "Word Wizard",
  "Math Master",
  "Speed Sprint",
  "Emotion Explorer",
  "Spatial Safari",
];

export type ComingSoonItem = { text: string; tag: string };

/** Platform §5.4 — the "Coming Soon" card. */
export const platformComingSoon: ComingSoonItem[] = [
  { text: "Continuous, natural back-and-forth voice with Helix (push-to-talk is live today)", tag: "Soon" },
  { text: "Daily proactive nudges from Helix when it notices a student needs a hand", tag: "Soon" },
  { text: "A live, growing content library (the reading experience is built; content is on its way)", tag: "Soon" },
  { text: "Polygenic risk scores and medication-response insight", tag: "Soon" },
];
