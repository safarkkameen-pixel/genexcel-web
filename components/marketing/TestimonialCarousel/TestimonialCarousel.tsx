import type { Testimonial } from "@/content/data/testimonials";
import { Text } from "@/components/ui/Text";
import styles from "./TestimonialCarousel.module.scss";

/**
 * Empty-state-aware by design (plan §7): no invented quotes ship unless
 * real ones are provided. When `testimonials` is empty this renders a
 * quiet, honest placeholder instead of fabricated praise.
 */
export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  if (testimonials.length === 0) {
    return (
      <div className={styles.empty}>
        <Text tone="muted" as="p">
          We&apos;re gathering stories from the families, schools and clinicians using GenExcel today.
          Check back soon — or{" "}
          <a href="/contact" className={styles.link}>
            tell us yours
          </a>
          .
        </Text>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {testimonials.map((testimonial) => (
        <blockquote key={testimonial.name} className={styles.card}>
          <p className={styles.quote}>“{testimonial.quote}”</p>
          <footer className={styles.attribution}>
            <span className={styles.avatar} aria-hidden="true">
              {testimonial.initials}
            </span>
            <span className={styles.attributionText}>
              <span className={styles.name}>{testimonial.name}</span>
              <span className={styles.meta}>
                {testimonial.role}
                {testimonial.organization ? ` · ${testimonial.organization}` : ""}
              </span>
            </span>
          </footer>
        </blockquote>
      ))}
    </div>
  );
}
