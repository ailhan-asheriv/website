import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";
import { PRODUCT_HERO_IMAGES } from "../../../lib/imagery";

const content = {
  en: {
    title: "AshFI",
    tagline: "No sensors. No hardware. No integration. Just an IMO number.",
    intro:
      "AshFI gives technical teams a maintenance planning window from a vessel's IMO alone — fleet-relative standing and peer position today. Connect your own noon reports and that window narrows by about 70%.",
    whyTitle: "Why AshFI",
    whyBody:
      "Most fleet tools stop at position, route, and ETA. AshFI starts with an IMO number: a maintenance planning window you can act on now, and a clear path to tighten it when you upload the noon data you already fill in. No sensors. No hardware. No integration project.",
    featuresTitle: "What AshFI does",
    features: [
      {
        title: "Vessel Health Snapshot",
        desc: "Enter an IMO number and see fleet-relative standing, peer position, and a maintenance planning window — without onboard sensors or a new integration.",
      },
      {
        title: "Maintenance planning window",
        desc: "A calendar planning interval from public identity data today. Connect your noon reports and the window narrows by about 70%.",
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
    heroCtaPrimary: "Request Demo",
    suiteTitle: "AshFI and the Asheriv suite",
    suiteBody:
      "AshFI is one of three products in the Asheriv maritime intelligence suite. AshSIM connects shipyard design and build data to the digital twin. ASHMOP is the full operational digital twin platform. AshFI provides fleet intelligence without requiring sensor integration, serving as both a standalone tool and a feed into ASHMOP.",
    linkAshmop: "AshMOP",
    linkSim: "AshSIM",
    linkEvidence: "Evidence Pack",
  },
  tr: {
    title: "AshFI",
    tagline: "Sensör yok. Donanım yok. Entegrasyon yok. Sadece IMO numarası.",
    intro:
      "AshFI, yalnızca IMO ile bakım planlama penceresi verir — filo içi durum ve akran konumu bugünden. Noon raporlarınızı bağladığınızda pencere yaklaşık %70 daralır.",
    whyTitle: "Neden AshFI",
    whyBody:
      "Çoğu filo aracı konum, rota ve ETA ile sınırlı kalır. AshFI bir IMO ile başlar: hemen kullanabileceğiniz bir bakım planlama penceresi ve zaten doldurduğunuz noon verisini yükleyince daraltma yolu. Sensör yok. Donanım yok. Entegrasyon projesi yok.",
    featuresTitle: "AshFI ne yapar",
    features: [
      {
        title: "Gemi Sağlık Anlık Görüntüsü",
        desc: "Bir IMO numarası girin; gemi üzeri sensör veya yeni entegrasyon olmadan filo içi durum, akran konumu ve bakım planlama penceresini görün.",
      },
      {
        title: "Bakım planlama penceresi",
        desc: "Bugün kamuya açık kimlik verisiyle bir takvim aralığı. Noon raporlarınızı bağladığınızda pencere yaklaşık %70 daralır.",
      },
      {
        title: "Filo Risk Karşılaştırması",
        desc: "Bir filodaki gemileri tutarlı sağlık ve risk göstergeleri üzerinden karşılaştırın; teknik amirlerin dikkatini en önemli yere önceliklendirin.",
      },
      {
        title: "Dijital İkizi Besler",
        desc: "AshFI verisi ve ASHMOP'un operasyonel dijital ikizi birlikte çalışmak üzere tasarlanmıştır. Burada üretilen öngörüler, filonun dijital ikiz olgunluğu büyüdükçe doğrudan tam bir ASHMOP dağıtımına akabilir.",
      },
    ],
    howTitle: "Nasıl çalışır",
    steps: [
      "Gemi IMO numaranız veya filo detaylarınızla demo talep edin",
      "AshFI'nin ürettiği öngörü türünü gösteren bir örnek analiz alın",
      "Ekibimiz, operasyonunuza uygun filo çapında bir dağıtımı kapsamlandırmak için sizinle iletişime geçer",
    ],
    formTitle: "Demo talep edin",
    heroCtaPrimary: "Demo Talep Et",
    suiteTitle: "AshFI ve Asheriv paketi",
    suiteBody:
      "AshFI, Asheriv denizcilik zekâsı paketindeki üç üründen biridir. AshSIM, tersane tasarım ve inşaat verisini dijital ikize bağlar. ASHMOP, tam operasyonel dijital ikiz platformudur. AshFI, sensör entegrasyonu gerektirmeden filo görünürlüğü sunar; hem bağımsız bir araç hem de ASHMOP'a beslenen bir veri kaynağıdır.",
    linkAshmop: "AshMOP",
    linkSim: "AshSIM",
    linkEvidence: "Evidence Pack",
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
      <main id="main-content" className="min-h-screen bg-[#0A0F1E] text-white">
        <section
          className="relative border-b border-white/10 pt-32 pb-20 sm:pt-40"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(10,15,30,0.8), rgba(10,15,30,0.8)), url(${PRODUCT_HERO_IMAGES.ashfi})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">{c.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-[#CBD5E1]">{c.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#contact" className="rounded-full bg-[#0A0F1E] px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-[#1C3D5A]">
                {c.heroCtaPrimary}
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 text-[#3D4852] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <p className="text-lg leading-relaxed">{c.intro}</p>
            <div className="mt-8 border-l-4 border-[#00D4FF] bg-white px-6 py-5">
              <h2 className="text-2xl font-semibold text-[#0A0F1E]">{c.whyTitle}</h2>
              <p className="mt-3 leading-relaxed text-[#3D4852]">{c.whyBody}</p>
            </div>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-heading text-3xl font-bold text-white">{c.featuresTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {c.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-white/10 bg-[#0D1627] p-6"
                >
                  <div className="mb-4 h-2 w-10 rounded-full bg-[#00D4FF]" />
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1C3D5A] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-heading text-3xl font-bold text-white mb-8">{c.howTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {c.steps.map((step, index) => (
                <div key={step} className="text-center rounded-xl border border-white/10 bg-[#0A0F1E]/35 p-6">
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#00D4FF]/15 text-sm font-bold text-[#00D4FF]">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-[#0D1627] p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">{c.suiteTitle}</h2>
            <p className="text-[#CBD5E1] leading-relaxed mb-6">{c.suiteBody}</p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 text-sm font-semibold">
              <Link href="/ashmop" className="text-[#00D4FF] hover:text-[#67E5FF] transition-colors">
                {c.linkAshmop}
              </Link>
              <Link href="/ashsim" className="text-[#00D4FF] hover:text-[#67E5FF] transition-colors">
                {c.linkSim}
              </Link>
              <Link
                href="/evidence-pack"
                className="text-[#00D4FF] hover:text-[#67E5FF] transition-colors"
              >
                {c.linkEvidence}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
