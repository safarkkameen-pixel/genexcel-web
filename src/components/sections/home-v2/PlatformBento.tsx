'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Dna, Bot, GraduationCap, Camera, HeartPulse, Users, type LucideIcon } from 'lucide-react';

const FEATURES: { icon: LucideIcon; tag: string; title: string; description: string; span?: string }[] = [
  { icon: Dna, tag: '26 PROFILES', title: 'Genetic Reports', description: 'Diet, learning, fitness, personality and health — read from the lab PDF in about ten seconds.' },
  { icon: Bot, tag: '225K+ PASSAGES', title: 'Helix, the AI Tutor', description: 'Answers homework from your child’s own textbook, and never mentions genetics while it teaches.' },
  { icon: GraduationCap, tag: 'SCHOOL GENOMICS', title: 'Learning & Study', description: 'Study plans, roadmaps and a lesson generator that adapt to how each child actually learns.', span: 'lg:[grid-column:span_2] lg:[grid-row:span_2]' },
  { icon: Camera, tag: 'INSTANT', title: 'AI NutriScan', description: 'Photograph any meal for instant nutrition analysis, with targets tuned to genetic adjustments.', span: 'lg:[grid-column:1/span_2] lg:[grid-row:2/span_2]' },
  { icon: HeartPulse, tag: 'LIVE LOGGING', title: 'Fitness & Habits', description: 'Workout plans, live gym logging and step tracking synced with Apple Health or Health Connect.' },
  { icon: Users, tag: 'UP TO 5 KIDS', title: 'Family Dashboard', description: 'One household account, consent you control, and a genetic counsellor in the loop when you want one.', span: 'lg:[grid-column:4] lg:[grid-row:3]' },
];

const GLOW_COLOR = '34, 211, 238';
const PARTICLE_COUNT = 10;
const SPOTLIGHT_RADIUS = 340;
const MOBILE_BREAKPOINT = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

function createParticle(x: number, y: number) {
  const el = document.createElement('div');
  el.className = 'gx-bento-particle';
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  return el;
}

function BentoCard({
  feature,
  disableAnimations,
}: {
  feature: (typeof FEATURES)[number];
  disableAnimations: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isHoveredRef = useRef(false);
  const magnetismRef = useRef<gsap.core.Tween | null>(null);
  const Icon = feature.icon;

  const clearParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismRef.current?.kill();
    particlesRef.current.forEach((p) => {
      gsap.to(p, { scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)', onComplete: () => p.remove() });
    });
    particlesRef.current = [];
  }, []);

  const spawnParticles = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    const { width, height } = card.getBoundingClientRect();
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const particle = createParticle(Math.random() * width, Math.random() * height);
        cardRef.current.appendChild(particle);
        particlesRef.current.push(particle);
        gsap.fromTo(particle, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
        gsap.to(particle, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true,
        });
        gsap.to(particle, { opacity: 0.3, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true });
      }, i * 100);
      timeoutsRef.current.push(timeoutId);
    }
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (disableAnimations || !card) return;

    const onEnter = () => {
      isHoveredRef.current = true;
      spawnParticles();
      gsap.to(card, { rotateX: 4, rotateY: 4, duration: 0.3, ease: 'power2.out', transformPerspective: 1000 });
    };
    const onLeave = () => {
      isHoveredRef.current = false;
      clearParticles();
      gsap.to(card, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
    };
    const onMove = (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      gsap.to(card, {
        rotateX: ((y - centerY) / centerY) * -7,
        rotateY: ((x - centerX) / centerX) * 7,
        duration: 0.1,
        ease: 'power2.out',
        transformPerspective: 1000,
      });
      magnetismRef.current = gsap.to(card, { x: (x - centerX) * 0.04, y: (y - centerY) * 0.04, duration: 0.3, ease: 'power2.out' });
    };
    const onClick = (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );
      const ripple = document.createElement('div');
      ripple.style.cssText = `position:absolute;border-radius:50%;pointer-events:none;z-index:4;width:${maxDistance * 2}px;height:${maxDistance * 2}px;left:${x - maxDistance}px;top:${y - maxDistance}px;background:radial-gradient(circle, rgba(${GLOW_COLOR},.4) 0%, rgba(${GLOW_COLOR},.2) 30%, transparent 70%);`;
      card.appendChild(ripple);
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.8, ease: 'power2.out', onComplete: () => ripple.remove() });
    };

    card.addEventListener('pointerenter', onEnter);
    card.addEventListener('pointerleave', onLeave);
    card.addEventListener('pointermove', onMove);
    card.addEventListener('click', onClick);
    return () => {
      isHoveredRef.current = false;
      card.removeEventListener('pointerenter', onEnter);
      card.removeEventListener('pointerleave', onLeave);
      card.removeEventListener('pointermove', onMove);
      card.removeEventListener('click', onClick);
      clearParticles();
    };
  }, [disableAnimations, spawnParticles, clearParticles]);

  return (
    <div
      ref={cardRef}
      className={`gx-bento-glow relative flex flex-col justify-between min-h-[230px] rounded-3xl p-6 overflow-hidden border border-slate-200 bg-white shadow-glass transition-colors duration-300 hover:border-slate-300 dark:bg-transparent dark:bg-gradient-to-br dark:from-white/10 dark:to-white/[.03] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border-white/[.15] dark:shadow-none dark:hover:border-white/[.34] ${feature.span ?? ''}`}
    >
      <div className="relative z-[2] flex items-center justify-between mb-5">
        <span className="inline-flex items-center justify-center w-[46px] h-[46px] rounded-2xl border border-cyan-200 bg-cyan-50 dark:border-[#22D3EE]/[.24] dark:bg-[#22D3EE]/[.09]">
          <Icon className="h-[21px] w-[21px] text-cyan-600 dark:text-[#67E8F9]" strokeWidth={1.6} />
        </span>
        <span className="font-display text-[11px] font-medium tracking-[0.14em] text-amber-600 dark:text-[#F59E0B]">{feature.tag}</span>
      </div>
      <div className="relative z-[2] flex flex-col">
        <h3 className="font-display text-[15.5px] sm:text-[17px] lg:text-[19px] font-medium tracking-[-0.01em] text-slate-900 dark:text-white mb-2">{feature.title}</h3>
        <p className="text-[13.5px] leading-[1.6] text-slate-600 dark:text-[#8B9AB5]">{feature.description}</p>
      </div>
    </div>
  );
}

