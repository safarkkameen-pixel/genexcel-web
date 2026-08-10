import type { Metadata } from 'next';
import SchoolsPage from './SchoolsClient';

export const metadata: Metadata = {
  title: 'For Schools',
  description: 'School Genomics brings health camps, per-student learning profiles and a 15-method lesson generator to your campus, plus Helix at home for every student.',
};

export default function Page() {
  return <SchoolsPage />;
}
