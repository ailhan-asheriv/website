# A'SHERIV Website — Spec Compliance vs Implementation Depth Audit

**Audit type:** Strict compliance-depth review against the full approved strategic specification.  
**Reference:** Reconstructed full approved plan from IMPLEMENTATION_PLAN.md, STRATEGIC_REVIEW.md, and stated spec dimensions (brand positioning, audience logic, pillar framework, product architecture, homepage master copy, visual system spec, wireframe doctrine, component behavior, implementation pack logic).  
**Note:** No single “master specification” document exists in the repo. This audit treats the reconstructed spec as the compliance standard. If a formal spec document is added later, the same section structure can be reused for re-audit.

---

## 1. What has been implemented correctly

| Spec dimension | Implementation | Compliance depth |
|----------------|----------------|------------------|
| **Stack and routing** | Next.js 14 App Router, TypeScript, Tailwind, next-intl (en/tr), `[locale]` routing, middleware. | Full. Matches IMPLEMENTATION_PLAN preserve list. |
| **Design system – palette** | Navy, charcoal, off-white, signal red, cyan, muted; no neon/crypto/SaaS blobs; single primary/secondary button style. | Full. Aligns with “premium maritime / infrastructure” and approved color direction. |
| **Design system – typography** | Space Grotesk headings, Inter body; restrained radius and subtle shadows. | Full. |
| **Section architecture (homepage)** | Hero → Problem → Lifecycle → Solutions → Platform → Sensors → Stakeholders → Global → Pilot (with contact). Section IDs and nav alignment. | Full. Order and IDs match approved IA. |
| **Centralized homepage content** | `lib/content/home.ts` with typed sections (meta, hero, problem, lifecycle, solutions, platform, sensors, stakeholders, global, pilot); EN/TR; consumed by page and section components. | Full. Single source of truth; no scattered copy. |
| **Integration-first, read-only messaging** | “Built to Integrate — Not Replace,” “secure read-only connectors,” “aggregates and structures data”; no rip-and-replace. | Full. Strategic message present and clear. |
| **Lifecycle Intelligence (pillar)** | Section “One Digital Twin Across the Vessel Lifecycle”; stages (Design → Shipyard Production → Operations → Maintenance → Feedback); nav “Lifecycle Intelligence.” | Full. Only pillar explicitly named. |
| **Compliance & evidence** | “Structured evidence chains” for review, claims, audits; Compliance & Evidence card. | Full. |
| **Turkey / UK / Dubai** | Global section with three regions, RegionCards, WorldMap (markers, tooltips, links to /turkey, /uk). | Full. Structure and geography present. |
| **Component behavior – nav** | Sticky nav; desktop + mobile; primary CTA “Start a Pilot Discussion” → pilot; secondary “Explore the Platform” → platform; LanguageSwitcher; section scroll on home. | Full. Matches IMPLEMENTATION_PLAN route/component table. |
| **Component behavior – footer** | Four columns (brand, Solutions, About, Legal); links to solutions, platform, lifecycle, industries, pilot, about, insights, contact, privacy; email. | Full. |
| **Contact and API** | ContactForm → POST /api/contact; fields preserved; success state. | Full. |
| **SEO baseline** | generateMetadata in locale layout (title, description, OG, Twitter, canonical); homepage override from content.meta; privacy metadata. | Full. |
| **Accessibility baseline** | Skip link, main landmark, focus-visible, reduced-motion, nav aria. | Full. |
| **Asset registry and IDs** | 13 approved asset IDs in lib/assets.ts; alt and dimensions per asset; HOMEPAGE_ASSETS mapping. | Full. Naming and structure correct; paths still null. |
| **Route set** | Home, why-asheriv, solutions, shipyard-intelligence, operational-digital-twin, maintenance-intelligence, compliance-evidence, platform, lifecycle-intelligence, industries, pilot-program, about, insights, contact, privacy, turkey, uk. | Full. All routes from approved IA present. |
| **Inner-page scaffold pattern** | PageScaffold (back link, hero title + intro, optional body, CTA); Navigation + Footer on every page. | Full. Structure consistent. |
| **Tone** | No “revolutionary”/“disrupting”; present-tense, operational; maritime/infrastructure terminology in core copy. | Largely full. Some phrases still generic (see Section 3). |

---

## 2. What has been implemented only partially or in simplified form

