"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Activity, BrainCircuit, FileCheck2 } from "lucide-react";

const strings = {
  en: {
    label: "THE PLATFORM",
    headline: "Monitor. Understand. Act.",
    tabs: [
      {
        key: "monitor",
        title: "MONITOR",
        heading: "Continuous vessel data ingestion",
        body: "Real-time sensor telemetry, alarm streams, and operational logs ingested continuously and mapped to asset registry.",
      },
      {
        key: "understand",
        title: "UNDERSTAND",
        heading: "AI-driven asset health analysis",
        body: "Anomaly detection, degradation trend modelling, and remaining useful life estimation across propulsion, machinery, and structural systems.",
      },
      {
        key: "act",
        title: "ACT",
        heading: "Structured decisions and evidence",
        body: "Maintenance work orders, class-ready evidence packages, and role-based decision support delivered to the right stakeholder at the right time.",
      },
    ],
    panelLabel: "Operational intelligence layer",
    panelLine1: "Inbound: alarms, vibration, lube oil pressure, fuel consumption, maintenance logs",
    panelLine2: "Output: explainable health score, anomaly confidence level, RUL signal",
  },
  tr: {
    label: "PLATFORM",
    headline: "Izle. Anla. Harekete Gec.",
    tabs: [
      {
        key: "monitor",
        title: "IZLE",
        heading: "Surekli gemi verisi alimi",
        body: "Gercek zamanli sensor telemetrisi, alarm akislari ve operasyonel kayitlar surekli olarak alinir ve varlik kaydina eslenir.",
      },
      {
        key: "understand",
        title: "ANLA",
        heading: "AI destekli varlik sagligi analizi",
        body: "Anomali tespiti, bozunma trendi modellemesi ve tahrik, makine ve yapisal sistemler genelinde kalan faydali omur tahmini.",
      },
      {
        key: "act",
        title: "HAREKETE GEC",
        heading: "Yapilandirilmis kararlar ve kanit",
        body: "Bakim is emirleri, sinif hazir kanit paketleri ve rol tabanli karar destegi dogru paydasa zamaninda iletilir.",
      },
    ],
    panelLabel: "Operasyonel zeka katmani",
    panelLine1: "Gelen: alarmlar, titresim, yaglama yagi basinci, yakit tuketimi, bakim kayitlari",
    panelLine2: "Cikti: aciklanabilir saglik skoru, anomali guven duzeyi, RUL sinyali",
  },
} as const;

const iconByKey = {
  monitor: Activity,
  understand: BrainCircuit,
  act: FileCheck2,
};

export default function HowItWorks() {
  const params = useParams();
  const lang = (params?.lang as string) ?? (params?.locale as string) ?? "en";
  const t = strings[lang as keyof typeof strings] ?? strings.en;
  const [activeKey, setActiveKey] = useState<"monitor" | "understand" | "act">("monitor");
  const active = t.tabs.find((tab) => tab.key === activeKey) ?? t.tabs[0];
  const ActiveIcon = iconByKey[active.key];

  return (
    <section
      id="platform"
      className="section-seam-up-lg bg-brand-gradient px-6 pb-20 pt-14 text-white sm:px-10 lg:px-16 lg:pb-28 lg:pt-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-brand-cyan">{t.label}</p>
        <h2 className="mt-4 font-sans text-3xl font-bold sm:text-5xl">{t.headline}</h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {t.tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveKey(tab.key)}
              className={`rounded-md border px-4 py-2 text-sm font-semibold tracking-wide transition ${
                activeKey === tab.key
                  ? "border-brand-cyan bg-brand-cyan text-[#0A0F1E]"
                  : "border-white/20 text-white hover:border-brand-cyan/80"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-8"
            >
              <ActiveIcon className="h-10 w-10 text-brand-cyan" />
              <h3 className="mt-5 text-2xl font-semibold text-white">{active.heading}</h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#CBD5E1]">{active.body}</p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#131B30] to-[#0B1020] p-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,212,255,0.25),transparent_45%)]" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">{t.panelLabel}</p>
              <div className="mt-8 space-y-3 text-sm text-[#D1D5DB]">
                <p className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3">
                  {t.panelLine1}
                </p>
                <p className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3">
                  {t.panelLine2}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
