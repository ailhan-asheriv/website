import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";
import { SUPPORT_HERO_IMAGES } from "../../../lib/imagery";
import JoinUsForm from "../../components/JoinUsForm";

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
    rdTitle: "R&D and Partnerships",
    researchBody:
      "A'SHERIV's predictive maintenance and vessel intelligence methodology is developed through an active research program in collaboration with Istanbul Technical University's Faculty of Naval Architecture and Ocean Engineering. Current research focuses on physics-informed neural network approaches to remaining useful life estimation, cross-vessel transfer learning for predictive maintenance models, and the integration of shipyard construction data with operational digital twins.",
    rdBody2:
      "We are building partnerships with class societies, shipyard operators, and maritime research institutions to validate and extend this methodology against real operational data.",
    partnerPlaceholder: "Partner logos coming soon",
    researchCta: "Discuss a research partnership",
    recognitionTitle: "Recognition and Memberships",
    recognitionBody:
      "A'SHERIV's research and platform work has been presented at and recognised by leading institutions in maritime technology and AI.",
    pressTitle: "Press and Media",
    pressPlaceholder: "Coverage logos coming soon",
    certTitle: "Certifications and Memberships",
    certPlaceholder: "Certification logos coming soon",
    joinTitle: "Join Us",
    joinBody:
      "We are a small, focused team building maritime intelligence infrastructure. We consider both internship and full-time applications on an ongoing basis from engineers, researchers, and maritime domain experts.",
    productsTitle: "Products",
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
    rdTitle: "Ar-Ge ve Ortakliklar",
    researchBody:
      "A'SHERIV'in kestirimci bakim ve gemi zekasi metodolojisi, Istanbul Teknik Universitesi Gemi Insaati ve Okyanus Muhendisligi Fakultesi ile is birligi icindeki aktif arastirma programi ile gelistirilmektedir. Guncel odak, fizik bilgili sinir aglariyla kalan faydali omur tahmini, gemiler arasi transfer ogrenme ve tersane insa verilerinin operasyonel dijital ikizlerle entegrasyonudur.",
    rdBody2:
      "Bu metodolojiyi gercek operasyonel verilerle dogrulamak ve genisletmek icin klas kuruluslari, tersane operatorleri ve denizcilik arastirma kurumlariyla ortakliklar kuruyoruz.",
    partnerPlaceholder: "Partner logolari yakinda",
    researchCta: "Arastirma ortakligi icin iletisime gec",
    recognitionTitle: "Taninma ve Uyelikler",
    recognitionBody:
      "A'SHERIV'in arastirma ve platform calismalari, denizcilik teknolojisi ve AI alaninda onde gelen kurumlar tarafindan sunulmus ve taninmistir.",
    pressTitle: "Basin ve Medya",
    pressPlaceholder: "Basin logolari yakinda",
    certTitle: "Sertifikasyonlar ve Uyelikler",
    certPlaceholder: "Sertifikasyon logolari yakinda",
    joinTitle: "Bize Katilin",
    joinBody:
      "Denizcilik zeka altyapisini kuran kucuk ve odakli bir ekibiz. Muhendisler, arastirmacilar ve denizcilik alan uzmanlarindan staj ve tam zamanli basvurulari surekli degerlendiriyoruz.",
    productsTitle: "Urunler",
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

        <section id="rd-partnerships" className="bg-[#1C3D5A] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl rounded-xl border border-white/15 bg-[#0A0F1E]/35 p-8">
            <h2 className="font-heading text-3xl font-bold text-white">{c.rdTitle}</h2>
            <p className="mt-4 leading-relaxed text-[#DCE3EC]">{c.researchBody}</p>
            <p className="mt-4 leading-relaxed text-[#DCE3EC]">{c.rdBody2}</p>
            {/* <div className="mt-6 rounded-xl border border-dashed border-white/30 bg-white/[0.03] px-5 py-8 text-center text-sm text-[#9CB0C9]">
              {c.partnerPlaceholder}
            </div> */}
            <Link href="/#contact" className="mt-6 inline-block rounded-full bg-[#00D4FF] px-6 py-3 text-sm font-semibold text-[#0A0F1E] transition hover:bg-[#67E5FF]">
              {c.researchCta}
            </Link>
          </div>
        </section>

        <section id="recognition" className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-heading text-3xl font-bold text-white">{c.recognitionTitle}</h2>
            <p className="mt-4 max-w-4xl leading-relaxed text-[#CBD5E1]">{c.recognitionBody}</p>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* <div className="rounded-xl border border-dashed border-white/30 bg-[#0D1627] p-8">
                <p className="text-lg font-semibold text-[#00D4FF]">{c.pressTitle}</p>
                <p className="mt-3 text-sm text-[#9CB0C9]">{c.pressPlaceholder}</p>
              </div> */}
              {/* <div className="rounded-xl border border-dashed border-white/30 bg-[#0D1627] p-8">
                <p className="text-lg font-semibold text-[#00D4FF]">{c.certTitle}</p>
                <p className="mt-3 text-sm text-[#9CB0C9]">{c.certPlaceholder}</p>
              </div> */}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 text-[#3D4852] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-heading text-3xl font-bold text-[#0A0F1E] mb-8">{c.productsTitle}</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { href: "/ashmop", title: "AshMOP", desc: "Operational digital twin platform." },
                { href: "/ashfi", title: "AshFI", desc: "Fleet intelligence from AIS data." },
                { href: "/ashsim", title: "AshSIM", desc: "Shipyard-to-operations data continuity." },
                { href: "/evidence-pack", title: "Evidence Pack", desc: "Structured compliance exports." },
              ].map((product) => (
                <Link key={product.href} href={product.href} className="rounded-xl border border-[#E3E8EB] bg-white p-5 transition hover:border-[#00D4FF]">
                  <p className="font-semibold text-[#0A0F1E]">{product.title}</p>
                  <p className="mt-2 text-sm text-[#3D4852]">{product.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="join-us" className="bg-[#F7F9FA] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl rounded-xl border border-[#E3E8EB] bg-white p-8">
            <h2 className="font-heading text-3xl font-bold text-[#0A0F1E]">{c.joinTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#3D4852]">{c.joinBody}</p>
            <div className="mt-8">
              <JoinUsForm locale={locale} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
