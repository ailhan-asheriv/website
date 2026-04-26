import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { PageScaffold, Section } from "../../components/sections";

const content = {
  en: {
    title: "Lifecycle Intelligence",
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
    backLabel: "Back to Home",
    ctaLabel: "Contact us",
  },
  tr: {
    title: "Yasam Dongusu Zekasi",
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
    backLabel: "Ana Sayfaya Don",
    ctaLabel: "Iletisime Gec",
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
      <main id="main-content" className="min-h-screen bg-[#0A0F1E]">
        <PageScaffold
          title={c.title}
          intro={c.intro}
          backLabel={c.backLabel}
          ctaLabel={c.ctaLabel}
          ctaHref="/#contact"
          locale={locale}
        >
          <Section variant="light">
            <h2 className="font-sans text-2xl font-bold text-[#00D4FF] mb-8 text-center">
              {c.phasesTitle}
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {c.phases.map((phase, i) => (
                <div key={phase.phase} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#00D4FF] flex items-center justify-center text-[#0A0F1E] text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    {i < c.phases.length - 1 && <div className="w-px flex-1 bg-[#00D4FF]/20 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-semibold text-white mb-2">{phase.phase}</h3>
                    <p className="text-[#CBD5E1] text-sm leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
          <Section variant="dark">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-sans text-2xl font-bold text-white mb-4">
                {c.valueTitle}
              </h2>
              <p className="text-[#CBD5E1] leading-relaxed max-w-3xl mx-auto text-center">{c.valueBody}</p>
            </div>
          </Section>
        </PageScaffold>
      </main>
      <Footer />
    </>
  );
}
