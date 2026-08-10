import { Dna, Bot, UtensilsCrossed, FlaskConical, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Stand-in for the design's photo <image-slot>s (hero portrait, the 3 intro
 * bento cards, the about lab photo) — no photography was supplied, so each
 * variant renders an on-brand gradient + watermark icon instead of an <img>.
 * Swap a call site to a real photo later by replacing <AbstractArt variant="x" />
 * with an <img>/<Image> in the same absolutely-positioned wrapper.
 */

type Variant = 'genetics' | 'helix' | 'nutrition' | 'portrait' | 'lab';

const VARIANTS: Record<Variant, { icon: LucideIcon; light: string; dark: string }> = {
  genetics: {
    icon: Dna,
    light: 'radial-gradient(120% 120% at 30% 20%, #A5F3FC 0%, #7DD3FC 42%, #2563EB 100%)',
    dark: 'radial-gradient(120% 120% at 30% 20%, #164E63 0%, #0C4A6E 42%, #031326 100%)',
  },
  helix: {
    icon: Bot,
    light: 'radial-gradient(120% 120% at 70% 25%, #DBEAFE 0%, #60A5FA 45%, #1D4ED8 100%)',
    dark: 'radial-gradient(120% 120% at 70% 25%, #172554 0%, #0C1E4A 45%, #02091A 100%)',
  },
  nutrition: {
    icon: UtensilsCrossed,
    light: 'radial-gradient(120% 120% at 40% 75%, #FEF3C7 0%, #FCD34D 42%, #D97706 100%)',
    dark: 'radial-gradient(120% 120% at 40% 75%, #451A03 0%, #78350F 42%, #1C0F02 100%)',
  },
  portrait: {
    icon: Dna,
    light: 'radial-gradient(circle at 34% 30%, #FFFFFF 0%, #A5F3FC 45%, #60A5FA 100%)',
    dark: 'radial-gradient(circle at 34% 30%, #0E3A52 0%, #0C2A4A 45%, #01101F 100%)',
  },
  lab: {
    icon: FlaskConical,
    light: 'radial-gradient(120% 120% at 25% 15%, #E0F2FE 0%, #7DD3FC 48%, #0369A1 100%)',
    dark: 'radial-gradient(120% 120% at 25% 15%, #0C2A4A 0%, #0A1E38 48%, #010A16 100%)',
  },
};

export function AbstractArt({
  variant,
  className,
}: {
  variant: Variant;
  className?: string;
}) {
  const { icon: Icon, light, dark } = VARIANTS[variant];

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <div className="absolute inset-0 dark:hidden" style={{ background: light }} />
      <div className="absolute inset-0 hidden dark:block" style={{ background: dark }} />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,.8) 0 1px, transparent 1px 26px)',
        }}
      />
      <Icon
        className="absolute -bottom-[8%] -right-[8%] text-white/25 dark:text-white/[.08]"
        style={{ width: '62%', height: '62%' }}
        strokeWidth={0.9}
      />
    </div>
  );
}
