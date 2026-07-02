"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { HERO_IMAGES } from "../../../lib/imagery";
import { layout } from "../../../lib/design-tokens";

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

export default function ContextVisualBand() {
  const params = useParams();
  const lang = (params?.lang as string) ?? (params?.locale as string) ?? "en";
  const t = strings[lang as keyof typeof strings] ?? strings.en;
  const stats = [t.stat1, t.stat2, t.stat3];

  return (
    <section
      className="relative min-h-[28rem] sm:min-h-[32rem] overflow-hidden"
      aria-label={lang === "tr" ? "Operasyonel istatistikler" : "Operational statistics"}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGES.homepageSecondary})` }}
        role="img"
        aria-label="Aerial view of port crane and container ship operations"
      />
      <div
        className="absolute inset-0"
        style={{ background: layout.photoOverlayGradientStrong }}
      />

      <div className="relative z-10 mx-auto flex min-h-[28rem] sm:min-h-[32rem] max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="w-full rounded-xl border border-white/10 bg-[#0A0F1E]/75 p-6 backdrop-blur-md sm:p-10"
        >
          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.value}
                className={`space-y-2 ${
                  index < stats.length - 1
                    ? "md:border-r md:border-white/10 md:pr-6"
                    : ""
                }`}
              >
                <p className="font-mono text-3xl font-bold tracking-tight text-[#00D4FF] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="text-sm leading-relaxed text-white/85">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
