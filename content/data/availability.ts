export type AvailabilityStatus =
  | "available"
  | "limited"
  | "ready_not_enabled"
  | "in_development"
  | "designed";

export type FeatureAvailability = {
  id: string;
  feature: string;
  status: AvailabilityStatus;
  note?: string;
  /**
   * Whether this feature may be claimed on the public marketing site at all.
   * Defaults follow the outline's own rule: `available` and `limited` (with
   * its note surfaced) may be shown; `ready_not_enabled`, `in_development`
   * and `designed` may not — they belong on /roadmap instead, framed as
   * vision (plan §9, §2).
   */
  publicSiteVisible: boolean;
};

/**
 * Mirrors Guide §22 (Feature Availability Summary). This is the mechanism
 * that operationalizes "only market features that are live today" — any
 * component making a feature claim should check this table rather than a
 * developer remembering not to mention something.
 */
export const availability: FeatureAvailability[] = [
  // Accounts and access — §22.1
  { id: "parent-led-signup", feature: "Parent-led household signup", status: "available", publicSiteVisible: true },
  { id: "student-self-registration", feature: "Student self-registration", status: "available", publicSiteVisible: true },
  { id: "child-device-access-code", feature: "Child device enrolment by access code", status: "available", publicSiteVisible: true },
  { id: "plan-upgrade-flow", feature: "Plan tiers and upgrade requests", status: "available", publicSiteVisible: true },
  { id: "mfa", feature: "Multi-factor authentication", status: "available", publicSiteVisible: true },
  { id: "password-reset", feature: "Password reset by email", status: "in_development", note: "Delivery not enabled; resets go through support today.", publicSiteVisible: false },
  { id: "social-sign-in", feature: "Google and Apple sign-in", status: "limited", note: "Works, but no screen offers it yet.", publicSiteVisible: false },

  // Genetics — §22.2
  { id: "exact-reader", feature: "Automatic reading of laboratory reports, exact reader", status: "available", note: "Verified exact on the current laboratory format, in about ten seconds.", publicSiteVisible: true },
  { id: "flexible-reader", feature: "Automatic reading, flexible reader for unknown layouts", status: "available", note: "Approximately 93% accuracy; flags uncertainties for review.", publicSiteVisible: true },
  { id: "report-assignment", feature: "Report assignment with consent confirmation", status: "available", publicSiteVisible: true },
  { id: "report-unassignment", feature: "Unassignment with immediate access removal", status: "available", publicSiteVisible: true },
  { id: "my-traits", feature: "The child's My Traits section", status: "available", note: "PRO only.", publicSiteVisible: true },
  { id: "nutrition-athletic-blueprint", feature: "Nutrition and athletic blueprints with genetic adjustments", status: "available", publicSiteVisible: true },
  { id: "guardian-view-child-report", feature: "Guardian viewing a child's genetic report", status: "in_development", note: "Deliberately deferred as a product and consent decision.", publicSiteVisible: false },
  { id: "polygenic-risk-scores", feature: "Polygenic risk scores", status: "in_development", note: "Display surfaces exist; scores are not yet generated.", publicSiteVisible: false },
  { id: "pharmacogenomics", feature: "Pharmacogenomics insight", status: "in_development", note: "Display surfaces exist; content is not yet generated.", publicSiteVisible: false },

  // The AI companion — §22.3
  { id: "helix-text-chat", feature: "Helix text chat with actions", status: "available", publicSiteVisible: true },
  { id: "textbook-grounded-help", feature: "Textbook-grounded schoolwork help", status: "available", publicSiteVisible: true },
  { id: "push-to-talk-voice", feature: "Push-to-talk voice", status: "available", publicSiteVisible: true },
  { id: "continuous-voice", feature: "Continuous conversational voice", status: "ready_not_enabled", note: "Held back for data-residency reasons — the only viable model would move children's audio outside India.", publicSiteVisible: false },
  { id: "screen-aware-helix", feature: "Screen-aware Helix", status: "available", publicSiteVisible: true },
  { id: "child-safety-guardrails", feature: "Child-safety guardrails", status: "available", publicSiteVisible: true },
  { id: "quiz-teach-back", feature: "Practice quiz and teach-back through conversation", status: "available", publicSiteVisible: true },
  { id: "proactive-companion", feature: "Proactive companion messages", status: "ready_not_enabled", note: "Built with safety guardrails; awaiting a rollout decision.", publicSiteVisible: false },
  { id: "nutriscan", feature: "Food photograph analysis (NutriScan)", status: "available", publicSiteVisible: true },
  { id: "report-card-scanning", feature: "Report-card scanning", status: "available", publicSiteVisible: true },
  { id: "lesson-generation", feature: "Lesson generation in fifteen methods", status: "available", publicSiteVisible: true },
  { id: "genetic-personalisation-everywhere", feature: "Genetic personalisation across every tutor surface", status: "designed", note: "Design approved; implementation not started.", publicSiteVisible: false },
  { id: "ai-health-insights", feature: "AI-generated health insights", status: "in_development", note: "Placeholder only.", publicSiteVisible: false },

  // Learning and academics — §22.4
  { id: "learning-hub", feature: "Learning hub", status: "available", publicSiteVisible: true },
  { id: "lesson-learner", feature: "Lesson learner with six tabs per chapter", status: "available", publicSiteVisible: true },
  { id: "study-plans", feature: "Study plans with completion and streaks", status: "available", publicSiteVisible: true },
  { id: "roadmaps-student", feature: "Roadmaps, student view", status: "available", publicSiteVisible: true },
  { id: "roadmaps-parent", feature: "Roadmaps and academics, parent view", status: "limited", note: "Shows prepared sample data rather than live figures.", publicSiteVisible: false },
  { id: "cognitive-games", feature: "Cognitive games", status: "limited", note: "Eight of ten playable.", publicSiteVisible: true },
  { id: "content-library", feature: "Content library", status: "in_development", note: "The reader is complete; the content is placeholder.", publicSiteVisible: false },

  // Health and wellness — §22.5
  { id: "phone-step-tracking", feature: "Phone step tracking", status: "available", publicSiteVisible: true },
  { id: "apple-health", feature: "Apple Health integration", status: "available", publicSiteVisible: true },
  { id: "android-health-connect", feature: "Android Health Connect integration, including Samsung watches", status: "available", publicSiteVisible: true },
  { id: "activity-rings", feature: "Activity rings and wellness home", status: "available", publicSiteVisible: true },
  { id: "iphone-widget", feature: "iPhone widget and Live Activity", status: "available", publicSiteVisible: true },
  { id: "bluetooth-devices", feature: "Bluetooth health devices with live heart rate", status: "available", publicSiteVisible: true },
  { id: "nature-nurture", feature: "Nature-versus-nurture correlation", status: "in_development", note: "Both sides are collected and mapped; the correlation engine itself is not yet built.", publicSiteVisible: false },

  // Nutrition and fitness — §22.6
  { id: "diet-plan-generation", feature: "Diet profile wizard and plan generation", status: "available", publicSiteVisible: true },
  { id: "nutrition-blueprint", feature: "Nutrition blueprint with genetic adjustments", status: "available", publicSiteVisible: true },
  { id: "workout-plans", feature: "Workout plan generation and customisation", status: "available", publicSiteVisible: true },
  { id: "live-gym-session", feature: "Live gym session logging", status: "available", publicSiteVisible: true },
  { id: "athletic-blueprint", feature: "Athletic blueprint", status: "available", publicSiteVisible: true },
  { id: "in-app-store", feature: "In-app store purchases", status: "in_development", note: "Presented as coming soon.", publicSiteVisible: false },

  // Staff and partner features — §22.7
  { id: "counsellor-portal", feature: "Counsellor portal, caseload and genetic profiles", status: "available", publicSiteVisible: true },
  { id: "counsellor-consultations", feature: "Counsellor consultations", status: "available", publicSiteVisible: true },
  { id: "counsellor-messaging", feature: "Counsellor messaging", status: "limited", note: "No inbox in the mobile app yet.", publicSiteVisible: false },
  { id: "teacher-portal", feature: "Teacher portal", status: "limited", note: "Fully functional; access control by role must be closed before an external school pilot.", publicSiteVisible: false },
  { id: "telehealth-booking", feature: "Telehealth booking and clinical records", status: "available", publicSiteVisible: true },
  { id: "telehealth-video", feature: "Telehealth live video and audio", status: "in_development", note: "The call connects; no audio or video is carried.", publicSiteVisible: false },
  { id: "command-centre-alerts", feature: "Command centre automatic alerting", status: "limited", note: "The workspace exists; automatic rule evaluation is not running.", publicSiteVisible: false },

  // Platform services — §22.8
  { id: "push-notifications", feature: "Push and in-app notifications", status: "available", publicSiteVisible: true },
  { id: "consent-enforcement", feature: "Consent enforcement blocking", status: "ready_not_enabled", note: "The single most significant compliance item to close.", publicSiteVisible: false },
  { id: "data-subject-rights", feature: "Data-subject rights: access, export, erasure, withdrawal", status: "available", publicSiteVisible: true },
  { id: "multilingual-tutor", feature: "Multilingual tutor and textbook content", status: "available", publicSiteVisible: true },
];

export function getAvailability(id: string): FeatureAvailability | undefined {
  return availability.find((row) => row.id === id);
}

export function isClaimable(id: string): boolean {
  return getAvailability(id)?.publicSiteVisible ?? false;
}
