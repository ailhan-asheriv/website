import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { SUPPORT_HERO_IMAGES } from "../../../lib/imagery";

const content = {
  en: {
    title: "Operational Intelligence",
    tagline: "A structured, auditable operational record for every vessel decision.",
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
    flowTitle: "Process flow",
    flowSteps: ["Data ingestion", "Structured record", "Role-based output", "Evidence export"],
  },
  tr: {
    title: "Operasyonel Zeka",
    tagline: "Her gemi karari icin yapilandirilmis ve denetlenebilir operasyonel kayit.",
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
    flowTitle: "Surec akisi",
    flowSteps: ["Veri alimi", "Yapilandirilmis kayit", "Rol bazli cikti", "Kanit disa aktarimi"],
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
      <main id="main-content" className="min-h-screen bg-[#0A0F1E] text-white">
        <section
          className="relative border-b border-white/10 pt-32 pb-20 sm:pt-40"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(10,15,30,0.8), rgba(10,15,30,0.82)), url(${SUPPORT_HERO_IMAGES.operational})`,
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

        <section className="bg-[#1C3D5A] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-heading text-3xl font-bold text-white mb-8">{c.flowTitle}</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {c.flowSteps.map((step, idx) => (
                <div key={step} className="rounded-lg border border-white/15 bg-[#0A0F1E]/35 p-4 text-center">
                  <p className="text-xs font-bold text-[#00D4FF]">0{idx + 1}</p>
                  <p className="mt-2 text-sm text-[#DCE3EC]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