function GlobalSpotlight({ gridRef, enabled }: { gridRef: React.RefObject<HTMLDivElement>; enabled: boolean }) {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!enabled || !gridRef.current) return;
    const spotlight = document.createElement('div');
    spotlight.className = 'gx-bento-spotlight';
    spotlight.style.background = `radial-gradient(circle, rgba(${GLOW_COLOR},.15) 0%, rgba(${GLOW_COLOR},.08) 15%, rgba(${GLOW_COLOR},.04) 25%, rgba(${GLOW_COLOR},.02) 40%, rgba(${GLOW_COLOR},.01) 65%, transparent 70%)`;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const proximity = SPOTLIGHT_RADIUS * 0.5;
    const fadeDistance = SPOTLIGHT_RADIUS * 0.75;

    const onMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;
      const section = gridRef.current.closest('.gx-bento-section');
      const rect = section?.getBoundingClientRect();
      const inside = !!rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
      const cards = gridRef.current.querySelectorAll<HTMLDivElement>('.gx-bento-glow');
      if (!inside) {
        gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' });
        cards.forEach((card) => card.style.setProperty('--glow-intensity', '0'));
        return;
      }
      let minDistance = Infinity;
      cards.forEach((card) => {
        const r = card.getBoundingClientRect();
        const distance = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2)) - Math.max(r.width, r.height) / 2;
        const eff = Math.max(0, distance);
        minDistance = Math.min(minDistance, eff);
        let intensity = 0;
        if (eff <= proximity) intensity = 1;
        else if (eff <= fadeDistance) intensity = (fadeDistance - eff) / (fadeDistance - proximity);
        card.style.setProperty('--glow-x', `${((e.clientX - r.left) / r.width) * 100}%`);
        card.style.setProperty('--glow-y', `${((e.clientY - r.top) / r.height) * 100}%`);
        card.style.setProperty('--glow-intensity', String(intensity));
      });
      gsap.to(spotlightRef.current, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' });
      const targetOpacity =
        minDistance <= proximity ? 0.8 : minDistance <= fadeDistance ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8 : 0;
      gsap.to(spotlightRef.current, { opacity: targetOpacity, duration: targetOpacity > 0 ? 0.2 : 0.5, ease: 'power2.out' });
    };
    const onLeaveDoc = () => {
      gridRef.current?.querySelectorAll<HTMLDivElement>('.gx-bento-glow').forEach((c) => c.style.setProperty('--glow-intensity', '0'));
      if (spotlightRef.current) gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' });
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeaveDoc);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeaveDoc);
      spotlightRef.current?.remove();
    };
  }, [gridRef, enabled]);

  return null;
}

export function PlatformBento() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  return (
    <section id="platform" className="relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-11"
        >
          <div className="max-w-[640px]">
            <div className="text-[11.5px] font-semibold tracking-[0.24em] uppercase text-cyan-600 dark:text-[#22D3EE] mb-5">The platform</div>
            <h2 className="font-display font-light text-slate-900 dark:text-white tracking-[-0.03em] leading-[1.14]" style={{ fontSize: 'clamp(28px,3.6vw,44px)' }}>
              Six systems, written from the genome out.
            </h2>
          </div>
          <p className="text-[14.5px] leading-[1.7] text-slate-600 dark:text-[#8B9AB5] max-w-[340px]">
            One saliva sample feeds six systems &mdash; from a tutor that reads your child&rsquo;s textbooks to a diet plan adjusted to their genes.
          </p>
        </motion.div>

        <GlobalSpotlight gridRef={gridRef} enabled={!isMobile} />
        <div ref={gridRef} className="gx-bento-section relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {FEATURES.map((feature) => (
            <BentoCard key={feature.title} feature={feature} disableAnimations={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}
