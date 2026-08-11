import type { Metadata } from 'next';
import HowItWorksPage from './HowItWorksClient';

export const metadata: Metadata = {
  title: 'How It Works',
  description: "From one saliva sample to a report that changes how Helix teaches, what your child's diet plan targets, and what every adult around them can see.",
};

export default function Page() {
  return <HowItWorksPage />;
}
