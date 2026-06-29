import { getTranslations } from "next-intl/server";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { PageScaffold } from "../../components/sections";

export default async function ComingSoonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("comingSoon");

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-[#0A0F1E]">
        <PageScaffold
          title={t("title")}
          intro={t("body")}
          backLabel={t("backLabel")}
          ctaLabel={undefined}
          locale={locale}
        />
      </main>
      <Footer />
    </>
  );
}
