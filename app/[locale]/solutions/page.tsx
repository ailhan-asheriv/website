import { getTranslations } from "next-intl/server";
import { Link } from "../../../lib/routing";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { PageScaffold, Section } from "../../components/sections";

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.solutions");
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Link
                href="/shipyard-intelligence"
                locale={locale}
                className="card-base p-6 flex flex-col hover:border-navy-light transition-colors block"
              >
                <h2 className="text-xl font-bold text-offwhite mb-3 font-heading">{t("shipyard.title")}</h2>
                <p className="text-muted leading-relaxed flex-grow">{t("shipyard.description")}</p>
                <span className="link-arrow mt-4">Explore →</span>
              </Link>
              <Link
                href="/operational-digital-twin"
                locale={locale}
                className="card-base p-6 flex flex-col hover:border-navy-light transition-colors block"
              >
                <h2 className="text-xl font-bold text-offwhite mb-3 font-heading">{t("operationalDigitalTwin.title")}</h2>
                <p className="text-muted leading-relaxed flex-grow">{t("operationalDigitalTwin.description")}</p>
                <span className="link-arrow mt-4">Explore →</span>
              </Link>
              <Link
                href="/maintenance-intelligence"
                locale={locale}
                className="card-base p-6 flex flex-col hover:border-navy-light transition-colors block"
              >
                <h2 className="text-xl font-bold text-offwhite mb-3 font-heading">{t("maintenance.title")}</h2>
                <p className="text-muted leading-relaxed flex-grow">{t("maintenance.description")}</p>
                <span className="link-arrow mt-4">Explore →</span>
              </Link>
              <Link
                href="/compliance-evidence"
                locale={locale}
                className="card-base p-6 flex flex-col hover:border-navy-light transition-colors block"
              >
                <h2 className="text-xl font-bold text-offwhite mb-3 font-heading">{t("compliance.title")}</h2>
                <p className="text-muted leading-relaxed flex-grow">{t("compliance.description")}</p>
                <span className="link-arrow mt-4">Explore →</span>
              </Link>
            </div>
          </Section>
        </PageScaffold>
      </main>
      <Footer />
    </>
  );
}
