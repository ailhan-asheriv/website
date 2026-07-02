import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubscribeForm from "../../components/SubscribeForm";

const content = {
  en: {
    title: "Insights",
    tagline:
      "Technical perspectives on maritime AI, vessel lifecycle data, and predictive maintenance from the A'SHERIV team.",
    subscribeTitle: "Get notified when we publish",
    notifyButton: "Notify me",
    success: "You are on the list.",
  },
  tr: {
    title: "Insights",
    tagline:
      "A'SHERIV ekibinden denizcilik AI, gemi yasam dongusu verisi ve kestirimci bakim uzerine teknik bakis acilari.",
    subscribeTitle: "Yayinladigimizda haberdar olun",
    notifyButton: "Beni bilgilendir",
    success: "Listeye eklendiniz.",
  },
} as const;

const cards = [
  {
    title:
      "Physics-Informed Neural Networks for Maritime Predictive Maintenance: An Introduction",
    tag: "Research",
    teaser:
      "An introduction to PINN-based approaches and why they outperform black-box models for vessel health estimation.",
  },
  {
    title: "Why AIS Data Can Estimate Engine Health Without Sensors",
    tag: "Product",
    teaser:
      "How Admiralty formula physics combined with AIS speed history enables meaningful engine load and degradation estimates.",
  },
  {
    title:
      "CII Rating Methodology Explained: How We Calculate from 30-Day Operating Samples",
    tag: "Methodology",
    teaser:
      "A transparent walk-through of the AER formula and what a 30-day estimate can and cannot tell you about annual CII.",
  },
] as const;

export default async function BlogPage({
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
                    {card.tag}
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
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <SubscribeForm
              source="blog"
              locale={locale}
              buttonLabel={c.notifyButton}
              successLabel={c.success}
              title={c.subscribeTitle}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
