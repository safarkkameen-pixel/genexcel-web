import type { BentoItem } from "@/components/react-bits/MagicBento/MagicBento";

/** Health & Wellness feature grid — Guide §11-13. */
export const healthWellnessFeatures: BentoItem[] = [
  {
    id: "steps",
    title: "Activity & steps",
    body: "Works out of the box with no extra hardware — and if a smartwatch is connected, it always wins over the phone's count.",
    iconSrc: "/icons/bento/wearable-heart.png",
    wide: true,
  },
  {
    id: "wearables",
    title: "Wearables",
    body: "Apple Health, Android Health Connect (including Samsung Galaxy Watch), and direct Bluetooth heart-rate straps.",
    iconSrc: "/icons/devices/android-health-connect.png",
  },
  {
    id: "diet",
    title: "Nutrition & diet",
    body: "Seven-day plans with genetic adjustments, NutriScan food-photo analysis, hydration tracking and grocery lists.",
    iconSrc: "/icons/bento/nutrition-scan.png",
  },
  {
    id: "fitness",
    title: "Fitness & gym",
    body: "Generated workout plans, live set-by-set gym logging, personal records, habits and achievements.",
    iconSrc: "/icons/bento/target-circle.png",
  },
  {
    id: "metrics",
    title: "Health metrics",
    body: "Growth and vitals, clinical measurements, activity rings, and an iPhone home-screen widget kept live in the background.",
    iconSrc: "/icons/bento/health-checklist.png",
  },
  {
    id: "blueprint",
    title: "The athletic blueprint",
    body: "Where you sit on the power-versus-endurance spectrum, recovery tendencies and injury-risk considerations from your genetic profile.",
    iconSrc: "/icons/bento/dna-document.png",
  },
];
