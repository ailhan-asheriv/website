"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";

type BadgeDef = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: { en: string; tr: string };
  tip: { en: string; tr: string };
};

const badges: BadgeDef[] = [
  {
    id: "itu-cekirdek",
    src: "/images/badges/itu-cekirdek-2026.png",
    width: 426,
    height: 313,
    alt: {
      en: "İTÜ Çekirdek Acceleration Startup 2026",
      tr: "İTÜ Çekirdek Acceleration Startup 2026",
    },
    tip: {
      en: "Accepted into İTÜ Çekirdek Acceleration Program 2026.",
      tr: "İTÜ Çekirdek 2026 hızlandırma programına kabul edildik.",
    },
  },
  {
    id: "teknogirisim",
    src: "/images/badges/teknogirisim-rozet.png",
    width: 447,
    height: 184,
    alt: {
      en: "TeknoGirişim Badge — Presidency of Defence Industries (SSB)",
      tr: "TeknoGirişim Rozeti — Savunma Sanayii Başkanlığı (SSB)",
    },
    tip: {
      en: "Official TeknoGirişim recognition from Türkiye’s Presidency of Defence Industries (SSB).",
      tr: "Savunma Sanayii Başkanlığı TeknoGirişim Rozeti (SSB).",
    },
  },
  {
    id: "nvidia-inception",
    src: "/images/badges/nvidia-inception-program-badge.png",
    width: 501,
    height: 216,
    alt: {
      en: "NVIDIA Inception Program badge",
      tr: "NVIDIA Inception Program rozeti",
    },
    tip: {
      en: "A'SHERIV is a member of NVIDIA Inception Program.",
      tr: "A'SHERIV, NVIDIA Inception Program üyesidir.",
    },
  },
];

const labels = {
  en: "RECOGNITION",
  tr: "TANINMA",
} as const;

const note = {
  en: "Proud to join İTÜ Çekirdek as an Acceleration Startup for 2026.",
  tr: "İTÜ Çekirdek 2026 Acceleration Startup ailesine katıldık.",
} as const;

export default function Recognition() {
  const params = useParams();
  const lang = ((params?.lang as string) ?? (params?.locale as string) ?? "en") as
    | "en"
    | "tr";
  const label = labels[lang] ?? labels.en;

  const [tip, setTip] = useState<{
    x: number;
    y: number;
    visible: boolean;
    text: string;
  }>({ x: 0, y: 0, visible: false, text: "" });

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>, text: string) => {
    setTip({ x: e.clientX + 14, y: e.clientY + 14, visible: true, text });
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
            {label}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#475569] sm:text-[0.95rem]">
            {note[lang] ?? note.en}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-8 sm:gap-10">
            {badges.map((badge) => {
              const tipText = badge.tip[lang] ?? badge.tip.en;
              const altText = badge.alt[lang] ?? badge.alt.en;
              return (
                <div
                  key={badge.id}
                  className="relative inline-block max-w-[14rem] cursor-default sm:max-w-[16rem]"
                  onMouseMove={(e) => onMove(e, tipText)}
                  onMouseEnter={(e) => onMove(e, tipText)}
                  onMouseLeave={onLeave}
                >
                  <Image
                    src={badge.src}
                    alt={altText}
                    width={badge.width}
                    height={badge.height}
                    className="h-auto w-full object-contain"
                    priority={false}
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {tip.visible ? (
        <div
          role="tooltip"
          className="pointer-events-none fixed z-[80] max-w-[16rem] rounded-md bg-[#0A0F1E] px-2.5 py-1.5 text-[11px] leading-snug text-[#E2E8F0] shadow-lg"
          style={{ left: tip.x, top: tip.y }}
        >
          {tip.text}
        </div>
      ) : null}
    </section>
  );
}
