"use client";

import { useActionState } from "react";
import { submitLeadForm, type LeadFormState } from "@/lib/actions";
import { Button } from "@/components/ui/Button";
import styles from "./LeadForm.module.scss";

const initialState: LeadFormState = { status: "idle", message: "" };

type LeadFormProps = {
  formType: "demo" | "contact";
  messageLabel?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
};

export function LeadForm({
  formType,
  messageLabel = "How can we help?",
  messagePlaceholder = "Tell us a bit about your school, clinic, or household...",
  submitLabel = "Send",
}: LeadFormProps) {
  const [state, formAction, pending] = useActionState(submitLeadForm, initialState);

  return (
    <form action={formAction} className={styles.form}>
      <input type="hidden" name="formType" value={formType} />

      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">{messageLabel}</label>
        <textarea id="message" name="message" required rows={4} placeholder={messagePlaceholder} />
      </div>

      <div role="status" aria-live="polite" className={styles.statusRegion}>
        {state.status !== "idle" && (
          <p className={state.status === "success" ? styles.success : styles.error}>{state.message}</p>
        )}
      </div>

      <Button type="submit" variant="accent" size="md" disabled={pending}>
        {pending ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}
