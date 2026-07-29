"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";

const strings = {
  en: {
    label: "RECOGNITION",
    lead: "Official TeknoGirişim recognition from Türkiye’s Presidency of Defence Industries (SSB).",
    badgeAlt: "TeknoGirişim Badge — Presidency of Defence Industries (SSB)",
  },
  tr: {
    label: "TANINMA",
    lead: "Savunma Sanayii Başkanlığı TeknoGirişim Rozeti (SSB).",
    badgeAlt: "TeknoGirişim Rozeti — Savunma Sanayii Başkanlığı (SSB)",
  },
} as const;

export default function Recognition() {
  const params = useParams();
  const lang = (params?.lang as string) ?? (params?.locale as string) ?? "en";
  const t = strings[lang as keyof typeof strings] ?? strings.en;

  const [tip, setTip] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: false,
  });

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setTip({ x: e.clientX + 14, y: e.clientY + 14, visible: true });
  }, []);

  const onLeave = useCallback(() => {
    setTip((prev) => ({ ...prev, visible: false }));
  }, []);

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

          <div
            className="relative mt-8 inline-block max-w-[14rem] cursor-default sm:max-w-[16rem]"
            onMouseMove={onMove}
            onMouseEnter={onMove}
            onMouseLeave={onLeave}
          >
            <Image
              src="/images/badges/teknogirisim-rozet.png"
              alt={t.badgeAlt}
              width={447}
              height={184}
              className="h-auto w-full object-contain"
              priority={false}
            />
          </div>
        </motion.div>
      </div>

      {tip.visible ? (
        <div
          role="tooltip"
          className="pointer-events-none fixed z-[80] max-w-[16rem] rounded-md bg-[#0A0F1E] px-2.5 py-1.5 text-[11px] leading-snug text-[#E2E8F0] shadow-lg"
          style={{ left: tip.x, top: tip.y }}
        >
          {t.lead}
        </div>
      ) : null}
    </section>
  );
}