| Spec dimension | Current state | Missing or simplified |
|----------------|---------------|------------------------|
| **Brand positioning (one-liner)** | Meta/hero say “digital twin infrastructure for maritime operations” and “shipyard production data, vessel operational systems…”. | “Shipbuilding” is not explicit. Spec calls for “shipbuilding, vessel operations, and lifecycle intelligence” in the one-liner; “shipbuilding” is absent. |
| **Pillar framework – naming** | Lifecycle Intelligence is named. “Shipyard Intelligence” and “Operational Digital Twin” are used as section/card titles. | Build Intelligence and Operational Intelligence are not named as pillars anywhere. The three-pillar frame (Build / Operational / Lifecycle) is never stated in one place; only Lifecycle is explicit. |
| **Product architecture** | Platform section describes integration and read-only; Solutions has four capability cards; Sensors is a separate section. | A'SHERIV Build, AshMOP, and Data & Sensor Layer are not named. The three-part product/layer stack is not stated. No single sentence or list that says “A'SHERIV Build + AshMOP + Data & Sensor Layer.” |
| **Solutions headline and mapping** | “Four Layers of Maritime Intelligence” with four cards. | The four are not mapped to the three pillars + compliance (e.g. “Build, operational, lifecycle, and compliance”). Pillar logic is implied, not stated. |
| **Solution card CTAs** | Each card has a CTA label (e.g. “Explore Shipyard Intelligence”) and a link. | All four cards use `ctaHref: "/solutions"`. They should point to `/shipyard-intelligence`, `/operational-digital-twin`, `/maintenance-intelligence`, `/compliance-evidence` per wireframe/spec. |
| **Platform section callout** | “Low disruption. High visibility.” + “faster pilot deployment and scalable adoption.” | Callout is generic B2B; “scalable adoption” is SaaS language. Spec expects integration/read-only framing (e.g. “Read-only connectors. No replacement of existing systems.”) and maritime/operational wording, not generic “scalable adoption.” |
| **Stakeholders section** | Headline “Built for the Entire Maritime Ecosystem”; four cards with role-specific copy. | “Ecosystem” is generic. Spec expects sharper stakeholder framing (e.g. “Built for shipyards, operators, class, and insurers” or outcome-led: traceability, evidence, handover). |
| **Global section** | “Global Platform. Regional Expertise.” + three regions + map. | Headline is consultancy-generic. Spec expects “operating” footprint (e.g. “Operating from Turkey, UK, and Dubai” or “Three-nation operating footprint”) so it’s clear these are operating locations, not just presence. |
| **Audience logic** | Hero “Designed for shipyards, fleet operators, OEMs, insurers, and classification societies”; stakeholder cards. | Audience is listed but not tied explicitly to the three pillars or to product layers (who benefits from Build vs Operational vs Lifecycle). No “who this is for” line that maps audience to pillars/products. |
| **Why A'SHERIV page** | Exists with strategic intro (fragmentation → digital twin). | Intro does not name the three pillars or the product architecture. “Why” is not yet the strategic anchor that states pillars + problem + architecture in one place. |
| **Footer descriptor** | Uses translation key for description. | Must be verified against approved one-liner (shipbuilding, vessel operations, lifecycle intelligence); currently may not include “shipbuilding.” |
| **Visual system – assets** | AssetImage component; registry with path/alt/dimensions; placeholders with stable aspect ratio. | All `path` values are null; no production logic for choosing or swapping assets by context. No spec-driven rules (e.g. “hero always ash_home_hero_v01”) beyond current mapping. Placeholder label (asset ID) is visible—acceptable for build, but production may require hiding or conditional display. |

---

## 3. Strategic layers from the approved plan still missing or underrepresented

