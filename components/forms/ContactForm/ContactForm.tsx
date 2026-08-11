"use client";

import { useActionState, useState } from "react";
import { submitContactForm } from "@/lib/actions";
import type { LeadFormState } from "@/lib/actions";
import { Button } from "@/components/ui/Button";
import styles from "./ContactForm.module.scss";

const initialState: LeadFormState = { status: "idle", message: "" };

const TOPICS = ["General Inquiry", "Sales & Pricing", "Technical Support", "Partnerships"];

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const [topic, setTopic] = useState(TOPICS[0]);

  if (state.status === "success") {
    return (
      <div className={styles.success}>
        <h2 className={styles.successTitle}>Message Sent!</h2>
        <p className={styles.successBody}>Thank you for reaching out. We&apos;ll respond within 24 hours.</p>
        <Button href="/contact" variant="secondary" size="md">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form action={formAction} className={styles.form}>
      <input type="hidden" name="topic" value={topic} />

      <div className={styles.field}>
        <span className={styles.label}>What can we help you with?</span>
        <div className={styles.topicTiles} role="radiogroup" aria-label="What can we help you with?">
          {TOPICS.map((option) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={topic === option}
              className={[styles.topicTile, topic === option && styles.topicTileActive]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setTopic(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="name">Full Name *</label>
        <input id="name" name="name" type="text" required autoComplete="name" placeholder="John Doe" />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email Address *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="john@example.com"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="phone">Phone Number (Optional)</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Your Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          minLength={10}
          placeholder="Tell us how we can help..."
        />
      </div>

      <div role="status" aria-live="polite" className={styles.statusRegion}>
        {state.status === "error" && <p className={styles.error}>{state.message}</p>}
      </div>

      <Button type="submit" size="md" disabled={pending}>
        {pending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
