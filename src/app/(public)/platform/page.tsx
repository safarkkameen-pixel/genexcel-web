import type { Metadata } from 'next';
import PlatformPage from './PlatformClient';

export const metadata: Metadata = {
  title: 'Platform Overview',
  description: 'Genetics, Helix the AI tutor, learning, nutrition, fitness and family tools — every system one genetic report feeds, in one place.',
};

export default function Page() {
  return <PlatformPage />;
}
