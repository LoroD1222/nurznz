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

const formConfigs = {
  activity: {
    title: "Activity enquiry",
    intro: "Static mockup of the public contact form fields for production.",
    submit: "Send trip enquiry",
    fields: {
      primary: "Your name",
      secondary: "Email or WhatsApp",
      tertiary: "Trip type",
      quaternary: "Date or travel window",
      details: "Guests and pickup area",
      message: "Message",
    },
    placeholders: {
      primary: "Lead guest or requester name",
      secondary: "Best contact details",
      tertiary: "Snorkelling / Stone Town / spice / beach day",
      quaternary: "Preferred date or month",
      details: "2 adults, Nungwi hotel pickup, private or shared",
      message: "Tell us what you want to do, group size, timing needs and any special requests.",
    },
    success: "Enquiry received. The local team will reply with availability and next steps.",
  },
  partner: {
    title: "Partner enquiry",
    intro: "Static mockup of the partner sales form fields for production.",
    submit: "Send partner enquiry",
    fields: {
      primary: "Company name",
      secondary: "Contact person",
      tertiary: "Partner type",
      quaternary: "Expected monthly guests",
      details: "Activity interests",
      message: "Partner message",
    },
    placeholders: {
      primary: "Blue Coast Resort",
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

  function update(field: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  }

  function validate(nextValues: FormState) {
    const nextErrors: Partial<FormState> = {};

    if (!nextValues.primary.trim()) nextErrors.primary = "This field is required.";
    if (!nextValues.secondary.trim()) {
      nextErrors.secondary = "Add a contact detail.";
    }
    if (!nextValues.tertiary.trim()) nextErrors.tertiary = "This field is required.";
    if (!nextValues.quaternary.trim()) nextErrors.quaternary = "This field is required.";
    if (!nextValues.details.trim()) nextErrors.details = "This field is required.";
    if (nextValues.message.trim().length < 12) {
      nextErrors.message = "Tell us a little more about the request.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
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
    if (!validate(nextValues)) return;
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[8px] border border-[rgba(17,62,60,0.12)] bg-white p-7 shadow-[0_18px_45px_rgba(15,31,28,0.1)] sm:p-8"
      noValidate
    >
      <div className="mb-5">
        <h2 className="text-[22px] font-extrabold leading-[28px] text-teal-deep">
          {config.title}
        </h2>
        <p className="mt-1 text-[14px] leading-5 text-muted-copy">
          {config.intro}
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 md:gap-x-6">
        <Field label={config.fields.primary} error={errors.primary}>
          <input
            name="primary"
            required
            value={values.primary}
            onChange={(event) => update("primary", event.target.value)}
            aria-invalid={Boolean(errors.primary)}
            placeholder={config.placeholders.primary}
            className="h-[50px] w-full rounded-[5px] border border-[#e9dfd2] bg-cream/50 px-3 text-[14px] outline-none focus:border-coral"
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
            className="h-[50px] w-full rounded-[5px] border border-[#e9dfd2] bg-cream/50 px-3 text-[14px] outline-none focus:border-coral"
            autoComplete="email"
          />
        </Field>
        <Field label={config.fields.tertiary} error={errors.tertiary}>
          <input
            name="tertiary"
            required
            value={values.tertiary}
            onChange={(event) => update("tertiary", event.target.value)}
            aria-invalid={Boolean(errors.tertiary)}
            placeholder={config.placeholders.tertiary}
            className="h-[50px] w-full rounded-[5px] border border-[#e9dfd2] bg-cream/50 px-3 text-[14px] outline-none focus:border-coral"
          />
        </Field>
        <Field label={config.fields.quaternary} error={errors.quaternary}>
          <input
            name="quaternary"
            required
            value={values.quaternary}
            onChange={(event) => update("quaternary", event.target.value)}
            aria-invalid={Boolean(errors.quaternary)}
            placeholder={config.placeholders.quaternary}
            className="h-[50px] w-full rounded-[5px] border border-[#e9dfd2] bg-cream/50 px-3 text-[14px] outline-none focus:border-coral"
          />
        </Field>
      </div>
      <Field label={config.fields.details} error={errors.details} className="mt-4">
        <input
          name="details"
          required
          value={values.details}
          onChange={(event) => update("details", event.target.value)}
          aria-invalid={Boolean(errors.details)}
          placeholder={config.placeholders.details}
          className="h-[50px] w-full rounded-[5px] border border-[#e9dfd2] bg-cream/50 px-3 text-[14px] outline-none focus:border-coral"
        />
      </Field>
      <Field label="Message" error={errors.message} className="mt-5">
        <textarea
          name="message"
          required
          minLength={12}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          placeholder={config.placeholders.message}
          className="min-h-[128px] w-full resize-y rounded-[5px] border border-[#e9dfd2] bg-cream/50 px-3 py-3 text-[14px] leading-6 outline-none focus:border-coral"
        />
      </Field>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <Button type="submit" size="wide">
          {config.submit}
        </Button>
        {submitted ? (
          <p className="text-[15px] font-medium leading-6 text-teal">
            {config.success}
          </p>
        ) : null}
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
      <span className="mb-2 block text-[12px] font-bold text-teal">
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
