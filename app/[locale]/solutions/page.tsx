import { getTranslations } from "next-intl/server";
import { Link } from "../../../lib/routing";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.solutions");

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-[#0A0F1E] text-white">
        <section className="border-b border-white/10 bg-[#0A0F1E] px-6 pb-16 pt-32 sm:px-10 sm:pt-40 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">{t("title")}</h1>
            <p className="mt-4 max-w-3xl text-lg text-[#CBD5E1]">
              {locale === "tr"
                ? "Cozumleri urun degil, rol ve zorluk bazinda konumlandirin."
                : "Position solutions by role and challenge, not only by product category."}
            </p>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { href: "/shipyard-intelligence", title: t("shipyard.title"), desc: t("shipyard.description") },
              { href: "/operational-digital-twin", title: t("operationalDigitalTwin.title"), desc: t("operationalDigitalTwin.description") },
              { href: "/maintenance-intelligence", title: t("maintenance.title"), desc: t("maintenance.description") },
              { href: "/evidence-pack", title: t("compliance.title"), desc: t("compliance.description") },
            ].map((card, idx) => (
              <Link key={card.href} href={card.href} locale={locale} className={`rounded-xl border border-white/10 p-6 transition hover:border-[#00D4FF] ${idx % 2 === 0 ? "bg-[#0D1627]" : "bg-[#1C3D5A]/35"}`}>
                <div className="mb-4 h-2 w-10 rounded-full bg-[#00D4FF]" />
                <h2 className="text-xl font-bold text-white mb-3 font-heading">{card.title}</h2>
                <p className="text-[#CBD5E1] leading-relaxed">{card.desc}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-[#00D4FF]">
                  {locale === "tr" ? "Detayi gor" : "View details"}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
