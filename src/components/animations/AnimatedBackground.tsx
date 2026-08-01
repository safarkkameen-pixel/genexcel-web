'use client';

// Simplified background - static gradients for better performance
export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-primary-950/30" />

      {/* Static gradient orbs */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-200/20 dark:bg-primary-500/10 blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-secondary-200/20 dark:bg-secondary-500/10 blur-[100px]" />
      <div className="absolute top-1/3 left-1/4 h-[300px] w-[300px] rounded-full bg-accent-200/15 dark:bg-accent-500/10 blur-[100px]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}

// Disabled for performance
export function FloatingParticles() {
  return null;
}

// Disabled for performance
export function CursorGlow() {
  return null;
}
