"use client";

import { useParams } from "next/navigation";

const strings = {
  en: {
    label: "WHERE WE OPERATE",
    headline: "Deployed across three maritime regions.",
    locations: [
      { city: "Istanbul, Turkey", desc: "R&D & Shipyard Integration" },
      { city: "London, UK", desc: "Platform Development & Research" },
      { city: "Dubai, UAE", desc: "Gulf & Regional Operations" },
    ],
  },
  tr: {
    label: "NEREDE CALISIYORUZ",
    headline: "Uc denizcilik bolgesinde konuslandirilmis.",
    locations: [
      { city: "Istanbul, Turkiye", desc: "Ar-Ge ve Tersane Entegrasyonu" },
      { city: "Londra, Birlesik Krallik", desc: "Platform Gelistirme ve Arastirma" },
      { city: "Dubai, BAE", desc: "Korfez ve Bolgesel Operasyonlar" },
    ],
  },
} as const;

const locationDots = [
  { city: "Istanbul", x: 555, y: 190 },
  { city: "London", x: 468, y: 160 },
  { city: "Dubai", x: 605, y: 222 },
];

export default function GeographicPresence() {
  const params = useParams();
  const lang = (params?.lang as string) ?? (params?.locale as string) ?? "en";
  const t = strings[lang as keyof typeof strings] ?? strings.en;

  return (
    <section className="bg-white px-6 py-20 text-[#1A1A2E] sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-[#00B4D8]">{t.label}</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-sans text-3xl font-bold text-[#1A1A2E] sm:text-5xl">
            {t.headline}
          </h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] p-4">
          <div className="relative aspect-[16/7] w-full rounded-lg bg-[radial-gradient(circle_at_25%_20%,rgba(0,212,255,0.12),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(230,184,0,0.1),transparent_42%)]">
            <svg viewBox="0 0 1000 500" className="h-full w-full">
              <path d="M 80 80 L 130 70 L 190 80 L 220 120 L 240 160 L 210 200 L 190 240 L 160 260 L 130 250 L 100 220 L 80 180 L 60 140 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
              <path d="M 190 270 L 220 260 L 250 280 L 260 320 L 250 370 L 220 400 L 190 390 L 170 360 L 165 320 L 175 290 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
              <path d="M 440 80 L 490 75 L 520 90 L 530 110 L 510 130 L 480 140 L 450 135 L 430 120 L 430 100 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
              <path d="M 460 160 L 510 155 L 545 170 L 560 210 L 555 260 L 540 310 L 510 340 L 480 340 L 455 310 L 445 260 L 445 210 L 450 175 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
              <path d="M 540 70 L 650 60 L 760 70 L 830 90 L 870 120 L 860 160 L 820 190 L 760 200 L 700 210 L 640 200 L 590 180 L 555 155 L 540 130 L 535 100 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
              <path d="M 580 200 L 610 195 L 630 215 L 625 245 L 600 250 L 580 235 L 572 215 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
              <path d="M 740 300 L 810 290 L 860 310 L 870 350 L 840 390 L 790 400 L 740 390 L 710 360 L 715 325 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
              {locationDots.map((loc, index) => (
                <g key={loc.city}>
                  <circle cx={loc.x} cy={loc.y} r="6" fill="#00D4FF" />
                  <circle cx={loc.x} cy={loc.y} r="12" fill="none" stroke="#00D4FF" strokeWidth="1.5" opacity="0.5">
                    <animate attributeName="r" values="8;16;8" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  <text x={loc.x + 10} y={loc.y - 10} fontSize="12" fill="#0A0F1E" fontWeight="600">
                    {t.locations[index].city}
                  </text>
                  <text x={loc.x + 10} y={loc.y + 6} fontSize="10" fill="#64748B">
                    {t.locations[index].desc}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {t.locations.map((loc) => (
            <div key={loc.city} className="rounded-lg border border-[#E5E7EB] bg-white p-4">
              <p className="font-semibold text-[#1A1A2E]">{loc.city}</p>
              <p className="mt-1 text-sm text-[#6B7280]">{loc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
