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
