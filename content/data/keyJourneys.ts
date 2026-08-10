export type KeyJourney = {
  id: string;
  title: string;
  body: string;
};

/** A few everyday journeys — Guide §18.6, §18.7, §18.10. */
export const keyJourneys: KeyJourney[] = [
  {
    id: "step-tracking",
    title: "A day of step tracking",
    body: "The phone's motion sensor starts counting the moment the app opens. If a smartwatch is connected, its count becomes authoritative and the phone stops contributing. Data saves periodically and whenever the app backgrounds, so closing the app never loses the day — and counters reset cleanly at midnight in your own local time.",
  },
  {
    id: "diet-week",
    title: "A week of diet planning",
    body: "Complete the seven-step diet profile once, and a seven-day plan generates meal by meal, with calorie and macro targets carrying genetic adjustments. Eat as planned and mark it complete, photograph something different and the real nutrition replaces the plan, or swap the meal for an alternative — water and weight log alongside, and a grocery list generates automatically.",
  },
  {
    id: "plan-upgrade",
    title: "A plan upgrade",
    body: "Request PRO from the plan screen. An administrator approves the request, and the account moves to PRO immediately — a notification reaches the device and Traits unlocks with no need to sign out or restart.",
  },
];
