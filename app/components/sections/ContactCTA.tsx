"use client";

import { useParams } from "next/navigation";
import ContactForm from "../ContactForm";

const strings = {
  en: {
    label: "CONTACT",
    headline: "Discuss your requirements.",
    subheadline:
      "Share your fleet profile and operational context. We'll design a walkthrough around your specific asset types and stakeholder requirements.",
  },
  tr: {
    label: "ILETISIM",
    headline: "Gereksinimlerinizi gorusun.",
    subheadline:
      "Filo profilinizi ve operasyonel baglaminizi paylasin. Belirli varlik tipleriniz ve paydas gereksinimleriniz etrafinda bir sunum tasarlayacagiz.",
  },
} as const;

export default function ContactCTA() {
  const params = useParams();
  const lang = (params?.lang as string) ?? (params?.locale as string) ?? "en";
  const t = strings[lang as keyof typeof strings] ?? strings.en;

  return (
    <section id="contact" className="bg-[#0A0F1E] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-[#00D4FF]">{t.label}</p>
          <h2 className="mt-4 font-sans text-3xl font-bold sm:text-5xl">{t.headline}</h2>
          <p className="mt-6 max-w-xl text-[#CBD5E1]">{t.subheadline}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
