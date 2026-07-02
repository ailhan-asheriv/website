import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";

const content = {
  en: {
    title: "Research and Development",
    tagline: "Academic rigour informing production-grade maritime AI.",
    focusTitle: "Current research focus",
    focusBody:
      "Our current focus includes ongoing doctoral research at Istanbul Technical University, Faculty of Naval Architecture and Ocean Engineering, centered on PINN-based remaining useful life estimation, cross-vessel transfer learning, and physics-informed predictive maintenance methodology.",
    productTitle: "Why this matters for the product",
    productBody:
      "Research conducted for academic rigor directly informs the methodology behind ASHFI and ASHMOP's predictive models, keeping the underlying science current and defensible rather than treating research and product as separate tracks.",
    collaborationTitle: "Collaboration",
    collaborationBody:
      "We are open to research partnerships with class societies, shipyards, and academic institutions. Contact: info@asheriv.com",
  },
  tr: {
    title: "Arastirma ve Gelistirme",
    tagline: "Akademik titizlikle gelisen production-grade denizcilik AI.",
    focusTitle: "Guncel arastirma odagi",
    focusBody:
      "Guncel odak alanimiz, Istanbul Teknik Universitesi Gemi Insaati ve Okyanus Muhendisligi Fakultesi'nde suren doktora arastirmasi kapsaminda PINN tabanli kalan faydali omur tahmini, gemiler arasi transfer ogrenme ve fizik bilgili kestirimci bakim metodolojisidir.",
    productTitle: "Urun icin neden onemli",
    productBody:
      "Akademik titizlikle yuruyen bu arastirma, ASHFI ve ASHMOP kestirimci metodolojisini dogrudan besler. Boylece urun altyapisindaki bilim guncel ve savunulabilir kalir.",
    collaborationTitle: "Is birligi",
    collaborationBody:
      "Klas kuruluslari, tersaneler ve akademik kurumlarla arastirma ortakliklarina acigiz. Iletisim: info@asheriv.com",
  },
} as const;

export default async function ResearchPage({
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
              <h2 className="font-heading text-2xl font-bold text-[#00D4FF]">{c.focusTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#CBD5E1]">{c.focusBody}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#1C3D5A]/35 p-7">
              <h2 className="font-heading text-2xl font-bold text-[#00D4FF]">{c.productTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#CBD5E1]">{c.productBody}</p>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl rounded-xl border border-[#E3E8EB] bg-white p-8">
            <h2 className="font-heading text-2xl font-bold text-[#0A0F1E]">{c.collaborationTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#3D4852]">{c.collaborationBody}</p>
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
