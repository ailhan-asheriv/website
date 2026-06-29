import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { PageScaffold, Section } from "../../components/sections";

const content = {
  en: {
    title: "Careers at Asheriv",
    intro:
      "We are a small, focused team building the maritime industry's vessel intelligence layer. We are not actively hiring at this time, but we are always interested in hearing from people who care deeply about maritime technology, AI, and naval engineering.",
    lookForTitle: "What we look for",
    lookForBody:
      "Strong technical fundamentals, genuine curiosity about the maritime industry, and comfort working in a small, fast-moving team. We value people who can move between research-level thinking and production-quality engineering.",
    ctaPrefix: "Interested in future opportunities? Reach out at",
    backLabel: "Back to Home",
  },
  tr: {
    title: "Asheriv'de Kariyer",
    intro:
      "Denizcilik sektorunun gemi zekasi katmanini insa eden kucuk, odakli bir ekibiz. Su anda aktif olarak ise alim yapmiyoruz, ancak denizcilik teknolojisi, yapay zeka ve gemi muhendisligine derinden onem veren insanlardan haber almaktan her zaman memnuniyet duyariyoruz.",
    lookForTitle: "Ne ariyoruz",
    lookForBody:
      "Guclu teknik temeller, denizcilik sektorune dair gercek bir merak ve kucuk, hizli hareket eden bir ekipte calisma konforu. Arastirma seviyesinde dusunme ile uretim kalitesinde muhendisligi bir arada yurutebilen insanlara deger veriyoruz.",
    ctaPrefix: "Gelecekteki firsatlarla ilgileniyor musunuz?",
    ctaSuffix: "adresinden bize ulasin.",
    backLabel: "Ana Sayfaya Don",
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
      <main id="main-content" className="min-h-screen bg-[#0A0F1E]">
        <PageScaffold
          title={c.title}
          intro={c.intro}
          backLabel={c.backLabel}
          locale={locale}
        >
          <Section variant="dark">
            <div className="max-w-3xl mx-auto">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <h2 className="font-sans text-2xl font-bold text-[#00D4FF] mb-4">
                  {c.lookForTitle}
                </h2>
                <p className="text-sm leading-relaxed text-[#CBD5E1] mb-6">{c.lookForBody}</p>
                <p className="text-sm leading-relaxed text-[#CBD5E1]">
                  {c.ctaPrefix}{" "}
                  <a
                    href="mailto:careers@asheriv.com"
                    className="text-white hover:text-[#00D4FF] hover:underline transition-colors"
                  >
                    careers@asheriv.com
                  </a>
                  {"ctaSuffix" in c && c.ctaSuffix ? ` ${c.ctaSuffix}` : null}
                </p>
              </div>
            </div>
          </Section>
        </PageScaffold>
      </main>
      <Footer />
    </>
  );
}
