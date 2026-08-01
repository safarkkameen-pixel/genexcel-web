'use client';

// Simplified DNA visual using CSS instead of Three.js for better performance
export function DNAScene() {
  return (
    <div className="absolute inset-0 -z-5 flex items-center justify-center opacity-30 pointer-events-none">
      <div className="relative w-32 h-64">
        {/* Simple rotating gradient circle */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400/30 to-secondary-400/30 blur-xl animate-pulse" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-secondary-300/20 to-accent-300/20 blur-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );
}
