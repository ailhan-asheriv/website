"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const strings = {
  en: {
    label: "WHO WE SERVE",
    headline: "Designed for every role across the maritime value chain.",
    snapshotLabel: "Operational Snapshot",
    metricsLabel: "Metrics",
  },
  tr: {
    label: "KIME HIZMET EDIYORUZ",
    headline: "Denizcilik deger zincirindeki her rol icin tasarlandi.",
    snapshotLabel: "Operasyonel Anlik Goruntu",
    metricsLabel: "Metrikler",
  },
} as const;

const stakeholderTabs = {
  en: [
    {
      id: "shipyards",
      label: "Shipyards",
      heading: "Turn build data into operational value",
      bullets: [
        "Shipyard build data integration and IFC parsing",
        "QC traceability from build to delivery",
        "Shipyard-to-operator digital handover",
      ],
      stats: [
        { label: "Build records digitised", value: "847" },
        { label: "QC checkpoints automated", value: "12" },
        { label: "Faster handover", value: "3.2x" },
      ],
    },
    {
      id: "owners",
      label: "Ship Owners & Managers",
      heading: "Protect asset value across the lifecycle",
      bullets: ["Fleet health scoring", "Lifecycle cost prediction", "Risk-based maintenance planning"],
      stats: [
        { label: "Fleet health score", value: "84/100" },
        { label: "Reduction in unplanned downtime", value: "23%" },
        { label: "Vessels monitored", value: "6" },
      ],
    },
    {
      id: "operators",
      label: "Operators & Engineers",
      heading: "Fewer surprises. Faster decisions.",
      bullets: ["Early degradation signals", "Structured alarm management", "Maintenance work order integration"],
      stats: [
        { label: "Anomalies detected", value: "142" },
        { label: "Sensor uptime", value: "98.3%" },
        { label: "Maintenance actions optimised", value: "31" },
      ],
    },
    {
      id: "class",
      label: "Class & Flag",
      heading: "Survey-ready evidence. Always.",
      bullets: ["Audit-ready evidence packs", "Traceable decision history", "Compliance continuity records"],
      stats: [
        { label: "Evidence pack generated", value: "4 min" },
        { label: "Audit trail coverage", value: "100%" },
        { label: "Standards supported", value: "9" },
      ],
    },
    {
      id: "insurers",
      label: "Insurers",
      heading: "Evidence-based risk assessment.",
      bullets: ["Asset health scores", "Incident timeline reconstruction", "Claims support documentation"],
      stats: [
        { label: "Risk score", value: "LOW" },
        { label: "Claims evidence assembled", value: "<24h" },
        { label: "Incident timelines reconstructed", value: "3" },
      ],
    },
    {
      id: "oems",
      label: "OEMs",
      heading: "Performance data from the field.",
      bullets: ["Real-world machinery performance", "Warranty context", "Targeted service interventions"],
      stats: [
        { label: "Engine health", value: "91%" },
        { label: "Operating hours tracked", value: "14,200" },
        { label: "Warranty context", value: "Active" },
      ],
    },
  ],
  tr: [
    { id: "shipyards", label: "Tersaneler", heading: "Insaat verisini operasyonel degere donusturun", bullets: ["Tersane insa verisi entegrasyonu ve IFC ayristirma", "Insaattan teslimata QC izlenebilirligi", "Tersane-operator dijital teslimat"], stats: [{ label: "Dijitallestirilen insaat kaydi", value: "847" }, { label: "Otomatiklestirilen QC kontrol noktasi", value: "12" }, { label: "Daha hizli teslimat", value: "3.2x" }] },
    { id: "owners", label: "Gemi Sahipleri ve Yoneticiler", heading: "Yasam dongusu boyunca varlik degerini koruyun", bullets: ["Filo saglik skorlamasi", "Yasam dongusu maliyet tahmini", "Risk tabanli bakim planlamasi"], stats: [{ label: "Filo saglik skoru", value: "84/100" }, { label: "Plansiz kesinti azalmasi", value: "23%" }, { label: "Izlenen gemi", value: "6" }] },
    { id: "operators", label: "Operatorler ve Muhendisler", heading: "Daha az surpriz. Daha hizli kararlar.", bullets: ["Erken bozunma sinyalleri", "Yapilandirilmis alarm yonetimi", "Bakim is emri entegrasyonu"], stats: [{ label: "Tespit edilen anomali", value: "142" }, { label: "Sensor calisma suresi", value: "98.3%" }, { label: "Optimize edilen bakim aksiyonu", value: "31" }] },
    { id: "class", label: "Klaslama ve Bayrak Devleti", heading: "Her zaman sorvey hazir kanit.", bullets: ["Denetim hazir kanit paketleri", "Izlenebilir karar gecmisi", "Uyumluluk surekliligi kayitlari"], stats: [{ label: "Kanit paketi olusturma suresi", value: "4 dk" }, { label: "Denetim izi kapsami", value: "100%" }, { label: "Desteklenen standart", value: "9" }] },
    { id: "insurers", label: "Sigortacilar", heading: "Kanita dayali risk degerlendirmesi.", bullets: ["Varlik saglik skorlari", "Olay zaman cizelgesi yeniden yapilandirma", "Hasar destek dokumantasyonu"], stats: [{ label: "Risk skoru", value: "DUSUK" }, { label: "Hasar kaniti hazirlama", value: "<24s" }, { label: "Yeniden yapilandirilan olay", value: "3" }] },
    { id: "oems", label: "OEM'ler", heading: "Sahadan performans verisi.", bullets: ["Gercek dunya makine performansi", "Garanti baglami", "Hedefli servis mudahaleleri"], stats: [{ label: "Motor sagligi", value: "91%" }, { label: "Takip edilen calisma saati", value: "14.200" }, { label: "Garanti durumu", value: "Aktif" }] },
  ],
} as const;

