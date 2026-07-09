import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";
import { PRODUCT_HERO_IMAGES } from "../../../lib/imagery";

const content = {
  en: {
    title: "AshSIM",
    tagline: "AI-augmented shipbuilding, without leaving your CAD workflow.",
    intro:
      "AshSIM connects to AVEVA Marine, ShipConstructor and CADMATIC. Upload an IFC or STEP export and get instant AI analysis: clash detection, IACS rule compliance, and a structured digital build record.",
    heroCtaPrimary: "Request early access",
    whyTitle: "Why AshSIM",
    whyBody:
      "Most shipyards still rely on manual clash reviews and spreadsheet tracking across drawings, welds, and NCRs. AshSIM adds an AI analysis layer on top of your existing exports, checks IACS material grades and element completeness, and keeps every finding in one structured build record from first steel to handover.",
    howTitle: "How it works",
    howDeck: "AshSIM sits on top of your existing CAD system. No workflow disruption.",
    pillars: [
      {
        title: "Export from your CAD",
        body: "AshSIM works with AVEVA Marine, ShipConstructor and CADMATIC. One-click IFC or STEP export from your existing design system.",
      },
      {
        title: "AI analysis in minutes",
        body: "Upload to AshSIM. Get an instant report: geometric clash detection, IACS steel grade verification, element completeness, and prioritised recommendations.",
      },
      {
        title: "Structured build record",
        body: "Every finding, drawing, weld, and NCR stays in one place. At delivery, generate a complete digital handover package for the owner.",
      },
    ],
    featuresTitle: "What AshSIM analyses",
    features: [
      {
        title: "IFC model analysis",
        desc: "Geometric clash detection with AABB tolerance, IACS steel grade verification, element completeness checks, and anomaly detection across the structural model.",
      },
      {
        title: "Technical drawings",
        desc: "Upload PDFs and drawing exports. AI extracts dimensions, revision history, and compliance notes. Class approval status tracked per drawing.",
      },
      {
        title: "Construction workflow",
        desc: "Optional modules for block tracking, welding QC, NCR management, milestones, equipment register, and material certificates.",
      },
    ],
    complianceTitle: "Built for classification",
    complianceIntro:
      "AshSIM outputs align with IACS structural rules and support survey witness records for DNV, BV, LR, ABS, and Turk Loydu handover packages.",
    standards: [
      { code: "IACS material grades", desc: "AH32-AH40, DH, EH verification" },
      { code: "IFC 2x3 and IFC 4", desc: "Structural model exchange" },
      { code: "DNV, BV, LR, ABS, Turk Loydu", desc: "Class society handover support" },
      { code: "SOLAS-aligned handover", desc: "Structured owner delivery package" },
    ],
    ctaTitle: "Currently in early access",
    ctaBody:
      "AshSIM is available to a limited number of shipyards for early access testing. If you are building vessels and want AI-powered model analysis in your workflow, we would like to work with you.",
    ctaButton: "Request early access",
    linkAshfi: "AshFI",
    linkEvidence: "Evidence Pack",
  },
  tr: {
    title: "AshSIM",
    tagline: "AI destekli gemi insaati, CAD is akisinizdan ayrilmadan.",
    intro:
      "AshSIM, AVEVA Marine, ShipConstructor ve CADMATIC ile baglanir. IFC veya STEP dosyanizi yukleyin ve aninda AI analizi alin: cakisma tespiti, IACS kural uyumlulugu ve yapilandirilmis dijital insaat kaydi.",
    heroCtaPrimary: "Erken erisim talep et",
    whyTitle: "Neden AshSIM",
    whyBody:
      "Cogu tersane hala manuel cakisma incelemelerine ve cizimler, kaynaklar ve URT'ler arasinda elektronik tablo takibine guvenir. AshSIM mevcut ciktilarinizin uzerine bir AI analiz katmani ekler, IACS malzeme siniflarini ve eleman tamligini kontrol eder, her bulguyu ilk celikten teslimata kadar tek yapilandirilmis insaat kaydinda tutar.",
    howTitle: "Nasil calisir",
    howDeck: "AshSIM mevcut CAD sisteminizin uzerinde calisir. Is akisi bozulmaz.",
    pillars: [
      {
        title: "CAD yaziliminizdan disa aktarin",
        body: "AshSIM, AVEVA Marine, ShipConstructor ve CADMATIC ile calisir. Mevcut tasarim sisteminizden tek tikla IFC veya STEP disa aktarimi.",
      },
      {
        title: "Dakikalar icinde AI analizi",
        body: "AshSIM'e yukleyin. Aninda rapor alin: geometrik cakisma tespiti, IACS celik sinifi dogrulama, eleman tamligi ve onceliklendirilmis oneriler.",
      },
      {
        title: "Yapilandirilmis insaat kaydi",
        body: "Her bulgu, cizim, kaynak ve URT tek yerde kalir. Teslimatta armatore eksiksiz dijital devir paketi olusturun.",
      },
    ],
    featuresTitle: "AshSIM ne analiz eder",
    features: [
      {
        title: "IFC model analizi",
        desc: "AABB toleransi ile geometrik cakisma tespiti, IACS celik sinifi dogrulama, eleman tamligi kontrolleri ve yapisal modelde anomali tespiti.",
      },
      {
        title: "Teknik resimler",
        desc: "PDF ve cizim ciktilarini yukleyin. AI boyutlari, revizyon gecmisini ve uyumluluk notlarini cikarir. Sinif onay durumu resim bazinda izlenir.",
      },
      {
        title: "Insaat is akisi",
        desc: "Blok takibi, kaynak QC, URT yonetimi, kilometre taslari, ekipman kaydi ve malzeme sertifikalari icin istege bagli moduller.",
      },
    ],
    complianceTitle: "Siniflandirma icin tasarlandi",
    complianceIntro:
      "AshSIM ciktilari IACS yapisal kurallariyla uyumludur ve DNV, BV, LR, ABS ve Turk Loydu devir paketleri icin survey tanik kayitlarini destekler.",
    standards: [
      { code: "IACS malzeme siniflari", desc: "AH32-AH40, DH, EH dogrulama" },
      { code: "IFC 2x3 ve IFC 4", desc: "Yapisal model degisimi" },
      { code: "DNV, BV, LR, ABS, Turk Loydu", desc: "Klas kurulusu devir destegi" },
      { code: "SOLAS uyumlu devir", desc: "Yapilandirilmis armator teslim paketi" },
    ],
    ctaTitle: "Simdilik erken erisimde",
    ctaBody:
      "AshSIM, sinirli sayida tersane icin erken erisim testine aciktir. Gemi insa ediyorsaniz ve is akisinizda AI destekli model analizi istiyorsaniz, sizinle calismak isteriz.",
    ctaButton: "Erken erisim talep et",
    linkAshfi: "AshFI",
    linkEvidence: "Evidence Pack",
  },
} as const;

