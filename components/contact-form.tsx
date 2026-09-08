import type { ContactFieldErrors } from "@/lib/schema";

type ContactFormProps = {
  success?: boolean;
  errors?: ContactFieldErrors;
  serverError?: string;
  values?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

export function ContactForm({
  success,
  errors,
  serverError,
  values,
}: ContactFormProps) {
  if (success) {
    return (
      <div className="rounded-xl border border-line bg-surface p-8 text-center">
        <h2 className="text-lg font-medium text-ink">Message sent</h2>
        <p className="mt-2 text-sm text-muted">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      action="/api/contact"
      method="POST"
      className="rounded-xl border border-line bg-surface p-6 sm:p-8"
      noValidate
    >
      {serverError ? (
        <p
          role="alert"
          className="mb-6 rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-ink"
        >
          {serverError}
        </p>
      ) : null}

      <div
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor="company">Leave this field empty</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            defaultValue={values?.name}
            aria-invalid={errors?.name ? true : undefined}
            aria-describedby={errors?.name ? "name-error" : undefined}
            className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink"
          />
          {errors?.name ? (
            <p id="name-error" className="mt-1.5 text-xs text-ink">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue={values?.email}
            aria-invalid={errors?.email ? true : undefined}
            aria-describedby={errors?.email ? "email-error" : undefined}
            className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink"
          />
          {errors?.email ? (
            <p id="email-error" className="mt-1.5 text-xs text-ink">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            defaultValue={values?.message}
            aria-invalid={errors?.message ? true : undefined}
            aria-describedby={errors?.message ? "message-error" : undefined}
            className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink"
          />
          {errors?.message ? (
            <p id="message-error" className="mt-1.5 text-xs text-ink">
              {errors.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-ink"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
