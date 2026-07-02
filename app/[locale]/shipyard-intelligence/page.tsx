import { Link } from "../../../lib/routing";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { PRODUCT_HERO_IMAGES } from "../../../lib/imagery";

export default async function ShipyardIntelligencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isTr = locale === "tr";

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-[#0A0F1E] text-white">
        <section
          className="relative border-b border-white/10 pt-32 pb-20 sm:pt-40"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(10,15,30,0.82), rgba(10,15,30,0.82)), url(${PRODUCT_HERO_IMAGES.sim})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
              {isTr ? "Shipyard Intelligence" : "Shipyard Intelligence"}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-[#CBD5E1]">
              {isTr
                ? "BIM ve IFC verisini operasyonel yasama baglayarak tasarimdan teslimata kadar dijital sureklilik saglar."
                : "Connect BIM and IFC records to operational lifecycle intelligence, from first steel to handover."}
            </p>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 text-[#3D4852] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-heading text-3xl font-bold text-[#0A0F1E]">
              {isTr ? "BIM ve IFC entegrasyonu" : "BIM and IFC integration"}
            </h2>
            <p className="mt-4 leading-relaxed">
              {isTr
                ? "Tersane tasarim dosyalari varlik hiyerarsisine eslenir, yapisal elemanlar ve sistemler operasyonel dijital ikizde sorgulanabilir hale gelir."
                : "Shipyard design models are mapped to vessel asset hierarchy so structural and system-level objects remain queryable inside the operational digital twin."}
            </p>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: isTr ? "Build QC izlenebilirligi" : "Build QC traceability",
                desc: isTr
                  ? "Kaynak, test ve teslim kayitlari ilgili varliklarla iliskilendirilir."
                  : "Weld, test, and handover records remain linked to each asset node.",
              },
              {
                title: isTr ? "Dijital teslim paketi" : "Digital handover package",
                desc: isTr
                  ? "Teslim dosyalari operasyon ekiplerinin kullanacagi formata donusturulur."
                  : "Handover records are transformed into operationally usable datasets.",
              },
              {
                title: isTr ? "Operasyona baglanti" : "Link to operations",
                desc: isTr
                  ? "SIM verisi AshMOP operasyonel katmanina dogrudan aktarilir."
                  : "SIM data flows directly into AshMOP for lifecycle continuity.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-xl border border-white/10 bg-[#0D1627] p-6">
                <div className="mb-4 h-2 w-10 rounded-full bg-[#00D4FF]" />
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-xl border border-[#E3E8EB] bg-white p-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-[#0A0F1E]">
              {isTr ? "ASHSIM urununu kesfedin" : "Explore ASHSIM"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#3D4852]">
              {isTr
                ? "Shipyard Intelligence yetenekleri ASHSIM urun sayfasinda detaylandirilmistir."
                : "Full shipyard integration capabilities are detailed on the ASHSIM product page."}
            </p>
            <Link href="/sim" locale={locale} className="mt-6 inline-block rounded-full bg-[#0A0F1E] px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-[#1C3D5A]">
              {isTr ? "ASHSIM'e git" : "Go to ASHSIM"}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
