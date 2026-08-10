export type RoleView = {
  role: "Child" | "Parent" | "Teacher" | "Counsellor";
  summary: string;
  detail: string;
};

/** "What each person sees" — Guide §3.2 Stage 6, §7.3, §7.5. */
export const roleViews: RoleView[] = [
  {
    role: "Child",
    summary: "A friendly, positively framed profile — with risk traits withheld.",
    detail:
      "The child opens My Traits and finds their genetic profile organised into categories: diet and nutrition, academic and cognitive, fitness and sport, personality and talents, and health-related traits. Each trait shows a plain-language result, the genes behind it, and what to do about it. Risk-related traits, addiction-susceptibility results and mental-health-related traits are deliberately withheld from the child's own view.",
  },
  {
    role: "Parent",
    summary: "The household picture: health, progress, consents, and their own report.",
    detail:
      "The parent sees the household picture: children's health snapshots, progress, consents, and their own genetic report if they have one. Guardian access to a child's genetic report specifically is a deliberately deferred product and consent decision — see the Trust & Privacy page.",
  },
  {
    role: "Teacher",
    summary: "A curated, one-to-ten learning profile — never raw genetic readings.",
    detail:
      "The teacher sees a curated learning profile — cognitive ability, memory, attention, motivation, reading, mathematics, verbal ability, creativity and stress resilience on a simple one-to-ten scale — never raw genetic readings.",
  },
  {
    role: "Counsellor",
    summary: "The complete clinical picture, correctly framed for risk.",
    detail:
      "The genetic counsellor sees the complete picture for the students in their caseload, with proper risk framing, filters and search, and can hold consultations and message the family.",
  },
];
