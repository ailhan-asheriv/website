import { getTranslations } from "next-intl/server";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import Section from "../../components/sections/Section";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("pages.contact");
  const tContact = await getTranslations("contact");

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-[#0A0F1E]">
        <section className="pt-32 pb-16 sm:pt-40 bg-[#0A0F1E] border-b border-white/10">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">{t("title")}</h1>
              <p className="text-lg text-[#00D4FF] leading-relaxed max-w-2xl">{t("intro")}</p>
            </div>
          </div>
        </section>
        <Section variant="dark" id="contact-form">
          <div className="max-w-xl mx-auto">
            <h2 className="text-xl font-semibold text-white mb-4 font-sans">{tContact("title")}</h2>
            <p className="text-[#CBD5E1] text-sm mb-6">{tContact("description")}</p>
            <div className="mb-6 space-y-1 text-sm text-[#CBD5E1]">
              <p>info@asheriv.com</p>
              <p>A&apos;SHERIV Intelligent Marine Technologies Ltd.</p>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
