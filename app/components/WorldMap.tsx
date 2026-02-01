"use client";

import { useState } from "react";
import { useRouter, usePathname } from "../../lib/routing";
import { useLocale, useTranslations } from "next-intl";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function WorldMap() {
  const t = useTranslations("regions");
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [position, setPosition] = useState({ coordinates: [20, 30] as [number, number], zoom: 1 });
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const locations = [
    {
      name: t("turkey"),
      nameKey: "turkey",
      coordinates: [28.9, 41.0] as [number, number],
      description: t("turkeyDesc"),
      route: "/turkey",
    },
    {
      name: t("uk"),
      nameKey: "uk",
      coordinates: [-0.1, 51.5] as [number, number],
      description: t("ukDesc"),
      route: "/uk",
    },
    {
      name: t("uae"),
      nameKey: "uae",
      coordinates: [55.3, 25.2] as [number, number],
      description: t("uaeDesc"),
      route: null,
    },
  ];

  const handleMoveEnd = (position: { coordinates: [number, number]; zoom: number }) => {
    setPosition(position);
  };

  const handleMarkerClick = (location: typeof locations[0]) => {
    if (location.route) {
      router.push(`${location.route}`, { locale });
    }
  };

  return (
    <div className="w-full h-[600px] relative">
      <ComposableMap
        projectionConfig={{
          scale: 150,
        }}
        className="w-full h-full"
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1E2838"
                  stroke="#2D3748"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: "#2D3748" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          {locations.map((location, index) => (
            <Marker
              key={index}
              coordinates={location.coordinates}
            >
              <g
                onMouseEnter={() => setHoveredLocation(location.nameKey)}
                onMouseLeave={() => setHoveredLocation(null)}
                onClick={() => handleMarkerClick(location)}
                className={`${location.route ? "cursor-pointer" : "cursor-default"}`}
              >
                <circle
                  r={hoveredLocation === location.nameKey ? 8 : 6}
                  fill="#00D9FF"
                  stroke="#6366F1"
                  strokeWidth={2}
                  className="transition-all duration-200"
                />
                <circle
                  r={hoveredLocation === location.nameKey ? 16 : 0}
                  fill="#00D9FF"
                  opacity={0.2}
                  className="transition-all duration-200"
                />
                {location.route && (
                  <text
                    x={0}
                    y={-25}
                    textAnchor="middle"
                    fill="#00D9FF"
                    fontSize={10}
                    fontWeight="bold"
                    className="pointer-events-none"
                  >
                    {locale === "tr" ? "Tıkla" : "Click"}
                  </text>
                )}
              </g>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip - positioned near marker */}
      {hoveredLocation && (
        <div className="absolute top-4 right-4 bg-dark-lighter border border-primary/30 rounded-lg p-4 shadow-lg shadow-primary/20 min-w-[300px] max-w-md z-10">
          <h3 className="text-lg font-bold text-white mb-2">
            {locations.find((loc) => loc.nameKey === hoveredLocation)?.name}
          </h3>
          <p className="text-sm text-gray-light leading-relaxed mb-2">
            {locations.find((loc) => loc.nameKey === hoveredLocation)?.description}
          </p>
          {locations.find((loc) => loc.nameKey === hoveredLocation)?.route && (
            <p className="text-xs text-primary mt-2">
              {locale === "tr" ? "Detaylar için işarete tıklayın" : "Click marker to view details"}
            </p>
          )}
        </div>
      )}

      {/* Zoom Instructions */}
      <div className="absolute bottom-4 left-4 bg-dark-lighter/80 backdrop-blur-sm border border-primary/20 rounded-lg px-3 py-2 text-xs text-gray-light">
        {t("zoomHint")}
      </div>
    </div>
  );
}
