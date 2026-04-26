"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const strings = {
  en: {
    label: "ROADMAP",
    headline: "Asset intelligence across the full vessel lifecycle.",
    subheadline:
      "From first steel to decommissioning - a continuous operational record that supports every decision.",
    phases: [
      {
        phase: "Phase 1 - Current",
        title: "Vessel Operational Record",
        body: "Real-time sensor monitoring, AI-driven anomaly detection, predictive maintenance scheduling, and shipyard build data integration.",
      },
      {
        phase: "Phase 2 - Near Term",
        title: "Fleet-Scale Intelligence",
        body: "Cross-vessel predictive models, fleet health scoring, and operational analytics for multi-vessel operators and management companies.",
      },
      {
        phase: "Phase 3 - Vision",
        title: "Vessel Lifecycle Record",
        body: "Build-certificate data integrated with operational history. A continuous asset record from commissioning to end-of-life supporting refit planning, valuation, and regulatory review.",
      },
    ],
  },
  tr: {
    label: "YOL HARITASI",
    headline: "Tam gemi yasam dongusunda varlik zekasi.",
    subheadline:
      "Ilk celikten hizmetten cikarmaya - her karari destekleyen surekli bir operasyonel kayit.",
    phases: [
      {
        phase: "Asama 1 - Mevcut",
        title: "Gemi Operasyonel Kaydi",
        body: "Gercek zamanli sensor izleme, AI destekli anomali tespiti, kestirimci bakim planlamasi ve tersane insa verisi entegrasyonu.",
      },
      {
        phase: "Asama 2 - Yakin Vadeli",
        title: "Filo Olceginde Zeka",
        body: "Cok gemili tahminsel modeller, filo saglik skorlamasi ve cok gemili operatorler ve yonetim sirketleri icin operasyonel analitik.",
      },
      {
        phase: "Asama 3 - Vizyon",
        title: "Gemi Yasam Dongusu Kaydi",
        body: "Insaat sertifikasi verileri operasyonel gecmisle entegre edilir. Devreye almadan omur sonuna kadar onarim planlamasini, degerlemeyi ve duzenleyici incelemeyi destekleyen surekli varlik kaydi.",
      },
    ],
  },
} as const;

export default function VisionTimeline() {
  const params = useParams();
  const lang = (params?.lang as string) ?? (params?.locale as string) ?? "en";
  const t = strings[lang as keyof typeof strings] ?? strings.en;

  return (
    <section id="roadmap" className="bg-[#0A0F1E] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-[#00D4FF]">{t.label}</p>
        <h2 className="mt-4 font-sans text-3xl font-bold sm:text-5xl">{t.headline}</h2>
        <p className="mt-5 max-w-3xl text-[#C7D2FE]">{t.subheadline}</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.phases.map((phase, index) => (
            <motion.article
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className="relative rounded-xl border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="text-xs uppercase tracking-[0.16em] text-[#00D4FF]">{phase.phase}</span>
              <h3 className="mt-4 text-2xl font-semibold text-white">{phase.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#D1D5DB]">{phase.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
