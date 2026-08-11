import type { Metadata } from 'next';
import SciencePage from './ScienceClient';

export const metadata: Metadata = {
  title: 'The Science',
  description: '1,020+ genetic traits across 26 profiles, and a report-reading pipeline that checks its own work four ways before a family ever sees it.',
};

export default function Page() {
  return <SciencePage />;
}
