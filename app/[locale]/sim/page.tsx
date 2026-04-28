import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { PageScaffold, Section } from "../../components/sections";

const content = {
  en: {
    title: "SIM - Ship Information Modelling",
    intro:
      "Ship Information Modelling (SIM) is A'SHERIV's framework for connecting shipyard design and build data to the operational digital twin. Where BIM ends at building handover, SIM extends through the vessel's entire operational life - mapping IFC geometry, SFI classifications, QC records, and test results into a queryable intelligence layer from day one.",
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
    ctaTitle: "Connect your shipyard to the digital twin",
    ctaBody: "SIM integrates with AutoCAD, AVEVA Marine, and major IFC-compatible design tools.",
    ctaButton: "Request Integration Demo →",
    backLabel: "Back to Home",
    ctaLabel: "Contact us",
  },
  tr: {
    title: "SIM - Gemi Bilgi Modellemesi",
    intro:
      "Gemi Bilgi Modellemesi (SIM), A'SHERIV'in tersane tasarim ve insaat verilerini operasyonel dijital twin'e baglayan cercevesidir. BIM bina tesliminde sona ererken, SIM geminin tum operasyonel omru boyunca devam eder - IFC geometrisini, SFI siniflandirmalarini, QC kayitlarini ve test sonuclarini ilk gunden itibaren sorgulanabilir bir zeka katmanina esler.",
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
    ctaTitle: "Tersanenizi dijital twin'e baglayin",
    ctaBody: "SIM, AutoCAD, AVEVA Marine ve baslica IFC uyumlu tasarim araclariyla entegre olur.",
    ctaButton: "Entegrasyon Demosu Talep Edin →",
    backLabel: "Ana Sayfaya Don",
    ctaLabel: "Iletisime Gec",
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {c.features.map((feature) => (
                <div key={feature.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </Section>
          <Section variant="dark">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">{c.threadTitle}</h2>
              <p className="text-[#CBD5E1] leading-relaxed">{c.threadBody}</p>
            </div>
          </Section>
          <Section variant="light">
            <div className="max-w-3xl mx-auto text-center rounded-xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white mb-3">{c.ctaTitle}</h2>
              <p className="text-sm text-[#CBD5E1] mb-6">{c.ctaBody}</p>
              <a
                href={locale === "tr" ? "/tr/contact" : "/en/contact"}
                className="rounded-md bg-[#00D4FF] px-6 py-3 text-sm font-semibold text-[#0A0F1E] transition hover:bg-[#67E5FF] inline-block"
              >
                {c.ctaButton}
              </a>
            </div>
          </Section>
        </PageScaffold>
      </main>
      <Footer />
    </>
  );
}
