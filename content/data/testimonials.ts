export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  organization?: string;
  initials: string;
};

/**
 * Confirmed real testimonials, provided directly for this merge (see
 * the "GenExcel Landing v3" reference). Previously this array was
 * deliberately empty rather than seeded with invented quotes — these
 * replace that empty state because they were explicitly given as real,
 * not authored here.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "GenExcel helped us understand why our son struggled with focus in school. The genetic insights led us to the right dietary changes, and Helix explains his homework in a way that finally clicks. He's thriving now!",
    name: "Priya M.",
    role: "Parent of 9-year-old",
    organization: "Mumbai",
    initials: "PM",
  },
  {
    quote:
      "As a pediatrician, I recommend GenExcel to families who want to take a proactive approach to their child's health. The insights are clinically relevant, and the risk-related findings are framed carefully for parents rather than the child.",
    name: "Dr. Rajesh K.",
    role: "Pediatrician",
    organization: "Bangalore",
    initials: "RK",
  },
  {
    quote:
      "My daughter loves the brain games and is always excited to ‘scan’ her meals. It's made healthy eating fun and helped her take ownership of her health at just 7 years old.",
    name: "Anita S.",
    role: "Parent of 7-year-old",
    organization: "Delhi",
    initials: "AS",
  },
  {
    quote:
      "What sold me was that Helix answers from my son's actual textbook, not generic internet answers — and it never once mentioned his genetic report to him. That line between what I see as a parent and what he sees matters to us.",
    name: "Karthik R.",
    role: "Parent of 11-year-old",
    organization: "Chennai",
    initials: "KR",
  },
];
