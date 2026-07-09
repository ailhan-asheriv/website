"use client";

import { useState, FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const t = useTranslations("contact");
  const searchParams = useSearchParams();
  const locale = useLocale();
  const isTr = locale === "tr";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: searchParams.get("role") ?? "",
    subject: searchParams.get("subject") ?? "",
    product: searchParams.get("product") ?? "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          role: "",
          subject: "",
          product: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSuccess) {
    return (
      <div className="rounded-xl border border-[#00D4FF]/30 bg-[#00D4FF]/10 p-6 text-center">
        <p className="text-white font-medium">
          {t("success")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs font-medium text-[#9CA3AF] mb-2 uppercase tracking-wide">
          {t("name")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 text-white placeholder-[#6B7280] rounded-lg focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-all text-sm"
          placeholder={t("namePlaceholder")}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-medium text-[#9CA3AF] mb-2 uppercase tracking-wide">
          {t("email")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 text-white placeholder-[#6B7280] rounded-lg focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-all text-sm"
          placeholder={t("emailPlaceholder")}
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-xs font-medium text-[#9CA3AF] mb-2 uppercase tracking-wide">
          {t("company")}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 text-white placeholder-[#6B7280] rounded-lg focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-all text-sm"
          placeholder={t("companyPlaceholder")}
        />
      </div>

      <div>
        <label htmlFor="role" className="block text-xs font-medium text-[#9CA3AF] mb-2 uppercase tracking-wide">
          {t("role")}
        </label>
        <select
          id="role"
          name="role"
          required
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 text-white placeholder-[#6B7280] rounded-lg focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-all text-sm"
        >
          <option value="" disabled>
            Select a role
          </option>
          <option value="Shipyard">Shipyard</option>
          <option value="Ship Owner">Ship Owner</option>
          <option value="Operator">Operator</option>
          <option value="Class & Flag">Class & Flag</option>
          <option value="Insurer">Insurer</option>
          <option value="OEM">OEM</option>
          <option value="Other">Other</option>
        </select>
      </div>



      <div>
        <label htmlFor="subject" className="block text-xs font-medium text-[#9CA3AF] mb-2 uppercase tracking-wide">
          {isTr ? "Konu" : "Subject"}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 text-white placeholder-[#6B7280] rounded-lg focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-all text-sm"
          placeholder={isTr ? "Talebinizin konusu" : "Subject of your request"}
        />
      </div>

      <div>
        <label htmlFor="product" className="block text-xs font-medium text-[#9CA3AF] mb-2 uppercase tracking-wide">
          {isTr ? "Urun" : "Product"}
        </label>
        <select
          id="product"
          name="product"
          required
          value={formData.product}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 text-white placeholder-[#6B7280] rounded-lg focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-all text-sm"
        >
          <option value="" disabled>
            {isTr ? "Urun secin" : "Select a product"}
          </option>
          <option value="AshMOP">AshMOP</option>
          <option value="AshFI">AshFI</option>
          <option value="AshSIM">AshSIM</option>
          <option value="Evidence Pack">Evidence Pack</option>
          <option value="General">{isTr ? "Genel" : "General"}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-[#9CA3AF] mb-2 uppercase tracking-wide">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 text-white placeholder-[#6B7280] rounded-lg focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-all text-sm resize-none"
          placeholder={t("messagePlaceholder")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-[#0A0F1E] px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-[#1C3D5A] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {isSubmitting ? t("sending") : t("submit")}
      </button>
    </form>
  );
}
