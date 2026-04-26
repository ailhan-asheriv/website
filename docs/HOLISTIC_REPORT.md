# A'SHERIV Website — Holistic Report

**Report date:** March 2025  
**Purpose:** Single reference for what has been applied and what the implementation currently includes.

---

## 1. Tech Stack & Structure

| Layer | What’s in place |
|-------|------------------|
| **Framework** | Next.js 14 (App Router), React 18, TypeScript |
| **Styling** | Tailwind CSS; design tokens in `tailwind.config.ts` and `app/globals.css` |
| **i18n** | next-intl; locales `en` and `tr`; locale in path `/[locale]/...` |
| **Routing** | Middleware for locale; `lib/routing.ts` (Link, useRouter, usePathname from next-intl) |
| **API** | `/api/contact` POST (placeholder: logs body, returns 200) |

**Key directories**

- `app/[locale]/` — All locale-aware pages (home + inner pages).
- `app/components/` — Shared UI (Navigation, Footer, ContactForm, AssetImage, WorldMap, LanguageSwitcher).
- `app/components/sections/` — Reusable section components (Section, SectionHeader, HeroSection, SplitSection, SolutionsGrid, StakeholderCards, RegionCards, CTASection, PageScaffold).
- `lib/` — Content and config: `content/home.ts` (homepage copy), `assets.ts` (visual asset registry), `i18n.ts`, `routing.ts`.
- `messages/` — `en.json`, `tr.json` for nav, footer, forms, and inner-page strings.

---

## 2. Design System (Applied)

**Colors (Tailwind)**

- **Navy** `#0B1F3B` — Primary dark background, structure.
- **Charcoal** `#111827` — Alternate sections, cards.
- **Off-white** `#F6F7F9` — Text and breathing space.
- **Signal red** `#E23A3A` — CTAs, key highlights, accents.
- **Cyan** `#4FC3F7` — Data/tech cues, links, subtle accents.
- **Muted** `#9CA3AF` — Secondary text.

**Typography**

- **Headings:** Space Grotesk (`--font-heading`).
- **Body:** Inter (`--font-sans`).
- **Mono:** Available for technical/data labels.

**UI rules**

- Restrained radius (`rounded-section`, `rounded-card`).
- Subtle shadows only (`shadow-subtle`, `shadow-card`).
- Strong whitespace; no neon/crypto/SaaS blobs.
- Buttons: single primary (signal) and secondary (outline) style.

**Global utilities (globals.css)**

- Section: `section-padding`, `container-width`, `section-heading`, `section-lead`, `section-border`, `card-base`, `card-elevated`, `btn-primary`, `btn-secondary`, `link-arrow`, `tag`, `list-bullet`, `callout-box`, `card-hover`.
- Accessibility: `a:focus-visible` / `button:focus-visible` ring; `.skip-link` for “Skip to main content.”
- Motion: `prefers-reduced-motion` respected (scroll-behavior, transitions).

---

## 3. Homepage (What’s Applied)

**Sections (order)**

1. **Hero** — Logo, eyebrow (“Digital Twin Infrastructure for Maritime Operations”), headline (“From Shipyard Data to Live Vessel Intelligence”), subheadline, supporting line, two CTAs (Start a Pilot Discussion, Explore the Platform), hero asset placeholder.
2. **Problem** — Headline on data fragmentation, three paragraphs, fragmentation asset placeholder, label tags (Shipyard Records, Telemetry, Maintenance Logs, etc.).
3. **Lifecycle** — Headline “One Digital Twin Across the Vessel Lifecycle,” intro, lifecycle diagram asset placeholder, stage tags (Design, Shipyard Production, Vessel Operations, Maintenance & Repairs, Feedback to Design), supporting copy.
4. **Solutions** — “Four Layers of Maritime Intelligence”; four cards (Shipyard Intelligence, Operational Digital Twin, Maintenance Intelligence, Compliance & Evidence) with short descriptions and CTAs; each card has an asset placeholder.
5. **Platform** — “Built to Integrate — Not Replace”; two paragraphs (read-only connectors, aggregate not replace); three platform asset placeholders; bullet list of integration sources; callout (“Low disruption. High visibility.”).
6. **Sensors** — “Selective Sensing Where Visibility Matters”; two paragraphs; list of signals (e.g. Bilge Contamination Monitoring, Vibration & Structural Behavior).
7. **Stakeholders** — “Built for the Entire Maritime Ecosystem”; intro; four cards (Shipyards, Fleet Owners & Operators, OEMs, Insurers & Class); stakeholders asset placeholder.
8. **Global** — “Global Platform. Regional Expertise.”; intro; three region cards (Turkey, UK, Dubai) with short descriptions; global footprint asset placeholder; WorldMap (zoom/pan, markers, tooltips).
9. **Pilot** — “Deploy a Digital Twin Pilot”; paragraph; numbered steps; two CTAs; contact form block.

