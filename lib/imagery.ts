/**
 * Homepage layout imagery (user-provided clean PNG assets).
 * Hero WebPs are 2x upscaled exports for retina / wide viewports.
 */

export const LAYOUT_IMAGES = {
  hero: "/images/home/hero.webp",
  secondHero: "/images/home/second-hero.webp",
} as const;

export const LAYOUT_IMAGE_DIMS = {
  hero: { width: 1024, height: 918 },
  secondHero: { width: 1024, height: 831 },
} as const;

/** CSS replacement for low-res gradient PNG (sampled from original asset). */
export const LAYOUT_GRADIENT_BAND = {
  aspectRatio: "1024 / 298",
  background:
    "linear-gradient(to bottom, #ffffff 0%, #d3d4d6 25%, #81858e 50%, #19212e 75%, #0D1424 100%)",
} as const;

/** @deprecated Use LAYOUT_IMAGES for homepage; kept for any legacy references */
export const HERO_IMAGES = {
  homepage: LAYOUT_IMAGES.hero,
  homepageSecondary: LAYOUT_IMAGES.secondHero,
  homepageMobile: LAYOUT_IMAGES.hero,
  homepageSecondaryMobile: LAYOUT_IMAGES.secondHero,
} as const;

export const HERO_IMAGE_META = {
  homepage: {
    provider: "Local asset",
    description: "Aerial offshore platform with support vessels",
    waterColorApprox: "#0C4A63",
    objectPosition: "center bottom",
    horizonStopPercent: 54,
  },
} as const;
