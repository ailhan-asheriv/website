"use client";

import Image from "next/image";
import { getAsset, type AssetId } from "../../lib/assets";

export interface AssetImageProps {
  assetId: AssetId;
  className?: string;
  /** Use when image is above the fold (e.g. hero) */
  priority?: boolean;
  /** Fill container; requires parent with position and dimensions */
  fill?: boolean;
  sizes?: string;
  /** Show asset ID label in placeholder (helps designers); default true in dev */
  showPlaceholderLabel?: boolean;
}

/**
 * Renders an approved asset by ID. When path is set, uses Next/Image.
 * When path is null, renders a stable placeholder container (no broken image).
 * Swap in final artwork by setting path in lib/assets.ts.
 */
export default function AssetImage({
  assetId,
  className = "",
  priority = false,
  fill = false,
  sizes,
  showPlaceholderLabel = true,
}: AssetImageProps) {
  const asset = getAsset(assetId);
  const hasImage = asset.path != null && asset.path.length > 0;

  if (hasImage && asset.path) {
    const sizesVal = sizes ?? "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px";
    if (fill) {
      return (
        <Image
          src={asset.path}
          alt={asset.alt}
          fill
          className={className}
          priority={priority}
          sizes={sizesVal}
          style={{ objectFit: "cover" }}
        />
      );
    }
    return (
      <Image
        src={asset.path}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        className={`rounded-card overflow-hidden ${className}`.trim()}
        priority={priority}
        sizes={sizesVal}
      />
    );
  }

  // Placeholder: stable aspect-ratio container, no broken image
  const aspectRatio = (asset.height / asset.width) * 100;
  const wrapperClass = fill
    ? `absolute inset-0 rounded-card overflow-hidden border border-navy-light bg-charcoal/60 ${className}`.trim()
    : `relative w-full overflow-hidden rounded-card border border-navy-light bg-charcoal/60 ${className}`.trim();
  const wrapperStyle = fill ? undefined : { paddingBottom: `${aspectRatio}%` };

  return (
    <div
      className={wrapperClass}
      style={wrapperStyle}
      role="img"
      aria-label={asset.alt}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-2 flex items-center justify-center rounded border border-dashed border-navy-light/50">
          {showPlaceholderLabel && (
            <span className="text-muted text-xs font-mono px-2 text-center select-none">
              {asset.id}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
