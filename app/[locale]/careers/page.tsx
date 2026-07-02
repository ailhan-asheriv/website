import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";

const content = {
  en: {
    title: "Careers at Asheriv",
    tagline: "Building the future of maritime intelligence.",
    whoTitle: "Who we are",
    whoBody:
      "We are a focused maritime AI team building systems that connect shipyard, operations, and machinery data into one vessel intelligence layer. Our work combines domain depth with production-grade software delivery.",
    lookForTitle: "What we look for",
    lookForBody:
      "Strong technical fundamentals, genuine curiosity about the maritime industry, and comfort working in a small, fast-moving team. We value people who can move between research-level thinking and production-quality engineering.",
    openPositionsTitle: "Open positions",
    openPositionsBody:
      "We are not actively hiring at this time. To register interest in future opportunities, reach out at careers@asheriv.com",
  },
  tr: {
    title: "Asheriv'de Kariyer",
    tagline: "Denizcilik zekasinin gelecegini insa ediyoruz.",
    whoTitle: "Biz kimiz",
    whoBody:
      "Tersane, operasyon ve makine verisini tek gemi zeka katmaninda birlestiren sistemler kuran odakli bir denizcilik AI ekibiyiz. Calismamiz alan bilgisi ile production kalitesinde yazilimi birlestirir.",
    lookForTitle: "Ne ariyoruz",
    lookForBody:
      "Guclu teknik temeller, denizcilik sektorune dair gercek bir merak ve kucuk, hizli hareket eden bir ekipte calisma konforu. Arastirma seviyesinde dusunme ile uretim kalitesinde muhendisligi bir arada yurutebilen insanlara deger veriyoruz.",
    openPositionsTitle: "Acik pozisyonlar",
    openPositionsBody:
      "Su anda aktif ise alim yok. Gelecekteki firsatlar icin ilginizi careers@asheriv.com adresinden iletebilirsiniz.",
  },
} as const;

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = content[locale as keyof typeof content] ?? content.en;

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-[#0A0F1E] text-white">
        <section className="border-b border-white/10 bg-[#0A0F1E] px-6 pb-16 pt-32 sm:px-10 sm:pt-40 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">{c.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-[#CBD5E1]">{c.tagline}</p>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-[#0D1627] p-7">
              <h2 className="font-heading text-2xl font-bold text-[#00D4FF]">{c.whoTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#CBD5E1]">{c.whoBody}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#1C3D5A]/35 p-7">
              <h2 className="font-heading text-2xl font-bold text-[#00D4FF]">{c.lookForTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#CBD5E1]">{c.lookForBody}</p>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-xl border border-[#E3E8EB] bg-white p-8">
            <h2 className="font-heading text-2xl font-bold text-[#0A0F1E]">{c.openPositionsTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#3D4852]">{c.openPositionsBody}</p>
            <Link href="/contact" className="mt-6 inline-block text-sm font-semibold text-[#00D4FF] hover:text-[#1C3D5A]">
              {locale === "tr" ? "Iletisim formuna git" : "Go to contact form"}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
