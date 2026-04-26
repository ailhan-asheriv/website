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
    structureTitle: "Structure",
    structureCards: [
      {
        title: "United Kingdom",
        desc: "Platform development, AI research, and productisation. Registered entity: A'SHERIV Intelligent Marine Technologies Ltd.",
      },
      {
        title: "Turkey (Turkiye)",
        desc: "R&D centre and shipyard integration. Primary market for BIM-to-digital-twin integration with Turkish shipbuilding industry.",
      },
      {
        title: "UAE (Dubai)",
        desc: "Regional operations for Gulf maritime markets. Fleet operator engagement across Arabian Gulf and Indian Ocean corridors.",
      },
    ],
    mapTitle: "Geographic Presence",
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
    structureTitle: "Yapi",
    structureCards: [
      {
        title: "Birlesik Krallik",
        desc: "Platform gelistirme, AI arastirmasi ve urunlestirme. Kayitli kurulus: A'SHERIV Intelligent Marine Technologies Ltd.",
      },
      {
        title: "Turkiye",
        desc: "Ar-Ge merkezi ve tersane entegrasyonu. Turk gemi insa endustrisiyle BIM-to-dijital-ikiz entegrasyonu icin birincil pazar.",
      },
      {
        title: "BAE (Dubai)",
        desc: "Korfez denizcilik pazarlari icin bolgesel operasyonlar. Arabistan Korfezi ve Hint Okyanusu guzergahlarinda filo operatoru etkilesimi.",
      },
    ],
    mapTitle: "Cografi Varlik",
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
            <h2 className="font-sans text-2xl font-bold text-[#00D4FF] mb-8 text-center">{c.structureTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {c.structureCards.map((card) => (
                <div key={card.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{card.desc}</p>
                </div>
              ))}
            </div>
          </Section>
          <Section variant="dark">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-sans text-2xl font-bold text-white mb-6 text-center">{c.mapTitle}</h2>
              <div className="mt-6 rounded-xl border border-white/10 bg-[#0D1627] p-4">
                <svg viewBox="0 0 1000 500" className="h-full w-full max-h-[320px]">
                  <path d="M 80 80 L 130 70 L 190 80 L 220 120 L 240 160 L 210 200 L 190 240 L 160 260 L 130 250 L 100 220 L 80 180 L 60 140 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
                  <path d="M 190 270 L 220 260 L 250 280 L 260 320 L 250 370 L 220 400 L 190 390 L 170 360 L 165 320 L 175 290 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
                  <path d="M 440 80 L 490 75 L 520 90 L 530 110 L 510 130 L 480 140 L 450 135 L 430 120 L 430 100 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
                  <path d="M 460 160 L 510 155 L 545 170 L 560 210 L 555 260 L 540 310 L 510 340 L 480 340 L 455 310 L 445 260 L 445 210 L 450 175 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
                  <path d="M 540 70 L 650 60 L 760 70 L 830 90 L 870 120 L 860 160 L 820 190 L 760 200 L 700 210 L 640 200 L 590 180 L 555 155 L 540 130 L 535 100 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
                  <path d="M 580 200 L 610 195 L 630 215 L 625 245 L 600 250 L 580 235 L 572 215 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
                  <path d="M 740 300 L 810 290 L 860 310 L 870 350 L 840 390 L 790 400 L 740 390 L 710 360 L 715 325 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
                  <circle cx="555" cy="190" r="6" fill="#00D4FF"/>
                  <circle cx="468" cy="160" r="6" fill="#00D4FF"/>
                  <circle cx="605" cy="222" r="6" fill="#00D4FF"/>
                  <text x="565" y="188" fill="#00D4FF" fontSize="12" fontFamily="monospace">Istanbul</text>
                  <text x="478" y="158" fill="#00D4FF" fontSize="12" fontFamily="monospace">London</text>
                  <text x="615" y="220" fill="#00D4FF" fontSize="12" fontFamily="monospace">Dubai</text>
                </svg>
              </div>
            </div>
          </Section>
        </PageScaffold>
      </main>
      <Footer />
    </>
  );
}
