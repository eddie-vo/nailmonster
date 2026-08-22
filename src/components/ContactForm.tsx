"use client";

import { FormEvent, useState } from "react";

export function ContactForm({
  submitLabel = "Submit",
  extraFields = false,
}: {
  submitLabel?: string;
  extraFields?: boolean;
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-navy bg-white p-8 text-center">
        <p className="page-title mb-3 text-lg">Thank you</p>
        <p className="text-sm font-light leading-6 text-muted">
          Your message has been received. Please also call 857-340-8898 if you
          need to confirm a time or style preference.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-2 text-[11px] font-medium uppercase tracking-[0.16em]">
        Name
        <input
          required
          name="name"
          className="border border-line px-4 py-3 text-sm font-normal tracking-normal normal-case outline-none focus:border-navy"
        />
      </label>
      <label className="grid gap-2 text-[11px] font-medium uppercase tracking-[0.16em]">
        Email
        <input
          required
          type="email"
          name="email"
          className="border border-line px-4 py-3 text-sm font-normal tracking-normal normal-case outline-none focus:border-navy"
        />
      </label>
      <label className="grid gap-2 text-[11px] font-medium uppercase tracking-[0.16em]">
        Phone
        <input
          required
          type="tel"
          name="phone"
          className="border border-line px-4 py-3 text-sm font-normal tracking-normal normal-case outline-none focus:border-navy"
        />
      </label>
      {extraFields ? (
        <>
          <label className="grid gap-2 text-[11px] font-medium uppercase tracking-[0.16em]">
            Preferred date
            <input
              type="date"
              name="date"
              className="border border-line px-4 py-3 text-sm font-normal tracking-normal normal-case outline-none focus:border-navy"
            />
          </label>
          <label className="grid gap-2 text-[11px] font-medium uppercase tracking-[0.16em]">
            Service
            <select
              name="service"
              className="border border-line bg-white px-4 py-3 text-sm font-normal tracking-normal normal-case outline-none focus:border-navy"
              defaultValue="Gel manicure"
            >
              <option>Gel manicure</option>
              <option>Nail arts</option>
              <option>Pedicure</option>
              <option>Eyelash</option>
              <option>Wax</option>
              <option>KLAPP Facial</option>
            </select>
          </label>
        </>
      ) : null}
      <label className="grid gap-2 text-[11px] font-medium uppercase tracking-[0.16em]">
        Message
        <textarea
          required
          name="message"
          rows={5}
          className="border border-line px-4 py-3 text-sm font-normal tracking-normal normal-case outline-none focus:border-navy"
        />
      </label>
      <button
        type="submit"
        className="mt-2 border border-navy bg-navy px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-transparent hover:text-black"
      >
        {submitLabel}
      </button>
    </form>
  );
}
