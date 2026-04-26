"use client";

import { useParams } from "next/navigation";
import { Code2, Download, RadioTower } from "lucide-react";

const strings = {
  en: {
    label: "FOR DEVELOPERS",
    headline: "Build on maritime operational data.",
    subheadline:
      "Access vessel health, telemetry, and lifecycle records through the A'SHERIV API. Integrate maritime intelligence into your systems and applications.",
    features: [
      {
        title: "REST API",
        description:
          "OpenAPI 3.0 specification. JSON responses. Bearer token authentication. Rate limits per endpoint class. Versioned - current: v1.",
        tag: "JSON · OpenAPI 3.0",
        detail: "GET /api/v1/vessels/{imo}/health · GET /api/v1/vessels/{imo}/assets · POST /api/v1/evidence-pack",
      },
      {
        title: "Webhooks & Streaming",
        description:
          "Subscribe to operational events. Anomaly alerts, RUL threshold crossings, maintenance triggers, alarm state changes - delivered to your endpoint as they occur.",
        tag: "Kafka · WebSocket",
        detail: "Events: anomaly.detected · rul.threshold · alarm.triggered · maintenance.due",
      },
      {
        title: "Data Export",
        description:
          "Bulk export of operational records for defined vessels and time windows. Suitable for offline analysis, audit packages, and data migration.",
        tag: "CSV · JSON · PDF",
        detail: "Formats: structured JSON, flat CSV, formatted PDF evidence packs",
      },
    ],
    apiAccessBtn: "REQUEST API ACCESS",
    docsLink: "View Documentation →",
  },
  tr: {
    label: "GELISTIRICILER ICIN",
    headline: "Denizcilik operasyonel verisi uzerine insa edin.",
    subheadline:
      "A'SHERIV API'si araciligiyla gemi sagligi, telemetri ve yasam dongusu kayitlarina erisin. Denizcilik zekasini kendi sistemlerinize ve uygulamalariniza entegre edin.",
    features: [
      {
        title: "REST API",
        description:
          "OpenAPI 3.0 spesifikasyonu, JSON cevaplar, bearer token kimlik dogrulamasi ve endpoint sinifina gore oran sinirlari. Surumlu - mevcut: v1.",
        tag: "JSON · OpenAPI 3.0",
        detail: "GET /api/v1/vessels/{imo}/health · GET /api/v1/vessels/{imo}/assets · POST /api/v1/evidence-pack",
      },
      {
        title: "Webhook ve Akis",
        description:
          "Operasyonel olaylara abone olun. Anomali alarmlari, RUL esik gecisleri, bakim tetikleyicileri ve alarm durum degisimleri gercek zamanli iletilir.",
        tag: "Kafka · WebSocket",
        detail: "Events: anomaly.detected · rul.threshold · alarm.triggered · maintenance.due",
      },
      {
        title: "Veri Disa Aktarma",
        description:
          "Tanimli gemi ve zaman pencereleri icin operasyonel kayitlarin toplu disa aktarimi. Cevrimdisi analiz, denetim paketleri ve veri migrasyonu icin uygundur.",
        tag: "CSV · JSON · PDF",
        detail: "Formats: structured JSON, flat CSV, formatted PDF evidence packs",
      },
    ],
    apiAccessBtn: "API ERISIMI TALEP ET",
    docsLink: "Dokumantasyonu Goruntule →",
  },
} as const;

const icons = [Code2, RadioTower, Download];

export default function Developers() {
  const params = useParams();
  const lang = (params?.lang as string) ?? (params?.locale as string) ?? "en";
  const t = strings[lang as keyof typeof strings] ?? strings.en;

  const codeRows = [
    ['"vessel_imo"', '"9876543"'],
    ['"vessel_name"', '"MV BOSPHORUS PIONEER"'],
    ['"health_score"', "84"],
    ['"rul_days"', "141"],
    ['"risk_level"', '"MEDIUM"'],
    ['"last_updated"', '"2026-03-23T14:30:00Z"'],
  ];

  return (
    <section id="developers" className="bg-[#0A0F1E] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-[#00D4FF]">{t.label}</p>
        <h2 className="mt-4 font-sans text-3xl font-bold sm:text-5xl">{t.headline}</h2>
        <p className="mt-5 max-w-3xl text-[#CBD5E1]">{t.subheadline}</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2 mb-10">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#00D4FF] mb-3">AVAILABLE DATA</p>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              {[
                "Vessel asset registry and SFI-coded component hierarchy",
                "Real-time and historical sensor telemetry",
                "Alarm events with context and resolution records",
                "Maintenance work orders and completion records",
                "Asset health scores and RUL estimates",
                "Evidence pack exports (JSON, PDF)",
                "Fleet-level aggregated health metrics",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00D4FF] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#00D4FF] mb-3">INTEGRATION PATTERNS</p>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              {[
                "Fleet management systems - health score and RUL feeds",
                "ERP and CMMS - maintenance work order sync",
                "Class and flag portals - evidence pack delivery",
                "Insurance platforms - risk score and claims data",
                "Shore-based operations centres - real-time alert streams",
                "Custom dashboards and reporting tools",
                "Third-party analytics and ML pipelines",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E6B800] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {t.features.map((feature, index) => {
            const Icon = icons[index];
            return (
            <article key={feature.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
              <Icon className="h-8 w-8 text-[#00D4FF]" />
              <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#D1D5DB]">{feature.description}</p>
              <span className="mt-4 inline-block rounded-full border border-[#00D4FF]/40 px-3 py-1 text-xs font-semibold text-[#00D4FF]">
                {feature.tag}
              </span>
              <p className="mt-3 text-xs text-[#6B7280] font-mono leading-relaxed">{feature.detail}</p>
            </article>
          )})}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-[#0D1627] p-6 font-mono text-sm">
          <p className="text-[#9CA3AF]">{"// Example: Get vessel health score"}</p>
          <p className="mt-2 text-white">GET /api/v1/vessels/{"{imo}"}/health</p>
          <p className="mt-4 text-[#9CA3AF]">Response:</p>
          <pre className="mt-2 overflow-x-auto whitespace-pre-wrap">
            <span className="text-white">{"{"}</span>
            {codeRows.map(([key, value], index) => (
              <span key={key} className="block">
                <span className="text-white">{"  "}</span>
                <span className="text-[#00D4FF]">{key}</span>
                <span className="text-white">{": "}</span>
                <span className="text-white">{value}</span>
                <span className="text-white">{index < codeRows.length - 1 ? "," : ""}</span>
              </span>
            ))}
            <span className="text-white">{"}"}</span>
          </pre>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a
            href="/?role=Developer#contact"
            className="rounded-md border border-[#00D4FF] px-5 py-3 text-sm font-semibold text-[#00D4FF] transition hover:bg-[#00D4FF] hover:text-[#0A0F1E]"
          >
            {t.apiAccessBtn}
          </a>
          <a href="#developers" className="text-sm font-semibold text-white hover:text-[#00D4FF]">
            {t.docsLink}
          </a>
        </div>
      </div>
    </section>
  );
}
