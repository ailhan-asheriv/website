import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import ContextSection from "../components/sections/ContextSection";
import HowItWorks from "../components/sections/HowItWorks";
import ThreeLayers from "../components/sections/ThreeLayers";
import Stakeholders from "../components/sections/Stakeholders";
import VisionTimeline from "../components/sections/VisionTimeline";
import Developers from "../components/sections/Developers";
import GeographicPresence from "../components/sections/GeographicPresence";
import ContactCTA from "../components/sections/ContactCTA";
import type { Metadata } from "next";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn
      ? "Operational intelligence for vessel lifecycle"
      : "Gemi yasam dongusu icin operasyonel istihbarat",
    description: isEn
      ? "A'SHERIV unifies design data, sensor telemetry, and maintenance history into a living digital twin."
      : "A'SHERIV tasarim verisi, sensor telemetrisi ve bakim gecmisini yasayan bir dijital ikizde birlestirir.",
    openGraph: {
      title: isEn
        ? "Operational intelligence for vessel lifecycle"
        : "Gemi yasam dongusu icin operasyonel istihbarat",
      description: isEn
        ? "A'SHERIV unifies design data, sensor telemetry, and maintenance history into a living digital twin."
        : "A'SHERIV tasarim verisi, sensor telemetrisi ve bakim gecmisini yasayan bir dijital ikizde birlestirir.",
    },
  };
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isTr = locale === "tr";

  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <ContextSection />
        <HowItWorks />
        <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24 bg-[#0D1627] border-y border-white/10">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white text-center mb-10">
              {isTr ? "Uc urun. Tek gemi zekasi katmani." : "Three products. One vessel intelligence layer."}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-3">AshMOP</h3>
                <p className="text-sm leading-relaxed text-[#CBD5E1] mb-5">
                  {isTr
                    ? "Denizcilik Operasyonlari Platformu. Operasyonel dijital twin - telemetri, anomali tespiti, bakim zekasi ve rol bazli karar destegi."
                    : "Maritime Operations Platform. The operational digital twin - telemetry, anomaly detection, maintenance intelligence, and role-based decision support."}
                </p>
                <a href={isTr ? "/tr/platform" : "/en/platform"} className="text-sm font-semibold text-[#00D4FF] hover:text-[#67E5FF] transition-colors">
                  {isTr ? "AshMOP'u Kesfet →" : "Explore AshMOP →"}
                </a>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-3">SIM</h3>
                <p className="text-sm leading-relaxed text-[#CBD5E1] mb-5">
                  {isTr
                    ? "Gemi Bilgi Modellemesi. Tersane tasarim ve insaat verilerini dijital twin'e baglayin."
                    : "Ship Information Modelling. Connect shipyard design and build data to the digital twin. From IFC geometry to operational baseline."}
                </p>
                <a href={isTr ? "/tr/sim" : "/en/sim"} className="text-sm font-semibold text-[#00D4FF] hover:text-[#67E5FF] transition-colors">
                  {isTr ? "SIM'i Kesfet →" : "Explore SIM →"}
                </a>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-3">{isTr ? "Kanit Paketi" : "Evidence Pack"}</h3>
                <p className="text-sm leading-relaxed text-[#CBD5E1] mb-5">
                  {isTr
                    ? "Uyumluluk ve Dokumantasyon. Sinif denetimleri ve sigorta talepleri icin yapilandirilmis disa aktarimlar."
                    : "Compliance & Documentation. Structured exports for class surveys, insurance claims, and charter disputes - without requiring full platform adoption."}
                </p>
                <a href={isTr ? "/tr/compliance-evidence" : "/en/compliance-evidence"} className="text-sm font-semibold text-[#00D4FF] hover:text-[#67E5FF] transition-colors">
                  {isTr ? "Kanit Paketini Kesfet →" : "Explore Evidence Pack →"}
                </a>
              </div>
            </div>
          </div>
        </section>
        <ThreeLayers />
        <Stakeholders />
        <VisionTimeline />
        <Developers />
        <GeographicPresence />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
