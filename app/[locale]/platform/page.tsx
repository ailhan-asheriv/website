import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { PageScaffold, Section } from "../../components/sections";

const content = {
  en: {
    title: "AshMOP - Maritime Operations Platform",
    intro:
      "The only platform that connects shipyard build data, operational telemetry, and machinery records into a single vessel intelligence layer - from first steel to decommissioning.",
    section1Title: "Platform Architecture",
    cards1: [
      {
        title: "Data Ingestion Layer",
        desc: "Real-time sensor telemetry, alarm events, maintenance logs, and operational records ingested from onboard systems, noon reports, and third-party data sources.",
      },
      {
        title: "Asset Intelligence Engine",
        desc: "AI-driven anomaly detection, degradation trend modelling, and remaining useful life estimation mapped to individual assets and systems within the vessel registry.",
      },
      {
        title: "Evidence & Decision Layer",
        desc: "Structured outputs - maintenance work orders, class-ready evidence packages, audit trails - delivered through role-based dashboards to engineers, managers, surveyors, and insurers.",
      },
    ],
    section2Title: "Key Capabilities",
    cards2: [
      {
        title: "Vessel Digital Twin",
        desc: "A continuously updated operational model of each vessel. Asset registry, system hierarchy, sensor mapping, and maintenance history - structured and queryable.",
      },
      {
        title: "Role-Based Dashboards",
        desc: "Each stakeholder sees what they need. Engineers: alarm context and maintenance queues. Technical managers: fleet health and risk priorities. Surveyors: evidence timelines and compliance records.",
      },
      {
        title: "Evidence Pack Builder",
        desc: "Time-window exports of sensor data, alarm events, decisions, and documentation - formatted for insurance claims, class surveys, charter disputes, and internal audit.",
      },
      {
        title: "Shipyard Integration",
        desc: "IFC and BIM data parsed and mapped to the operational asset registry. Build QC records, handover documentation, and design specifications linked to the live twin.",
      },
    ],
    standardsTitle: "Standards & Compliance",
    standards:
      "AshMOP is designed for compliance with: SFI Group System - ISO 14224 - IACS E26/E27 - IEC 62443 - FMI 2.0 - ISO 13381-1 - IFC 2x3/4 - IMO MSC-FAL.1/Circ.3",
    demoTitle: "See AshMOP in action",
    demoSubtext: "Request a live demo to explore the platform with your own vessel context.",
    demoButton: "Request Demo →",
    backLabel: "Back to Home",
    ctaLabel: "Contact us",
  },
  tr: {
    title: "AshMOP - Denizcilik Operasyonlari Platformu",
    intro:
      "Tersane insaat verilerini, operasyonel telemetriyi ve makine kayitlarini tek bir gemi zekasi katmaninda birlestiren platform - ilk celikten hizmetten cikisa kadar.",
    section1Title: "Platform Mimarisi",
    cards1: [
      {
        title: "Veri Alim Katmani",
        desc: "Bordaki sistemlerden, noon raporlarindan ve ucuncu taraf veri kaynaklarindan alinan gercek zamanli sensor telemetrisi, alarm olaylari, bakim kayitlari ve operasyonel veriler.",
      },
      {
        title: "Varlik Zeka Motoru",
        desc: "Gemi kaydindaki bireysel varliklara ve sistemlere eslenmis AI destekli anomali tespiti, bozunma trendi modellemesi ve kalan faydali omur tahmini.",
      },
      {
        title: "Kanit ve Karar Katmani",
        desc: "Yapilandirilmis ciktilar - bakim is emirleri, sinif hazir kanit paketleri, denetim izleri - muhendislere, yoneticilere, sorveyor ve sigorta ekiplerine rol tabanli paneller araciligiyla iletilir.",
      },
    ],
    section2Title: "Temel Ozellikler",
    cards2: [
      {
        title: "Gemi Dijital Ikizi",
        desc: "Her geminin surekli guncellenen operasyonel modeli. Varlik kaydi, sistem hiyerarsisi, sensor eslemesi ve bakim gecmisi - yapilandirilmis ve sorgulanabilir.",
      },
      {
        title: "Rol Tabanli Paneller",
        desc: "Her paydas ihtiyacini gorur. Muhendisler: alarm baglami ve bakim siralari. Teknik yoneticiler: filo sagligi ve risk oncelikleri. Sorveyorler: kanit zaman cizelgeleri ve uyumluluk kayitlari.",
      },
      {
        title: "Kanit Paketi Olusturucu",
        desc: "Sensor verilerinin, alarm olaylarinin, kararlarin ve belgelerin zaman penceresi disa aktarmalari - sigorta talepleri, sinif sorveyleri, charter anlasmazliklari ve ic denetim icin bicimlendirilmis.",
      },
      {
        title: "Tersane Entegrasyonu",
        desc: "IFC ve BIM verileri ayristirilir ve operasyonel varlik kaydina eslenir. Insaat QC kayitlari, teslimat belgeleri ve tasarim ozellikleri canli ikize baglanir.",
      },
    ],
    standardsTitle: "Standartlar ve Uyumluluk",
    standards:
      "AshMOP su standartlara uygun olarak tasarlanmistir: SFI Grup Sistemi - ISO 14224 - IACS E26/E27 - IEC 62443 - FMI 2.0 - ISO 13381-1 - IFC 2x3/4 - IMO MSC-FAL.1/Circ.3",
    demoTitle: "AshMOP'u canli gorun",
    demoSubtext: "Kendi gemi baglaminizla platformu kesfetmek icin canli demo talep edin.",
    demoButton: "Demo Talep Et →",
    backLabel: "Ana Sayfaya Don",
    ctaLabel: "Iletisime Gec",
  },
} as const;

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = content[locale as keyof typeof content] ?? content.en;

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-[#0A0F1E]">
        <PageScaffold
          title={c.title}
          intro={c.intro}
          backLabel={c.backLabel}
          ctaLabel={c.ctaLabel}
          ctaHref="/#contact"
          locale={locale}
        >
          <Section variant="dark">
            <h2 className="font-sans text-2xl font-bold text-[#00D4FF] mb-8 text-center">
              {c.section1Title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {c.cards1.map((card) => (
                <div key={card.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{card.desc}</p>
                </div>
              ))}
            </div>
          </Section>
          <Section variant="light">
            <h2 className="font-sans text-2xl font-bold text-[#00D4FF] mb-8 text-center">
              {c.section2Title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {c.cards2.map((card) => (
                <div key={card.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{card.desc}</p>
                </div>
              ))}
            </div>
          </Section>
          <Section variant="dark">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-sans text-2xl font-bold text-white mb-3">
                {c.demoTitle}
              </h2>
              <p className="text-sm text-[#CBD5E1] mb-6">
                {c.demoSubtext}
              </p>
              <a
                href={locale === "tr" ? "/tr/contact" : "/en/contact"}
                className="rounded-md bg-[#00D4FF] px-6 py-3 text-sm font-semibold text-[#0A0F1E] transition hover:bg-[#67E5FF] inline-block"
              >
                {c.demoButton}
              </a>
            </div>
          </Section>
          <section className="px-6 py-16 sm:px-10 lg:px-16 bg-[#0D1627] border-t border-white/10">
            <div className="mx-auto max-w-5xl">
              <p className="text-xs font-semibold tracking-[0.24em] text-[#00D4FF] mb-2">
                {locale === "tr" ? "STANDARTLAR VE UYUMLULUK" : "STANDARDS & COMPLIANCE"}
              </p>
              <p className="text-[#9CA3AF] text-sm mb-8 max-w-xl">
                {locale === "tr"
                  ? "AshMOP aşağıdaki denizcilik ve endüstri standartlarıyla uyumlu olarak tasarlanmıştır."
                  : "AshMOP is designed for compliance with the following maritime and industry standards."}
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { code: "SFI Group System", desc: "Asset classification" },
                  { code: "ISO 14224", desc: "Reliability & maintenance data" },
                  { code: "IACS E26/E27", desc: "Cyber resilience" },
                  { code: "IEC 62443", desc: "Industrial cybersecurity" },
                  { code: "FMI 2.0", desc: "Simulation interface" },
                  { code: "ISO 13381-1", desc: "Prognostics & health management" },
                  { code: "IFC 2x3 / IFC 4", desc: "BIM data exchange" },
                  { code: "IMO MSC-FAL.1/Circ.3", desc: "Maritime digital data" },
                ].map((std) => (
                  <div
                    key={std.code}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="font-mono text-sm font-semibold text-white whitespace-nowrap">
                      {std.code}
                    </span>
                    <span className="text-xs text-[#6B7280] whitespace-nowrap">
                      {std.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </PageScaffold>
      </main>
      <Footer />
    </>
  );
}
