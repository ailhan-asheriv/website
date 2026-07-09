import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";

export default async function ComingSoonPage({
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
          <div className="mx-auto max-w-4xl">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
              {isTr ? "Cok yakinda" : "Coming soon"}
            </h1>
            <p className="mt-4 text-lg text-[#CBD5E1]">
              {isTr
                ? "Bu bolum gelistirme asamasindadir. Dokumantasyon, vaka calismalari veya teknik sorular icin info@asheriv.com ile iletisime gecin."
                : "This section is in development. In the meantime, reach out at info@asheriv.com for documentation, case studies, or technical questions."}
            </p>
            <a href="mailto:info@asheriv.com" className="mt-6 inline-block rounded-full bg-[#00D4FF] px-6 py-3 text-sm font-semibold text-[#0A0F1E] transition hover:bg-[#67E5FF]">
              {isTr ? "info@asheriv.com ile iletisime gec" : "Email info@asheriv.com"}
            </a>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/ashmop", label: "AshMOP" },
              { href: "/ashfi", label: "AshFI" },
              { href: "/ashsim", label: "AshSIM" },
              { href: "/evidence-pack", label: "Evidence Pack" },
            ].map((item) => (
              <Link key={item.href} href={item.href} locale={locale} className="rounded-xl border border-[#E3E8EB] bg-white px-5 py-4 text-sm font-semibold text-[#0A0F1E] transition hover:border-[#00D4FF]">
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
