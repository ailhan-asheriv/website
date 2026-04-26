import { ReactNode } from "react";
import SectionHeader from "./SectionHeader";

export interface RegionCard {
  name: string;
  description: string;
}

export interface RegionCardsProps {
  title: string;
  intro: string;
  regions: RegionCard[];
  /** Optional content below the cards (e.g. map) */
  children?: ReactNode;
}

export default function RegionCards({ title, intro, regions, children }: RegionCardsProps) {
  return (
    <>
      <SectionHeader title={title} accent align="center" lead={<p>{intro}</p>} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        {regions.map((region, i) => (
          <div key={i} className="card-base p-5">
            <h4 className="font-semibold text-white mb-2">{region.name}</h4>
            <p className="text-muted text-sm leading-relaxed">{region.description}</p>
          </div>
        ))}
      </div>
      {children}
    </>
  );
}
