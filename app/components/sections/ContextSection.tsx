"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const strings = {
  en: {
    label: "THE CONTEXT",
    headline: "Maritime asset data exists. It is rarely unified.",
    body: "Design records remain in shipyards. Operational data is distributed across management systems. Machinery performance data stays with OEMs. A'SHERIV provides the integration layer that connects these sources into a single, structured operational record for each vessel.",
  },
  tr: {
    label: "BAGLAM",
    headline: "Denizcilik varlik verisi mevcuttur. Nadiren birlestirilir.",
    body: "Tasarim kayitlari tersanelerde kalir. Operasyonel veriler yonetim sistemlerine dagilmistir. Makine performans verisi OEM'lerde kalir. A'SHERIV, bu kaynaklari her gemi icin tek, yapilandirilmis bir operasyonel kayda baglayan entegrasyon katmanini saglar.",
  },
};

export default function ContextSection() {
  const params = useParams();
  const lang = (params?.lang as string) ?? (params?.locale as string) ?? "en";
  const t = strings[lang as keyof typeof strings] ?? strings.en;

  return (
    <section className="section-seam-up-lg -mt-6 bg-[#F7F9FA] px-6 pt-6 pb-12 text-[#3D4852] sm:px-10 sm:pb-14 lg:px-16 lg:pb-16">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xs font-semibold tracking-[0.24em] text-brand-cyan">{t.label}</p>
          <h2 className="mt-6 font-heading text-3xl font-bold text-[#0A0F1E] sm:text-4xl">
            {t.headline}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#3D4852] sm:text-lg">{t.body}</p>
        </motion.div>
      </div>
    </section>
  );
}