**Content source**

- All homepage copy (EN/TR) lives in `lib/content/home.ts`; typed by section; `getHomeContent(locale)` used by the page.

---

## 4. Visual Asset System (Applied)

**Registry (`lib/assets.ts`)**

- 13 approved asset IDs with `path` (all `null` for now), `alt`, `width`, `height`.
- IDs: `ash_home_hero_v01`, `ash_home_fragmentation_v01`, `ash_home_lifecyclediagram_v01`, `ash_solutions_shipyard_v01`, `ash_solutions_operationaltwin_v01`, `ash_solutions_maintenance_v01`, `ash_compliance_evidencepack_v01`, `ash_platform_architecture_v01`, `ash_platform_readonlyconnectors_v01`, `ash_platform_sensorlayer_v01`, `ash_home_stakeholders_v01`, `ash_home_globalfootprint_v01`, `ash_pilot_flow_v01`.
- `HOMEPAGE_ASSETS` maps section keys to asset ID(s). `getAsset(id)`, `getAssetPath(id)`.

**Component (`AssetImage`)**

- Renders by asset ID. If `path` set → Next/Image (with alt, sizes, optional fill/priority). If `path` null → stable aspect-ratio placeholder (no broken image), optional label with asset ID.
- Used across hero, problem, lifecycle, solutions (per card), platform (three), stakeholders, global, pilot.

**Swapping in final art**

- Set `path` in `lib/assets.ts` (e.g. `"/assets/ash_home_hero_v01.png"`) and add file under `public/assets/`. `public/assets/README.md` describes the convention.

---

## 5. Routes & Pages (Applied)

**Locale prefix:** All pages under `/[locale]/` (e.g. `/en/`, `/tr/`). Middleware handles locale.

| Route | Purpose |
|-------|--------|
| `/` (home) | Homepage with all sections above. |
| `/why-asheriv` | Why A'SHERIV; strategic intro (fragmentation → digital twin). |
| `/solutions` | Solutions overview; four cards linking to sub-pages. |
| `/shipyard-intelligence` | Shipyard Intelligence; intro + short body + CTA. |
| `/operational-digital-twin` | Operational Digital Twin; intro + short body + CTA. |
| `/maintenance-intelligence` | Maintenance Intelligence; intro + body + CTA. |
| `/compliance-evidence` | Compliance & Evidence; intro + body + CTA. |
| `/platform` | Platform; intro + three cards (Architecture, Data Integration, Sensors) + CTA. |
| `/lifecycle-intelligence` | Lifecycle Intelligence; intro + body + CTA. |
| `/industries` | Industries; intro + five stakeholder cards + CTA. |
| `/pilot-program` | Pilot Program; intro + body + CTA. |
| `/about` | About; intro + three cards (Company, Global Structure, Partners) + WorldMap + CTA. |
| `/insights` | Insights; intro + three cards (Articles, Case Studies, Research) + CTA. |
| `/contact` | Contact; intro + contact form + CTA. |
| `/privacy` | Privacy Policy (UK GDPR / DPA 2018–oriented). |
| `/turkey` | Turkey operations; hero, focus areas, CTA. |
| `/uk` | UK operations; hero, focus areas, CTA. |

**Inner-page pattern**

- Shared `PageScaffold`: back link, hero (title + intro), optional main content, bottom CTA. Navigation and Footer on every page. Strategic placeholder copy from `messages` (EN/TR); no lorem ipsum.

---

## 6. Navigation & Footer (Applied)

**Navigation (sticky)**

- Logo → home. Links: Why A'SHERIV → `/why-asheriv`, Solutions → `/solutions`, Platform → `/platform`, Lifecycle Intelligence → `/lifecycle-intelligence`, Industries → `/industries`, Pilot Program → `/pilot-program`, About, Insights, Contact → `/contact`. On home, some links scroll to sections.
- CTAs: “Explore the Platform” → `/platform`, “Start a Pilot Discussion” → `/pilot-program`.
- Language switcher (EN / TR). Mobile: hamburger, same links + CTAs.
- `aria-label="Main navigation"`; mobile button `aria-expanded` and “Open/Close menu.”

