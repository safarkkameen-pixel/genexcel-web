import type { BentoItem } from "@/components/react-bits/MagicBento/MagicBento";

/** School Genomics feature grid — Guide §10. */
export const schoolGenomicsFeatures: BentoItem[] = [
  {
    id: "learning-hub",
    title: "Learning hub",
    body: "Today's quest, colour-coded subject tiles with animated progress rings, and the week rendered as a path of stars.",
    iconSrc: "/icons/bento/book-check.png",
  },
  {
    id: "lesson-learner",
    title: "Lesson learner",
    body: "Six tabs per chapter — summary, ask, flashcards, quiz, the book itself, and videos where available.",
    iconSrc: "/icons/bento/chatbot.png",
    wide: true,
  },
  {
    id: "study-plans",
    title: "Study plans",
    body: "Paced across weak and focus chapters so a normal child isn't overloaded, with streaks and milestones that survive regeneration.",
    iconSrc: "/icons/bento/study-plan-flag.png",
  },
  {
    id: "roadmaps",
    title: "Roadmaps",
    body: "A goal-driven path rendered as an adventure — day-by-day nodes with a clear 'you're here' marker.",
    iconSrc: "/icons/bento/roadmap-path.png",
  },
  {
    id: "academics",
    title: "Academic results",
    body: "Report-card scanning, exam records, subject bars, and a mastery map estimated from quizzes, teach-backs and study sessions.",
    iconSrc: "/icons/bento/target-circle.png",
  },
  {
    id: "journey",
    title: "The discovery journey",
    body: "A gamified level ladder from Curious Beginner to Genomic Scholar, with habits, discoveries and achievements.",
    iconSrc: "/icons/bento/health-checklist.png",
  },
];

export const schoolGenomicsGames = {
  title: "Cognitive games, dressed as play",
  body:
    "Ten games are designed as cognitive assessments; eight are currently playable — Focus Fortress, Pattern Quest, Memory Maze, Word Wizard, Math Master, Speed Sprint, Emotion Explorer and Spatial Safari. Game performance maps back onto genetic traits, closing the loop in the other direction.",
};
