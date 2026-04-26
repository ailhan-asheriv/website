import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { PageScaffold, Section } from "../../components/sections";

const content = {
  en: {
    title: "Evidence Pack",
    intro: "Structured, time-windowed documentation exports for class surveys, insurance, and compliance review.",
    body: "An Evidence Pack is a structured export of operational data - sensor readings, alarm events, maintenance actions, and decisions - for a defined time window. Formatted for the specific requirements of class surveyors, flag state inspectors, P&I clubs, charterers, and internal audit teams.",
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
    backLabel: "Back to Home",
    ctaLabel: "Contact us",
  },
  tr: {
    title: "Kanit Paketi",
    intro: "Sinif sorveyleri, sigorta ve uyumluluk incelemesi icin yapilandirilmis, zaman pencereli belge disa aktarmalari.",
    body: "Kanit Paketi, tanimlanmis bir zaman penceresi icin operasyonel verilerin - sensor okumalari, alarm olaylari, bakim aksiyonlari ve kararlar - yapilandirilmis bir disa aktarimidir. Klaslama sorveyorleri, bayrak devleti mufettisleri, P&I kulupleri, chartererlar ve ic denetim ekiplerinin ozel gereksinimleri icin bicimlendirilmistir.",
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
    backLabel: "Ana Sayfaya Don",
    ctaLabel: "Iletisime Gec",
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
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[#CBD5E1] leading-relaxed">{c.body}</p>
            </div>
          </Section>
          <Section variant="light">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {c.features.map((feature) => (
                <div key={feature.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </PageScaffold>
      </main>
      <Footer />
    </>
  );
}
