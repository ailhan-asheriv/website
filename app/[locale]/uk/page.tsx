import { getTranslations } from "next-intl/server";
import { Link } from "../../../lib/routing";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default async function UKPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("uk");

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="container-width section-padding relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              locale={locale}
              className="inline-flex items-center text-primary hover:text-primary-light mb-8 transition-colors"
            >
              ← {locale === "tr" ? "Ana Sayfaya Dön" : "Back to Home"}
            </Link>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">{t("title")}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-light mb-8 leading-relaxed">
              {t("subtitle")}
            </p>
            <p className="text-lg text-gray-light leading-relaxed">
              {t("description")}
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="section-padding bg-dark-light">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              <span className="gradient-text">{t("focus.title")}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dark-lighter p-8 rounded-xl border border-dark-lighter card-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-dark">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {t("focus.development").split(":")[0]}
                </h3>
                <p className="text-gray-light leading-relaxed">
                  {t("focus.development").split(":").slice(1).join(":")}
                </p>
              </div>

              <div className="bg-dark-lighter p-8 rounded-xl border border-dark-lighter card-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-dark">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {t("focus.productisation").split(":")[0]}
                </h3>
                <p className="text-gray-light leading-relaxed">
                  {t("focus.productisation").split(":").slice(1).join(":")}
                </p>
              </div>

              <div className="bg-dark-lighter p-8 rounded-xl border border-dark-lighter card-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-dark">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {t("focus.delivery").split(":")[0]}
                </h3>
                <p className="text-gray-light leading-relaxed">
                  {t("focus.delivery").split(":").slice(1).join(":")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-dark">
        <div className="container-width">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="gradient-text">Interested in UK Operations?</span>
            </h2>
            <p className="text-lg text-gray-light mb-8 leading-relaxed">
              Contact A&apos;SHERIV to discuss platform development, productisation, and partner-led delivery in the United Kingdom.
            </p>
            <Link
              href="/#contact"
              locale={locale}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark font-semibold hover:from-primary-dark hover:to-accent-dark transition-all duration-300 rounded-lg shadow-lg shadow-primary/20"
            >
              {locale === "tr" ? "İletişime Geçin" : "Contact Us"}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

