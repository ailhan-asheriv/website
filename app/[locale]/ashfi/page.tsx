import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import AshfiDemoForm from "../../components/sections/AshfiDemoForm";
import { PageScaffold, Section } from "../../components/sections";
import { Link } from "../../../lib/routing";

const content = {
  en: {
    title: "AshFI - Asheriv Fleet Intelligence",
    intro:
      "AshFI brings AIS-derived vessel intelligence, physics-informed health indicators, and remaining useful life estimation to any fleet, without requiring sensor integration or onboard hardware. It is the data layer that feeds ASHMOP, the operational digital twin, and stands on its own for operators who need fleet visibility today.",
    whyTitle: "Why AshFI",
    whyBody:
      "Most fleet intelligence tools stop at position, route, and ETA. AshFI goes further: using only a vessel's IMO number, publicly available AIS data, and engine specifications, it estimates engine load, fuel efficiency trends, and remaining useful life, using the same physics-informed modelling approach that powers ASHMOP's predictive maintenance engine. No sensors. No integration. No waiting for a digital twin rollout.",
    featuresTitle: "What AshFI does",
    features: [
      {
        title: "Vessel Health Snapshot",
        desc: "Enter an IMO number and receive an instant, physics-informed estimate of engine load, fuel efficiency, and degradation trend, derived from AIS movement data and engine design specifications.",
      },
      {
        title: "Remaining Useful Life Estimation",
        desc: "Weibull-based RUL modelling, the same methodology used in ASHMOP's predictive maintenance core, applied at fleet scale without requiring onboard sensors.",
      },
      {
        title: "Fleet Risk Benchmarking",
        desc: "Compare vessels across a fleet on consistent health and risk indicators, helping technical superintendents prioritise attention where it matters most.",
      },
      {
        title: "Feeds the Digital Twin",
        desc: "AshFI data and ASHMOP's operational digital twin are designed to work together. Insights generated here can flow directly into a full ASHMOP deployment as a fleet's digital twin maturity grows.",
      },
    ],
    howTitle: "How it works",
    steps: [
      "Request a demo with your vessel's IMO number or fleet details",
      "Receive a sample analysis showing the kind of insight AshFI generates",
      "Our team follows up to scope a fleet-wide deployment suited to your operation",
    ],
    formTitle: "Request a demo",
    suiteTitle: "AshFI and the Asheriv suite",
    suiteBody:
      "AshFI is one of three products in the Asheriv maritime intelligence suite. ASHSIM connects shipyard design and build data to the digital twin. ASHMOP is the full operational digital twin platform. AshFI provides fleet intelligence without requiring sensor integration, serving as both a standalone tool and a feed into ASHMOP.",
    linkAshmop: "Explore ASHMOP →",
    linkSim: "Explore ASHSIM →",
    linkEvidence: "Explore Evidence Pack →",
    backLabel: "Back to Home",
    ctaLabel: "Contact us",
  },
  tr: {
    title: "AshFI - Asheriv Filo Zekasi",
    intro:
      "AshFI, sensor entegrasyonu veya gemi uzeri donanim gerektirmeden, herhangi bir filoya AIS tabanli gemi zekasi, fizik bilgili saglik gostergeleri ve kalan kullanim omru (RUL) tahmini sunar. ASHMOP'un operasyonel dijital ikizini besleyen veri katmanidir ve filo gorunurlugune bugun ihtiyaci olan operatorler icin de bagimsiz olarak calisir.",
    whyTitle: "Neden AshFI",
    whyBody:
      "Cogu filo zekasi araci konum, rota ve ETA ile sinirli kalir. AshFI daha ileri gider: sadece bir geminin IMO numarasini, halka acik AIS verisini ve motor ozelliklerini kullanarak, ASHMOP'un kestirimci bakim motorunu calistiran ayni fizik bilgili modelleme yaklasimiyla motor yukunu, yakit verimliligi trendini ve kalan kullanim omrunu tahmin eder. Sensor yok. Entegrasyon yok. Dijital ikiz kurulumu icin beklemek yok.",
    featuresTitle: "AshFI ne yapar",
    features: [
      {
        title: "Gemi Saglik Anlik Goruntusu",
        desc: "Bir IMO numarasi girin ve AIS hareket verisi ile motor tasarim ozelliklerinden turetilen, motor yuku, yakit verimliligi ve degradasyon trendine dair anlik, fizik bilgili bir tahmin alin.",
      },
      {
        title: "Kalan Kullanim Omru Tahmini",
        desc: "ASHMOP'un kestirimci bakim cekirdeginde kullanilan ayni Weibull tabanli RUL modellemesi, gemi uzeri sensor gerektirmeden filo olceginde uygulanir.",
      },
      {
        title: "Filo Risk Karsilastirmasi",
        desc: "Bir filodaki gemileri tutarli saglik ve risk gostergeleri uzerinden karsilastirin, teknik amirlerin dikkatlerini en onemli yere oncelendirmesine yardimci olun.",
      },
      {
        title: "Dijital Ikizi Besler",
        desc: "AshFI verisi ve ASHMOP'un operasyonel dijital ikizi birlikte calismak uzere tasarlanmistir. Burada uretilen ongoruler, bir filonun dijital ikiz olgunlugu buyudukce dogrudan tam bir ASHMOP dagitimina akabilir.",
      },
    ],
    howTitle: "Nasil calisir",
    steps: [
      "Gemi IMO numaraniz veya filo detaylarinizla demo talep edin",
      "AshFI'nin urettigi ongoru turunu gosteren bir ornek analiz alin",
      "Ekibimiz, operasyonunuza uygun filo capinda bir dagitimi kapsamlandirmak icin sizinle iletisime gecer",
    ],
    formTitle: "Demo talep edin",
    suiteTitle: "AshFI ve Asheriv paketi",
    suiteBody:
      "AshFI, Asheriv denizcilik zekasi paketindeki uc urunden biridir. ASHSIM, tersane tasarim ve insaat verisini dijital ikize baglar. ASHMOP, tam operasyonel dijital ikiz platformudur. AshFI, sensor entegrasyonu gerektirmeden filo zekasi sunar, hem bagimsiz bir arac hem de ASHMOP'a beslenen bir veri kaynagi olarak hizmet eder.",
    linkAshmop: "ASHMOP'u Kesfet →",
    linkSim: "ASHSIM'i Kesfet →",
    linkEvidence: "Kanit Paketini Kesfet →",
    backLabel: "Ana Sayfaya Don",
    ctaLabel: "Iletisime Gec",
  },
} as const;

