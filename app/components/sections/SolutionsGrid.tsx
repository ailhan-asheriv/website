import { Link } from "../../../lib/routing";
import SectionHeader from "./SectionHeader";
import AssetImage from "../AssetImage";
import type { AssetId } from "../../../lib/assets";

export interface SolutionCard {
  title: string;
  description: string;
  cta: string;
  ctaHref: string;
}

export interface SolutionsGridProps {
  title: string;
  intro: string;
  cards: SolutionCard[];
  /** Optional asset IDs, one per card (same order as cards) */
  assetIds?: readonly AssetId[] | null;
}

export default function SolutionsGrid({ title, intro, cards, assetIds }: SolutionsGridProps) {
  return (
    <>
      <SectionHeader title={title} accent align="center" lead={<p>{intro}</p>} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className="card-base p-6 flex flex-col overflow-hidden"
          >
            {assetIds?.[i] && (
              <div className="-mx-6 -mt-6 mb-4 aspect-[3/2] min-h-[160px] relative overflow-hidden rounded-t-card">
                <AssetImage
                  assetId={assetIds[i]}
                  fill
                  showPlaceholderLabel={true}
                />
              </div>
            )}
            <h3 className="font-semibold text-offwhite mb-2 font-heading">{card.title}</h3>
            <p className="text-muted text-sm leading-relaxed flex-grow mb-4">
              {card.description}
            </p>
            <Link href={card.ctaHref} className="link-arrow">
              {card.cta} →
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
