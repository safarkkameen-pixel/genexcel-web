import type { Metadata } from 'next';
import SolutionsPage from './SolutionsClient';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Tailored GenExcel experiences for families, schools and healthcare partners — genetics, Helix the AI tutor, and role-appropriate views for every adult involved.',
};

export default function Page() {
  return <SolutionsPage />;
}
