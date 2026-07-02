"use client";

import { useState } from "react";

const ROLE_OPTIONS = [
  "Software Engineer",
  "ML/AI Engineer",
  "Maritime Domain Expert",
  "Research Intern",
  "Other",
] as const;

export default function JoinUsForm({ locale }: { locale: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const isTr = locale === "tr";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.message || "Submission failed");
      }

      setIsSuccess(true);
      setMessage("Thank you. We will be in touch if there is a fit.");
      form.reset();
    } catch (error) {
      setIsSuccess(false);
      setMessage(
        error instanceof Error ? error.message : "Failed to submit application"
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-[#3D4852]">
          {isTr ? "Ad soyad" : "Full name"}
        </label>
        <input
          type="text"
          name="fullName"
          required
          className="w-full rounded-lg border border-[#E3E8EB] px-4 py-3 text-sm text-[#0A0F1E] focus:border-[#00D4FF] focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-[#3D4852]">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-lg border border-[#E3E8EB] px-4 py-3 text-sm text-[#0A0F1E] focus:border-[#00D4FF] focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-[#3D4852]">
          {isTr ? "Ilgi duydugunuz rol" : "Role interest"}
        </label>
        <select
          name="roleInterest"
          required
          className="w-full rounded-lg border border-[#E3E8EB] px-4 py-3 text-sm text-[#0A0F1E] focus:border-[#00D4FF] focus:outline-none"
        >
          <option value="">{isTr ? "Rol secin" : "Select a role"}</option>
          {ROLE_OPTIONS.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-[#3D4852]">
          {isTr ? "Kisa tanitim" : "Brief introduction"}
        </label>
        <textarea
          name="introduction"
          required
          maxLength={500}
          placeholder={
            isTr
              ? "Uzerinde calistiginiz alanlari ve neden katilmak istediginizi anlatin"
              : "Tell us what you are working on and why you want to join"
          }
          className="min-h-[120px] w-full rounded-lg border border-[#E3E8EB] px-4 py-3 text-sm text-[#0A0F1E] focus:border-[#00D4FF] focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-[#3D4852]">
          {isTr ? "CV yukle (.pdf)" : "CV upload (.pdf)"}
        </label>
        <input
          type="file"
          name="cv"
          required
          accept=".pdf,application/pdf"
          className="block w-full text-sm text-[#3D4852] file:mr-4 file:rounded-md file:border-0 file:bg-[#0A0F1E] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#1C3D5A]"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-[#0A0F1E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1C3D5A] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (isTr ? "Gonderiliyor" : "Sending") : "Send Application"}
      </button>

      {message && (
        <p className={`text-sm ${isSuccess ? "text-[#1C3D5A]" : "text-red-600"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
