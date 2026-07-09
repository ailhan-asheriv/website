import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CircleGauge, Cpu, Layers, Ship, Wrench } from "lucide-react";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";
import { routing } from "../../../lib/routing";

const BG_DARK = "#04070F";
const BG_OFFWHITE = "#EEF2F6";
const HEADLINE = "#EEF2F6";
const SIGNAL_CYAN = "#00D4FF";
const BODY_ON_LIGHT = "#3D4852";
const MUTED_ON_DARK = "#CBD5E1";
const CARD_DARK = "#0D1627";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn
      ? "ASHSIM - Ship Information Modelling Intelligence"
      : "ASHSIM - Gemi Bilgi Modelleme Zekasi",
    description: isEn
      ? "AI analysis and structured build records for shipyards. Connect your existing CAD workflow to ASHSIM for clash detection, IACS rule compliance, and digital handover."
      : "Tersaneler icin AI analizi ve yapilandirilmis insaat kayitlari. Mevcut CAD is akisinizi ASHSIM'e baglayin: cakisma tespiti, IACS kural uyumlulugu ve dijital devir.",
    keywords: isEn
      ? [
          "ship information modelling",
          "shipyard AI",
          "IFC analysis",
          "class society compliance",
          "digital shipbuilding",
        ]
      : [
          "gemi bilgi modelleme",
          "tersane AI",
          "IFC analizi",
          "sinif kurulusu uyumlulugu",
          "dijital gemi insaati",
        ],
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const heroFeatures = [
  { key: "analysis" as const, Icon: CircleGauge },
  { key: "compliance" as const, Icon: Cpu },
  { key: "records" as const, Icon: Layers },
];

const capabilityCards = [
  { key: "ifc" as const, Icon: Ship },
  { key: "drawings" as const, Icon: Layers },
  { key: "workflow" as const, Icon: Wrench },
];

const complianceItems = ["grades", "ifc", "class", "handover"] as const;

const howSteps = ["step1", "step2", "step3"] as const;

export default async function SimPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sim" });

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen" style={{ backgroundColor: BG_DARK, color: HEADLINE }}>
        {/* Section 1: Hero */}
        <section
          className="relative border-b border-white/10 pt-32 pb-20 sm:pt-40"
          style={{ backgroundColor: BG_DARK }}
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#CBD5E1]">
              {t("hero.eyebrow")}
            </span>

            <h1
              className="mt-8 max-w-[820px] font-heading text-[clamp(32px,4.2vw,52px)] font-bold leading-[1.05] tracking-[-0.02em]"
              style={{ color: HEADLINE }}
            >
              <span className="bg-gradient-to-r from-[#00d4ff] via-[#4facfe] to-[#00f2fe] bg-clip-text italic text-transparent">
                {t("hero.headlineHighlight")}
              </span>{" "}
              {t("hero.headlineRest")}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed" style={{ color: MUTED_ON_DARK }}>
              {t("hero.subcopy")}
            </p>

            <div className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              {heroFeatures.map(({ key, Icon }) => (
                <div
                  key={key}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0" style={{ color: SIGNAL_CYAN }} aria-hidden />
                  <span className="text-sm font-medium leading-snug" style={{ color: HEADLINE }}>
                    {t(`hero.features.${key}`)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-[#1C3D5A]"
                style={{ backgroundColor: BG_DARK }}
              >
                {t("hero.cta")}
                <span aria-hidden style={{ color: SIGNAL_CYAN }}>
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: How it works */}
        <section className="px-6 py-16 sm:px-10 lg:px-16" style={{ backgroundColor: BG_OFFWHITE, color: BODY_ON_LIGHT }}>
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: SIGNAL_CYAN }}>
              {t("howItWorks.eyebrow")}
            </p>
            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
              {howSteps.map((stepKey, index) => (
                <div key={stepKey}>
                  <p
                    className="font-heading text-5xl font-bold leading-none sm:text-6xl"
                    style={{ color: `${SIGNAL_CYAN}33` }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 font-heading text-xl font-semibold" style={{ color: BG_DARK }}>
                    {t(`howItWorks.${stepKey}.title`)}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed">{t(`howItWorks.${stepKey}.body`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Capabilities */}
        <section className="px-6 py-16 sm:px-10 lg:px-16" style={{ backgroundColor: BG_DARK }}>
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-heading text-3xl font-bold" style={{ color: HEADLINE }}>
              {t("capabilities.eyebrow")}
            </h2>
            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              {capabilityCards.map(({ key, Icon }) => (
                <div
                  key={key}
                  className="rounded-xl border border-white/10 p-6"
                  style={{ backgroundColor: CARD_DARK }}
                >
                  <Icon className="mb-4 h-6 w-6" style={{ color: SIGNAL_CYAN }} aria-hidden />
                  <h3 className="text-lg font-semibold" style={{ color: HEADLINE }}>
                    {t(`capabilities.cards.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED_ON_DARK }}>
                    {t(`capabilities.cards.${key}.body`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Compliance */}
        <section className="px-6 py-16 sm:px-10 lg:px-16" style={{ backgroundColor: BG_OFFWHITE, color: BODY_ON_LIGHT }}>
          <div className="mx-auto max-w-5xl">
            <h2 className="font-heading text-3xl font-bold" style={{ color: BG_DARK }}>
              {t("compliance.eyebrow")}
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed">{t("compliance.body")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {complianceItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border bg-white px-4 py-2 text-sm font-semibold"
                  style={{ borderColor: "#E3E8EB", color: "#1C3D5A" }}
                >
                  {t(`compliance.items.${item}`)}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Early access */}
        <section className="px-6 py-16 sm:px-10 lg:px-16" style={{ backgroundColor: BG_DARK }}>
          <div
            className="mx-auto max-w-4xl rounded-xl border border-white/10 p-8 text-center sm:p-10"
            style={{ backgroundColor: CARD_DARK }}
          >
            <h2 className="font-heading text-2xl font-semibold sm:text-3xl" style={{ color: HEADLINE }}>
              {t("access.eyebrow")}
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: MUTED_ON_DARK }}>
              {t("access.body")}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-[#1C3D5A]"
              style={{ backgroundColor: BG_DARK }}
            >
              {t("access.cta")}
              <span aria-hidden style={{ color: SIGNAL_CYAN }}>
                →
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
