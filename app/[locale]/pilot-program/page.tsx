import { getTranslations } from "next-intl/server";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { PageScaffold, Section } from "../../components/sections";

export default async function PilotProgramPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.pilotProgram");
  const tCommon = await getTranslations("pages");

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-navy">
        <PageScaffold
          title={t("title")}
          intro={t("description")}
          backLabel={tCommon("backToHome")}
          ctaLabel={tCommon("ctaPilot")}
          ctaHref="/#contact"
          locale={locale}
        >
          <Section variant="dark">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-muted leading-relaxed">{t("body")}</p>
            </div>
          </Section>
        </PageScaffold>
      </main>
      <Footer />
    </>
  );
}