| Strategic layer | Spec expectation | Current implementation | Gap |
|-----------------|------------------|------------------------|-----|
| **Pillar framework (explicit)** | One clear statement of the three pillars: Build Intelligence, Operational Intelligence, Lifecycle Intelligence. | Only Lifecycle is named. Build and Operational appear only as “Shipyard Intelligence” and “Operational Digital Twin” (capability labels), not as pillar names. | Pillar framework is not stated; readers cannot infer the three-pillar model from copy. |
| **Product architecture (explicit)** | One clear statement of the three-part stack: A'SHERIV Build, AshMOP, Data & Sensor Layer (or approved names). | No product names. Platform/Solutions/Sensors describe capabilities but not named products/layers. | Product architecture is implied by sections but not named; no single reference for “what we build.” |
| **Shipbuilding in positioning** | “Digital twin infrastructure for shipbuilding, vessel operations, and lifecycle intelligence” (or equivalent) in meta and/or hero. | “Shipbuilding” is absent. “Shipyard production data” and “maritime operations” are present. | Shipbuilding is a spec term and is missing from the main positioning line. |
| **Audience–pillar mapping** | Logic that ties “who we serve” to “what we offer” (pillars/products). | Audience is listed; pillars and products are not named, so no explicit mapping. | Audience logic is present but not connected to the pillar/product frame. |
| **Section-specific strategic purpose** | Each homepage section has a defined role (e.g. Problem = fragmentation; Lifecycle = one twin across stages; Solutions = four layers mapped to pillars; Platform = integrate-not-replace; etc.). | Sections exist and carry the right themes, but: (1) Problem does not introduce pillars; (2) Solutions does not state “Build, operational, lifecycle, compliance”; (3) Platform callout is generic; (4) Global does not state “operating footprint”; (5) Pilot does not explicitly state integration-first validation. | Section purposes are only partially sharp; several sections lack the one line that states their strategic role per spec. |
| **Reduction of generic SaaS language** | No “ecosystem,” “scalable adoption,” “Explore the Platform,” “decision support,” “role-based access” in key customer-facing copy. | These or equivalent phrases remain in platform callout, stakeholders headline, nav CTA, industries copy. | Generic SaaS language is still present; spec expects maritime/infrastructure/evidence-led wording throughout. |
| **CTA precision** | Primary CTA = pilot/demo path; secondary = platform overview; solution cards = deep links to each solution page. | Primary/secondary CTAs are correct. Solution cards link to `/solutions` only. | Solution CTAs are imprecise; they should deep-link to the four solution pages. |

---

## 4. Detailed implementation logic from wireframe/build spec not yet fully applied

| Wireframe/build spec element | Expected behavior | Current state | Action |
|------------------------------|--------------------|--------------|--------|
| **Solution card links** | Each card links to its dedicated page (Shipyard Intelligence → /shipyard-intelligence, etc.). | All point to `/solutions`. | Set `ctaHref` per card in `lib/content/home.ts` to the four solution routes. |
| **Pillar introduction** | Hero or Problem section includes a line that names the three pillars. | No such line. | Add one sentence (hero or problem) naming Build, Operational, Lifecycle Intelligence. |
| **Product/layer introduction** | Homepage or Platform page includes one sentence or bullet list naming A'SHERIV Build, AshMOP, Data & Sensor Layer. | None. | Add architecture line to Solutions intro or Platform section (or both). |
| **Shipbuilding in meta/hero** | Meta title or description and/or hero eyebrow/headline include “shipbuilding.” | Not present. | Insert “shipbuilding” in meta and/or hero (e.g. “digital twin infrastructure for shipbuilding, vessel operations, and lifecycle intelligence”). |
| **Platform callout** | Replace generic tagline with read-only/integration message. | “Low disruption. High visibility.” and “scalable adoption” remain. | Replace with spec-approved callout (e.g. read-only, no replacement of systems; remove “scalable adoption”). |
| **Stakeholders headline** | Replace “Entire Maritime Ecosystem” with spec wording (e.g. shipyards, operators, class, insurers or outcome-led). | “Built for the Entire Maritime Ecosystem” in content. | Replace in `lib/content/home.ts` (and TR). |
| **Global headline** | State operating footprint (Turkey, UK, Dubai as operating locations). | “Global Platform. Regional Expertise.” | Replace with operating-footprint line in content. |
| **Pilot section** | One line that pilots validate integration with existing systems and read-only deployment. | Paragraph and steps exist; integration-first validation not explicit. | Add one sentence to pilot copy in home content. |
| **Why A'SHERIV page** | Page states problem (fragmentation), three pillars, and (optionally) product architecture. | Intro is strategic but does not name pillars or architecture. | Add pillar (and optionally architecture) sentence to why-asheriv copy in messages. |
| **Footer descriptor** | Matches approved one-liner including “shipbuilding.” | May omit “shipbuilding.” | Align footer description key with meta/hero one-liner. |
| **Inner pages – “Content coming soon”** | No generic “Content coming soon”; each block has at least one strategic sentence. | Platform (architecture, data integration, sensors), About (company, global structure, partners), Industries (each stakeholder) use “Content coming soon.” | Replace with one-sentence strategic placeholders per block (implementation pack logic). |

