"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import LayoutImage from "../LayoutImage";
import { Link } from "../../../lib/routing";
import { LAYOUT_IMAGES, LAYOUT_IMAGE_DIMS } from "../../../lib/imagery";

const strings = {
  en: {
    headline1: "Operational intelligence.",
    headline2: "Built for the vessel lifecycle.",
    subheadline:
      "The only platform that unifies three disconnected data worlds - shipyard build records, operational telemetry, and machinery history - into a single vessel intelligence layer. Built for shipyards, operators, and maritime stakeholders.",
    cta1: "Request Demo",
    cta2: "Explore Tools",
    stat1label: "Maritime standards supported",
    stat2label: "Stakeholder role types served",
    stat3label: "Platform microservices",
  },
  tr: {
    headline1: "Operasyonel zeka.",
    headline2: "Gemi yasam dongusu icin insa edildi.",
    subheadline:
      "Tersane insaat kayitlarini, operasyonel telemetriyi ve makine gecmisini tek bir gemi zekasi katmaninda birlestiren platform. Tersaneler, operatorler ve denizcilik paydaslari icin.",
    cta1: "DEMO TALEP ET",
    cta2: "ARACLARI KESFET",
    stat1label: "Desteklenen denizcilik standardi",
    stat2label: "Hizmet verilen paydas rol tipi",
    stat3label: "Platform mikroservisi",
  },
};

type CounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

function Counter({ value, suffix = "", label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 900;
    const start = performance.now();
    let raf = 0;
    const tick = (ts: number) => {
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value]);

  return (
    <div ref={ref} className="space-y-0.5 text-center lg:text-right">
      <p className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {count}
        {suffix}
      </p>
      <p className="mx-auto max-w-[11rem] text-xs leading-snug text-white/70 lg:ml-auto">{label}</p>
    </div>
  );
}

export default function Hero() {
  const params = useParams();
  const lang = (params?.lang as string) ?? (params?.locale as string) ?? "en";
  const t = strings[lang as keyof typeof strings] ?? strings.en;

  return (
    <section id="hero" className="relative overflow-hidden bg-[#F7F9FA]">
      <div className="relative hidden w-full leading-[0] section-seam-down lg:block">
        <LayoutImage
          src={LAYOUT_IMAGES.hero}
          alt="Aerial view of offshore platform and support vessels at sea"
          width={LAYOUT_IMAGE_DIMS.hero.width}
          height={LAYOUT_IMAGE_DIMS.hero.height}
          className="layout-image"
          priority
        />

        <div className="absolute inset-x-0 top-0 hidden h-[55%] bg-gradient-to-b from-[#0A0F1E]/85 via-[#0A0F1E]/35 to-transparent lg:block" />

        <div className="hidden absolute inset-x-0 top-0 px-6 pb-12 pt-28 sm:px-10 lg:block lg:px-16 lg:pb-16 lg:pt-32">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl flex-1"
            >
              <h1 className="font-heading text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]">
                {t.headline1}
                <br />
                {t.headline2}
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                {t.subheadline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="rounded-full bg-[#0A0F1E] px-6 py-2.5 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-[#1C3D5A]"
                >
                  {t.cta1}
                </Link>
                <Link
                  href="#platform"
                  className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0A0F1E] transition hover:bg-[#F7F9FA]"
                >
                  {t.cta2}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-row flex-wrap gap-8 sm:gap-10 lg:flex-col lg:gap-7 lg:pt-2"
            >
              <Counter value={9} label={t.stat1label} />
              <Counter value={7} label={t.stat2label} />
              <Counter value={17} label={t.stat3label} />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-[#0D1424] px-6 pb-8 pt-24 text-white sm:px-10 lg:hidden">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl"
          >
            <h1 className="font-heading text-3xl font-bold leading-[1.12] text-white sm:text-4xl">
              {t.headline1}
              <br />
              {t.headline2}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">{t.subheadline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0A0F1E] transition hover:bg-[#F7F9FA]"
              >
                {t.cta1}
              </Link>
              <Link
                href="#platform"
                className="rounded-full border border-white/35 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {t.cta2}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mt-7 grid grid-cols-3 gap-4"
          >
            <Counter value={9} label={t.stat1label} />
            <Counter value={7} label={t.stat2label} />
            <Counter value={17} label={t.stat3label} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
