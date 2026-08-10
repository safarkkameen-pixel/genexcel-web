export type JourneyStage = {
  order: number;
  title: string;
  body: string;
  roleCallouts?: string[];
};

/** The 8-stage journey — Guide §3.2. */
export const journeyStages: JourneyStage[] = [
  {
    order: 1,
    title: "Onboarding",
    body: "A parent registers the household, adds each child as a profile with a simple PIN, and accepts required consents on the child's behalf. Older students can register themselves directly and complete a learning-style questionnaire.",
  },
  {
    order: 2,
    title: "The learning-style assessment",
    body: "Before or shortly after entering the app, the student completes a psychometric assessment, by tapping or by speaking to Helix. The result is a four-domain learning profile — the child never sees a score or a label from it.",
  },
  {
    order: 3,
    title: "Sample collection",
    body: "For school customers, samples are collected at a health camp. Each collection kit carries a code such as CA101 — that code, and nothing about the child's identity, is what travels with the sample.",
  },
  {
    order: 4,
    title: "Report reading",
    body: "The laboratory returns a PDF, uploaded against the kit code. GenExcel reads it automatically — traits, gene readings, bands, charts, recommendations — and checks itself four ways before anything is trusted.",
  },
  {
    order: 5,
    title: "Review and assignment",
    body: "Anything the reader was unsure about goes to a review queue. Assignment to a child is a deliberate, gated action: the report must be approved, the account must be on PRO, and consent is explicitly confirmed and recorded.",
    roleCallouts: ["Administrator", "Genetic counsellor"],
  },
  {
    order: 6,
    title: "What each person now sees",
    body: "The child sees a curated, positively framed profile with risk traits withheld. The parent sees the household picture. The teacher sees a curated learning profile. The counsellor sees the complete clinical picture.",
    roleCallouts: ["Child", "Parent", "Teacher", "Counsellor"],
  },
  {
    order: 7,
    title: "Personalised teaching begins",
    body: "From this point the tutor is quietly different for this child — it knows their learning style, class, board, subjects and genetic learning disposition, and it is explicitly forbidden from naming any of it to the child.",
  },
  {
    order: 8,
    title: "The loop closes",
    body: "Quiz results, teach-backs, study sessions, report cards, tasks, steps and meals all feed back in. Mastery estimates update, study plans re-pace, and the tutor's picture of the child sharpens over time.",
  },
];
