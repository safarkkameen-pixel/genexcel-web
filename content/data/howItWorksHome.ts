export type HomeStep = {
  num: string;
  title: string;
  text: string;
};

/**
 * A condensed, 3-step version of the journey for the homepage — the
 * full 8-stage version (content/data/journeyStages.ts) stays on
 * /how-it-works. Guide §3.2, §7.6, §7.8.
 */
export const howItWorksHome: HomeStep[] = [
  {
    num: "01",
    title: "Connect",
    text: "Order a collection kit, or join a school health camp. A few minutes of saliva is all it takes.",
  },
  {
    num: "02",
    title: "Analyze",
    text: "Our accredited partner laboratory sequences the sample, and GenExcel reads the report in about ten seconds — checking itself four ways.",
  },
  {
    num: "03",
    title: "Act",
    text: "Under recorded consent, the report reaches My Traits and Helix — who starts teaching differently from that day.",
  },
];