export default async function SimPage({
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
            backgroundImage: `linear-gradient(to bottom, rgba(10,15,30,0.8), rgba(10,15,30,0.8)), url(${PRODUCT_HERO_IMAGES.sim})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">{c.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-[#CBD5E1]">{c.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[#0A0F1E] px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-[#1C3D5A]"
              >
                {c.heroCtaPrimary}
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 text-[#3D4852] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <p className="text-lg leading-relaxed">{c.intro}</p>
            <div className="mt-8 border-l-4 border-[#00D4FF] bg-white px-6 py-5">
              <h2 className="text-2xl font-semibold text-[#0A0F1E]">{c.whyTitle}</h2>
              <p className="mt-3 leading-relaxed text-[#3D4852]">{c.whyBody}</p>
            </div>
          </div>
        </section>

        <section className="bg-[#1C3D5A] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-heading text-3xl font-bold text-white">{c.howTitle}</h2>
            <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-relaxed text-[#CBD5E1]">
              {c.howDeck}
            </p>
            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              {c.pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-white/15 bg-[#0A0F1E]/40 p-6"
                >
                  <p className="text-sm font-bold text-[#00D4FF]">0{index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#DCE3EC]">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-heading text-3xl font-bold text-white">{c.featuresTitle}</h2>
            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
              {c.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-white/10 bg-[#0D1627] p-6"
                >
                  <div className="mb-4 h-2 w-10 rounded-full bg-[#00D4FF]" />
                  <h3 className="mb-3 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 text-[#3D4852] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-heading text-3xl font-bold text-[#0A0F1E]">{c.complianceTitle}</h2>
            <p className="mt-3 max-w-3xl text-sm text-[#3D4852]">{c.complianceIntro}</p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {c.standards.map((std) => (
                <div key={std.code} className="rounded-lg border border-[#E3E8EB] bg-white p-5">
                  <p className="font-semibold text-[#0A0F1E]">{std.code}</p>
                  <p className="mt-2 text-sm text-[#3D4852]">{std.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-[#0D1627] p-8 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-white">{c.ctaTitle}</h2>
            <p className="mb-6 leading-relaxed text-[#CBD5E1]">{c.ctaBody}</p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#0A0F1E] px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-[#1C3D5A]"
            >
              {c.ctaButton}
            </Link>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold">
              <Link href="/ashfi" className="text-[#00D4FF] hover:text-[#67E5FF] transition-colors">
                {c.linkAshfi}
              </Link>
              <Link
                href="/compliance-evidence"
                className="text-[#00D4FF] hover:text-[#67E5FF] transition-colors"
              >
                {c.linkEvidence}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
