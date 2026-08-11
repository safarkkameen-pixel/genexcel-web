export type HomeStep = {
  num: string;
  title: string;
  text: string;
};

/** Home §3.4 "The science behind our service" — 4 steps, per the content inventory. */
export const howItWorksHome: HomeStep[] = [
  {
    num: "01",
    title: "Order Your Kit",
    text: "A collection kit ships to your door, or is collected at a school health camp. Simple, painless saliva collection.",
  },
  {
    num: "02",
    title: "Lab Analysis",
    text: "Your sample is analysed by our accredited partner laboratory and returned as a detailed genetic report.",
  },
  {
    num: "03",
    title: "Automatic Reading",
    text: "GenExcel reads the report in about ten seconds — every trait and gene reading — then checks itself four ways before anything uncertain reaches a human reviewer.",
  },
  {
    num: "04",
    title: "Start Your Journey",
    text: "Once assigned under recorded consent, the report reaches your child's My Traits, your household view, and Helix — who starts teaching differently from that day.",
  },
];