**Footer**

- One descriptor line; columns: Solutions (Solutions, Platform, Lifecycle Intelligence, Industries), About (Pilot, About, Insights, Contact), Legal (Privacy), email info@asheriv.com. Links use `/contact`, `/privacy`, etc.

---

## 7. Performance & Accessibility (Applied)

- **Performance:** Hero logo only uses `priority`; hero visual and below-the-fold AssetImages lazy-load. Logo has `sizes` for layout stability. No oversized asset URLs (placeholders are CSS-only).
- **Accessibility:** Skip link to `#main-content`; every page has `<main id="main-content">`. Focus-visible ring on links/buttons. Nav and mobile menu accessible (aria, type="button"). No empty alt; AssetImage/Image use descriptive alt from registry or content.
- **Reduced motion:** `scroll-behavior: auto` when `prefers-reduced-motion: reduce`; transitions disabled for key utilities; Navigation `scrollToSection` uses `behavior: 'auto'` when reduced motion.

---

## 8. SEO (Applied)

- **Locale layout:** `generateMetadata` — default title/description (EN/TR), OpenGraph (title, description, type, locale, url, siteName), Twitter card, canonical. Uses `NEXT_PUBLIC_BASE_URL` (fallback `https://www.asheriv.com`).
- **Homepage:** `generateMetadata` overrides with `meta.title` and `meta.description` from `getHomeContent(locale)`.
- **Privacy:** Static `metadata` (title, description, OpenGraph) for discoverability.
- **Semantic structure:** Single h1 per page; sections with headings; main landmark.

---

## 9. Strategic Position (What’s Reflected vs Spec)

**Clearly communicated**

- Digital twin infrastructure for maritime operations and lifecycle.
- Shipyard intelligence, operational digital twin, maintenance intelligence, compliance/evidence.
- Integration-first, read-only deployment (“Built to Integrate — Not Replace,” “secure read-only connectors”).
- Turkey / UK / Dubai as regions (with map).
- Lifecycle Intelligence as a named concept and section.
- Professional, technical tone; no hype words.

**Gaps (see `docs/STRATEGIC_REVIEW.md`)**

- **Product names** A'SHERIV Build, AshMOP, Data & Sensor Layer not used.
- **Pillar names** Build Intelligence and Operational Intelligence not explicitly called out (only “Shipyard Intelligence” and “Operational Digital Twin”).
- **“Shipbuilding”** not explicit in meta/hero.
- **Solution card CTAs** still point to `/solutions` instead of the four dedicated solution pages.
- Some copy still generic (“ecosystem,” “Explore the Platform,” “scalable adoption,” “Global Platform. Regional Expertise.”).
- “Content coming soon” on some inner pages (e.g. Platform sub-blocks).

---

## 10. Docs & Artefacts in Repo

| Item | Purpose |
|------|--------|
| `docs/STRATEGIC_REVIEW.md` | Gap analysis vs spec, punch list, weak/generic copy list. |
| `docs/HOLISTIC_REPORT.md` | This report — what’s applied and current state. |
| `docs/IMPLEMENTATION_PLAN.md` | (If present) Earlier implementation/refactor notes. |
| `public/assets/README.md` | How to add final artwork and match asset IDs. |
| `README.md` | Project overview, run/build, structure. |

---

## 11. Quick Reference: What to Change Where

| To change… | Edit… |
|------------|--------|
| Homepage copy (EN/TR) | `lib/content/home.ts` |
| Inner-page copy (EN/TR) | `messages/en.json`, `messages/tr.json` |
| Visual asset list / alt / path | `lib/assets.ts` |
| Design tokens (colors, radius, shadows) | `tailwind.config.ts`, `app/globals.css` |
| Nav/footer links and labels | `messages` + `Navigation.tsx`, `Footer.tsx` |
| Homepage section order or structure | `app/[locale]/page.tsx` |
| Default SEO (title, OG) | `app/[locale]/layout.tsx` `generateMetadata` |
| Homepage SEO | `app/[locale]/page.tsx` `generateMetadata` |

---

**Summary:** The site is a full Next.js 14, TypeScript, Tailwind, next-intl implementation with an approved design system, centralized homepage content, 13-asset placeholder system, 17 locale-aware routes, shared PageScaffold and section components, and performance/accessibility/SEO measures in place. Strategic gaps and a prioritized punch list are documented in `docs/STRATEGIC_REVIEW.md`.
