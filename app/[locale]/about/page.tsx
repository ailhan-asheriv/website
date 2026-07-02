import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";
import { SUPPORT_HERO_IMAGES } from "../../../lib/imagery";

const content = {
  en: {
    title: "About A'SHERIV",
    tagline: "Building the vessel intelligence layer for the maritime industry.",
    missionTitle: "Mission",
    mission:
      "To give every vessel a structured, continuous operational record - from first steel to decommissioning - that supports safer operations, better maintenance decisions, and clearer accountability across the maritime value chain.",
    visionTitle: "Vision",
    vision:
      "A future where unplanned vessel failures are the exception, not the norm. Where every maintenance decision is backed by traceable data. Where design, operational, and machinery records are unified in a single platform that grows with the vessel.",
    founderTitle: "Founder",
    founderBody:
      "A'SHERIV was founded by Asli Ilhan, an AI engineer and PhD candidate in Naval Architecture & Marine Engineering at Istanbul Technical University. With an MSc in AI & Data Science (Distinction, top graduate - UAL), research collaborations with NVIDIA, and experience building production AI systems across computer vision and generative pipelines, she founded A'SHERIV to solve a problem the maritime industry hasn't solved: unifying design, operational, and machinery data into a single vessel intelligence layer.",
    researchTitle: "Research foundation",
    researchBody:
      "ASHFI and ASHMOP's predictive maintenance methodology is informed by active PhD research in AI-driven maritime systems at Istanbul Technical University's Faculty of Naval Architecture and Ocean Engineering, focusing on physics-informed neural networks for remaining useful life estimation and cross-vessel transfer learning.",
    productsTitle: "Products",
    legalLine: "A'SHERIV Intelligent Marine Technologies Ltd. is registered in England and Wales.",
    contactCta: "Work with us - info@asheriv.com",
  },
  tr: {
    title: "A'SHERIV Hakkinda",
    tagline: "Denizcilik sektoru icin gemi zeka katmanini insa ediyoruz.",
    missionTitle: "Misyon",
    mission:
      "Her gemiye ilk celikten hizmetten cikarmaya kadar - daha guvenli operasyonlari, daha iyi bakim kararlarini ve denizcilik deger zincirinde daha net hesap verebilirligi destekleyen yapilandirilmis, surekli bir operasyonel kayit saglamak.",
    visionTitle: "Vizyon",
    vision:
      "Plansiz gemi arizalarinin norm degil, istisna oldugu bir gelecek. Her bakim kararinin izlenebilir verilerle desteklendigi. Tasarim, operasyonel ve makine kayitlarinin gemiyle birlikte buyuyen tek bir platformda birlestirildigi.",
    founderTitle: "Kurucu",
    founderBody:
      "A'SHERIV, Istanbul Teknik Universitesi Gemi ve Deniz Teknolojisi Muhendisligi doktora adayi ve AI muhendisi Asli Ilhan tarafindan kuruldu. UAL'da birincilikle tamamlanan Yapay Zeka ve Veri Bilimi yuksek lisansi, NVIDIA ile arastirma is birlikleri ve uretim AI sistemleri gelistirme deneyimiyle A'SHERIV'i, denizcilik sektorunun cozemedigi bir sorunu cozmek icin kurdu: tasarim, operasyonel ve makine verilerini tek bir gemi zekasi katmaninda birlestirmek.",
    researchTitle: "Arastirma temeli",
    researchBody:
      "ASHFI ve ASHMOP'un kestirimci bakim metodolojisi, Istanbul Teknik Universitesi Gemi Insaati ve Okyanus Muhendisligi Fakultesi'nde yuruyen, fizik bilgili sinir aglariyla kalan faydali omur tahmini ve gemiler arasi transfer ogrenmeye odaklanan AI tabanli denizcilik sistemleri doktora arastirmasiyla beslenir.",
    productsTitle: "Urunler",
    legalLine: "A'SHERIV Intelligent Marine Technologies Ltd. England and Wales kayitlidir.",
    contactCta: "Bizimle calisin - info@asheriv.com",
  },
} as const;

export default async function AboutPage({
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
        <section
          className="relative border-b border-white/10 pt-32 pb-20 sm:pt-40"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(10,15,30,0.8), rgba(10,15,30,0.82)), url(${SUPPORT_HERO_IMAGES.about})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">{c.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-[#CBD5E1]">{c.tagline}</p>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-[#0D1627] p-7">
              <h2 className="font-sans text-2xl font-bold text-[#00D4FF] mb-4">{c.missionTitle}</h2>
              <p className="text-sm leading-relaxed text-[#CBD5E1]">{c.mission}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0D1627] p-7">
              <h2 className="font-sans text-2xl font-bold text-[#00D4FF] mb-4">{c.visionTitle}</h2>
              <p className="text-sm leading-relaxed text-[#CBD5E1]">{c.vision}</p>
            </div>
          </div>
        </section>

        <section className="bg-[#1C3D5A] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl rounded-xl border border-white/15 bg-[#0A0F1E]/35 p-8">
            <h2 className="font-heading text-3xl font-bold text-white">{c.researchTitle}</h2>
            <p className="mt-4 leading-relaxed text-[#DCE3EC]">{c.researchBody}</p>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 text-[#3D4852] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-heading text-3xl font-bold text-[#0A0F1E] mb-8">{c.productsTitle}</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { href: "/platform", title: "AshMOP", desc: "Operational digital twin platform." },
                { href: "/ashfi", title: "AshFI", desc: "Fleet intelligence from AIS data." },
                { href: "/sim", title: "ASHSIM", desc: "Shipyard-to-operations data continuity." },
                { href: "/compliance-evidence", title: "Evidence Pack", desc: "Structured compliance exports." },
              ].map((product) => (
                <Link key={product.href} href={product.href} className="rounded-xl border border-[#E3E8EB] bg-white p-5 transition hover:border-[#00D4FF]">
                  <p className="font-semibold text-[#0A0F1E]">{product.title}</p>
                  <p className="mt-2 text-sm text-[#3D4852]">{product.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-12 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm text-[#CBD5E1]">{c.legalLine}</p>
            <Link href="/contact" className="mt-5 inline-block text-sm font-semibold text-[#00D4FF] hover:text-[#67E5FF]">
              {c.contactCta}
            </Link>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 pb-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-[#0D1627] p-8">
            <h2 className="font-sans text-2xl font-bold text-[#00D4FF] mb-4 text-center">{c.founderTitle}</h2>
            <p className="text-sm leading-relaxed text-[#CBD5E1] text-center">{c.founderBody}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
