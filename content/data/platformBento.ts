import type { BentoItem } from "@/components/react-bits/MagicBento/MagicBento";

/** Home §3.3 "Six systems, written from the genome out." bento grid. */
export const platformBentoItems: BentoItem[] = [
  {
    id: "genetic-reports",
    tag: "26 PROFILES",
    title: "Genetic Reports",
    body: "Diet, learning, fitness, personality and health — read from the lab PDF in about ten seconds.",
  },
  {
    id: "helix",
    tag: "225K+ PASSAGES",
    title: "Helix, the AI Tutor",
    body: "Answers homework from your child's own textbook, and never mentions genetics while it teaches.",
  },
  {
    id: "learning-study",
    tag: "SCHOOL GENOMICS",
    title: "Learning & Study",
    body: "Study plans, roadmaps and a lesson generator that adapt to how each child actually learns.",
    wide: true,
  },
  {
    id: "nutriscan",
    tag: "INSTANT",
    title: "AI NutriScan",
    body: "Photograph any meal for instant nutrition analysis, with targets tuned to genetic adjustments.",
    wide: true,
  },
  {
    id: "fitness-habits",
    tag: "LIVE LOGGING",
    title: "Fitness & Habits",
    body: "Workout plans, live gym logging and step tracking synced with Apple Health or Health Connect.",
  },
  {
    id: "family-dashboard",
    tag: "UP TO 5 KIDS",
    title: "Family Dashboard",
    body: "One household account, consent you control, and a genetic counsellor in the loop when you want one.",
  },
];
