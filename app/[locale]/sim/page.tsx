import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";
import { PRODUCT_HERO_IMAGES } from "../../../lib/imagery";

const content = {
  en: {
    title: "SIM",
    tagline: "Connect shipyard build data to the operational digital twin.",
    intro:
      "Ship Information Modelling (SIM) is A'SHERIV's framework for connecting shipyard design and build data to the operational digital twin. Where BIM ends at building handover, SIM extends through the vessel's entire operational life - mapping IFC geometry, SFI classifications, QC records, and test results into a queryable intelligence layer from day one.",
    introStat: "IFC and QC handover records become operationally queryable from day one.",
    features: [
      {
        title: "Design Data Ingestion",
        desc: "IFC files from AutoCAD, AVEVA Marine, and Rhino are parsed, validated, and mapped to the A'SHERIV asset registry. Every structural element, system, and component is classified using the SFI Group System.",
      },
      {
        title: "Build QC & Traceability",
        desc: "Weld records, material certificates, pressure test results, and inspection sign-offs are linked to the corresponding asset in the digital twin - creating an auditable build history from first steel.",
      },
      {
        title: "Clash & Compliance Detection",
        desc: "Geometric clashes, missing components, and IACS compliance gaps are detected at the design stage - before they become costly on-site corrections.",
      },
      {
        title: "Handover to Operations",
        desc: "At vessel delivery, the SIM package transfers to AshMOP - populating the operational twin with verified build specifications, commissioning records, and baseline performance parameters.",
      },
    ],
    threadTitle: "SIM and AshMOP",
    threadBody:
      "SIM and AshMOP work together as the Vessel Digital Thread (VDT) - a continuous data chain from design through operations. SIM captures what was built. AshMOP tracks what happens during service. Together, they give every stakeholder a single, traceable version of the vessel's truth.",
    processTitle: "How it works",
    processSteps: [
      "Ingest shipyard design files, test records, and handover documentation.",
      "Normalize data against the asset hierarchy and SFI mapping.",
      "Publish a verified baseline to AshMOP as the operational digital twin foundation.",
    ],
    formatsTitle: "Supported formats",
    formats: ["IFC 2x3", "IFC 4", "AutoCAD DWG", "STEP"],
    firstSteelTitle: "From first steel to digital twin",
    firstSteelBody:
      "SIM bridges the gap between shipyard build history and vessel operations by carrying structured design and QC records into the live digital twin used by technical teams.",
    ctaTitle: "Connect your shipyard to the digital twin",
    ctaBody: "SIM integrates with AutoCAD, AVEVA Marine, and major IFC-compatible design tools.",
    ctaButton: "Request Integration Demo",
    heroCtaSecondary: "Explore AshMOP",
    suiteTitle: "Part of the Asheriv suite",
    suiteBody:
      "SIM, AshMOP, AshFI, and Evidence Pack work as one chain from design to operations and compliance.",
    linkAshmop: "Explore AshMOP",
    linkAshfi: "Explore AshFI",
    linkEvidence: "Explore Evidence Pack",
  },
  tr: {
    title: "SIM",
    tagline: "Tersane insaat verisini operasyonel dijital ikize baglayin.",
    intro:
      "Gemi Bilgi Modellemesi (SIM), A'SHERIV'in tersane tasarim ve insaat verilerini operasyonel dijital twin'e baglayan cercevesidir. BIM bina tesliminde sona ererken, SIM geminin tum operasyonel omru boyunca devam eder - IFC geometrisini, SFI siniflandirmalarini, QC kayitlarini ve test sonuclarini ilk gunden itibaren sorgulanabilir bir zeka katmanina esler.",
    introStat: "IFC ve QC teslim verileri ilk gunden operasyonel olarak sorgulanabilir hale gelir.",
    features: [
      {
        title: "Tasarim Verisi Alimi",
        desc: "AutoCAD, AVEVA Marine ve Rhino'dan gelen IFC dosyalari ayristirilir, dogrulanir ve A'SHERIV varlik kaydina eslenir.",
      },
      {
        title: "Insaat QC ve Izlenebilirlik",
        desc: "Kaynak kayitlari, malzeme sertifikalari ve test sonuclari dijital twin'deki ilgili varlikla iliskilendirilir.",
      },
      {
        title: "Cakisma ve Uyumluluk Tespiti",
        desc: "Geometrik cakismalar ve IACS uyumsuzluklari tasarim asamasinda tespit edilir.",
      },
      {
        title: "Operasyona Devir",
        desc: "Gemi tesliminde SIM paketi AshMOP'a aktarilir.",
      },
    ],
    threadTitle: "SIM ve AshMOP",
    threadBody:
      "SIM ve AshMOP, Gemi Dijital Ipligi (VDT) olarak birlikte calisir - tasarimdan operasyona kesintisiz veri zinciri.",
    processTitle: "Nasil calisir",
    processSteps: [
      "Tersane tasarim dosyalari, test kayitlari ve teslim belgeleri alinir.",
      "Veriler varlik hiyerarsisi ve SFI eslemeleri ile normalize edilir.",
      "Dogrulanmis temel veriler AshMOP dijital ikizine aktarilir.",
    ],
    formatsTitle: "Desteklenen formatlar",
    formats: ["IFC 2x3", "IFC 4", "AutoCAD DWG", "STEP"],
    firstSteelTitle: "Ilk celikten dijital ikize",
    firstSteelBody:
      "SIM, tersane insaat gecmisi ile operasyonu baglayarak tasarim ve QC kayitlarini teknik ekiplerin kullandigi canli dijital ikize tasir.",
    ctaTitle: "Tersanenizi dijital twin'e baglayin",
    ctaBody: "SIM, AutoCAD, AVEVA Marine ve baslica IFC uyumlu tasarim araclariyla entegre olur.",
    ctaButton: "Entegrasyon Demosu Talep Edin",
    heroCtaSecondary: "AshMOP'u Kesfet",
    suiteTitle: "Asheriv paketinin bir parcasi",
    suiteBody:
      "SIM, AshMOP, AshFI ve Kanit Paketi birlikte tasarimdan operasyona ve uyumluluga uzanan tek zinciri olusturur.",
    linkAshmop: "AshMOP'u Kesfet",
    linkAshfi: "AshFI'yi Kesfet",
    linkEvidence: "Kanit Paketini Kesfet",
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
              <Link href="/contact" className="rounded-full bg-[#00D4FF] px-6 py-3 text-sm font-semibold text-[#0A0F1E] transition hover:bg-[#67E5FF]">
                {c.ctaButton}
              </Link>
              <Link href="/platform" className="rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                {c.heroCtaSecondary}
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 text-[#3D4852] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <p className="text-lg leading-relaxed">{c.intro}</p>
            <p className="mt-6 rounded-lg border-l-4 border-[#00D4FF] bg-white px-5 py-4 text-sm font-semibold text-[#1C3D5A]">
              {c.introStat}
            </p>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-heading text-3xl font-bold text-white">Capabilities</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {c.features.map((feature) => (
                <div key={feature.title} className="rounded-xl border border-white/10 bg-[#0D1627] p-6">
                  <div className="mb-4 h-2 w-10 rounded-full bg-[#00D4FF]" />
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1C3D5A] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-heading text-3xl font-bold text-white mb-8">{c.processTitle}</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {c.processSteps.map((step, index) => (
                <div key={step} className="rounded-xl border border-white/15 bg-[#0A0F1E]/35 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#00D4FF]/15 text-sm font-bold text-[#00D4FF]">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 text-[#3D4852] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-heading text-3xl font-bold text-[#0A0F1E]">{c.formatsTitle}</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {c.formats.map((format) => (
                <span key={format} className="rounded-full border border-[#E3E8EB] bg-white px-4 py-2 text-sm font-semibold text-[#1C3D5A]">
                  {format}
                </span>
              ))}
            </div>
            <div className="mt-10 rounded-xl border border-[#E3E8EB] bg-white p-8">
              <h3 className="text-2xl font-semibold text-[#0A0F1E]">{c.firstSteelTitle}</h3>
              <p className="mt-3 text-[#3D4852] leading-relaxed">{c.firstSteelBody}</p>
            </div>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-[#0D1627] p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">{c.threadTitle}</h2>
            <p className="text-[#CBD5E1] leading-relaxed mb-6">{c.threadBody}</p>
            <h3 className="text-xl font-semibold text-white">{c.ctaTitle}</h3>
            <p className="mt-2 text-sm text-[#CBD5E1]">{c.ctaBody}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-semibold">
              <Link href="/platform" className="text-[#00D4FF] hover:text-[#67E5FF]">{c.linkAshmop}</Link>
              <Link href="/ashfi" className="text-[#00D4FF] hover:text-[#67E5FF]">{c.linkAshfi}</Link>
              <Link href="/compliance-evidence" className="text-[#00D4FF] hover:text-[#67E5FF]">{c.linkEvidence}</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
