"use client";

import { useState } from "react";

export default function SubscribeForm({
  source,
  locale,
  buttonLabel,
  successLabel,
  title,
}: {
  source: string;
  locale: string;
  buttonLabel: string;
  successLabel: string;
  title: string;
}) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const isTr = locale === "tr";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.message || "Failed");
      }
      setIsSuccess(true);
      setMessage(successLabel);
      setEmail("");
    } catch (error) {
      setIsSuccess(false);
      setMessage(error instanceof Error ? error.message : "Failed to subscribe");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-xl border border-[#E3E8EB] bg-white p-8">
      <h2 className="font-heading text-2xl font-bold text-[#0A0F1E]">{title}</h2>
      <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder={isTr ? "E-posta adresiniz" : "Your email address"}
          className="w-full rounded-lg border border-[#E3E8EB] px-4 py-3 text-sm text-[#0A0F1E] focus:border-[#00D4FF] focus:outline-none"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-[#0A0F1E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1C3D5A] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (isTr ? "Gonderiliyor" : "Sending") : buttonLabel}
        </button>
      </form>
      {message && (
        <p className={`mt-3 text-sm ${isSuccess ? "text-[#1C3D5A]" : "text-red-600"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
