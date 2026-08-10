export type RoadmapItem = {
  id: string;
  title: string;
  status: "In progress" | "Planned" | "The largest opportunity";
  body: string;
};

/**
 * Planned enhancements — Guide §25. Presented explicitly as vision, not
 * shipped functionality — this is precisely where the outline's "keep
 * off the public site for now" items belong instead (plan §2, §9).
 */
export const roadmapItems: RoadmapItem[] = [
  {
    id: "nature-nurture",
    title: "The nature-versus-nurture correlation engine",
    status: "The largest opportunity",
    body: "Everything around it is already in place: ~416 nurture measures, the mapping to genetic traits, four parent-facing collection screens, and the display surfaces. This is the product's stated central thesis, and building the correlation analysis itself is the next major piece of work.",
  },
  {
    id: "genetic-personalisation-everywhere",
    title: "Genetic personalisation across every tutor surface",
    status: "In progress",
    body: "The design is approved: a consistent, explicit set of learning directives derived from the genetic report — session length, best study time, scaffolding approach, strengths to lean on — applied identically everywhere Helix appears, with the same rule that a child is never told a gene, trait or risk shaped the lesson.",
  },
  {
    id: "telehealth-video",
    title: "Real telehealth video and audio",
    status: "Planned",
    body: "Booking, scheduling, clinical notes and prescriptions already work end to end. Completing live video and audio finishes a module that is otherwise fully built.",
  },
  {
    id: "guardian-report-access",
    title: "Guardian access to a child's genetic report",
    status: "Planned",
    body: "The most-requested missing capability in the parent experience — a product and consent decision, not a technical gap.",
  },
  {
    id: "content-library",
    title: "Live content in the reading library",
    status: "Planned",
    body: "The reading experience, spoken playback, search and bookmarks are already built and good. What's missing is a live content catalogue behind them.",
  },
  {
    id: "conversational-voice",
    title: "Continuous conversational voice",
    status: "Planned",
    body: "Fully built and deliberately switched off — the only viable model available today would route children's audio outside India. A compliant, India-hosted equivalent already runs in the internal test environment.",
  },
  {
    id: "polygenic-scores",
    title: "Polygenic risk scores and medication-response insight",
    status: "Planned",
    body: "Two clinically valuable additions with display surfaces already built — generating the underlying content is the remaining step.",
  },
  {
    id: "cohort-insight",
    title: "Cohort and school-level genetic insight",
    status: "Planned",
    body: "Schools would value aggregate, anonymous patterns across a year group — everything needed to produce them is already collected.",
  },
];
