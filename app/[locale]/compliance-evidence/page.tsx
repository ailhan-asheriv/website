import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";
import { PRODUCT_HERO_IMAGES } from "../../../lib/imagery";

const content = {
  en: {
    title: "Evidence Pack",
    tagline: "Structured compliance evidence for class, insurance, and charter.",
    intro: "Structured, time-windowed documentation exports for class surveys, insurance, and compliance review.",
    body: "An Evidence Pack is a structured export of operational data - sensor readings, alarm events, maintenance actions, and decisions - for a defined time window. Formatted for the specific requirements of class surveyors, flag state inspectors, P&I clubs, charterers, and internal audit teams.",
    introStat: "Time-window exports reduce evidence prep cycles from days to hours.",
    features: [
      {
        title: "Class Survey Ready",
        desc: "Exports aligned with classification society documentation requirements. Deviation timelines, corrective action records, and system performance data structured for survey review.",
      },
      {
        title: "Insurance & Claims Support",
        desc: "Chronological event reconstruction from first anomaly detection through maintenance response and resolution. Supports liability assessment and claims adjustment.",
      },
      {
        title: "Charter Compliance",
        desc: "Off-hire event documentation with sensor context. Performance records over voyage windows for charter party compliance verification.",
      },
      {
        title: "Internal Audit",
        desc: "Management-level summaries with drill-down access to underlying data. Customisable reporting periods and asset scope.",
      },
    ],
    capabilitiesTitle: "Core capabilities",
    howTitle: "How it works",
    steps: [
      "Select the vessel and time window for the event under review.",
      "Compile alarms, maintenance actions, and supporting records into a structured package.",
      "Export a review-ready dossier for survey, claims, or dispute workflows.",
    ],
    useCasesTitle: "Use cases",
    useCases: [
      {
        title: "Insurance Claims",
        desc: "Time-window evidence exports for P&I and hull claims.",
      },
      {
        title: "Class Society Surveys",
        desc: "Structured alarm, maintenance, and inspection timelines for survey preparation.",
      },
      {
        title: "Charter Disputes",
        desc: "Timestamped operational records for laytime and off-hire disputes.",
      },
    ],
    heroCtaPrimary: "Request Demo",
    suiteTitle: "Part of the Asheriv suite",
    suiteBody:
      "Evidence Pack completes the operational stack by turning AshMOP and AshFI data into structured external proof.",
    linkAshmop: "AshMOP",
    linkAshfi: "AshFI",
    linkSim: "AshSIM",
  },
  tr: {
    title: "Kanit Paketi",
    tagline: "Sinif, sigorta ve charter icin yapilandirilmis uyumluluk kaniti.",
    intro: "Sinif sorveyleri, sigorta ve uyumluluk incelemesi icin yapilandirilmis, zaman pencereli belge disa aktarmalari.",
    body: "Kanit Paketi, tanimlanmis bir zaman penceresi icin operasyonel verilerin - sensor okumalari, alarm olaylari, bakim aksiyonlari ve kararlar - yapilandirilmis bir disa aktarimidir. Klaslama sorveyorleri, bayrak devleti mufettisleri, P&I kulupleri, chartererlar ve ic denetim ekiplerinin ozel gereksinimleri icin bicimlendirilmistir.",
    introStat: "Zaman pencereli disa aktarimlar kanit hazirlama suresini gunlerden saatlere indirir.",
    features: [
      {
        title: "Sinif Sorvey Hazir",
        desc: "Klaslama kurulusu belge gereksinimlerine gore hizalanmis disa aktarmalar. Sapma zaman cizelgeleri, duzeltici aksiyon kayitlari ve sorvey incelemesi icin yapilandirilmis sistem performans verileri.",
      },
      {
        title: "Sigorta ve Hasar Destegi",
        desc: "Ilk anomali tespitinden bakim yaniti ve cozume kadar kronolojik olay yeniden yapilandirmasi. Sorumluluk degerlendirmesini ve hasar duzenlemesini destekler.",
      },
      {
        title: "Charter Uyumlulugu",
        desc: "Sensor baglamli off-hire olay belgeleri. Charter party uyumluluk dogrulamasi icin sefer pencereleri uzerinde performans kayitlari.",
      },
      {
        title: "Ic Denetim",
        desc: "Temel verilere detay gorunumu erisimiyle yonetim duzeyinde ozetler. Ozellestirilebilir raporlama donemleri ve varlik kapsami.",
      },
    ],
    capabilitiesTitle: "Temel ozellikler",
    howTitle: "Nasil calisir",
    steps: [
      "Incelenecek olay icin gemi ve zaman penceresi secilir.",
      "Alarm, bakim aksiyonlari ve destekleyici kayitlar yapilandirilmis pakete toplanir.",
      "Sorvey, hasar veya anlasmazlik surecine hazir dosya disa aktarilir.",
    ],
    useCasesTitle: "Kullanim senaryolari",
    useCases: [
      {
        title: "Sigorta Talepleri",
        desc: "P&I ve hull talepleri icin zaman pencereli kanit disa aktarmalari.",
      },
      {
        title: "Sinif Kurulusu Sorveyleri",
        desc: "Sorvey hazirligi icin yapilandirilmis alarm, bakim ve inceleme zaman cizelgeleri.",
      },
      {
        title: "Charter Anlasmazliklari",
        desc: "Laytime ve off-hire anlasmazliklari icin zaman damgali operasyon kayitlari.",
      },
    ],
    heroCtaPrimary: "Demo Talep Et",
    suiteTitle: "Asheriv paketinin bir parcasi",
    suiteBody:
      "Kanit Paketi, AshMOP ve AshFI verilerini dis paydaslara yonelik yapilandirilmis kanita donusturur.",
    linkAshmop: "AshMOP",
    linkAshfi: "AshFI",
    linkSim: "AshSIM",
  },
} as const;

