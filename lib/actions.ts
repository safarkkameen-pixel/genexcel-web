"use server";

export type LeadFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

/**
 * Handles both the Demo and Contact forms. Validates and returns a
 * success state today; wiring the actual delivery (email/CRM) is a
 * deployment step, not a website-architecture one — see README.md
 * "Before launch" for what to connect here.
 */
export async function submitLeadForm(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !emailPattern.test(email) || !message) {
    return {
      status: "error",
      message: "Please fill in your name, a valid email address, and a short message.",
    };
  }

  // TODO(launch): send this to the actual sales/support inbox or CRM.
  console.log("[lead-form]", { name, email, message, formType: formData.get("formType") });

  return {
    status: "success",
    message: "Thanks — we've received your message and will be in touch shortly.",
  };
}

/** Contact §15.3 — the dedicated contact form, distinct from the demo/lead form above. */
export async function submitContactForm(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const topic = String(formData.get("topic") ?? "General Inquiry").trim();
  const phone = String(formData.get("phone") ?? "").trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2) {
    return { status: "error", message: "Name must be at least 2 characters." };
  }
  if (!emailPattern.test(email)) {
    return { status: "error", message: "Please enter a valid email." };
  }
  if (message.length < 10) {
    return { status: "error", message: "Message must be at least 10 characters." };
  }

  // TODO(launch): send this to the actual sales/support inbox or CRM.
  console.log("[contact-form]", { name, email, phone, topic, message });

  return {
    status: "success",
    message: "Thank you for reaching out. We'll respond within 24 hours.",
  };
}

/** Delete Account §24.3 — a deletion request, not an immediate action. */
export async function submitDeleteAccountRequest(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const email = String(formData.get("email") ?? "").trim();
  const reason = String(formData.get("reason") ?? "").trim();
  const comments = String(formData.get("comments") ?? "").trim();
  const confirmed = formData.get("confirmed") === "on";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (!confirmed) {
    return { status: "error", message: "You must confirm to proceed." };
  }

  // TODO(launch): route this to the account-deletion queue / support inbox.
  console.log("[delete-account-request]", { email, reason, comments });

  return {
    status: "success",
    message: "We've received your account deletion request.",
  };
}
