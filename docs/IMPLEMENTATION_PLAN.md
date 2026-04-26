# A'SHERIV Website — Premium Deep-Tech Maritime Implementation Plan

**Objective:** Replace current landing positioning with a premium, enterprise-grade, maritime infrastructure website while preserving the existing technical stack and useful infrastructure. No generic startup/SaaS styling; tone must be maritime, precise, and infrastructural.

---

## 1. Audit Summary

### 1.1 Current State

| Area | Current state |
|------|----------------|
| **Stack** | Next.js 14, App Router, TypeScript, Tailwind, next-intl (en/tr), react-simple-maps |
| **Routing** | Root redirect → `[locale]`; locale layout wraps with NextIntlClientProvider; pages: home, privacy, turkey, uk |
| **Homepage** | Single scroll: Hero → About (Mission/Vision) → AshMOP (6 modules) → Shipyard Integration (2 cards) → Stakeholders (7) → Geographic Footprint (WorldMap) → Contact |
| **Visual** | Dark theme (#0A0E1A), cyan primary (#00D9FF), indigo accent (#6366F1); gradient headings; rounded cards with hover |
| **API** | `POST /api/contact` — logs body, returns 200; no email integration |
| **SEO** | No `metadata` or `generateMetadata` in any layout; README claims SEO but it is not implemented |
| **Assets** | `public/` — logo.png referenced; no favicon or onepager in repo listing |

### 1.2 Preserve As-Is

- **Next.js 14 App Router** — Keep `app/`, `app/[locale]/`, `app/page.tsx` redirect.
- **TypeScript** — Keep `tsconfig.json`, type discipline.
- **Tailwind** — Keep `tailwind.config.ts`, `postcss.config.js`, `app/globals.css` (refactor tokens only).
- **Contact API** — Keep `app/api/contact/route.ts`; same contract (name, email, company, role, message); optional later: add rate limit or email provider.
- **i18n** — Keep `next-intl`, `lib/i18n.ts`, `lib/routing.ts`, `middleware.ts`, `messages/en.json`, `messages/tr.json`; content will be replaced/restructured.
- **Privacy page** — Keep `app/[locale]/privacy/page.tsx` and UK GDPR content; only styling and link consistency if needed.
- **Region routes** — Keep `app/[locale]/turkey/page.tsx` and `app/[locale]/uk/page.tsx`; content can be refined to match new positioning.
- **Component architecture** — Keep separation: Navigation, Footer, ContactForm, WorldMap; refactor internals and styling.

### 1.3 Refactor (No Full Rewrite)

- **Tailwind theme** — Adjust palette for “premium maritime / infrastructure”: consider warmer dark, single restrained accent (e.g. steel blue), no bright cyan/indigo gradients if they feel SaaS-y. Keep `section-padding`, `container-width`; tune `card-hover` and `gradient-text` to be subtler or conditional.
- **Navigation** — Keep sticky nav, mobile menu, language switcher; update copy keys and section IDs to match new section architecture; optional: one primary CTA (e.g. “Request a demo” → #contact).
- **Footer** — Keep 3-column layout, Legal (Privacy), Contact email; ensure `Link` and translation keys remain; update tagline/description to match new positioning.
- **ContactForm** — Keep fields (name, email, company, role, message), submit → `/api/contact`, success state; restyle inputs/buttons to match new design system.
- **WorldMap** — Keep zoom/pan, markers for Turkey/UK/UAE, click → turkey/uk; only style and copy in tooltips.
- **Homepage sections** — Keep section-based structure and `getTranslations`; replace content and possibly section order/labels per “new approved homepage architecture.”

### 1.4 Replace or Restructure

- **Homepage layout and copy** — Replace hero headline, subline, and CTAs with approved “premium deep-tech maritime infrastructure” messaging. Replace About, Platform, Integration, Stakeholders, Regions, Contact copy so it reads enterprise/infrastructure, not placeholder or startup.
- **Visual hierarchy** — Replace current gradient-heavy, rounded-card look with a more restrained hierarchy: clear typography scale, more whitespace, optional subtle borders/lines instead of glowing cards; ensure one clear primary CTA path.
- **Section architecture** — Align section order, IDs, and nav items with the approved architecture (e.g. Overview → Platform → Use Cases → Stakeholders → Regions → Contact); add/remove sections only as specified.
- **Branding tone** — Replace any “we do X” placeholder tone with confident, present-tense, operational language; no hype, no “revolutionising”; maritime and infrastructure terminology throughout.
- **Placeholder framing** — Remove or reword any “coming soon,” “pilot,” or aspirational framing unless explicitly in the approved content.

### 1.5 Remove

- Nothing structural. Do not remove i18n, region pages, or contact API. Only remove or simplify UI elements that conflict with the new design (e.g. secondary CTA if design has one primary CTA).

### 1.6 Newly Create

- **SEO/metadata** — Add `generateMetadata` in `app/[locale]/layout.tsx` (or per-page where needed) with title, description, openGraph, twitter, locale-aware URLs so the site is SEO and shareable.
- **Favicon** — Add a favicon (e.g. in `public/`) and reference in layout if missing.
- **Approved content** — Once the “new approved homepage architecture and content system” document is provided, add or replace copy in `messages/en.json` and `messages/tr.json` (and any hardcoded strings) to match.

---

## 2. File-by-File Action List

| File | Action |
|------|--------|
| `app/layout.tsx` | **Preserve** — Keep as passthrough; no metadata here (locale layout owns it). |
| `app/page.tsx` | **Preserve** — Keep redirect to default locale. |
| `app/[locale]/layout.tsx` | **Refactor** — Add `generateMetadata` for default title/description/OG; keep NextIntlClientProvider, `getMessages`, html lang, body class. Optionally add favicon link. |
| `app/[locale]/page.tsx` | **Replace** — Restructure sections to match approved architecture; keep Image, Navigation, Footer, ContactForm, WorldMap usage; swap copy to translation keys; adjust section IDs and class names for new hierarchy. |
| `app/[locale]/privacy/page.tsx` | **Preserve** — At most align styles with design system (e.g. use same container/section classes). Keep UK GDPR content. |
| `app/[locale]/turkey/page.tsx` | **Refactor** — Ensure tone and copy match new positioning; keep Link back, operations grid, contact CTA. |
| `app/[locale]/uk/page.tsx` | **Refactor** — Same as turkey; keep structure, align copy and style. |
| `app/components/Navigation.tsx` | **Refactor** — Update nav items and section IDs to match new section architecture; keep sticky behavior, mobile menu, LanguageSwitcher; optionally single CTA label (e.g. “Request a demo”). |
| `app/components/Footer.tsx` | **Refactor** — Keep structure and Link to privacy; update description translation key if tagline changes. |
| `app/components/ContactForm.tsx` | **Refactor** — Keep logic and API call; restyle to match new design system (inputs, button, success state). |
| `app/components/WorldMap.tsx` | **Refactor** — Keep behavior; only styling and tooltip/region copy if needed. |
| `app/components/LanguageSwitcher.tsx` | **Preserve** — No change unless design system requires. |
| `app/globals.css` | **Refactor** — Keep base and utilities; adjust or add design tokens (e.g. section spacing, typography) to support premium maritime look; consider toning down or scoping gradient-text. |
| `app/api/contact/route.ts` | **Preserve** — No change. |
| `tailwind.config.ts` | **Refactor** — Adjust colors to premium maritime (e.g. deep navy, warm off-white, single steel/accent); keep structure. |
| `messages/en.json` | **Replace** — Full copy update to approved content; keep key structure compatible with existing components or update keys in sync with `page.tsx` and components. |
| `messages/tr.json` | **Replace** — Same as en; keep key parity. |
| `lib/routing.ts` | **Preserve** — No change. |
| `lib/i18n.ts` | **Preserve** — No change. |
| `middleware.ts` | **Preserve** — No change. |
| `next.config.js` | **Preserve** — No change. |
| `README.md` | **Refactor** — Update project description and structure to reflect “premium deep-tech maritime” and current routes (e.g. [locale], turkey, uk). |

---

## 3. Recommended Build Order

1. **Design system (no content)**  
   - Update `tailwind.config.ts` (colors, optional type scale).  
   - Update `app/globals.css` (tokens, utilities, optional gradient-text usage).  
   - Ensures a single source of truth before touching components.

2. **SEO and layout**  
   - Add `generateMetadata` in `app/[locale]/layout.tsx` (and favicon if needed).  
   - No section reorder yet; just so the site is shareable and correct in search.

3. **Copy and section architecture**  
   - Update `messages/en.json` and `messages/tr.json` with approved homepage and global copy.  
   - Update `app/[locale]/page.tsx`: section order, IDs, and translation keys to match approved architecture; keep existing components (Navigation, Footer, ContactForm, WorldMap).

4. **Navigation and CTAs**  
   - Update `app/components/Navigation.tsx`: nav labels and section IDs, single primary CTA if required.  
   - Ensure at least one CTA (e.g. “Request a demo”) scrolls to `#contact`.

5. **Components styling**  
   - Refactor `Footer`, `ContactForm`, and optionally `WorldMap` to use new tokens and premium look.  
   - Keep behavior and i18n.

6. **Region and privacy**  
   - Light refactor of `app/[locale]/turkey/page.tsx` and `app/[locale]/uk/page.tsx` for tone and style.  
   - Privacy: style only if needed.

7. **Docs and polish**  
   - Update `README.md`.  
   - Quick pass: no broken links, correct meta, favicon, and one primary CTA path.

---

## 4. Constraints Checklist

- [ ] No generic startup/SaaS styling — use maritime, precise, infrastructural visual language.
- [ ] Site must feel premium and enterprise-grade.
- [ ] Do not delete useful technical foundations (i18n, contact API, privacy, region pages).
- [ ] Keep project maintainable and component-based.
- [ ] Responsive behavior preserved.
- [ ] Contact form and privacy page remain functional and linked.

---

## 5. Next Step

**Wait for implementation.** After you provide the **approved homepage architecture and content system** (section order, headings, and copy for EN/TR), implementation can follow this plan in the order above without rebuilding from scratch.

---

## 6. Updated Route & Component Structure (Post-IA Implementation)

### Routes (all under `[locale]`, locale = en | tr)

| Route | Description |
|-------|-------------|
| `/` | Home — hero, Why A'SHERIV, Solutions (teaser), Platform (teaser), Lifecycle Intelligence, Industries (teaser), Pilot Program (CTA), About (teaser), Insights (teaser), Contact (form) |
| `/solutions` | Solutions — Shipyard Intelligence, Operational Digital Twin, Maintenance Intelligence, Compliance & Evidence (scaffold) |
| `/platform` | Platform — Architecture, Data Integration, Sensors & Hardware (scaffold) |
| `/lifecycle-intelligence` | Lifecycle Intelligence (scaffold) |
| `/industries` | Industries — Shipyards, Fleet Owners, Operators, OEMs, Insurers & Class (scaffold) |
| `/pilot-program` | Pilot Program (scaffold + CTA to contact) |
| `/about` | About — Company, Global Structure (with WorldMap), Partners (scaffold) |
| `/insights` | Insights — Articles, Case Studies, Research (scaffold) |
| `/privacy` | Privacy policy (UK GDPR, preserved) |
| `/turkey` | Türkiye operations (preserved) |
| `/uk` | UK operations (preserved) |

### Components

| Component | Role |
|-----------|------|
| `Navigation` | Sticky nav: Why, Solutions, Platform, Lifecycle, Industries, Pilot, About, Insights, Contact; primary CTA “Start a Pilot Discussion” → `/pilot-program`; secondary CTA “Explore the Platform” → `/platform`; LanguageSwitcher; desktop + mobile menu |
| `Footer` | Four columns: brand + description; Solutions (links: Solutions, Platform, Lifecycle, Industries); About (links: Pilot, About, Insights, Contact); Legal (Privacy) + email |
| `ContactForm` | Form → `POST /api/contact` (preserved) |
| `WorldMap` | Used on `/about` (Global Structure); markers for Turkey, UK, UAE with locale-aware tooltips and links to `/turkey`, `/uk` |
| `LanguageSwitcher` | EN/TR toggle (preserved) |

### Messages (keys added/used for IA)

- `nav`: home, why, solutions, platform, lifecycle, industries, pilot, about, insights, contact, ctaPilot, ctaExplore  
- `hero`, `why`, `solutions`, `lifecycle`, `industries`, `pilot`, `insights`, `about` (incl. `learnMore`), `platform`, `contact`  
- `pages.*`: backToHome, solutions, platform, lifecycle, industries, pilotProgram, about, insights (each with title, description, sub-sections)  
- `footer`: description, solutions, platform, lifecycle, industries, pilot, about, insights, contact, legal, privacy
