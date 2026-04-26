"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const strings = {
  en: {
    label: "THE CONTEXT",
    headline: "Maritime asset data exists. It is rarely unified.",
    body: "Design records remain in shipyards. Operational data is distributed across management systems. Machinery performance data stays with OEMs. A'SHERIV provides the integration layer that connects these sources into a single, structured operational record for each vessel.",
    stat1: {
      value: "70%",
      label: "of vessel failures are detectable before occurrence with adequate data integration",
    },
    stat2: { value: "$1.4M", label: "average cost per unplanned off-hire event in commercial shipping" },
    stat3: { value: "6-9 mo", label: "typical gap between data collection and actionable maintenance insight" },
  },
  tr: {
    label: "BAGLAM",
    headline: "Denizcilik varlik verisi mevcuttur. Nadiren birlestirilir.",
    body: "Tasarim kayitlari tersanelerde kalir. Operasyonel veriler yonetim sistemlerine dagilmistir. Makine performans verisi OEM'lerde kalir. A'SHERIV, bu kaynaklari her gemi icin tek, yapilandirilmis bir operasyonel kayda baglayan entegrasyon katmanini saglar.",
    stat1: {
      value: "%70",
      label: "gemi arizalari yeterli veri entegrasyonuyla onceden tespit edilebilir",
    },
    stat2: { value: "1,4M$", label: "ticari denizcilikte plansiz off-hire olayi basina ortalama maliyet" },
    stat3: { value: "6-9 ay", label: "veri toplama ile eyleme donusturulebilir bakim icgorusu arasindaki tipik sure" },
  },
};

export default function ContextSection() {
  const params = useParams();
  const lang = (params?.lang as string) ?? (params?.locale as string) ?? "en";
  const t = strings[lang as keyof typeof strings] ?? strings.en;

  return (
    <section className="bg-[#F5F7FA] px-6 py-20 text-[#1A1A2E] sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-[#00D4FF]">{t.label}</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-sans text-3xl font-bold text-[#1A1A2E] sm:text-4xl">{t.headline}</h2>
            <p className="mt-6 text-base leading-relaxed text-[#4B5563]">{t.body}</p>
          </div>
          <div className="space-y-4">
            {[t.stat1, t.stat2, t.stat3].map((stat) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="rounded-lg border border-[#E5E7EB] bg-white p-5"
              >
                <p className="font-mono text-3xl font-bold text-[#0A0F1E]">{stat.value}</p>
                <p className="mt-2 text-sm text-[#6B7280]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
