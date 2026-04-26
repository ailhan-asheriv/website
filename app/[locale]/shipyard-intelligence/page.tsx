import { getTranslations } from "next-intl/server";
import { Link } from "../../../lib/routing";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { PageScaffold, Section } from "../../components/sections";

export default async function ShipyardIntelligencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.shipyardIntelligence");
  const tCommon = await getTranslations("pages");

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-navy">
        <PageScaffold
          title={t("title")}
          intro={t("intro")}
          backLabel={tCommon("backToHome")}
          backHref="/solutions"
          ctaLabel={tCommon("ctaContact")}
          ctaHref="/#contact"
          locale={locale}
        >
          <Section variant="dark">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted leading-relaxed">{t("body")}</p>
              <Link href="/solutions" locale={locale} className="link-arrow mt-6 inline-block">
                {t("viewAllSolutions")} →
              </Link>
            </div>
          </Section>
        </PageScaffold>
      </main>
      <Footer />
    </>
  );
}
