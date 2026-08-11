const BUBBLES = [
  { left: '6%', size: 10, duration: 17, delay: 0 },
  { left: '17%', size: 6, duration: 21, delay: 3 },
  { left: '28%', size: 14, duration: 25, delay: 7 },
  { left: '41%', size: 8, duration: 19, delay: 1.5 },
  { left: '56%', size: 11, duration: 23, delay: 9 },
  { left: '68%', size: 5, duration: 16, delay: 5 },
  { left: '79%', size: 13, duration: 27, delay: 2 },
  { left: '91%', size: 7, duration: 20, delay: 11 },
];

/** Fixed page background for the aqua/glass landing: gradient wash + three
 *  drifting blurred orbs + rising bubbles. Mirrors the design's decorative
 *  layer; mount once at the top of the homepage. */
export function AquaField() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 dark:hidden"
        style={{ background: 'linear-gradient(180deg,#EAF7FF 0%,#F3FBFF 38%,#EAF4FF 100%)' }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{ background: 'linear-gradient(180deg,#01101F 0%,#02091A 45%,#031326 100%)' }}
      />

      <div
        className="absolute animate-gx-drift"
        style={{
          top: '-12%',
          left: '-8%',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          filter: 'blur(46px)',
          background:
            'radial-gradient(circle at 34% 30%, rgba(125,211,252,.55), transparent 68%)',
        }}
      />
      <div
        className="absolute animate-gx-drift-reverse dark:hidden"
        style={{
          top: '26%',
          right: '-14%',
          width: '54vw',
          height: '54vw',
          borderRadius: '50%',
          filter: 'blur(54px)',
          background: 'radial-gradient(circle at 60% 40%, rgba(165,243,252,.5), transparent 66%)',
        }}
      />
      <div
        className="absolute animate-gx-drift-reverse hidden dark:block"
        style={{
          top: '26%',
          right: '-14%',
          width: '54vw',
          height: '54vw',
          borderRadius: '50%',
          filter: 'blur(54px)',
          background: 'radial-gradient(circle at 60% 40%, rgba(37,99,235,.32), transparent 66%)',
        }}
      />
      <div
        className="absolute animate-gx-drift-slow dark:hidden"
        style={{
          bottom: '-16%',
          left: '22%',
          width: '58vw',
          height: '58vw',
          borderRadius: '50%',
          filter: 'blur(58px)',
          background: 'radial-gradient(circle at 50% 50%, rgba(191,219,254,.55), transparent 66%)',
        }}
      />
      <div
        className="absolute animate-gx-drift-slow hidden dark:block"
        style={{
          bottom: '-16%',
          left: '22%',
          width: '58vw',
          height: '58vw',
          borderRadius: '50%',
          filter: 'blur(58px)',
          background: 'radial-gradient(circle at 50% 50%, rgba(14,116,144,.34), transparent 66%)',
        }}
      />

      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/50 dark:bg-[rgba(120,220,255,.22)]"
          style={{
            left: b.left,
            bottom: '-40px',
            width: b.size,
            height: b.size,
            animation: `gx-bubble ${b.duration}s linear infinite ${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