export default async function ComplianceEvidencePage({
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
            backgroundImage: `linear-gradient(to bottom, rgba(10,15,30,0.78), rgba(10,15,30,0.82)), url(${PRODUCT_HERO_IMAGES.evidencePack})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">{c.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-[#CBD5E1]">{c.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#contact" className="rounded-full bg-[#0A0F1E] px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-[#1C3D5A]">
                {c.heroCtaPrimary}
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
            <p className="mt-8 leading-relaxed text-[#3D4852]">{c.body}</p>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-heading text-3xl font-bold text-white">{c.capabilitiesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {c.features.map((feature) => (
                <div key={feature.title} className="rounded-xl border border-white/10 bg-[#0D1627] p-6">
                  <div className="mb-4 h-2 w-10 rounded-full bg-[#00D4FF]" />
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1C3D5A] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-heading text-3xl font-bold text-white mb-8">{c.howTitle}</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {c.steps.map((step, index) => (
                <div key={step} className="rounded-xl border border-white/15 bg-[#0A0F1E]/35 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#00D4FF]/15 text-sm font-bold text-[#00D4FF]">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 text-[#3D4852] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-heading text-3xl font-bold text-[#0A0F1E]">{c.useCasesTitle}</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {c.useCases.map((useCase) => (
                <div key={useCase.title} className="rounded-xl border border-[#E3E8EB] bg-white p-6">
                  <h3 className="text-lg font-semibold text-[#0A0F1E]">{useCase.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#3D4852]">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-[#0D1627] p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">{c.suiteTitle}</h2>
            <p className="text-[#CBD5E1] leading-relaxed mb-6">{c.suiteBody}</p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 text-sm font-semibold">
              <Link href="/platform" className="text-[#00D4FF] hover:text-[#67E5FF]">{c.linkAshmop}</Link>
              <Link href="/ashfi" className="text-[#00D4FF] hover:text-[#67E5FF]">{c.linkAshfi}</Link>
              <Link href="/sim" className="text-[#00D4FF] hover:text-[#67E5FF]">{c.linkSim}</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