---

## 5. Visual system spec: placeholders vs production logic

| Visual system element | Current state | Production logic still missing |
|------------------------|---------------|---------------------------------|
| **Asset registry paths** | All 13 assets have `path: null`; alt and dimensions set. | When final art exists: set `path` (e.g. `/assets/ash_home_hero_v01.png`) per asset; add files under `public/assets/`. No logic for “when to show which asset” beyond current HOMEPAGE_ASSETS mapping. |
| **Placeholder display** | AssetImage renders aspect-ratio box + optional asset-ID label when path is null. | Production: (1) Hide or make conditional the placeholder label. (2) Optional: environment or feature flag to show placeholders in dev only. (3) No spec-driven rules for responsive variants (e.g. different asset per breakpoint) unless added to spec later. |
| **Hero asset** | Hero uses ash_home_hero_v01; below fold; lazy-loaded. | Hero asset is structural only; no “hero visual spec” (e.g. min-height, overlay, or crop rules) beyond current container. |
| **Section-to-asset mapping** | HOMEPAGE_ASSETS maps each section to one or more asset IDs. | Mapping is correct. Production: ensure final assets match approved IDs and that any new sections get a corresponding asset entry if required by spec. |
| **Accessibility** | Alt text from registry; placeholder uses `aria-label` and `role="img"`. | Full. No missing production logic for a11y. |

**Summary (visual):** Structure and naming are spec-compliant. What’s missing is (1) final asset paths and files, (2) optional production behavior for placeholder labels, and (3) any spec-defined rules for responsive or context-specific asset selection (if the spec adds them).

---

## 6. Homepage sections: structurally present but not yet strategically sharp enough

