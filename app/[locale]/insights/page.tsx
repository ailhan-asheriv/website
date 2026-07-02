import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isTr = locale === "tr";

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-[#0A0F1E] text-white">
        <section className="border-b border-white/10 bg-[#0A0F1E] px-6 pb-16 pt-32 sm:px-10 sm:pt-40 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
              {isTr ? "Insights" : "Insights"}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-[#CBD5E1]">
              {isTr
                ? "Asheriv ekibinden denizcilik zekasi, gemi yasam dongusu verisi ve kestirimci bakim odakli icerikler. Cok yakinda."
                : "Insights from the Asheriv team on maritime intelligence, vessel lifecycle data, and predictive maintenance. Coming soon."}
            </p>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-xl border border-[#E3E8EB] bg-white p-8">
            <h2 className="font-heading text-2xl font-bold text-[#0A0F1E]">
              {isTr ? "Bildirim alin" : "Get notified"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#3D4852]">
              {isTr
                ? "Yeni icerikler yayinlandiginda haberdar olmak icin e-posta birakin."
                : "Leave your email to receive updates when new insights are published."}
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder={isTr ? "E-posta adresiniz" : "Your email address"}
                className="w-full rounded-lg border border-[#E3E8EB] bg-white px-4 py-3 text-sm text-[#0A0F1E] focus:border-[#00D4FF] focus:outline-none"
              />
              <button type="button" className="rounded-lg bg-[#0A0F1E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1C3D5A]">
                {isTr ? "Bildirim al" : "Get notified"}
              </button>
            </form>
            <Link href="/contact" locale={locale} className="mt-5 inline-block text-sm font-semibold text-[#00D4FF] hover:text-[#1C3D5A]">
              {isTr ? "Iletisim" : "Contact"}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
