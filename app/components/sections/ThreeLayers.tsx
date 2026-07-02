"use client";

import LayoutImage from "../LayoutImage";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Gauge, GitBranch, ShipWheel } from "lucide-react";
import { Link } from "../../../lib/routing";
import { LAYOUT_IMAGES, LAYOUT_IMAGE_DIMS } from "../../../lib/imagery";

const strings = {
  en: {
    label: "WHAT WE DELIVER",
    headline: "Three layers of operational intelligence.",
    layers: [
      {
        title: "Asset Intelligence",
        description:
          "Component-to-vessel health scoring. Degradation modelling, anomaly detection, and remaining useful life estimation for propulsion systems, auxiliary machinery, and structural elements.",
        href: "/maintenance-intelligence",
        cta: "Learn more",
      },
      {
        title: "Operational Intelligence",
        description:
          "Structured operational records - alarm events, maintenance decisions, inspection findings - forming an audit-ready operational memory for each vessel.",
        href: "/operational-digital-twin",
        cta: "Learn more",
      },
      {
        title: "Lifecycle Intelligence",
        description:
          "Build-certificate data integrated with operational history. Structural and machinery state tracked from commissioning to end-of-life to support asset valuation and refit planning.",
        href: "/lifecycle-intelligence",
        cta: "Learn more",
      },
    ],
  },
  tr: {
    label: "NE SUNUYORUZ",
    headline: "Uc katmanli operasyonel zeka.",
    layers: [
      {
        title: "Varlik Zekasi",
        description:
          "Komponentten gemiye saglik skorlamasi. Itki sistemleri, yardimci makineler ve yapisal elemanlar icin bozunma modellemesi, anomali tespiti ve kalan faydali omur tahmini.",
        href: "/maintenance-intelligence",
        cta: "Daha fazla",
      },
      {
        title: "Operasyonel Zeka",
        description:
          "Yapilandirilmis operasyonel kayitlar - alarm olaylari, bakim kararlari, muayene bulgulari - her gemi icin denetim hazir bir operasyonel bellek olusturur.",
        href: "/operational-digital-twin",
        cta: "Daha fazla",
      },
      {
        title: "Yasam Dongusu Zekasi",
        description:
          "Insaat sertifikasi verileri operasyonel gecmisle entegre edilir. Yapisal ve makine durumu devreye almadan omur sonuna kadar izlenerek varlik degerlemesi ve onarim planlamasini destekler.",
        href: "/lifecycle-intelligence",
        cta: "Daha fazla",
      },
    ],
  },
} as const;

const layerIcons = [ShipWheel, Gauge, GitBranch];

export default function ThreeLayers() {
  const params = useParams();
  const lang = (params?.lang as string) ?? (params?.locale as string) ?? "en";
  const t = strings[lang as keyof typeof strings] ?? strings.en;

  return (
    <section id="intelligence" className="section-seam-up-lg overflow-hidden bg-brand-gradient">
      <div className="relative w-full overflow-hidden leading-[0]">
        <LayoutImage
          src={LAYOUT_IMAGES.secondHero}
          alt="Industrial crane with digital twin overlay above and subsea ROV below the waterline"
          width={LAYOUT_IMAGE_DIMS.secondHero.width}
          height={LAYOUT_IMAGE_DIMS.secondHero.height}
          className="layout-image gradient-pull-up"
        />

        <div className="absolute inset-x-0 top-0 px-6 pb-16 pt-64 sm:px-10 sm:pt-40 lg:px-16 lg:pt-48">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-md">
              <p className="text-xs font-semibold tracking-[0.24em] text-brand-cyan">{t.label}</p>
              <h2 className="mt-4 font-heading text-3xl font-bold text-[#0A0F1E] sm:text-4xl">
                {t.headline}
              </h2>

              <div className="mt-8 space-y-7 sm:mt-10 sm:space-y-8">
                {t.layers.map((layer, index) => {
                  const Icon = layerIcons[index];
                  return (
                    <motion.div
                      key={layer.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                      className="space-y-2"
                    >
                      <Icon className="h-7 w-7 text-brand-cyan" />
                      <h3 className="text-lg font-semibold text-[#0A0F1E] sm:text-xl">{layer.title}</h3>
                      <p className="text-sm leading-relaxed text-[#3D4852]">{layer.description}</p>
                      <Link
                        href={layer.href}
                        className="inline-block rounded-full bg-[#0A0F1E] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#1C3D5A]"
                      >
                        {layer.cta}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-36 sm:h-44 lg:h-52"
          style={{
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
          }}
          aria-hidden
        />
      </div>

      <div className="section-seam-up bg-white px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-center text-xs uppercase tracking-[0.2em] text-[#6B7280]">
            {lang === "tr" ? "Desteklenen Standartlar" : "Standards Supported"}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "SFI Group System",
              "ISO 14224",
              "IACS E26/E27",
              "IEC 62443",
              "FMI 2.0",
              "ISO 13381-1",
              "IFC 2x3 / IFC 4",
              "IMO MSC-FAL.1",
            ].map((std) => (
              <span
                key={std}
                className="rounded-md border border-[#E3E8EB] bg-white px-3 py-1.5 font-mono text-xs text-[#3D4852]"
              >
                {std}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
