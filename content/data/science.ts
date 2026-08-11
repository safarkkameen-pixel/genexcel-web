export type TraitCategory = {
  id: string;
  name: string;
  covers: string;
  examples: string;
};

/** The five trait categories — The Science content inventory. */
export const traitCategories: TraitCategory[] = [
  {
    id: "diet",
    name: "Diet & Nutrition",
    covers:
      "Vitamin and mineral tendencies (such as Vitamin D and B12), how the body handles carbs and fats, taste sensitivity, and snacking tendency.",
    examples: "Nutrient Tendencies",
  },
  {
    id: "academic",
    name: "Academic & Cognitive",
    covers:
      "Cognitive ability, memory, attention and focus, motivation, reading literacy, mathematical ability, verbal ability, creativity, and stress resilience.",
    examples: "Cognitive Skills",
  },
  {
    id: "fitness",
    name: "Fitness & Sport",
    covers: "Power-versus-endurance orientation, muscle and recovery traits, injury-risk tendency, and sport suitability.",
    examples: "Performance Traits",
  },
  {
    id: "personality",
    name: "Personality & Talents",
    covers:
      "Fifteen personality dimensions, aspects of intelligence and emotional intelligence, and seven distinct talent areas.",
    examples: "15 Traits + 7 Talents",
  },
  {
    id: "health",
    name: "Health-related",
    covers:
      "Elevated tendencies toward specific conditions, allergies, sleep traits, and neurological traits. Shown to parents and counsellors with careful clinical framing — risk-related traits are never shown to a child directly.",
    examples: "Clinically Reviewed",
  },
];

export type ScienceStat = {
  id: string;
  value: string;
  label: string;
};

/** The Science §2 stats — content inventory. */
export const scienceStats: ScienceStat[] = [
  { id: "traits", value: "1,020+", label: "Genetic Traits Catalogued" },
  { id: "profiles", value: "26", label: "Trait Profiles" },
  { id: "categories", value: "5", label: "Trait Categories" },
  { id: "parse-time", value: "10 sec", label: "Exact-Reader Report Parse" },
];

export type ProcessStep = {
  order: number;
  title: string;
  body: string;
};

/** "From Lab Report to Insights" — content inventory. */
export const scienceProcessSteps: ProcessStep[] = [
  {
    order: 1,
    title: "Lab Report Received",
    body: "Your certified testing lab completes the genetic analysis and issues a PDF report. GenExcel picks up from there — turning that report into something a family can actually use.",
  },
  {
    order: 2,
    title: "Exact Reading (fast path)",
    body: "For known lab report formats, our exact reader parses every trait row and gene reading, measures coloured bars, sliders and gauges to recover LOW / MEDIUM / HIGH bands, and detects ticked boxes and colour badges — in about 10 seconds, with no AI interpretation and no per-report cost.",
  },
  {
    order: 3,
    title: "Flexible Reading (AI-vision fallback)",
    body: "For unfamiliar report layouts, a second AI-vision-based reader takes over — about 8-9 minutes per report, at roughly 93% accuracy on row and value recall and roughly 96% agreement on gene readings. Its known weak spot is reading colour bands on chart pages, which is exactly why the exact reader is used wherever it applies.",
  },
  {
    order: 4,
    title: "Four-Way Self-Check",
    body: "Every reading is checked against the source report itself: nothing was dropped, nothing was invented, gene readings agree with the report's own glossary, and row counts match what's actually drawn on the page.",
  },
  {
    order: 5,
    title: "Human Review & Delivery",
    body: "Anything the flexible reader is uncertain about is routed to a human reviewer before it ever reaches a family. Only then is the personalised report generated.",
  },
];

export type ValidationCheck = {
  id: string;
  title: string;
  tag: string;
  description: string;
};

/** "Every Report Passes Four Checks" — content inventory. */
export const reportValidationChecks: ValidationCheck[] = [
  {
    id: "completeness",
    title: "Nothing Dropped",
    tag: "Completeness Check",
    description: "Confirms every trait row in the lab report was captured",
  },
  {
    id: "fabrication",
    title: "Nothing Invented",
    tag: "Fabrication Check",
    description: "Confirms no value was added beyond what's in the report",
  },
  {
    id: "consistency",
    title: "Glossary Match",
    tag: "Consistency Check",
    description: "Confirms gene readings agree with the report's own glossary",
  },
  {
    id: "rendering",
    title: "Row-Count Match",
    tag: "Rendering Check",
    description: "Confirms row counts match what is actually drawn on the page",
  },
];

export const reportValidationFootnote = "Run on every report, every time";

/** "Confirmed Against the Real Product" — content inventory. */
export const verifyChecklist: string[] = [
  "Exact reader: known lab formats parsed in ~10 seconds, no AI interpretation, no per-report cost",
  "Flexible reader: AI-vision fallback for unfamiliar layouts in 8-9 minutes",
  "Four automatic self-checks run before a report is ever shown to a family",
  "Anything the flexible reader is unsure about goes to a human reviewer first",
];

export const verifyCommitment = {
  title: "Our Commitment",
  body: "We never overstate what genetics can tell us. Our reports clearly distinguish between strong and emerging evidence.",
  checklist: [
    "Every reading verified against the original lab report",
    "Clear LOW / MEDIUM / HIGH bands for every trait",
    "Risk-related traits shown only to parents and counsellors, never to a child",
    "Uncertain cases reviewed by a human before delivery",
    "Full transparency about what genetics can and can't tell us",
  ] as string[],
};
