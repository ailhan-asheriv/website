/**
 * Asheriv refurbish design tokens (Part 1+).
 * Maritime industrial software: operational seriousness, not consumer/playful.
 */

export const colors = {
  /** Primary dark background, hero sections */
  navyDeep: "#0A0F1E",
  /** Dark edge sampled from layout gradient PNGs (seam between image bands) */
  gradientNavy: "#0D1424",
  /** Secondary dark, card backgrounds on dark sections */
  steelBlue: "#1C3D5A",
  /** Single accent: CTAs and key data points */
  signalCyan: "#00D4FF",
  /** Light section backgrounds (never pure white) */
  offWhite: "#F7F9FA",
  /** Body text on light backgrounds */
  slateText: "#3D4852",
  /** Borders and dividers on light backgrounds */
  iceGray: "#E3E8EB",
} as const;

/** System stack per refurbish brief; no new font package dependencies */
export const fontStacks = {
  body: 'Calibri, "Segoe UI", Arial, Helvetica, sans-serif',
  /** Display: existing Inter variable when loaded, else system UI */
  display: 'var(--font-sans), Calibri, "Segoe UI", Arial, Helvetica, sans-serif',
  mono: 'var(--font-mono), "JetBrains Mono", Consolas, monospace',
} as const;

/** Recurring layout: full-bleed photo + translucent dark text panel */
export const layout = {
  /**
   * Navy brand sky blending into photo horizon, then transparent so water shows through.
   * Horizon stop tuned to HERO_IMAGE_META.homepage.horizonStopPercent (54%).
   */
  heroSkyBlendGradient: `linear-gradient(
    to bottom,
    #0A0F1E 0%,
    #0A0F1E 10%,
    #0A0F1E 18%,
    rgba(10, 15, 30, 0.96) 26%,
    rgba(10, 15, 30, 0.82) 36%,
    rgba(10, 15, 30, 0.52) 46%,
    rgba(10, 15, 30, 0.18) 52%,
    rgba(10, 15, 30, 0) 54%,
    transparent 56%,
    transparent 100%
  )`,
  photoOverlayGradient:
    "linear-gradient(to top right, rgba(10, 15, 30, 0.85) 0%, rgba(10, 15, 30, 0.65) 45%, rgba(10, 15, 30, 0.4) 100%)",
  photoOverlayGradientStrong:
    "linear-gradient(to top right, rgba(10, 15, 30, 0.92) 0%, rgba(10, 15, 30, 0.75) 50%, rgba(10, 15, 30, 0.55) 100%)",
  statStripBg: "rgba(10, 15, 30, 0.88)",
} as const;
