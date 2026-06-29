import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { PageScaffold, Section } from "../../components/sections";

const content = {
  en: {
    title: "About A'SHERIV",
    intro: "A'SHERIV builds maritime operational intelligence platforms for shipyards, operators, owners, and regulators.",
    missionTitle: "Mission",
    mission:
      "To give every vessel a structured, continuous operational record - from first steel to decommissioning - that supports safer operations, better maintenance decisions, and clearer accountability across the maritime value chain.",
    visionTitle: "Vision",
    vision:
      "A future where unplanned vessel failures are the exception, not the norm. Where every maintenance decision is backed by traceable data. Where design, operational, and machinery records are unified in a single platform that grows with the vessel.",
    founderTitle: "Founder",
    founderBody:
      "A'SHERIV was founded by Asli Ilhan, an AI engineer and PhD candidate in Naval Architecture & Marine Engineering at Istanbul Technical University. With an MSc in AI & Data Science (Distinction, top graduate - UAL), research collaborations with NVIDIA, and experience building production AI systems across computer vision and generative pipelines, she founded A'SHERIV to solve a problem the maritime industry hasn't solved: unifying design, operational, and machinery data into a single vessel intelligence layer.",
    backLabel: "Back to Home",
    ctaLabel: "Contact us",
  },
  tr: {
    title: "A'SHERIV Hakkinda",
    intro: "A'SHERIV tersaneler, operatorler, sahipler ve duzenleyiciler icin denizcilik operasyonel zeka platformlari gelistirmektedir.",
    missionTitle: "Misyon",
    mission:
      "Her gemiye ilk celikten hizmetten cikarmaya kadar - daha guvenli operasyonlari, daha iyi bakim kararlarini ve denizcilik deger zincirinde daha net hesap verebilirligi destekleyen yapilandirilmis, surekli bir operasyonel kayit saglamak.",
    visionTitle: "Vizyon",
    vision:
      "Plansiz gemi arizalarinin norm degil, istisna oldugu bir gelecek. Her bakim kararinin izlenebilir verilerle desteklendigi. Tasarim, operasyonel ve makine kayitlarinin gemiyle birlikte buyuyen tek bir platformda birlestirildigi.",
    founderTitle: "Kurucu",
    founderBody:
      "A'SHERIV, Istanbul Teknik Universitesi Gemi ve Deniz Teknolojisi Muhendisligi doktora adayi ve AI muhendisi Asli Ilhan tarafindan kuruldu. UAL'da birincilikle tamamlanan Yapay Zeka ve Veri Bilimi yuksek lisansi, NVIDIA ile arastirma is birlikleri ve uretim AI sistemleri gelistirme deneyimiyle A'SHERIV'i, denizcilik sektorunun cozemedigi bir sorunu cozmek icin kurdu: tasarim, operasyonel ve makine verilerini tek bir gemi zekasi katmaninda birlestirmek.",
    backLabel: "Ana Sayfaya Don",
    ctaLabel: "Iletisime Gec",
  },
} as const;

export default async function AboutPage({
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <h2 className="font-sans text-2xl font-bold text-[#00D4FF] mb-4">{c.missionTitle}</h2>
                <p className="text-sm leading-relaxed text-[#CBD5E1]">{c.mission}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <h2 className="font-sans text-2xl font-bold text-[#00D4FF] mb-4">{c.visionTitle}</h2>
                <p className="text-sm leading-relaxed text-[#CBD5E1]">{c.vision}</p>
              </div>
            </div>
          </Section>
          <Section variant="light">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-sans text-2xl font-bold text-[#00D4FF] mb-4 text-center">{c.founderTitle}</h2>
              <p className="text-sm leading-relaxed text-[#CBD5E1] text-center">{c.founderBody}</p>
            </div>
          </Section>
        </PageScaffold>
      </main>
      <Footer />
    </>
  );
}
