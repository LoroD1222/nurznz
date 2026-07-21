"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type FormState = {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  details: string;
  message: string;
};

const initialState: FormState = {
  primary: "",
  secondary: "",
  tertiary: "",
  quaternary: "",
  details: "",
  message: "",
};

const WEB3FORMS_ACCESS_KEY = "f461e6fa-57a6-499c-badc-e2c46e747260";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const formConfigs = {
  activity: {
    title: "Activity enquiry",
    intro: "Share the basics and the NUR ZANZIBAR TOURS team will reply with availability and next steps.",
    submit: "Send trip enquiry",
    helper: "Response routed to the activity team.",
    fields: {
      primary: "Your name",
      secondary: "Email or WhatsApp",
      tertiary: "Trip type",
      quaternary: "Date or travel window",
      details: "Guests and pickup area",
      message: "Message",
    },
    placeholders: {
      primary: "Full name",
      secondary: "Best contact details",
      tertiary: "Snorkeling / Stone Town / spice / beach day",
      quaternary: "Preferred date or month",
      details: "2 adults, Nungwi hotel pickup, private or shared",
      message: "Tell us what you want to do, group size, timing needs and any special requests.",
    },
    success: "Enquiry received. The local team will reply with availability and next steps.",
  },
  partner: {
    title: "Partner enquiry",
    intro: "Share partner details so NUR ZANZIBAR TOURS can respond with rates, terms and operating fit.",
    submit: "Send partner enquiry",
    helper: "Response routed to partner sales and operations.",
    fields: {
      primary: "Company name",
      secondary: "Contact person",
      tertiary: "Partner type",
      quaternary: "Expected monthly guests",
      details: "Activity interests",
      message: "Partner message",
    },
    placeholders: {
      primary: "Company or agency name",
      secondary: "Name, role and email",
      tertiary: "Hotel / DMC / Agency / STO / concierge",
      quaternary: "Approximate activity volume",
      details: "Stone Town, spice farm, sandbank, custom group, white-label",
      message: "Tell us about guest profile, white-label needs, booking lead time and preferred contact channel.",
    },
    success: "Partner enquiry received. The team will reply with availability and rate next steps.",
  },
};

