"use client";

import { useParams } from "next/navigation";

export default function WorldMap() {
  const params = useParams();
  const lang = ((params?.lang as string) ?? (params?.locale as string) ?? "en").toLowerCase();
  const isTr = lang === "tr";

  const locations = [
    { city: isTr ? "Istanbul, Turkiye" : "Istanbul, Turkey", desc: isTr ? "Ar-Ge ve Tersane Entegrasyonu" : "R&D & Shipyard Integration", x: 555, y: 190 },
    { city: isTr ? "Londra, Birlesik Krallik" : "London, UK", desc: isTr ? "Platform Gelistirme ve Arastirma" : "Platform Development & Research", x: 468, y: 160 },
    { city: isTr ? "Dubai, BAE" : "Dubai, UAE", desc: isTr ? "Korfez ve Bolgesel Operasyonlar" : "Gulf & Regional Operations", x: 605, y: 222 },
  ];

  return (
    <div className="w-full h-[600px] relative bg-[#F8FAFC] rounded-lg border border-[#E5E7EB] p-4">
      <svg viewBox="0 0 1000 500" className="h-full w-full">
        <path d="M 80 80 L 130 70 L 190 80 L 220 120 L 240 160 L 210 200 L 190 240 L 160 260 L 130 250 L 100 220 L 80 180 L 60 140 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
        <path d="M 190 270 L 220 260 L 250 280 L 260 320 L 250 370 L 220 400 L 190 390 L 170 360 L 165 320 L 175 290 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
        <path d="M 440 80 L 490 75 L 520 90 L 530 110 L 510 130 L 480 140 L 450 135 L 430 120 L 430 100 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
        <path d="M 460 160 L 510 155 L 545 170 L 560 210 L 555 260 L 540 310 L 510 340 L 480 340 L 455 310 L 445 260 L 445 210 L 450 175 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
        <path d="M 540 70 L 650 60 L 760 70 L 830 90 L 870 120 L 860 160 L 820 190 L 760 200 L 700 210 L 640 200 L 590 180 L 555 155 L 540 130 L 535 100 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
        <path d="M 580 200 L 610 195 L 630 215 L 625 245 L 600 250 L 580 235 L 572 215 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
        <path d="M 740 300 L 810 290 L 860 310 L 870 350 L 840 390 L 790 400 L 740 390 L 710 360 L 715 325 Z" fill="none" stroke="#C9D4E4" strokeWidth="1.5"/>
        {locations.map((loc) => (
          <g key={loc.city}>
            <circle cx={loc.x} cy={loc.y} r="6" fill="#00D4FF" />
            <circle cx={loc.x} cy={loc.y} r="12" fill="none" stroke="#00D4FF" strokeWidth="1.5" opacity="0.5">
              <animate attributeName="r" values="8;16;8" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <text x={loc.x + 10} y={loc.y - 10} fontSize="12" fill="#0A0F1E" fontWeight="600">
              {loc.city}
            </text>
            <text x={loc.x + 10} y={loc.y + 6} fontSize="10" fill="#64748B">
              {loc.desc}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
