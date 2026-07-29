"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const strings = {
  en: {
    label: "RECOGNITION",
    headline: "Approvals & recognition",
    lead: "Independent programs that back deep-tech builders shaping Türkiye’s industrial future.",
    badgeAlt: "TeknoGirişim Badge",
    badgeCaption: "TeknoGirişim Badge",
  },
  tr: {
    label: "TANINMA",
    headline: "Onaylar ve tanınma",
    lead: "Türkiye’nin sanayi geleceğini şekillendiren derin teknoloji girişimlerini destekleyen bağımsız programlar.",
    badgeAlt: "TeknoGirişim Rozeti",
    badgeCaption: "TeknoGirişim Rozeti",
  },
} as const;

export default function Recognition() {
  const params = useParams();
  const lang = (params?.lang as string) ?? (params?.locale as string) ?? "en";
  const t = strings[lang as keyof typeof strings] ?? strings.en;

  return (
    <section
      id="recognition"
      aria-labelledby="recognition-heading"
      className="border-t border-white/10 bg-[#070C18] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold tracking-[0.24em] text-[#00D4FF]">{t.label}</p>
          <h2
            id="recognition-heading"
            className="mt-4 font-sans text-3xl font-bold sm:text-5xl"
          >
            {t.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[#CBD5E1]">{t.lead}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="mx-auto mt-12 flex max-w-xl flex-col items-center"
        >
          <div className="relative w-full max-w-[28rem]">
            <Image
              src="/images/badges/teknogirisim-rozet.png"
              alt={t.badgeAlt}
              width={447}
              height={184}
              className="h-auto w-full object-contain"
              priority={false}
            />
          </div>
          <p className="mt-5 text-sm font-medium tracking-wide text-[#94A3B8]">
            {t.badgeCaption}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