export function ContactForm({
  variant = "activity",
}: {
  variant?: keyof typeof formConfigs;
}) {
  const config = formConfigs[variant];
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function update(field: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
    setSubmitError("");
  }

  function validate(nextValues: FormState) {
    const nextErrors: Partial<FormState> = {};

    if (!nextValues.primary.trim()) nextErrors.primary = "This field is required.";
    if (!nextValues.secondary.trim()) {
      nextErrors.secondary = "Add a contact detail.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextValues = {
      primary: String(formData.get("primary") ?? ""),
      secondary: String(formData.get("secondary") ?? ""),
      tertiary: String(formData.get("tertiary") ?? ""),
      quaternary: String(formData.get("quaternary") ?? ""),
      details: String(formData.get("details") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setValues(nextValues);
    setSubmitted(false);
    setSubmitError("");
    if (!validate(nextValues)) return;

    const submission = new FormData();
    submission.append("access_key", WEB3FORMS_ACCESS_KEY);
    submission.append("subject", `${config.title} from NUR Zanzibar website`);
    submission.append("from_name", nextValues.primary);
    submission.append("name", nextValues.primary);
    submission.append("email", nextValues.secondary);
    submission.append("enquiry_type", config.title);
    submission.append(config.fields.primary, nextValues.primary);
    submission.append(config.fields.secondary, nextValues.secondary);
    submission.append(config.fields.tertiary, nextValues.tertiary);
    submission.append(config.fields.quaternary, nextValues.quaternary);
    submission.append(config.fields.details, nextValues.details);
    submission.append("message", [
      `${config.fields.primary}: ${nextValues.primary}`,
      `${config.fields.secondary}: ${nextValues.secondary}`,
      `${config.fields.tertiary}: ${nextValues.tertiary}`,
      `${config.fields.quaternary}: ${nextValues.quaternary}`,
      `${config.fields.details}: ${nextValues.details}`,
      "",
      nextValues.message,
    ].join("\n"));

    setSubmitting(true);
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: submission,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Submission failed");
      }

      setValues(initialState);
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or contact us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[8px] border border-[rgba(17,62,60,0.19)] bg-white p-7 shadow-[0_18px_45px_rgba(15,31,28,0.1)] sm:p-[34px]"
      noValidate
    >
      <div className="mb-[25px]">
        <h2 className="text-[28px] font-extrabold leading-9 text-teal-deep">
          {config.title}
        </h2>
        <p className="mt-1 text-[15px] leading-[23px] text-muted-copy">
          {config.intro}
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 md:gap-x-[52px]">
        <Field label={config.fields.primary} error={errors.primary}>
          <input
            name="primary"
            required
            value={values.primary}
            onChange={(event) => update("primary", event.target.value)}
            aria-invalid={Boolean(errors.primary)}
            placeholder={config.placeholders.primary}
            className="h-14 w-full rounded-[8px] border border-[#d8c9af] bg-cream px-[15px] text-[15px] outline-none focus:border-coral"
            autoComplete="name"
          />
        </Field>
        <Field label={config.fields.secondary} error={errors.secondary}>
          <input
            name="secondary"
            required
            value={values.secondary}
            onChange={(event) => update("secondary", event.target.value)}
            aria-invalid={Boolean(errors.secondary)}
            placeholder={config.placeholders.secondary}
            className="h-14 w-full rounded-[8px] border border-[#d8c9af] bg-cream px-[15px] text-[15px] outline-none focus:border-coral"
            autoComplete="email"
          />
        </Field>
        <Field label={config.fields.tertiary} error={errors.tertiary}>
          <input
            name="tertiary"
            value={values.tertiary}
            onChange={(event) => update("tertiary", event.target.value)}
            aria-invalid={Boolean(errors.tertiary)}
            placeholder={config.placeholders.tertiary}
            className="h-14 w-full rounded-[8px] border border-[#d8c9af] bg-cream px-[15px] text-[12px] outline-none focus:border-coral"
          />
        </Field>
        <Field label={config.fields.quaternary} error={errors.quaternary}>
          <input
            name="quaternary"
            value={values.quaternary}
            onChange={(event) => update("quaternary", event.target.value)}
            aria-invalid={Boolean(errors.quaternary)}
            placeholder={config.placeholders.quaternary}
            className="h-14 w-full rounded-[8px] border border-[#d8c9af] bg-cream px-[15px] text-[15px] outline-none focus:border-coral"
          />
        </Field>
      </div>
      <Field label={config.fields.details} error={errors.details} className="mt-[21px]">
        <input
          name="details"
          value={values.details}
          onChange={(event) => update("details", event.target.value)}
          aria-invalid={Boolean(errors.details)}
          placeholder={config.placeholders.details}
          className="h-14 w-full rounded-[8px] border border-[#d8c9af] bg-cream px-[15px] text-[15px] outline-none focus:border-coral"
        />
      </Field>
      <Field label={config.fields.message} error={errors.message} className="mt-[21px]">
        <textarea
          name="message"
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          placeholder={config.placeholders.message}
          className="min-h-28 w-full resize-y rounded-[8px] border border-[#d8c9af] bg-cream px-[15px] py-[14px] text-[15px] leading-[21px] outline-none focus:border-coral"
        />
      </Field>
      <div className="mt-[25px] flex flex-wrap items-center gap-4">
        <Button type="submit" size="wide" disabled={submitting}>
          {submitting ? "Sending..." : config.submit}
        </Button>
        {submitError ? (
          <p className="text-[15px] font-medium leading-6 text-coral" role="alert">
            {submitError}
          </p>
        ) : submitted ? (
          <p className="text-[15px] font-medium leading-6 text-teal">
            {config.success}
          </p>
        ) : (
          <p className="text-[13px] leading-[18px] text-[#7b8987]">
            {config.helper}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-[6px] block text-[13px] font-bold leading-[18px] text-[#006c67]">
        {label}
      </span>
      {children}
      {error ? (
        <span className="mt-2 block text-[14px] text-coral" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
