import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { PageScaffold, Section } from "../../components/sections";

const content = {
  en: {
    title: "Research & Development",
    intro:
      "Asheriv's product development is informed by active doctoral research in AI-driven maritime predictive maintenance, sensor fusion, and digital twin systems, conducted in partnership with Istanbul Technical University's Faculty of Naval Architecture and Ocean Engineering.",
    focusTitle: "Current research focus",
    focusBody:
      "Physics-informed neural network approaches to remaining useful life estimation, cross-vessel transfer learning for predictive maintenance models, and the integration of shipyard construction data with operational digital twins.",
    productTitle: "Why this matters for the product",
    productBody:
      "Research conducted for academic rigor directly informs the methodology behind ASHFI and ASHMOP's predictive models, keeping the underlying science current and defensible rather than treating research and product as separate tracks.",
    backLabel: "Back to Home",
  },
  tr: {
    title: "Arastirma ve Gelistirme",
    intro:
      "Asheriv'in urun gelistirme sureci, Istanbul Teknik Universitesi Gemi Insaati ve Deniz Bilimleri Fakultesi ile ortak yurutulen, yapay zeka destekli denizcilik kestirimci bakimi, sensor fuzyonu ve dijital ikiz sistemleri uzerine aktif doktora arastirmalariyla beslenmektedir.",
    focusTitle: "Guncel arastirma odağı",
    focusBody:
      "Kalan kullanim omru tahmininde fizik bilgili sinir agi yaklasimlari, kestirimci bakim modelleri icin gemiler arasi transfer ogrenme ve tersane insaat verilerinin operasyonel dijital ikizlerle entegrasyonu.",
    productTitle: "Urun icin neden onemli",
    productBody:
      "Akademik titizlik icin yurutulen arastirma, ASHFI ve ASHMOP'un kestirimci modellerinin arkasindaki metodolojiyi dogrudan bilgilendirir. Arastirma ile urunu ayri hatlar olarak ele almak yerine, altyapıdaki bilimi guncel ve savunulabilir tutar.",
    backLabel: "Ana Sayfaya Don",
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
      <main id="main-content" className="min-h-screen bg-[#0A0F1E]">
        <PageScaffold
          title={c.title}
          intro={c.intro}
          backLabel={c.backLabel}
          locale={locale}
        >
          <Section variant="dark">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <h2 className="font-sans text-2xl font-bold text-[#00D4FF] mb-4">
                  {c.focusTitle}
                </h2>
                <p className="text-sm leading-relaxed text-[#CBD5E1]">{c.focusBody}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <h2 className="font-sans text-2xl font-bold text-[#00D4FF] mb-4">
                  {c.productTitle}
                </h2>
                <p className="text-sm leading-relaxed text-[#CBD5E1]">{c.productBody}</p>
              </div>
            </div>
          </Section>
        </PageScaffold>
      </main>
      <Footer />
    </>
  );
}
