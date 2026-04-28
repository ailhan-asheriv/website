"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Link } from "../../../lib/routing";

const strings = {
  en: {
    headline1: "Operational intelligence.",
    headline2: "Built for the vessel lifecycle.",
    subheadline:
      "The only platform that unifies three disconnected data worlds - shipyard build records, operational telemetry, and machinery history - into a single vessel intelligence layer. Built for shipyards, operators, and maritime stakeholders.",
    cta1: "REQUEST DEMO",
    cta2: "EXPLORE PLATFORM",
    stat1label: "Maritime standards supported",
    stat2label: "Stakeholder role types served",
    stat3label: "Platform microservices",
  },
  tr: {
    headline1: "Operasyonel zeka.",
    headline2: "Gemi yaşam döngüsü için inşa edildi.",
    subheadline:
      "Tersane insaat kayitlarini, operasyonel telemetriyi ve makine gecmisini tek bir gemi zekasi katmaninda birlestiren platform. Tersaneler, operatorler ve denizcilik paydaslari icin.",
    cta1: "DEMO TALEP ET",
    cta2: "PLATFORMU KEŞFET",
    stat1label: "Desteklenen denizcilik standardı",
    stat2label: "Hizmet verilen paydaş rol tipi",
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
    <div ref={ref} className="space-y-1">
      <p className="font-mono text-4xl font-bold text-white tracking-tight">
        {count}
        {suffix}
      </p>
      <p className="text-sm text-[#A7B1C7]">{label}</p>
    </div>
  );
}

export default function Hero() {
  const params = useParams();
  const lang = (params?.lang as string) ?? (params?.locale as string) ?? "en";
  const t = strings[lang as keyof typeof strings] ?? strings.en;

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${(i * 17) % 100}%`,
        top: `${(i * 29) % 100}%`,
        duration: 4 + (i % 6),
        delay: (i % 4) * 0.4,
      })),
    []
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0A0F1E] pt-28 pb-20 px-6 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#00D4FF]/70"
            style={{ left: p.left, top: p.top }}
            animate={{ y: [0, -18, 0], opacity: [0.2, 1, 0.25] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: p.duration,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="font-sans text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            {t.headline1}
            <br />
            {t.headline2}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#00D4FF] sm:text-xl">
            {t.subheadline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-md bg-[#00D4FF] px-6 py-3 text-sm font-semibold tracking-wide text-[#0A0F1E] transition hover:bg-[#67E5FF]"
            >
              {t.cta1}
            </Link>
            <Link
              href="#platform"
              className="rounded-md border border-white/70 px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:border-[#00D4FF] hover:text-[#00D4FF]"
            >
              {t.cta2}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 grid gap-5 rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:grid-cols-3"
        >
          <Counter value={9} label={t.stat1label} />
          <Counter value={7} label={t.stat2label} />
          <Counter value={17} label={t.stat3label} />
        </motion.div>
      </div>
    </section>
  );
}
