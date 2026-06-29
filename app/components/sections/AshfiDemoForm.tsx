"use client";

import { FormEvent, useState } from "react";

const API_BASE =
  process.env.NEXT_PUBLIC_ASHFI_API_URL?.replace(/\/$/, "") || "http://localhost:8007";

const content = {
  en: {
    name: "Full name",
    namePlaceholder: "Your name",
    email: "Work email",
    emailPlaceholder: "you@company.com",
    company: "Company / fleet operator",
    companyPlaceholder: "Company name",
    fleetSize: "Fleet size (optional)",
    fleetSizePlaceholder: "Select fleet size",
    fleetOptions: [
      { value: "", label: "Select fleet size" },
      { value: "1-5 vessels", label: "1-5 vessels" },
      { value: "6-20 vessels", label: "6-20 vessels" },
      { value: "21-50 vessels", label: "21-50 vessels" },
      { value: "50+ vessels", label: "50+ vessels" },
    ],
    imo: "Vessel IMO for sample analysis (optional)",
    imoPlaceholder: "e.g. 9234567",
    imoHelper:
      "Provide an IMO number to receive a sample analysis for that vessel, or leave blank for a generic example",
    message: "Message (optional)",
    messagePlaceholder: "Tell us about your fleet or what you're looking to solve",
    submit: "Request Demo",
    sending: "Sending...",
    success:
      "Thank you. A sample analysis is on its way to your inbox, and our team will follow up shortly.",
    error: "Something went wrong. Please try again or email us at info@asheriv.com",
    required: "This field is required",
    invalidEmail: "Please enter a valid work email",
  },
  tr: {
    name: "Ad soyad",
    namePlaceholder: "Adiniz",
    email: "Is e-postasi",
    emailPlaceholder: "siz@sirket.com",
    company: "Sirket / filo operatoru",
    companyPlaceholder: "Sirket adi",
    fleetSize: "Filo buyuklugu (istege bagli)",
    fleetSizePlaceholder: "Filo buyuklugunu secin",
    fleetOptions: [
      { value: "", label: "Filo buyuklugunu secin" },
      { value: "1-5 vessels", label: "1-5 gemi" },
      { value: "6-20 vessels", label: "6-20 gemi" },
      { value: "21-50 vessels", label: "21-50 gemi" },
      { value: "50+ vessels", label: "50+ gemi" },
    ],
    imo: "Ornek analiz icin gemi IMO (istege bagli)",
    imoPlaceholder: "ornegin 9234567",
    imoHelper:
      "Bu gemi icin ornek analiz almak uzere bir IMO numarasi girin veya genel bir ornek icin bos birakin",
    message: "Mesaj (istege bagli)",
    messagePlaceholder: "Filonuz veya cozmek istediginiz konu hakkinda bilgi verin",
    submit: "Demo Talep Et",
    sending: "Gonderiliyor...",
    success:
      "Tesekkurler. Ornek analiz gelen kutunuza yolda, ekibimiz kisa sure icinde sizinle iletisime gececek.",
    error: "Bir sorun olustu. Lutfen tekrar deneyin veya info@asheriv.com adresine yazin",
    required: "Bu alan zorunludur",
    invalidEmail: "Lutfen gecerli bir is e-postasi girin",
  },
} as const;

const inputClass =
  "w-full px-4 py-3 bg-white/[0.04] border border-white/10 text-white placeholder-[#6B7280] rounded-lg focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-all text-sm";

const labelClass =
  "block text-xs font-medium text-[#9CA3AF] mb-2 uppercase tracking-wide";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function AshfiDemoForm({ locale }: { locale: string }) {
  const t = content[locale as keyof typeof content] ?? content.en;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    fleet_size: "",
    imo: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
    setSubmitError("");
  };

  const validate = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = t.required;
    }
    if (!formData.email.trim()) {
      errors.email = t.required;
    } else if (!isValidEmail(formData.email.trim())) {
      errors.email = t.invalidEmail;
    }
    if (!formData.company.trim()) {
      errors.company = t.required;
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(`${API_BASE}/demo-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          fleet_size: formData.fleet_size || null,
          imo: formData.imo.trim() || null,
          message: formData.message.trim() || null,
          locale: locale === "tr" ? "tr" : "en",
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setIsSuccess(true);
    } catch {
      setSubmitError(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-xl border border-[#00D4FF]/30 bg-[#00D4FF]/10 p-6 text-center">
        <p className="text-white font-medium">{t.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto" noValidate>
      <div>
        <label htmlFor="ashfi-name" className={labelClass}>
          {t.name}
        </label>
        <input
          type="text"
          id="ashfi-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
          placeholder={t.namePlaceholder}
        />
        {fieldErrors.name && <p className="mt-1 text-xs text-[#FF3D3D]">{fieldErrors.name}</p>}
      </div>

      <div>
        <label htmlFor="ashfi-email" className={labelClass}>
          {t.email}
        </label>
        <input
          type="email"
          id="ashfi-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          placeholder={t.emailPlaceholder}
        />
        {fieldErrors.email && <p className="mt-1 text-xs text-[#FF3D3D]">{fieldErrors.email}</p>}
      </div>

      <div>
        <label htmlFor="ashfi-company" className={labelClass}>
          {t.company}
        </label>
        <input
          type="text"
          id="ashfi-company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={inputClass}
          placeholder={t.companyPlaceholder}
        />
        {fieldErrors.company && (
          <p className="mt-1 text-xs text-[#FF3D3D]">{fieldErrors.company}</p>
        )}
      </div>

      <div>
        <label htmlFor="ashfi-fleet-size" className={labelClass}>
          {t.fleetSize}
        </label>
        <select
          id="ashfi-fleet-size"
          name="fleet_size"
          value={formData.fleet_size}
          onChange={handleChange}
          className={inputClass}
        >
          {t.fleetOptions.map((option) => (
            <option key={option.value || "empty"} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="ashfi-imo" className={labelClass}>
          {t.imo}
        </label>
        <input
          type="text"
          id="ashfi-imo"
          name="imo"
          value={formData.imo}
          onChange={handleChange}
          className={`${inputClass} font-mono`}
          placeholder={t.imoPlaceholder}
        />
        <p className="mt-2 text-xs text-[#9CA3AF] leading-relaxed">{t.imoHelper}</p>
      </div>

      <div>
        <label htmlFor="ashfi-message" className={labelClass}>
          {t.message}
        </label>
        <textarea
          id="ashfi-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder={t.messagePlaceholder}
        />
      </div>

      {submitError && (
        <div className="rounded-lg border border-[#FF3D3D]/30 bg-[#FF3D3D]/10 px-4 py-3 text-sm text-[#fca5a5]">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#00D4FF] text-[#0A0F1E] text-sm font-semibold transition hover:bg-[#67E5FF] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? t.sending : t.submit}
      </button>
    </form>
  );
}
