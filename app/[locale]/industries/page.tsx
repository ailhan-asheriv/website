import { getTranslations } from "next-intl/server";
import { Link } from "../../../lib/routing";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.industries");

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-[#0A0F1E] text-white">
        <section className="border-b border-white/10 bg-[#0A0F1E] px-6 pb-16 pt-32 sm:px-10 sm:pt-40 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">{t("title")}</h1>
            <p className="mt-4 max-w-3xl text-lg text-[#CBD5E1]">{t("description")}</p>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: t("shipyards.title"), desc: t("shipyards.description"), href: "/sim" },
              { title: t("fleetOwners.title"), desc: t("fleetOwners.description"), href: "/platform" },
              { title: t("operators.title"), desc: t("operators.description"), href: "/ashfi" },
              { title: t("oems.title"), desc: t("oems.description"), href: "/maintenance-intelligence" },
              { title: t("insurersClass.title"), desc: t("insurersClass.description"), href: "/compliance-evidence" },
            ].map((item, idx) => (
              <Link key={item.title} href={item.href} locale={locale} className={`rounded-xl border border-white/10 p-6 transition hover:border-[#00D4FF] ${idx % 2 === 0 ? "bg-[#0D1627]" : "bg-[#1C3D5A]/35"}`}>
                <h2 className="text-xl font-bold text-white mb-3 font-heading">{item.title}</h2>
                <p className="text-[#CBD5E1] leading-relaxed">{item.desc}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-[#00D4FF]">
                  {locale === "tr" ? "Ilgili cozum" : "Relevant solution"}
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
