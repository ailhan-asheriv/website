import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";

const content = {
  en: {
    title: "Developer Resources",
    tagline: "Integrate A'SHERIV data into your maritime applications.",
    apiOverviewTitle: "API Overview",
    apiOverviewBody:
      "A'SHERIV provides REST API access to fleet health data, vessel analysis results, and evidence package exports. Authentication uses JWT bearer tokens. API access is currently available to integration partners.",
    apiCta: "Request API access",
    ashfiTitle: "AshFI API",
    ashfiBody:
      "The AshFI API provides programmatic access to AIS-derived vessel health analysis, risk scoring, CII estimation, and fleet benchmarking.",
    illustrativeNote:
      "Illustrative - request access for full documentation",
    webhookTitle: "Webhooks and Events",
    webhookBody:
      "Subscribe to vessel health alerts, threshold triggers, and report generation events via webhook. Configure per-vessel or per-fleet alert rules.",
    webhookStatus: "Coming Q3 2026",
    sdkTitle: "SDKs and Integrations",
    sdkBody:
      "Python and JavaScript SDKs are in development. REST API access is available now for early integration partners.",
    sdkStatus: "Python SDK - Coming Q3 2026",
    contact:
      "Building something with A'SHERIV data? Reach out at info@asheriv.com for early API access.",
  },
  tr: {
    title: "Gelistirici Kaynaklari",
    tagline: "A'SHERIV verisini denizcilik uygulamalariniza entegre edin.",
    apiOverviewTitle: "API Genel Bakis",
    apiOverviewBody:
      "A'SHERIV, filo saglik verisi, gemi analiz sonuclari ve kanit paketi disa aktarimlari icin REST API erisimi sunar. Kimlik dogrulama JWT bearer token ile yapilir. API erisimi su anda entegrasyon partnerleri icin aciktir.",
    apiCta: "API erisimi talep et",
    ashfiTitle: "AshFI API",
    ashfiBody:
      "AshFI API, AIS tabanli gemi saglik analizi, risk skorlamasi, CII tahmini ve filo benchmark verilerine programatik erisim saglar.",
    illustrativeNote: "Ornektir - tam dokuman icin erisim talep edin",
    webhookTitle: "Webhooks ve Eventler",
    webhookBody:
      "Gemi saglik alarmlari, esik tetiklemeleri ve rapor olusturma eventlerine webhook ile abone olun. Kural setleri gemi veya filo bazinda ayarlanabilir.",
    webhookStatus: "Q3 2026",
    sdkTitle: "SDK'lar ve Entegrasyonlar",
    sdkBody:
      "Python ve JavaScript SDK'lari gelistirme asamasindadir. Erken entegrasyon partnerleri icin REST API erisimi simdiden mevcuttur.",
    sdkStatus: "Python SDK - Q3 2026",
    contact:
      "A'SHERIV verisiyle bir sey mi gelistiriyorsunuz? Erken API erisimi icin info@asheriv.com ile iletisime gecin.",
  },
} as const;

export default async function DevelopersPage({
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
        <section className="border-b border-white/10 px-6 pb-16 pt-32 sm:px-10 sm:pt-40 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
              {c.title}
            </h1>
            <p className="mt-4 max-w-4xl text-lg text-[#CBD5E1]">{c.tagline}</p>
          </div>
        </section>

        <section className="bg-[#0A0F1E] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl space-y-6">
            <article className="rounded-xl border border-white/10 bg-[#0D1627] p-7">
              <h2 className="text-2xl font-semibold text-white">{c.apiOverviewTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">{c.apiOverviewBody}</p>
              <Link href="/#contact" className="mt-5 inline-block rounded-full bg-[#00D4FF] px-6 py-3 text-sm font-semibold text-[#0A0F1E] transition hover:bg-[#67E5FF]">
                {c.apiCta}
              </Link>
            </article>

            <article className="rounded-xl border border-white/10 bg-[#1C3D5A]/35 p-7">
              <h2 className="text-2xl font-semibold text-white">{c.ashfiTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">{c.ashfiBody}</p>
              <p className="mt-4 text-xs font-semibold text-[#00D4FF]">{c.illustrativeNote}</p>
              <pre className="mt-4 overflow-x-auto rounded-lg border border-white/10 bg-[#0A0F1E] p-4 text-xs text-[#DCE3EC]">
{`GET /v1/vessel/{imo}/health
GET /v1/fleet/benchmark
POST /v1/alerts/rules`}
              </pre>
            </article>

            <article className="rounded-xl border border-white/10 bg-[#0D1627] p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-white">{c.webhookTitle}</h2>
                <span className="rounded-full border border-[#00D4FF]/50 bg-[#00D4FF]/10 px-3 py-1 text-xs font-semibold text-[#00D4FF]">
                  {c.webhookStatus}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">{c.webhookBody}</p>
            </article>

            <article className="rounded-xl border border-white/10 bg-[#1C3D5A]/35 p-7">
              <h2 className="text-2xl font-semibold text-white">{c.sdkTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">{c.sdkBody}</p>
              <p className="mt-4 text-xs font-semibold text-[#00D4FF]">{c.sdkStatus}</p>
            </article>
          </div>
        </section>

        <section className="bg-[#F7F9FA] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-xl border border-[#E3E8EB] bg-white p-8">
            <p className="text-sm text-[#3D4852]">{c.contact}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
