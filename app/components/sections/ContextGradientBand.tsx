"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { LAYOUT_GRADIENT_BAND } from "../../../lib/imagery";

const strings = {
  en: {
    stat1: {
      value: "70%",
      label: "of vessel failures are detectable before occurrence with adequate data integration",
    },
    stat2: {
      value: "$1.4M",
      label: "average cost per unplanned off-hire event in commercial shipping",
    },
    stat3: {
      value: "6-9 mo",
      label: "typical gap between data collection and actionable maintenance insight",
    },
  },
  tr: {
    stat1: {
      value: "%70",
      label: "gemi arizalari yeterli veri entegrasyonuyla onceden tespit edilebilir",
    },
    stat2: {
      value: "1,4M$",
      label: "ticari denizcilikte plansiz off-hire olayi basina ortalama maliyet",
    },
    stat3: {
      value: "6-9 ay",
      label: "veri toplama ile eyleme donusturulebilir bakim icgorusu arasindaki tipik sure",
    },
  },
};

export default function ContextGradientBand() {
  const params = useParams();
  const lang = (params?.lang as string) ?? (params?.locale as string) ?? "en";
  const t = strings[lang as keyof typeof strings] ?? strings.en;
  const stats = [t.stat1, t.stat2, t.stat3];

  return (
    <section
      className="section-seam-up-lg relative overflow-hidden bg-brand-gradient"
      aria-label={lang === "tr" ? "Operasyonel istatistikler" : "Operational statistics"}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-6 sm:h-10 lg:h-12"
        style={{ background: "linear-gradient(to bottom, rgba(247, 249, 250, 0.94) 0%, rgba(247, 249, 250, 0) 100%)" }}
        aria-hidden
      />
      <div className="relative w-full overflow-hidden leading-[0]">
        <div
          className="gradient-pull-up w-full"
          style={{
            aspectRatio: LAYOUT_GRADIENT_BAND.aspectRatio,
            background: LAYOUT_GRADIENT_BAND.background,
          }}
          aria-hidden
        />
        <div className="absolute inset-0 flex items-end pb-6 sm:pb-8 lg:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16"
          >
            <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.value}
                  className={`space-y-2 ${
                    index < stats.length - 1 ? "sm:border-r sm:border-white/10 sm:pr-6" : ""
                  }`}
                >
                  <p className="font-mono text-3xl font-bold tracking-tight text-brand-cyan sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="text-sm leading-relaxed text-white/85">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
