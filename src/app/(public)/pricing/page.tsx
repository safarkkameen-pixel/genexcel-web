import type { Metadata } from 'next';
import PricingPage from './PricingClient';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Start free with Helix and the lifestyle tools, or unlock the full genetic report, My Traits and genetic personalisation with Premium or Family.',
};

export default function Page() {
  return <PricingPage />;
}
