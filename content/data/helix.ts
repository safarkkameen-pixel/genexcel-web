import type { BentoItem } from "@/components/react-bits/MagicBento/MagicBento";

/** Helix capability grid — Guide §8.2, §8.8. */
export const helixCapabilities: BentoItem[] = [
  {
    id: "textbook",
    title: "Answers from your child's own textbooks",
    body: "Helix searches the actual prescribed textbook for that child's board, class and subject — not general knowledge. When it doesn't know, it says so and offers the chapters it does have.",
    iconSrc: "/icons/bento/book-check.png",
    wide: true,
  },
  {
    id: "teach-not-tell",
    title: "Teaches, rather than tells",
    body: "For a homework question, Helix gives the method and the first step. A full worked solution requires a second, explicit request.",
    iconSrc: "/icons/bento/chatbot.png",
  },
  {
    id: "quiz",
    title: "Practice quizzes",
    body: "Three to five questions, one per message, with an honest running score. It refuses to fabricate a score, even if pressed.",
    iconSrc: "/icons/bento/target-circle.png",
  },
  {
    id: "teach-back",
    title: "Teach-back sessions",
    body: "The child explains a concept in their own words; Helix assesses understanding and records it — the percentage is never read out to the child.",
    iconSrc: "/icons/bento/report-chat.png",
  },
  {
    id: "day-planner",
    title: "Manages the day by conversation",
    body: "Show today's plan, add or reschedule a task, set a weekly goal, update progress — all through ordinary conversation.",
    iconSrc: "/icons/bento/study-plan-flag.png",
  },
  {
    id: "voice",
    title: "Push-to-talk voice",
    body: "Hold to speak; Helix begins replying aloud as soon as the first sentence is ready, in a natural Indian-English voice that switches to Malayalam automatically when the reply is in Malayalam.",
    iconSrc: "/icons/bento/roadmap-path.png",
  },
];

export const helixSafetyRules: string[] = [
  "Never discuss disease risk, mental-health diagnoses or sensitive predispositions with a child",
  "Never state or imply that genetics informed a teaching decision",
  "Never read a psychometric score, label or result to a child",
  "Never shame about missed study, streaks or weak subjects",
  "Never fabricate a quiz score",
  "Never read out a teach-back understanding percentage",
  "Answer from the textbook first, and say clearly when it's going beyond the book",
];

export const helixChatDemo = [
  { from: "student" as const, text: "Can you help me with photosynthesis? I don't get it." },
  {
    from: "helix" as const,
    text: "Sure — let's start with your book. In your Class 7 Science chapter, photosynthesis is described in three steps. Which part is confusing: how plants take in sunlight, or what they make from it?",
  },
  { from: "student" as const, text: "The sunlight part" },
  {
    from: "helix" as const,
    text: "Good question. Chlorophyll — the green colour in leaves — absorbs sunlight. Want to try explaining that back to me in your own words?",
  },
];
