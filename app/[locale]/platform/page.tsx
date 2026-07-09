import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";
import { PRODUCT_HERO_IMAGES } from "../../../lib/imagery";

const content = {
  en: {
    title: "AshMOP",
    tagline: "The operational digital twin for maritime asset management.",
    intro:
      "The only platform that connects shipyard build data, operational telemetry, and machinery records into a single vessel intelligence layer - from first steel to decommissioning.",
    introStat: "17 microservices run in the current AshMOP production architecture.",
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
    howTitle: "How it works",
    standardsTitle: "Standards & Compliance",
    standardsIntro: "AshMOP is designed for compliance with the following maritime and industry standards.",
    demoTitle: "See AshMOP in action",
    demoSubtext: "Request a live demo to explore the platform with your own vessel context.",
    demoButton: "Request Demo",
    suiteTitle: "Part of the Asheriv suite",
    suiteBody:
      "AshMOP works alongside AshFI, AshSIM, and Evidence Pack to deliver one connected vessel intelligence stack.",
    linkAshfi: "Explore AshFI",
    linkSim: "Explore AshSIM",
    linkEvidence: "Explore Evidence Pack",
  },
  tr: {
    title: "AshMOP",
    tagline: "Denizcilik varlik yonetimi icin operasyonel dijital ikiz.",
    intro:
      "Tersane insaat verilerini, operasyonel telemetriyi ve makine kayitlarini tek bir gemi zekasi katmaninda birlestiren platform - ilk celikten hizmetten cikisa kadar.",
    introStat: "AshMOP mevcut production mimarisinde 17 mikroservis calisir.",
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
    howTitle: "Nasil calisir",
    standardsTitle: "Standartlar ve Uyumluluk",
    standardsIntro: "AshMOP asagidaki denizcilik ve endustri standartlariyla uyumlu olarak tasarlanmistir.",
    demoTitle: "AshMOP'u canli gorun",
    demoSubtext: "Kendi gemi baglaminizla platformu kesfetmek icin canli demo talep edin.",
    demoButton: "Demo Talep Et",
    suiteTitle: "Asheriv paketinin bir parcasi",
    suiteBody:
      "AshMOP, AshFI, AshSIM ve Kanit Paketi ile birlikte tek bir bagli gemi zekasi yiginini tamamlar.",
    linkAshfi: "AshFI'yi Kesfet",
    linkSim: "AshSIM'i Kesfet",
    linkEvidence: "Kanit Paketini Kesfet",
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
      <main id="main-content" className="min-h-screen bg-[#0A0F1E] text-white">
        <section
          className="relative border-b border-white/10 pt-32 pb-20 sm:pt-40"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(10,15,30,0.82), rgba(10,15,30,0.82)), url(${PRODUCT_HERO_IMAGES.ashmop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">{c.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-[#CBD5E1]">{c.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#contact" className="rounded-full bg-[#0A0F1E] px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-[#1C3D5A]">
                {c.demoButton}
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 text-[#3D4852] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <p className="text-lg leading-relaxed">{c.intro}</p>
            <p className="mt-6 rounded-lg border-l-4 border-[#00D4FF] bg-white px-5 py-4 text-sm font-semibold text-[#1C3D5A]">
              {c.introStat}
            </p>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-heading text-3xl font-bold text-white">{c.section2Title}</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {c.cards2.map((card) => (
                <div key={card.title} className="rounded-xl border border-white/10 bg-[#0D1627] p-6">
                  <div className="mb-4 h-2 w-10 rounded-full bg-[#00D4FF]" />
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1C3D5A] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-heading text-3xl font-bold text-white">{c.howTitle}</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {c.cards1.map((card, index) => (
                <div key={card.title} className="rounded-xl border border-white/15 bg-[#0A0F1E]/40 p-6">
                  <p className="text-sm font-bold text-[#00D4FF]">0{index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#DCE3EC]">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 text-[#3D4852] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-heading text-3xl font-bold text-[#0A0F1E]">{c.standardsTitle}</h2>
            <p className="mt-3 max-w-3xl text-sm text-[#3D4852]">{c.standardsIntro}</p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
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
                <div key={std.code} className="rounded-lg border border-[#E3E8EB] bg-white p-5">
                  <p className="font-semibold text-[#0A0F1E]">{std.code}</p>
                  <p className="mt-2 text-sm text-[#3D4852]">{std.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-[#0D1627] p-8 text-center">
            <h2 className="font-heading text-3xl font-bold text-white">{c.suiteTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">{c.suiteBody}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-semibold">
              <Link href="/ashfi" className="text-[#00D4FF] hover:text-[#67E5FF]">{c.linkAshfi}</Link>
              <Link href="/sim" className="text-[#00D4FF] hover:text-[#67E5FF]">{c.linkSim}</Link>
              <Link href="/compliance-evidence" className="text-[#00D4FF] hover:text-[#67E5FF]">{c.linkEvidence}</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
