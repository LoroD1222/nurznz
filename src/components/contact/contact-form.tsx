"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type FormState = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  interest: "Partner rates",
  message: "",
};

export function ContactForm({ title = "Activity enquiry" }: { title?: string }) {
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

    if (!nextValues.name.trim()) nextErrors.name = "Enter your name.";
    if (!nextValues.company.trim()) nextErrors.company = "Enter your company.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
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
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      interest: String(formData.get("interest") ?? "Partner rates"),
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
      className="rounded-[12px] border border-[rgba(17,62,60,0.12)] bg-white p-6 shadow-[0_12px_36px_rgba(15,31,28,0.06)]"
      noValidate
    >
      <div className="mb-5">
        <h2 className="text-[22px] font-extrabold leading-[28px] text-teal">
          {title}
        </h2>
        <p className="mt-1 text-[14px] leading-5 text-muted-copy">
          Share the request details so the local team can confirm fit and next
          steps.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            name="name"
            required
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            className="h-12 w-full rounded-[6px] border border-[#d9d2c8] px-4 text-[16px] outline-none focus:border-coral"
            autoComplete="name"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            name="email"
            type="email"
            required
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            className="h-12 w-full rounded-[6px] border border-[#d9d2c8] px-4 text-[16px] outline-none focus:border-coral"
            autoComplete="email"
          />
        </Field>
        <Field label="Company" error={errors.company}>
          <input
            name="company"
            required
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            aria-invalid={Boolean(errors.company)}
            className="h-12 w-full rounded-[6px] border border-[#d9d2c8] px-4 text-[16px] outline-none focus:border-coral"
            autoComplete="organization"
          />
        </Field>
        <Field label="Interest">
          <select
            name="interest"
            value={values.interest}
            onChange={(event) => update("interest", event.target.value)}
            className="h-12 w-full rounded-[6px] border border-[#d9d2c8] bg-white px-4 text-[16px] outline-none focus:border-coral"
          >
            <option>Partner rates</option>
            <option>Private group</option>
            <option>White-label supply</option>
            <option>Guest activity enquiry</option>
          </select>
        </Field>
      </div>
      <Field label="Message" error={errors.message} className="mt-5">
        <textarea
          name="message"
          required
          minLength={12}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          className="min-h-[138px] w-full resize-y rounded-[6px] border border-[#d9d2c8] px-4 py-3 text-[16px] leading-6 outline-none focus:border-coral"
        />
      </Field>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit" size="wide">
          Send enquiry
        </Button>
        {submitted ? (
          <p className="text-[15px] font-medium leading-6 text-teal">
            Enquiry received. The local team will reply with availability and
            next steps.
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
      <span className="mb-2 block text-[13px] font-bold uppercase tracking-[2px] text-teal">
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
