import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { SUPPORT_HERO_IMAGES } from "../../../lib/imagery";

const content = {
  en: {
    title: "Lifecycle Intelligence",
    tagline: "From commissioning to decommissioning, a continuous vessel record.",
    intro: "Asset intelligence from commissioning to decommissioning - connecting build records with operational history.",
    phasesTitle: "Vessel Lifecycle Stages",
    phases: [
      {
        phase: "Design & Build",
        desc: "IFC and BIM data from shipyard design tools integrated into the vessel's digital record. Build QC, material certificates, and commissioning data captured at handover.",
      },
      {
        phase: "Early Operations",
        desc: "Baseline operational patterns established. Sensor calibration data, initial performance benchmarks, and warranty-period monitoring against build specifications.",
      },
      {
        phase: "In-Service Management",
        desc: "Continuous anomaly detection and degradation monitoring. Maintenance history and inspection records maintained in a structured, queryable format.",
      },
      {
        phase: "Refit & Survey Planning",
        desc: "Historical performance data used to prioritise refit scope. Survey evidence packages prepared from operational records. Post-refit baseline re-establishment.",
      },
      {
        phase: "End-of-Life Assessment",
        desc: "Lifecycle cost analysis, remaining asset value estimation, and decommissioning decision support based on complete operational history.",
      },
    ],
    valueTitle: "Why Lifecycle Intelligence Matters",
    valueBody:
      "The gap between what is known at build and what is known in operations is where most maritime risk accumulates. Structural decisions made in the yard, maintenance choices made at sea, and regulatory requirements from class - these three knowledge domains have historically operated in isolation. Lifecycle Intelligence closes that gap.",
    buildTitle: "Build certificate integration",
    buildBody:
      "Certificates, handover dossiers, and yard acceptance records are linked directly to the operational asset structure, preserving traceability after delivery.",
    valuationTitle: "Asset valuation",
    valuationBody:
      "Lifecycle operational history supports more defensible valuation decisions by combining design baseline, degradation trajectory, and maintenance evidence.",
    refitTitle: "Refit planning use cases",
    refitBody:
      "Historical fault signatures and survey findings help prioritize refit scope, reducing unnecessary drydock work and improving planning confidence.",
  },
  tr: {
    title: "Yasam Dongusu Zekasi",
    tagline: "Devreye almadan omur sonuna kadar kesintisiz gemi kaydi.",
    intro: "Devreye almadan hizmetten cikarmaya kadar varlik zekasi - insaat kayitlarini operasyonel gecmisle baglar.",
    phasesTitle: "Gemi Yasam Dongusu Asamalari",
    phases: [
      {
        phase: "Tasarim ve Insaat",
        desc: "Tersane tasarim araclarindan alinan IFC ve BIM verileri geminin dijital kaydina entegre edilir. Insaat QC, malzeme sertifikalari ve devreye alma verileri teslimatta kaydedilir.",
      },
      {
        phase: "Erken Operasyonlar",
        desc: "Temel operasyonel oruntuler olusturulur. Sensor kalibrasyon verileri, baslangic performans referanslari ve insaat ozelliklerine karsi garanti donemi izleme.",
      },
      {
        phase: "Hizmet Ici Yonetim",
        desc: "Surekli anomali tespiti ve bozunma izleme. Bakim gecmisi ve muayene kayitlari yapilandirilmis, sorgulanabilir formatta tutulur.",
      },
      {
        phase: "Onarim ve Sorvey Planlamasi",
        desc: "Onarim kapsamini onceliklendirmek icin gecmis performans verileri kullanilir. Operasyonel kayitlardan sorvey kanit paketleri hazirlanir. Onarim sonrasi referans yeniden olusturma.",
      },
      {
        phase: "Omur Sonu Degerlendirmesi",
        desc: "Tam operasyonel gecmise dayali yasam dongusu maliyet analizi, kalan varlik degeri tahmini ve hizmetten cikarma karar destegi.",
      },
    ],
    valueTitle: "Yasam Dongusu Zekasi Neden Onemlidir",
    valueBody:
      "Insaat sirasinda bilinenlerin operasyonlardaki bilgiden farki, cogu denizcilik riskinin biriktigi yerdir. Tersanede alinan yapisal kararlar, denizde alinan bakim secimleri ve klaslama duzenleyici gereksinimleri - bu uc bilgi alani tarihsel olarak izole calismaktaydi. Yasam Dongusu Zekasi bu boslugu kapatir.",
    buildTitle: "Insaat sertifikasi entegrasyonu",
    buildBody:
      "Sertifikalar, teslim dosyalari ve tersane kabul kayitlari operasyonel varlik yapisina baglanarak teslimat sonrasinda izlenebilirligi korur.",
    valuationTitle: "Varlik degerleme",
    valuationBody:
      "Yasam dongusu operasyonel gecmisi, tasarim referansi, bozunma trendi ve bakim kanitini birlestirerek daha savunulabilir degerleme kararlarini destekler.",
    refitTitle: "Onarim planlama kullanimlari",
    refitBody:
      "Gecmis ariza desenleri ve sorvey bulgulari onarim kapsamini onceliklendirmeye yardim eder, gereksiz drydock islerini azaltir.",
  },
} as const;

export default async function LifecycleIntelligencePage({
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
            backgroundImage: `linear-gradient(to bottom, rgba(10,15,30,0.82), rgba(10,15,30,0.82)), url(${SUPPORT_HERO_IMAGES.lifecycle})`,
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
          <div className="mx-auto max-w-4xl">
            <h2 className="font-sans text-2xl font-bold text-[#00D4FF] mb-8 text-center">{c.phasesTitle}</h2>
            <div className="space-y-6">
              {c.phases.map((phase, i) => (
                <div key={phase.phase} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#00D4FF] flex items-center justify-center text-[#0A0F1E] text-sm font-bold flex-shrink-0">{i + 1}</div>
                    {i < c.phases.length - 1 && <div className="w-px flex-1 bg-[#00D4FF]/20 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-semibold text-white mb-2">{phase.phase}</h3>
                    <p className="text-[#CBD5E1] text-sm leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1C3D5A] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/15 bg-[#0A0F1E]/35 p-6">
              <h3 className="text-lg font-semibold text-white">{c.buildTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#DCE3EC]">{c.buildBody}</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-[#0A0F1E]/35 p-6">
              <h3 className="text-lg font-semibold text-white">{c.valuationTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#DCE3EC]">{c.valuationBody}</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-[#0A0F1E]/35 p-6">
              <h3 className="text-lg font-semibold text-white">{c.refitTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#DCE3EC]">{c.refitBody}</p>
            </div>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-sans text-2xl font-bold text-white mb-4">{c.valueTitle}</h2>
            <p className="text-[#CBD5E1] leading-relaxed max-w-3xl mx-auto text-center">{c.valueBody}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
