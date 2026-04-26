import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { PageScaffold, Section } from "../../components/sections";

const content = {
  en: {
    title: "Operational Intelligence",
    intro: "Structured operational records, decision trails, and audit-ready documentation for every vessel event.",
    bodyCards: [
      {
        title: "Operational Memory",
        desc: "Every alarm event, maintenance action, inspection finding, and operational decision logged, timestamped, and linked to the relevant asset. A complete audit trail from any point in the vessel's operational life.",
      },
      {
        title: "Evidence Pack Builder",
        desc: "Export structured evidence packages for specific time windows - formatted for class surveys, insurance claims, charter party disputes, and internal management review.",
      },
      {
        title: "Maintenance Records",
        desc: "Work orders linked to asset records, sensor data at time of fault, parts used, and outcome documented. Supports condition-based and predictive maintenance strategies.",
      },
      {
        title: "Compliance Continuity",
        desc: "Certificate status, survey findings, corrective actions, and closure records maintained in a continuous compliance record accessible to authorised stakeholders.",
      },
    ],
    backLabel: "Back to Home",
    ctaLabel: "Contact us",
  },
  tr: {
    title: "Operasyonel Zeka",
    intro: "Her gemi olayi icin yapilandirilmis operasyonel kayitlar, karar izleri ve denetim hazir belgeler.",
    bodyCards: [
      {
        title: "Operasyonel Bellek",
        desc: "Her alarm olayi, bakim aksiyonu, muayene bulgusu ve operasyonel karar kaydedilir, zaman damgalanir ve ilgili varliga baglanir. Geminin operasyonel yasamindaki herhangi bir noktadan tam denetim izi.",
      },
      {
        title: "Kanit Paketi Olusturucu",
        desc: "Belirli zaman pencereleri icin yapilandirilmis kanit paketleri disa aktarilir - sinif sorveyleri, sigorta talepleri, charter anlasmazliklari ve ic yonetim incelemesi icin bicimlendirilmis.",
      },
      {
        title: "Bakim Kayitlari",
        desc: "Varlik kayitlarina, hata anindaki sensor verilerine, kullanilan parcalara ve sonuca bagli is emirleri. Durum tabanli ve kestirimci bakim stratejilerini destekler.",
      },
      {
        title: "Uyumluluk Surekliligi",
        desc: "Sertifika durumu, sorvey bulgulari, duzeltici aksiyonlar ve kapanis kayitlari, yetkili paydaslara erisilebilir surekli bir uyumluluk kaydinda tutulur.",
      },
    ],
    backLabel: "Ana Sayfaya Don",
    ctaLabel: "Iletisime Gec",
  },
} as const;

export default async function OperationalDigitalTwinPage({
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {c.bodyCards.map((card) => (
                <div key={card.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{card.desc}</p>
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
