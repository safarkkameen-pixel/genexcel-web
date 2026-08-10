import type { Metadata } from 'next';
import FamiliesPage from './FamiliesClient';

export const metadata: Metadata = {
  title: 'For Families',
  description: "One household account, a genetic report, and Helix — an AI tutor grounded in your child's own textbooks — plus nutrition and fitness guidance for the whole family.",
};

export default function Page() {
  return <FamiliesPage />;
}
