import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { SUPPORT_HERO_IMAGES } from "../../../lib/imagery";

const content = {
  en: {
    title: "Asset Intelligence",
    tagline: "Component-level health scoring, degradation modelling, and remaining useful life estimation.",
    intro: "Continuous health monitoring, anomaly detection, and remaining useful life estimation for vessel machinery and critical systems.",
    methodology:
      "Built on physics-informed modelling and Weibull-based reliability analysis, applied with direct sensor data for significantly improved accuracy over AIS-only estimates.",
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
  },
  tr: {
    title: "Varlik Zekasi",
    tagline: "Komponent seviyesinde saglik skorlamasi, bozunma modellemesi ve kalan faydali omur tahmini.",
    intro: "Gemi makineleri ve kritik sistemler icin surekli saglik izleme, anomali tespiti ve kalan faydali omur tahmini.",
    methodology:
      "Fizik bilgili modelleme ve Weibull tabanli guvenilirlik analizi uzerine kuruludur, AIS-only yaklasimlara gore daha yuksek dogruluk icin dogrudan sensor verisiyle uygulanir.",
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
      <main id="main-content" className="min-h-screen bg-[#0A0F1E] text-white">
        <section
          className="relative border-b border-white/10 pt-32 pb-20 sm:pt-40"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(10,15,30,0.82), rgba(10,15,30,0.82)), url(${SUPPORT_HERO_IMAGES.maintenance})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">{c.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-[#CBD5E1]">{c.tagline}</p>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 text-[#3D4852] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <p className="text-lg leading-relaxed">{c.intro}</p>
            <p className="mt-6 rounded-lg border-l-4 border-[#00D4FF] bg-white px-5 py-4 text-sm font-semibold text-[#1C3D5A]">
              {c.methodology}
            </p>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {c.bodyCards.map((card, idx) => (
                <div key={card.title} className={`rounded-xl border border-white/10 p-6 ${idx % 2 === 0 ? "bg-[#0D1627]" : "bg-[#1C3D5A]/35"}`}>
                  <div className="mb-4 h-2 w-10 rounded-full bg-[#00D4FF]" />
                  <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 text-[#3D4852] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-sans text-2xl font-bold text-[#0A0F1E] mb-6 text-center">{c.useCasesTitle}</h2>
            <ul className="space-y-3">
              {c.useCases.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#3D4852]">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#00D4FF]" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
