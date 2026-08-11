export type JourneyStage = {
  order: number;
  title: string;
  body: string;
  roleCallouts?: string[];
};

/** The 6-stage journey — How It Works content inventory. */
export const journeyStages: JourneyStage[] = [
  {
    order: 1,
    title: "Set up the household",
    body: "A parent registers, adds each child with a name, date of birth and class, and accepts the required consents on their behalf. Older students can register themselves directly.",
  },
  {
    order: 2,
    title: "Collect the sample",
    body: "A saliva sample is collected — at home, or at a school health camp, where each collection kit carries a code and nothing else about the child's identity.",
  },
  {
    order: 3,
    title: "GenExcel reads the report",
    body: "The returned lab PDF is read automatically — every trait, gene reading and band — in about ten seconds, then checked four ways before anything uncertain goes to a human reviewer.",
  },
  {
    order: 4,
    title: "Review and assign, under consent",
    body: "A staff member reviews anything the reader flagged, then assigns the report to the child's account — gated on confirmed consent, a PRO plan, and one report per person. It can be reversed at any time.",
    roleCallouts: ["Administrator", "Genetic counsellor"],
  },
  {
    order: 5,
    title: "Everyone sees the right view",
    body: "The child gets a friendly, curated profile. The parent sees what to act on. The teacher sees a learning profile — never raw genetics. The counsellor sees the full clinical picture.",
    roleCallouts: ["Child", "Parent", "Teacher", "Counsellor"],
  },
  {
    order: 6,
    title: "Helix starts teaching differently",
    body: "From here, the AI tutor adapts how it teaches, nutrition and fitness plans pick up genetic adjustments, and quizzes, meals and workouts keep feeding a sharper picture back in.",
  },
];
