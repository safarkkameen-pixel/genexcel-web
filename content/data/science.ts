export type TraitCategory = {
  id: string;
  name: string;
  covers: string;
  examples: string;
};

/** The five trait categories — Guide §7.1. */
export const traitCategories: TraitCategory[] = [
  {
    id: "diet",
    name: "Diet and nutrition",
    covers: "Vitamin and mineral tendencies, how the body handles macronutrients, eating behaviour, taste sensitivity",
    examples: "Vitamin A, B2, B12 and D tendencies, carbohydrate and fat sensitivity, sweet and bitter taste perception",
  },
  {
    id: "academic",
    name: "Academic and cognitive",
    covers: "Learning and thinking dispositions",
    examples: "Cognitive ability, memory performance, attention and focus, motivation, reading and mathematical ability, creativity, stress resilience",
  },
  {
    id: "fitness",
    name: "Fitness and sport",
    covers: "Physical disposition and training response",
    examples: "Power versus endurance orientation, muscle and recovery traits, injury-risk tendencies, sport suitability",
  },
  {
    id: "personality",
    name: "Personality and talents",
    covers: "Behavioural and aptitude tendencies",
    examples: "Fifteen personality dimensions, intelligence and emotional-intelligence aspects, seven talent areas",
  },
  {
    id: "health",
    name: "Health-related",
    covers: "Elevated tendencies to specific conditions, plus allergies, sleep and neurology",
    examples: "Health risk tendencies, addiction susceptibility, allergy tendencies, sleep traits, neurological traits",
  },
];

export const reportReaders = [
  {
    name: "The exact reader",
    speed: "About 10 seconds",
    detail:
      "For report formats the platform has been taught, everything is read directly from the document with no AI interpretation and no per-report cost — trait names, gene readings, coloured bars and bands, ticked recommendation boxes, even personality panels baked into artwork. It then checks itself four ways before anything is trusted.",
  },
  {
    name: "The flexible reader",
    speed: "Roughly 8–9 minutes",
    detail:
      "For an unfamiliar report layout, a second reader uses AI vision to read the pages section by section. Its measured accuracy is approximately 93% for row recall and value accuracy, with 96% agreement on gene readings — anything uncertain is flagged for a human reviewer rather than guessed.",
  },
];