type StakeholderId = (typeof stakeholderTabs.en)[number]["id"];

export default function Stakeholders() {
  const params = useParams();
  const lang = (params?.lang as string) ?? (params?.locale as string) ?? "en";
  const t = strings[lang as keyof typeof strings] ?? strings.en;
  const tabs = stakeholderTabs[lang as keyof typeof stakeholderTabs] ?? stakeholderTabs.en;
  const [activeId, setActiveId] = useState<StakeholderId>(tabs[0].id as StakeholderId);
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <section
      id="stakeholders"
      className="bg-white px-6 py-20 text-[#1A1A2E] sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-[#00B4D8]">{t.label}</p>
        <h2 className="mt-4 font-sans text-3xl font-bold text-[#1A1A2E] sm:text-5xl">
          {t.headline}
        </h2>
        <div className="mt-10 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveId(tab.id)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                tab.id === active.id
                  ? "border-[#0A0F1E] bg-[#0A0F1E] text-white"
                  : "border-[#D1D5DB] text-[#1A1A2E] hover:border-[#00D4FF]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mt-8 grid gap-8 rounded-xl border border-[#E5E7EB] p-6 md:grid-cols-2 md:p-10"
          >
            <div>
              <h3 className="text-3xl font-semibold text-[#1A1A2E]">{active.heading}</h3>
              <ul className="mt-6 space-y-3 text-[#4B5563]">
                {active.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#00D4FF]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-[#E5E7EB] bg-[#0F172A] p-6 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,212,255,0.25),transparent_42%)]" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.2em] text-[#94A3B8]">{t.snapshotLabel}</p>
                <h4 className="mt-4 text-xl font-medium text-white">{active.label} {t.metricsLabel}</h4>
                <div className="mt-5 rounded border border-white/10 bg-white/[0.03] p-3">
                  <svg viewBox="0 0 320 90" className="h-[90px] w-full">
                    <path d="M8 64 L58 48 L108 54 L158 37 L208 42 L258 29 L312 32" stroke="#00D4FF" strokeWidth="3" fill="none" />
                    <path d="M8 74 L58 69 L108 66 L158 61 L208 60 L258 56 L312 52" stroke="#E6B800" strokeWidth="2.5" fill="none" />
                    <rect x="12" y="12" width="58" height="12" rx="3" fill="#1E293B" />
                    <rect x="74" y="12" width="88" height="12" rx="3" fill="#1E293B" />
                    <rect x="166" y="12" width="70" height="12" rx="3" fill="#1E293B" />
                  </svg>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-3 text-xs sm:grid-cols-3">
                  {active.stats.map((stat) => (
                    <div key={stat.label} className="rounded border border-white/15 bg-white/[0.04] px-3 py-3">
                      <p className="text-[11px] uppercase tracking-wide text-[#94A3B8]">{stat.label}</p>
                      <p className="mt-2 font-mono text-xl text-[#00D4FF]">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
