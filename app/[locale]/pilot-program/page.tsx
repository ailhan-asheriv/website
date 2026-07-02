import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";

export default async function PilotProgramPage({
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
        <section className="border-b border-white/10 bg-[#0A0F1E] px-6 pb-16 pt-32 sm:px-10 sm:pt-40 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
              {isTr ? "Pilot Program" : "Pilot Program"}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-[#CBD5E1]">
              {isTr
                ? "Odakli kapsam, net zaman cizelgesi ve olculebilir ciktilarla kurumsal pilot uygulama."
                : "A focused deployment path with clear scope, timeline, and measurable outcomes."}
            </p>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-[#0D1627] p-6">
              <h2 className="text-lg font-semibold text-white">{isTr ? "Kapsam" : "Scope"}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">
                {isTr
                  ? "Belirli gemi, sistem ve veri kaynaklari icin teknik kapsam netlestirilir."
                  : "Technical scope is defined around selected vessels, systems, and data sources."}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#1C3D5A]/35 p-6">
              <h2 className="text-lg font-semibold text-white">{isTr ? "Zaman cizelgesi" : "Timeline"}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">
                {isTr
                  ? "Pilot asamalari planlanir, kilometre taslari ve go-live takvimi belirlenir."
                  : "Pilot phases are planned with milestones and a controlled go-live window."}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0D1627] p-6">
              <h2 className="text-lg font-semibold text-white">{isTr ? "Teslimatlar" : "Deliverables"}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">
                {isTr
                  ? "Saglik skorlamasi, operasyonel kayit ve kanit disa aktarimlari pilot ciktisi olarak sunulur."
                  : "Health scoring, operational records, and evidence exports are delivered as pilot outputs."}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl rounded-xl border border-[#E3E8EB] bg-white p-8">
            <h2 className="font-heading text-2xl font-bold text-[#0A0F1E]">{isTr ? "Kimler icin" : "Who this is for"}</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#3D4852]">
              {isTr
                ? "Filo operatorleri, tersaneler, teknik yonetim ekipleri ve kurumsal paydaslar icin tasarlanmistir."
                : "Designed for fleet operators, shipyards, technical management teams, and enterprise maritime stakeholders."}
            </p>
            <Link href="/contact" locale={locale} className="mt-6 inline-block rounded-full bg-[#0A0F1E] px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-[#1C3D5A]">
              {isTr ? "Pilot icin basvur" : "Apply for a pilot"}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
