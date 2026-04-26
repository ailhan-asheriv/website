"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Gauge, GitBranch, ShipWheel } from "lucide-react";

const strings = {
  en: {
    label: "WHAT WE DELIVER",
    headline: "Three layers of operational intelligence.",
    layers: [
      {
        title: "Asset Intelligence",
        description:
          "Component-to-vessel health scoring. Degradation modelling, anomaly detection, and remaining useful life estimation for propulsion systems, auxiliary machinery, and structural elements.",
        tag: "Predictive Maintenance",
      },
      {
        title: "Operational Intelligence",
        description:
          "Structured operational records - alarm events, maintenance decisions, inspection findings - forming an audit-ready operational memory for each vessel.",
        tag: "Operational Records",
      },
      {
        title: "Lifecycle Intelligence",
        description:
          "Build-certificate data integrated with operational history. Structural and machinery state tracked from commissioning to end-of-life to support asset valuation and refit planning.",
        tag: "Vessel Lifecycle",
      },
    ],
  },
  tr: {
    label: "NE SUNUYORUZ",
    headline: "Uc katmanli operasyonel zeka.",
    layers: [
      {
        title: "Varlik Zekasi",
        description:
          "Komponentten gemiye saglik skorlamasi. Itki sistemleri, yardimci makineler ve yapisal elemanlar icin bozunma modellemesi, anomali tespiti ve kalan faydali omur tahmini.",
        tag: "Kestirimci Bakim",
      },
      {
        title: "Operasyonel Zeka",
        description:
          "Yapilandirilmis operasyonel kayitlar - alarm olaylari, bakim kararlari, muayene bulgulari - her gemi icin denetim hazir bir operasyonel bellek olusturur.",
        tag: "Operasyonel Kayitlar",
      },
      {
        title: "Yasam Dongusu Zekasi",
        description:
          "Insaat sertifikasi verileri operasyonel gecmisle entegre edilir. Yapisal ve makine durumu devreye almadan omur sonuna kadar izlenerek varlik degerlemesi ve onarim planlamasini destekler.",
        tag: "Gemi Yasam Dongusu",
      },
    ],
  },
} as const;

const layerIcons = [ShipWheel, Gauge, GitBranch];

export default function ThreeLayers() {
  const params = useParams();
  const lang = (params?.lang as string) ?? (params?.locale as string) ?? "en";
  const t = strings[lang as keyof typeof strings] ?? strings.en;

  return (
    <section id="intelligence" className="bg-[#F5F7FA] px-6 py-20 text-[#1A1A2E] sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-[#00B4D8]">{t.label}</p>
        <h2 className="mt-4 font-sans text-3xl font-bold text-[#1A1A2E] sm:text-5xl">
          {t.headline}
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.layers.map((layer, index) => {
            const Icon = layerIcons[index];
            return (
            <motion.article
              key={layer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="rounded-xl border border-[#E5E7EB] bg-white p-7 shadow-sm"
            >
              <Icon className="h-9 w-9 text-[#00D4FF]" />
              <h3 className="mt-5 text-2xl font-semibold text-[#1A1A2E]">{layer.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#4B5563]">{layer.description}</p>
              <span className="mt-6 inline-block rounded-full bg-[#0A0F1E] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                {layer.tag}
              </span>
            </motion.article>
          )})}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-[#6B7280] text-center mb-5 tracking-[0.2em] uppercase">
            {lang === "tr" ? "Desteklenen Standartlar" : "Standards Supported"}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "SFI Group System",
              "ISO 14224",
              "IACS E26/E27",
              "IEC 62443",
              "FMI 2.0",
              "ISO 13381-1",
              "IFC 2x3 / IFC 4",
              "IMO MSC-FAL.1",
            ].map((std) => (
              <span
                key={std}
                className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-[#9CA3AF]"
              >
                {std}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