export default async function AshfiPage({
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
          ctaLabel={c.ctaLabel}
          ctaHref="/#contact"
          locale={locale}
        >
          <Section variant="dark">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">{c.whyTitle}</h2>
              <p className="text-[#CBD5E1] leading-relaxed">{c.whyBody}</p>
            </div>
          </Section>

          <Section variant="light">
            <h2 className="text-2xl font-semibold text-white text-center mb-8">{c.featuresTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {c.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section variant="dark">
            <h2 className="text-2xl font-semibold text-white text-center mb-8">{c.howTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {c.steps.map((step, index) => (
                <div key={step} className="text-center rounded-xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#00D4FF]/15 text-sm font-bold text-[#00D4FF]">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{step}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section variant="light">
            <h2 className="text-2xl font-semibold text-white text-center mb-8">{c.formTitle}</h2>
            <AshfiDemoForm locale={locale} />
          </Section>

          <Section variant="dark">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">{c.suiteTitle}</h2>
              <p className="text-[#CBD5E1] leading-relaxed mb-6">{c.suiteBody}</p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 text-sm font-semibold">
                <Link href="/platform" className="text-[#00D4FF] hover:text-[#67E5FF] transition-colors">
                  {c.linkAshmop}
                </Link>
                <Link href="/sim" className="text-[#00D4FF] hover:text-[#67E5FF] transition-colors">
                  {c.linkSim}
                </Link>
                <Link
                  href="/compliance-evidence"
                  className="text-[#00D4FF] hover:text-[#67E5FF] transition-colors"
                >
                  {c.linkEvidence}
                </Link>
              </div>
            </div>
          </Section>
        </PageScaffold>
      </main>
      <Footer />
    </>
  );
}
