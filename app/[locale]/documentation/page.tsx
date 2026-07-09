import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const content = {
  en: {
    title: "Documentation",
    tagline:
      "Technical documentation for A'SHERIV platform integration and API usage.",
    contact:
      "Need documentation urgently? Contact info@asheriv.com and we will provide what you need directly.",
  },
  tr: {
    title: "Dokumantasyon",
    tagline:
      "A'SHERIV platform entegrasyonu ve API kullanimina yonelik teknik dokumantasyon.",
    contact:
      "Dokumana acil ihtiyaciniz varsa info@asheriv.com ile iletisime gecin, size dogrudan iletelim.",
  },
} as const;

const docs = [
  {
    title: "AshMOP Integration Guide",
    desc: "Sensor ingestion, API endpoints, role configuration.",
  },
  {
    title: "AshFI API Reference",
    desc: "Fleet analysis endpoints, authentication, response schemas.",
  },
  {
    title: "AshSIM Integration Guide",
    desc: "IFC parsing, BIM data mapping, handover workflow.",
  },
  {
    title: "Evidence Pack Export Guide",
    desc: "Data formats, time-window configuration, export triggers.",
  },
] as const;

export default async function DocumentationPage({
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
        <section className="border-b border-white/10 px-6 pb-16 pt-32 sm:px-10 sm:pt-40 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
              {c.title}
            </h1>
            <p className="mt-4 max-w-4xl text-lg text-[#CBD5E1]">{c.tagline}</p>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
            {docs.map((doc, idx) => (
              <article
                key={doc.title}
                className={`rounded-xl border border-white/10 p-6 ${idx % 2 === 0 ? "bg-[#0D1627]" : "bg-[#1C3D5A]/35"}`}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
                    Coming soon
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-white">{doc.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">
                  {doc.desc}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-7xl rounded-xl border border-white/10 bg-[#0D1627] p-6">
            <p className="text-sm text-[#CBD5E1]">{c.contact}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
