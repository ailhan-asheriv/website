import { getTranslations } from "next-intl/server";
import { Link } from "../../../lib/routing";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default async function TurkeyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("turkey");

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 sm:pt-36 sm:pb-24 bg-[#0A0F1E] relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="container-width section-padding relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              {t("title")}
            </h1>
            <p className="text-lg sm:text-xl text-[#00D4FF] mb-6 leading-relaxed">
              {t("subtitle")}
            </p>
            <p className="text-base text-[#CBD5E1] leading-relaxed max-w-2xl">
              {t("description")}
            </p>
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 bg-[#0D1627]">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white mb-8">
              {t("operations.title")}
            </h2>
            <p className="text-lg text-[#CBD5E1] mb-12 leading-relaxed">
              {t("operations.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {t("operations.areas.shipyard.title")}
                </h3>
                <p className="text-sm leading-relaxed text-[#CBD5E1]">
                  {t("operations.areas.shipyard.description")}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {t("operations.areas.production.title")}
                </h3>
                <p className="text-sm leading-relaxed text-[#CBD5E1]">
                  {t("operations.areas.production.description")}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {t("operations.areas.integration.title")}
                </h3>
                <p className="text-sm leading-relaxed text-[#CBD5E1]">
                  {t("operations.areas.integration.description")}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {t("operations.areas.partnerships.title")}
                </h3>
                <p className="text-sm leading-relaxed text-[#CBD5E1]">
                  {t("operations.areas.partnerships.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-white/10 mx-auto max-w-5xl" />

      {/* Contact CTA */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 bg-[#0A0F1E] border-t border-white/10">
        <div className="container-width">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white mb-6">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-[#CBD5E1] mb-8 leading-relaxed">
              {t("contact.description")}
            </p>
            <Link
              href="/#contact"
              locale={locale}
              className="rounded-md bg-[#00D4FF] px-6 py-3 text-sm font-semibold text-[#0A0F1E] transition hover:bg-[#67E5FF] inline-block"
            >
              {t("contact.cta")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

