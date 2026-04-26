import { getTranslations } from "next-intl/server";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { PageScaffold, Section } from "../../components/sections";

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.insights");
  const tCommon = await getTranslations("pages");

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-navy">
        <PageScaffold
          title={t("title")}
          intro={t("description")}
          backLabel={tCommon("backToHome")}
          ctaLabel={tCommon("ctaContact")}
          ctaHref="/#contact"
          locale={locale}
        >
          <Section variant="dark">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-charcoal p-8 rounded-card border border-navy-light shadow-subtle">
                <h2 className="text-xl font-bold text-offwhite mb-3 font-heading">{t("articles.title")}</h2>
                <p className="text-muted leading-relaxed">{t("articles.description")}</p>
              </div>
              <div className="bg-charcoal p-8 rounded-card border border-navy-light shadow-subtle">
                <h2 className="text-xl font-bold text-offwhite mb-3 font-heading">{t("caseStudies.title")}</h2>
                <p className="text-muted leading-relaxed">{t("caseStudies.description")}</p>
              </div>
              <div className="bg-charcoal p-8 rounded-card border border-navy-light shadow-subtle">
                <h2 className="text-xl font-bold text-offwhite mb-3 font-heading">{t("research.title")}</h2>
                <p className="text-muted leading-relaxed">{t("research.description")}</p>
              </div>
            </div>
          </Section>
        </PageScaffold>
      </main>
      <Footer />
    </>
  );
}
