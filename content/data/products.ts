export type ProductSummary = {
  slug: "school-genomics" | "health-wellness";
  name: string;
  tagline: string;
  centreOfGravity: string;
  signatureFeatures: string[];
};

/** "Two products, one platform" — Guide §2.3, §4.1. */
export const products: ProductSummary[] = [
  {
    slug: "school-genomics",
    name: "School Genomics",
    tagline: "The student-centred product: an AI tutor, study plans, lessons and academic insight.",
    centreOfGravity: "Learning",
    signatureFeatures: [
      "AI tutor grounded in your child's own textbooks",
      "Study plans, lesson learner, roadmaps",
      "Psychometric learning profile",
      "A gamified discovery journey",
    ],
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    tagline: "The adult, body-centred product: activity, nutrition, fitness and health tracking.",
    centreOfGravity: "The body",
    signatureFeatures: [
      "Activity rings, steps and wearables",
      "Diet plans with genetic adjustments",
      "Gym programming and live workout logging",
      "Apple Health and Health Connect integration",
    ],
  },
];
