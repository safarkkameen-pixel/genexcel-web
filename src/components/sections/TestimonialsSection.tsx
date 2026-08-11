'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { testimonials } from '@/config/site';
import { cn } from '@/lib/utils';

function TestimonialCard({
  testimonial,
  index,
  isActive,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
  isActive: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: isActive ? 1 : 0.5,
        scale: isActive ? 1 : 0.9,
        x: isActive ? 0 : index < 1 ? -50 : 50,
      }}
      transition={{ duration: 0.5 }}
      className={cn(
        'transition-all duration-500',
        !isActive && 'blur-sm pointer-events-none'
      )}
    >
      <GlassCard className="p-8 md:p-10" glow gradient>
        {/* Quote icon */}
        <div className="mb-6">
          <Quote className="h-10 w-10 text-primary-300 fill-primary-100" />
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 leading-relaxed mb-8 font-medium">
          &quot;{testimonial.quote}&quot;
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            {testimonial.author.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white">{testimonial.author}</div>
            <div className="text-slate-500 dark:text-slate-400 text-sm">
              {testimonial.role} • {testimonial.location}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-slate-900 dark:via-primary-950/30 dark:to-slate-900"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-100/50 dark:bg-primary-900/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary-100/50 dark:bg-secondary-900/20 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Badge variant="gradient" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Loved by <span className="gradient-text">Families</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            See what parents and healthcare professionals say about GenExcel.
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-200 dark:hover:border-primary-700 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-200 dark:hover:border-primary-700 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Testimonial cards */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  'transition-all duration-500',
                  index === activeIndex ? 'block' : 'hidden'
                )}
              >
                <TestimonialCard
                  testimonial={testimonial}
                  index={index}
                  isActive={index === activeIndex}
                />
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'w-3 h-3 rounded-full transition-all duration-300',
                  index === activeIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                )}
              />
            ))}
          </div>
        </div>

        {/* Logos section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">Trusted by leading organizations</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            {['Apollo', 'Fortis', 'Max', 'Manipal', 'AIIMS'].map((name) => (
              <div
                key={name}
                className="text-2xl font-bold text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
