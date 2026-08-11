"use client";

import { useActionState, useState } from "react";
import { submitDeleteAccountRequest } from "@/lib/actions";
import type { LeadFormState } from "@/lib/actions";
import { Button } from "@/components/ui/Button";
import styles from "./DeleteAccountForm.module.scss";

const initialState: LeadFormState = { status: "idle", message: "" };

const REASONS = [
  "Select a reason (optional)",
  "I no longer use the app",
  "Privacy concerns",
  "Switching to another service",
  "Too many notifications",
  "Technical issues",
  "Other",
];

export function DeleteAccountForm() {
  const [state, formAction, pending] = useActionState(submitDeleteAccountRequest, initialState);
  const [confirmed, setConfirmed] = useState(false);

  if (state.status === "success") {
    return (
      <div className={styles.success}>
        <h3 className={styles.successTitle}>Request Received</h3>
        <p className={styles.successBody}>We&apos;ve received your account deletion request.</p>
        <p className={styles.successBody}>Our team will process it within 7 business days.</p>
        <p className={styles.successBody}>A confirmation will be sent to your registered email.</p>
        <p className={styles.successContact}>
          Questions? Contact <a href="mailto:it@curanova.ai">it@curanova.ai</a>
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="email">Registered Email Address *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Enter the email you used to sign up"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="reason">Reason for Deletion</label>
        <select id="reason" name="reason" defaultValue={REASONS[0]}>
          {REASONS.map((reason) => (
            <option key={reason} value={reason === REASONS[0] ? "" : reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="comments">Additional Comments</label>
        <textarea id="comments" name="comments" rows={4} placeholder="Any additional feedback (optional)" />
      </div>

      <label className={styles.checkboxRow}>
        <input
          type="checkbox"
          name="confirmed"
          checked={confirmed}
          onChange={(event) => setConfirmed(event.target.checked)}
        />
        <span>
          I understand that this action is <strong>permanent and irreversible</strong>. All my data,
          including genomics reports, health records, and account information will be permanently deleted.
        </span>
      </label>

      <div role="status" aria-live="polite" className={styles.statusRegion}>
        {state.status === "error" && <p className={styles.error}>{state.message}</p>}
      </div>

      <Button type="submit" size="md" disabled={pending || !confirmed} className={styles.submitButton}>
        {pending ? "Submitting…" : "Submit Deletion Request"}
      </Button>
    </form>
  );
}
