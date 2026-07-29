"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const strings = {
  en: {
    label: "RECOGNITION",
    lead: "Independent programs that back deep-tech builders shaping Türkiye’s industrial future.",
    badgeAlt: "TeknoGirişim Badge",
  },
  tr: {
    label: "TANINMA",
    lead: "Türkiye’nin sanayi geleceğini şekillendiren derin teknoloji girişimlerini destekleyen bağımsız programlar.",
    badgeAlt: "TeknoGirişim Rozeti",
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
      className="border-t border-[#E5E7EB] bg-white px-6 py-16 text-[#1A1A2E] sm:px-10 lg:px-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-left"
        >
          <h2
            id="recognition-heading"
            className="text-xs font-semibold tracking-[0.24em] text-[#00D4FF]"
          >
            {t.label}
          </h2>

          <div className="group relative mt-8 inline-block max-w-[14rem] sm:max-w-[16rem]">
            <p
              className="pointer-events-none absolute bottom-full left-0 z-10 mb-2 max-w-[18rem] rounded-md bg-[#0A0F1E] px-2.5 py-1.5 text-[11px] leading-snug text-[#E2E8F0] opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
              role="tooltip"
            >
              {t.lead}
            </p>
            <Image
              src="/images/badges/teknogirisim-rozet.png"
              alt={t.badgeAlt}
              title={t.lead}
              width={447}
              height={184}
              className="h-auto w-full object-contain"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
