export type RoleView = {
  role: "Child" | "Parent" | "Teacher" | "Counsellor";
  summary: string;
  detail: string;
};

/** "One Report, Four Views" — How It Works content inventory. */
export const roleViews: RoleView[] = [
  {
    role: "Child",
    summary:
      "A friendly profile across diet, learning, fitness and personality, with genes and plain-language advice.",
    detail:
      "A friendly profile across diet, learning, fitness and personality, with genes and plain-language advice. Risk-related traits and any psychometric score are deliberately withheld — and the tutor never says genetics changed how it teaches.",
  },
  {
    role: "Parent",
    summary:
      "The household picture: each child's health, progress and consents, plus their own report if they have one.",
    detail:
      "The household picture: each child's health, progress and consents, plus their own report if they have one. Consent can be granted or withdrawn for any category, at any time.",
  },
  {
    role: "Teacher",
    summary:
      "A curated learning profile — cognitive ability, memory, attention, motivation, reading, maths, verbal ability, creativity and stress resilience on a simple one-to-ten scale.",
    detail:
      "A curated learning profile — cognitive ability, memory, attention, motivation, reading, maths, verbal ability, creativity and stress resilience on a simple one-to-ten scale. Never raw genetic readings.",
  },
  {
    role: "Counsellor",
    summary:
      "The complete clinical picture for everyone in their caseload, correctly framed for risk, with consultations and messaging.",
    detail:
      "The complete clinical picture for everyone in their caseload, correctly framed for risk, with consultations and messaging — and access that ends the instant a user leaves their caseload.",
  },
];
