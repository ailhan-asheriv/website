/**
 * Homepage layout imagery (user-provided clean PNG assets).
 */

export const LAYOUT_IMAGES = {
  hero: "/images/home/hero.png",
  heroGradient: "/images/home/gradient-from-bottom.png",
  secondHero: "/images/home/second-hero.png",
} as const;

export const LAYOUT_IMAGE_DIMS = {
  hero: { width: 933, height: 1024 },
  heroGradient: { width: 1024, height: 298 },
  secondHero: { width: 999, height: 1024 },
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
