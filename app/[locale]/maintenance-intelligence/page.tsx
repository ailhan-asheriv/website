import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { PageScaffold, Section } from "../../components/sections";

const content = {
  en: {
    title: "Asset Intelligence",
    intro: "Continuous health monitoring, anomaly detection, and remaining useful life estimation for vessel machinery and critical systems.",
    bodyCards: [
      {
        title: "Health Scoring",
        desc: "Component-to-vessel health scoring derived from real-time sensor data, alarm history, and maintenance records. Updated continuously as new data arrives.",
      },
      {
        title: "Anomaly Detection",
        desc: "AI ensemble combining LSTM autoencoder reconstruction error with Isolation Forest scoring. Catches both gradual degradation and sudden deviations, including on vessels with limited failure history.",
      },
      {
        title: "RUL Estimation",
        desc: "Remaining useful life prediction using Weibull degradation models updated by particle filter as new sensor observations arrive. P10/P50/P90 uncertainty bands included.",
      },
      {
        title: "Sensor Integration",
        desc: "Supports Modbus, OPC-UA, NMEA, and MQTT protocols. Compatible with existing onboard monitoring systems - no hardware replacement required.",
      },
    ],
    useCasesTitle: "Typical Applications",
    useCases: [
      "Main engine predictive maintenance scheduling",
      "Auxiliary machinery health monitoring",
      "Propulsion system degradation detection",
      "Structural monitoring and fatigue estimation",
    ],
    backLabel: "Back to Home",
    ctaLabel: "Contact us",
  },
  tr: {
    title: "Varlik Zekasi",
    intro: "Gemi makineleri ve kritik sistemler icin surekli saglik izleme, anomali tespiti ve kalan faydali omur tahmini.",
    bodyCards: [
      {
        title: "Saglik Skorlamasi",
        desc: "Gercek zamanli sensor verilerinden, alarm gecmisinden ve bakim kayitlarindan turetilen komponentten gemiye saglik skorlamasi. Yeni veriler geldikce surekli guncellenir.",
      },
      {
        title: "Anomali Tespiti",
        desc: "LSTM otokodlayici yeniden yapilandirma hatasi ile Isolation Forest skorlamasini birlestiren AI toplulugu. Hem kademeli bozunmayi hem ani sapmalari yakalar.",
      },
      {
        title: "RUL Tahmini",
        desc: "Yeni sensor gozlemleri geldikce parcacik filtresiyle guncellenen Weibull bozunma modelleri kullanan kalan faydali omur tahmini. P10/P50/P90 belirsizlik bantlari dahil.",
      },
      {
        title: "Sensor Entegrasyonu",
        desc: "Modbus, OPC-UA, NMEA ve MQTT protokollerini destekler. Mevcut bordaki izleme sistemleriyle uyumlu - donanim degisikligi gerekmez.",
      },
    ],
    useCasesTitle: "Tipik Uygulamalar",
    useCases: [
      "Ana makine kestirimci bakim planlamasi",
      "Yardimci makine saglik izleme",
      "Itki sistemi bozunma tespiti",
      "Yapisal izleme ve yorulma tahmini",
    ],
    backLabel: "Ana Sayfaya Don",
    ctaLabel: "Iletisime Gec",
  },
} as const;

export default async function MaintenanceIntelligencePage({
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
          <Section variant="light">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-sans text-2xl font-bold text-[#00D4FF] mb-6 text-center">
                {c.useCasesTitle}
              </h2>
              <ul className="space-y-3">
                {c.useCases.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#CBD5E1]">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#00D4FF]" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </PageScaffold>
      </main>
      <Footer />
    </>
  );
}
