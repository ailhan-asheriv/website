import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const content = {
  en: {
    title: "Case Studies",
    tagline:
      "How maritime operators, shipyards, and insurers use A'SHERIV to improve vessel intelligence.",
    cta: "Open to being featured? Reach out at info@asheriv.com",
  },
  tr: {
    title: "Vaka Calismalari",
    tagline:
      "Denizcilik operatorleri, tersaneler ve sigortacilarin A'SHERIV ile gemi zekasini nasil iyilestirdigine dair ornekler.",
    cta: "Vaka calismasinda yer almak ister misiniz? info@asheriv.com",
  },
} as const;

const cards = [
  {
    title: "Fleet Health Monitoring Without Sensor Integration",
    industry: "Fleet Operators",
    teaser:
      "How AIS-derived health scoring allows operators to prioritise maintenance without deploying onboard sensors.",
  },
  {
    title:
      "Shipyard Digital Handover: From IFC Build Records to Operational Twin",
    industry: "Shipyards",
    teaser:
      "Connecting BIM build data to the operational digital twin from day one of vessel commissioning.",
  },
  {
    title: "Evidence Pack in Practice: Insurance Claim Documentation",
    industry: "Insurance",
    teaser:
      "How structured operational records reduce claim resolution time and documentation disputes.",
  },
] as const;

export default async function CaseStudiesPage({
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
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
            {cards.map((card, idx) => (
              <article
                key={card.title}
                className={`rounded-xl border border-white/10 p-6 ${idx % 2 === 0 ? "bg-[#0D1627]" : "bg-[#1C3D5A]/35"}`}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-[#00D4FF]/50 bg-[#00D4FF]/10 px-3 py-1 text-xs font-semibold text-[#00D4FF]">
                    {card.industry}
                  </span>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
                    Coming soon
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-white">{card.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">
                  {card.teaser}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-7xl rounded-xl border border-white/10 bg-[#0D1627] p-6 text-center">
            <p className="text-sm text-[#CBD5E1]">{c.cta}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