| Section | Structural presence | Strategic sharpness gap |
|---------|----------------------|--------------------------|
| **Hero** | Yes. Eyebrow, headline, subheadline, supporting, two CTAs, hero asset. | Does not name three pillars or product architecture. Does not include “shipbuilding.” Secondary CTA “Explore the Platform” is generic. |
| **Problem** | Yes. Headline, three paragraphs, labels, fragmentation asset. | Does not introduce pillars (“Build, Operational, Lifecycle Intelligence”). Could end with one line that bridges to the three-pillar offer. |
| **Lifecycle** | Yes. Headline, intro, stages, supporting, asset. | Strong. Only improvement: optionally tie stages to “Lifecycle Intelligence” pillar explicitly. |
| **Solutions** | Yes. Headline, intro, four cards with assets, CTAs. | Headline “Four Layers” does not map to “Build, operational, lifecycle, compliance.” Card CTAs go to `/solutions` not to deep links. No product names (A'SHERIV Build, AshMOP, etc.). |
| **Platform** | Yes. Headline, two paragraphs, three assets, bullet list, callout. | Callout is generic (“Low disruption. High visibility.”; “scalable adoption”). Should state read-only and no-replacement. No “Data & Sensor Layer” or AshMOP naming. |
| **Sensors** | Yes. Headline, two paragraphs, signal list. | Not framed as “Data & Sensor Layer” or as the third product layer. Augmentation message is present but layer name is not. |
| **Stakeholders** | Yes. Headline, intro, four cards, asset. | Headline “Entire Maritime Ecosystem” is generic. Should be stakeholder-specific or outcome-led. |
| **Global** | Yes. Headline, intro, three regions, asset, map. | Headline “Global Platform. Regional Expertise.” is generic. Should state “operating” footprint (Turkey, UK, Dubai). |
| **Pilot** | Yes. Headline, paragraph, steps, two CTAs, contact form. | Missing one line: pilots validate integration with existing systems and read-only deployment. |

---

## 7. Inner pages: scaffolded vs need proper implementation packs

| Page | Current state | Implementation pack needed (per full spec) |
|------|----------------|-------------------------------------------|
| **Why A'SHERIV** | Scaffold: title, strategic intro, CTA. | Pack: intro that names (1) problem (fragmentation), (2) three pillars, (3) optionally product architecture; no generic “why us” filler. |
| **Solutions** | Overview + four cards linking to sub-pages (links currently to same overview). | Pack: card links to `/shipyard-intelligence`, `/operational-digital-twin`, `/maintenance-intelligence`, `/compliance-evidence`; optional one line mapping four to pillars + compliance. |
| **Shipyard Intelligence** | Scaffold: title, intro, short body, “View all Solutions,” CTA. | Pack: full body copy that states Build Intelligence (and optionally A'SHERIV Build); shipyard/shipbuilding focus; traceability, handover; replace generic body with spec-aligned copy. |
| **Operational Digital Twin** | Scaffold: title, intro, body, link back, CTA. | Pack: copy that states Operational Intelligence (and optionally AshMOP); live twin, telemetry, evidence; replace generic body. |
| **Maintenance Intelligence** | Scaffold: title, intro, body, link back, CTA. | Pack: copy that ties to lifecycle/maintenance pillar; evidence-based planning, inspections, risk; spec-aligned body. |
| **Compliance & Evidence** | Scaffold: title, intro, body, link back, CTA. | Pack: copy on structured evidence, audits, claims, class/insurers; spec-aligned body. |
| **Platform** | Scaffold: title, intro, three cards (Architecture, Data Integration, Sensors). | Pack: replace “Content coming soon” in each card with one-sentence strategic description (read-only connectors, integration scope, Data & Sensor Layer); optional architecture line (Build + AshMOP + Data & Sensor). |
| **Lifecycle Intelligence** | Scaffold: title, intro, body, CTA. | Pack: body that reinforces one digital twin across build/operation/maintenance; optional link to pillar and product stack. |
| **Industries** | Scaffold: title, intro, five stakeholder cards. | Pack: replace “Content coming soon” per card with one-sentence outcome per stakeholder (traceability, evidence, handover, etc.); replace “role-based access and decision support” with spec wording. |
| **Pilot Program** | Scaffold: title, intro, body, CTA. | Pack: add integration-first and read-only validation line; optional “implementation pack” (steps, success criteria) if spec provides it. |
| **About** | Scaffold: title, intro, three cards (Company, Global Structure, Partners), WorldMap, CTA. | Pack: replace “Content coming soon” in Company, Global Structure, Partners with one sentence each; ensure Global Structure states operating footprint. |
| **Insights** | Scaffold: title, intro, three cards (Articles, Case Studies, Research). | Pack: replace “Content coming soon” with one-sentence placeholder per bucket until real content exists. |
| **Contact** | Form + intro + CTA. | Pack: ensure intro is spec-aligned (audience, digital twin/pilot); form and API are already correct. |
| **Privacy** | Full UK GDPR content; metadata. | No pack needed for content; styling already aligned. |
| **Turkey / UK** | Full content; operations focus. | Optional: ensure “operating” language and link to pillar/product if spec requires. |

---

## 8. Priority-ranked execution roadmap (current state → full spec alignment)

**Principle:** Fix positioning and narrative first (pillars, product names, shipbuilding, CTAs); then sharpen section purpose and replace generic language; then fill inner-page implementation packs; finally visual production (asset paths, placeholder behavior).

---

### P0 – Positioning and architecture (must ship for spec compliance)

1. **Add “shipbuilding” to positioning**  
   Update meta title/description and/or hero eyebrow/headline in `lib/content/home.ts` (EN/TR) so the one-liner includes “shipbuilding” (e.g. “digital twin infrastructure for shipbuilding, vessel operations, and lifecycle intelligence”).

2. **Name the three pillars in one place**  
   Add one sentence (hero or problem section) that explicitly names Build Intelligence, Operational Intelligence, Lifecycle Intelligence. Update `lib/content/home.ts`.

3. **State the product architecture in one place**  
   Add one sentence or bullet list on homepage (Solutions intro or Platform section) or Platform page that names A'SHERIV Build, AshMOP, Data & Sensor Layer (or approved variants). Requires content update in home.ts or messages.

4. **Fix solution card CTAs**  
   In `lib/content/home.ts`, set each solution card’s `ctaHref` to `/shipyard-intelligence`, `/operational-digital-twin`, `/maintenance-intelligence`, `/compliance-evidence` respectively. Ensure Solutions overview page links cards to these routes if it uses the same content.

5. **Align footer descriptor**  
   Set footer description (messages or content) to the approved one-liner including “shipbuilding,” consistent with meta/hero.

---

### P1 – Section-purpose and language (strategic sharpness)

6. **Replace Platform callout**  
   In home content, replace “Low disruption. High visibility.” and “scalable adoption” with read-only/integration framing (e.g. “Read-only connectors. No replacement of existing systems.” and “minimal operational risk” or “fleet-wide rollout”).

7. **Replace Stakeholders headline**  
   Replace “Built for the Entire Maritime Ecosystem” with spec wording (e.g. “Built for shipyards, operators, class, and insurers” or outcome-led equivalent). Update EN/TR.

8. **Replace Global headline**  
   Replace “Global Platform. Regional Expertise.” with operating-footprint wording (e.g. “Operating from Turkey, UK, and Dubai”). Update EN/TR.

9. **Add pilot integration-first line**  
   In pilot paragraph or steps in home content, add one sentence that pilots validate integration with existing systems and read-only deployment.

10. **Map Solutions to pillars**  
    In Solutions intro or headline, add a short mapping (e.g. “Build, operational, lifecycle, and compliance”) so the four layers tie to the pillar framework.

11. **Frame Sensors as Data & Sensor Layer**  
    In sensors headline or first paragraph, name “Data & Sensor Layer” (or approved name) and state it augments the digital twin. Update home content.

---

### P2 – Why A'SHERIV and nav CTA

12. **Why A'SHERIV implementation pack**  
    Update why-asheriv copy in messages so the intro explicitly states (1) fragmentation problem, (2) three pillars, (3) optionally product architecture. Remove any generic “why us” filler.

13. **Secondary nav CTA**  
    Consider replacing “Explore the Platform” with “Platform overview” or a more maritime-specific label per spec; update nav messages.

---

### P3 – Inner-page implementation packs

14. **Platform page**  
    Replace “Content coming soon” in Architecture, Data Integration, Sensors with one strategic sentence each (read-only, integration scope, Data & Sensor Layer). Optionally add architecture line (Build + AshMOP + Data & Sensor).

15. **About page**  
    Replace “Content coming soon” in Company, Global Structure, Partners with one sentence each; ensure Global Structure states operating footprint.

16. **Industries page**  
    Replace “Content coming soon” in each stakeholder card with one-sentence outcome; replace “role-based access and decision support” with spec wording.

17. **Solution deep pages (shipyard, operational-twin, maintenance, compliance)**  
    Replace generic body copy with spec-aligned copy that names pillar (and optionally product) and states value (Build Intelligence / shipbuilding; Operational / AshMOP; maintenance; compliance/evidence).

18. **Lifecycle, Pilot, Insights**  
    Lifecycle: reinforce one-twin narrative. Pilot: ensure integration-first line is in copy. Insights: replace “Content coming soon” with one-sentence placeholders per bucket.

---

### P4 – Visual system production

19. **Asset paths and files**  
    When final art is approved, set `path` in `lib/assets.ts` for each asset and add files under `public/assets/` per README. No code change beyond path values and file drop.

20. **Placeholder label behavior**  
    If spec requires hiding asset-ID labels in production, add logic (e.g. env or prop) to AssetImage to hide `showPlaceholderLabel` in production.

---

### P5 – Optional refinements

21. **Audience–pillar mapping**  
    If spec provides it, add one line (hero or problem) that maps “who we serve” to “what we offer” (pillars/products).

22. **Turkey / UK pages**  
    If spec requires, add “operating” language and optional link to pillar/product narrative.

23. **Responsive or context-specific assets**  
    Only if spec defines different assets per breakpoint or context; then extend HOMEPAGE_ASSETS or AssetImage.

---

**Roadmap summary**

- **P0:** 5 items — positioning, pillars, product architecture, solution CTAs, footer.  
- **P1:** 6 items — Platform/Stakeholders/Global/Pilot/Solutions/Sensors copy.  
- **P2:** 2 items — Why A'SHERIV pack, nav CTA.  
- **P3:** 5 items — Platform, About, Industries, solution deep pages, Lifecycle/Pilot/Insights.  
- **P4:** 2 items — Asset paths, placeholder label.  
- **P5:** 3 items — Audience mapping, Turkey/UK, responsive assets (if in spec).

Completion of P0 and P1 brings the site to full spec alignment on positioning, pillar framework, product architecture, shipbuilding language, CTA precision, and section-purpose sharpness. P2–P4 add depth to inner pages and visual production; P5 is optional refinement.
