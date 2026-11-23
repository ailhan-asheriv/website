import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";
import { PRODUCT_HERO_IMAGES } from "../../../lib/imagery";

const content = {
  en: {
    title: "AshFI",
    tagline:
      "Main engine maintenance windows. No sensors, no hardware, no integration.",
    intro:
      "AshFI tells you how far ahead a vessel's main engine is likely to need its next major overhaul. It runs on the IMO number alone: nothing to install on board, nothing to integrate, no waiting for a retrofit. Connect the operating data you already collect and the window gets about 38% tighter.",
    whyTitle: "Why AshFI",
    whyBody:
      "Condition monitoring has always meant hardware: sensors, cabling, commissioning, and months before the first useful answer. AshFI starts the other way round. You get a maintenance window for every vessel in the fleet on day one, from the IMO number. From there it sharpens as you connect data, on your schedule, with no capital outlay at any step.",
    featuresTitle: "What AshFI does",
    features: [
      {
        title: "A maintenance window for every vessel",
        desc: "When the main engine is likely to need attention, as a range rather than a single number, so it can go straight into a planning conversation. Every estimate carries its own confidence interval.",
      },
      {
        title: "Fleet ranking against real peers",
        desc: "See which vessels need attention first, ranked against their actual peers of the same type and reporting year, not against a generic industry average.",
      },
      {
        title: "About 38% tighter with your own data",
        desc: "Connect the operating data your crews already record and the window narrows (about ±372 → ±231 calendar days on a typical unlocked case). No new instrumentation: the fields we need are the ones already on your noon report.",
      },
      {
        title: "Built to carry into the digital twin",
        desc: "AshFI and ASHMOP are designed around the same condition model, so a vessel record built here is intended to carry forward into a full ASHMOP deployment as a fleet connects more data.",
      },
    ],
    howTitle: "How it works",
    steps: [
      "Enter an IMO number and see the vessel's maintenance window today",
      "Connect your operating data to narrow it",
      "Scale across the fleet, at your own pace",
    ],
    formTitle: "Request access",
    heroCtaPrimary: "Request Access",
    suiteTitle: "AshFI and the Asheriv suite",
    suiteBody:
      "AshFI is one of three products in the Asheriv maritime intelligence suite. AshSIM connects shipyard design and build data. ASHMOP is the operational digital twin platform. AshFI is where a fleet starts, because it needs nothing installed.",
    linkAshmop: "AshMOP",
    linkSim: "AshSIM",
    linkEvidence: "Evidence Pack",
  },
  tr: {
    title: "AshFI",
    tagline:
      "Ana makine bakım penceresi. Sensör yok, donanım yok, entegrasyon yok.",
    intro:
      "AshFI, bir geminin ana makinesinin bir sonraki büyük overhaul'a ne kadar süre kaldığını söyler. Yalnızca IMO numarasıyla çalışır: gemiye kurulacak bir şey yok, entegre edilecek bir sistem yok, tadilat beklemek yok. Zaten topladığınız işletme verisini bağladığınızda pencere yaklaşık %38 daralır.",
    whyTitle: "Neden AshFI",
    whyBody:
      "Durum takibi bugüne kadar hep donanım demekti: sensör, kablolama, devreye alma, ve ilk işe yarar cevaba kadar geçen aylar. AshFI tersinden başlıyor. Filodaki her gemi için bakım penceresini ilk gün alıyorsunuz, sadece IMO numarasından. Sonrasında veri bağladıkça keskinleşiyor, kendi takviminizle ve hiçbir adımda yatırım gerektirmeden.",
    featuresTitle: "AshFI ne yapar",
    features: [
      {
        title: "Her gemi için bakım penceresi",
        desc: "Ana makinenin ne zaman bakım gerektireceğini tek bir sayı olarak değil aralık olarak verir, böylece doğrudan planlama masasına girer. Her tahmin kendi güven aralığıyla gelir.",
      },
      {
        title: "Gerçek akranlara göre filo sıralaması",
        desc: "Hangi gemiye önce bakmak gerektiğini görün. Karşılaştırma genel sektör ortalamasına göre değil, aynı tip ve aynı raporlama yılındaki gerçek akranlara göre yapılır.",
      },
      {
        title: "Kendi verinizle yaklaşık %38 daha dar",
        desc: "Ekiplerinizin zaten kaydettiği işletme verisini bağladığınızda pencere daralır (tipik açık pencerede yaklaşık ±372 → ±231 takvim günü). Yeni cihaz gerekmez: ihtiyacımız olan alanlar noon raporunuzda zaten var.",
      },
      {
        title: "Dijital ikize taşınacak şekilde kurgulandı",
        desc: "AshFI ve ASHMOP aynı durum modeli etrafında tasarlandı; burada oluşan gemi kaydı, filo daha fazla veri bağladıkça tam bir ASHMOP kurulumuna taşınacak şekilde planlandı.",
      },
    ],
    howTitle: "Nasıl çalışır",
    steps: [
      "IMO numarasını girin, geminin bakım penceresini bugün görün",
      "Daraltmak için işletme verinizi bağlayın",
      "Kendi hızınızda filoya yayın",
    ],
    formTitle: "Erişim talep edin",
    heroCtaPrimary: "Erişim Talep Et",
    suiteTitle: "AshFI ve Asheriv paketi",
    suiteBody:
      "AshFI, Asheriv denizcilik zekası paketindeki üç üründen biri. AshSIM tersane tasarım ve inşa verisini bağlar. ASHMOP tam operasyonel dijital ikiz platformudur. AshFI filonun başladığı yerdir, çünkü hiçbir kurulum gerektirmez.",
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
