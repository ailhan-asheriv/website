import Image from "next/image";
import { Link } from "../../../lib/routing";
import type { AssetId } from "../../../lib/assets";
import { getAsset } from "../../../lib/assets";

export interface HeroSectionProps {
  /** Logo in hero removed; logo lives in header. Kept for content shape. */
  logoImage?: string;
  logoAlt?: string;
  /** Approved hero visual asset (e.g. ash_home_hero_v01). When path is set, used as full-bleed background. */
  heroAssetId?: AssetId | null;
  /** Optional one-line eyebrow */
  eyebrow?: string;
  headline: string;
  /** One or two sentences on the hero */
  tagline: string;
  /** Legacy: not shown on hero (use tagline); kept for content shape */
  subheadline?: string;
  supporting?: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
}

export default function HeroSection({
  heroAssetId,
  eyebrow,
  headline,
  tagline,
  ctaPrimary,
  ctaSecondary,
  ctaPrimaryHref,
  ctaSecondaryHref,
}: HeroSectionProps) {
  const heroAsset = heroAssetId ? getAsset(heroAssetId) : null;
  const bgPath = heroAsset && heroAsset.path && heroAsset.path.length > 0 ? heroAsset.path : null;

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-navy"
    >
      {/* Full-bleed background: image (if available) or gradient */}
      {bgPath && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgPath}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/80" aria-hidden />
        </div>
      )}
      {!bgPath && (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-navy via-navy to-charcoal/40" aria-hidden />
      )}

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {eyebrow && (
          <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-cyan/90 mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-offwhite leading-tight mb-5 font-heading">
          {headline}
        </h1>
        <p className="text-lg sm:text-xl text-offwhite/90 max-w-2xl mx-auto mb-10 sm:mb-12">
          {tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={ctaPrimaryHref} className="btn-primary">
            {ctaPrimary}
          </Link>
          <Link href={ctaSecondaryHref} className="btn-secondary">
            {ctaSecondary}
          </Link>
        </div>
      </div>

      {/* Subtle scroll hint at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted/60 text-xs uppercase tracking-widest">
        Scroll
      </div>
    </section>
  );
}
