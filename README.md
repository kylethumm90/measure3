# Handoff: Measure3 Operator's Consultancy Lander

## Overview
Single-page marketing site for **Measure3** — a home-services performance marketing consultancy run by Kyle, the former Head of a multi-vertical home services lead-gen marketplace. The page sells one thing: book a free 30-minute Performance Audit. Everything on the page is designed to drive that single conversion.

The visual language is intentionally **operator-coded** — not "polished SaaS dark mode," not "agency landing page." It reads like a field manual or operator's logbook: warm paper background with subtle grain, hard 2px black borders, JetBrains Mono for all metadata, rust-red section numbers, aged-gold accents, file stamps in the corners. The vibe is "this guy actually ran the operation," not "this guy hired a designer."

---

## About the Design Files

The HTML file in this bundle (`Measure3 Lander v3.html`) is a **design reference** — a self-contained prototype showing intended look, layout, and behavior. It is **not production code to copy directly**.

The implementation task is to **recreate this design in your target codebase's environment** (Next.js, Astro, plain Vite + React, etc.) using its established patterns, component conventions, and asset pipeline. If no codebase exists yet, choose the framework that best fits your hosting + analytics + form-handling needs (Next.js on Vercel is a strong default for this kind of one-pager).

The HTML uses `<style>` blocks scoped to the page, semantic sectioning, and zero JavaScript dependencies — port the styles to your styling layer (CSS Modules, Tailwind config, styled-components, Panda, whatever the codebase uses).

---

## Fidelity

**High-fidelity (hifi).** All colors, typography, spacing, borders, and section compositions are final. Recreate the UI pixel-perfectly. Specific values (hex codes, font weights, pixel sizes, border widths) are listed in the **Design Tokens** section below — pull from there, not from re-eyeballing the HTML.

The only intentionally placeholder content is:
- Founder photo (currently a placeholder block in the résumé card)
- LinkedIn URL in the footer (`href="#"`)
- Form submit endpoint (currently inert — needs to wire to a real form handler)

---

## Page Sections (top to bottom)

The page is one long scroll. Section order is deliberate — proof leads, then positioning, then mechanism, then founder, then CTA.

### 1. Topbar (sticky)
- **Layout**: `position: sticky; top: 0`. Grid: `auto 1fr auto`, height 64px, paper background, 2px solid black bottom border.
- **Left**: Brand mark (28×28 bordered square containing "M3") + wordmark `MEASURE3` in JetBrains Mono 700, with a small superscript ³ in gold.
- **Center (nav-meta strip)**: JetBrains Mono 11px metadata — e.g. `EST. 2024 · OPERATOR'S CONSULTANCY`, `STATUS: TAKING 3 CLIENTS / Q`. Separated from brand by a 1px vertical rule.
- **Right**: 4 nav links (`METHOD`, `SERVICES`, `FOUNDER`, `FAQ`) in JetBrains Mono 11.5px uppercase, plus a primary CTA button "BOOK AUDIT →" (solid black on paper, hover swaps to gold fill).

### 2. Hero — Proof Block
- **Full-bleed dark section** (`#0E1116` ink background, `#F2EEE6` paper text). Sits directly below the topbar.
- **Eyebrow**: `// FILE 001 · OPERATOR-CONFIDENTIAL` in JetBrains Mono, rust-red, top-right corner, rotated 2°.
- **Two giant stats, side by side, separated by a vertical hairline**:
  - `$50M+` driven · "Pipeline driven across paid + organic channels."
  - `350+` deals/month · "Sustained monthly close volume across 5 home-services verticals."
- Stats use Satoshi 900, ~120px desktop, with `letter-spacing: -0.04em`.
- **Sub-line** below stats: `Driven as Head of a home services lead-gen marketplace. Now consulting independently.` (Inter 400, 18px, paper-light).
- **Side-panel right**: Smaller secondary stat — `< 5 MIN` average speed-to-lead — in a bordered slate panel.

### 3. Headline Block
- Returns to paper background. 2px black bottom border closes the section.
- **Headline**: `Built by an operator. Not an agency.` — Satoshi 900, ~88px desktop, tight tracking, paper background, ink text.
- **Subhead**: One sentence, Inter 400, 22px, ink-2 color: `If your home-services business is bleeding leads, missing follow-ups, or guessing at attribution — measure first, then move.`
- **CTAs**: Solid gold primary button `RUN MY AUDIT →` + a subordinate text link `Or see the method ↓` (underlined JetBrains Mono).

### 4. Verticals Strip
- **Single horizontal row**, divided by hairline rules. Eyebrow `// VERTICALS · 001-005`.
- **5 verticals** (no more, no less): Solar · Roofing · HVAC · Windows & Doors · Bath Remodel.
- Each vertical is a small column: Satoshi 700 label + a JetBrains Mono micro-caption (`ASR 4-12%`, etc.).
- Trailing note: `// Adjacent verticals on request.`

### 5. Built For / Not For
- **Two-column grid** with intentional asymmetry — the "Built for" column has a paper-tinted backdrop, "Not for" has a slightly darker slate-warm backdrop.
- **Built for** (gold `+` badges, 3-4 bullets):
  - Home-services operators doing $5M-$50M, ready to instrument
  - Founders/CEOs who want truth, not dashboards
  - Teams with lead volume but unclear attribution
- **Not for** (rust `×` badges, 3-4 bullets — these are real disqualifiers, not throwaways):
  - 12-month retainers and "agency-of-the-agency" relationships
  - Pretty dashboards prioritized over booked calls
  - Pre-revenue or pre-product companies

### 6. Method — The 3 M's
- **Section number `// 03 · METHOD`** in rust-red JetBrains Mono.
- **Title**: `Measure. Map. Move.`
- **Three numbered cards** in a row, each with:
  - Big numeral (`01`, `02`, `03`) in aged-gold Satoshi 900
  - Step name (Satoshi 700, ~32px)
  - Two-sentence description (Inter 400, 16px)
  - Mono footer line `// DELIVERABLE: [thing]`

### 7. Funnel Moneyshot (dark)
- **Full-bleed dark section** identical palette to the hero proof block.
- **Title**: `The funnel, instrumented.` — paper text on ink.
- **Horizontal flow diagram**: 5 stages connected by `→` arrows: `Spend → Click → Lead → Qualified → Booked → Closed`. Each stage is a bordered card with a stage label and a sample number underneath (e.g. `$X CPC`, `Y% LTC`).
- **Footer**: `// Screenshot this · send to your boss` (JetBrains Mono, gold, italicized).

### 8. Services — 3 Buckets
- Section number `// 04 · SERVICES`.
- **Three buckets** (collapsed from earlier 6-tile version):
  - **ACQUISITION** — paid, SEO, partnerships
  - **CONVERSION** — speed-to-lead, qualification, scripts
  - **VISIBILITY** — attribution, dashboards, reporting cadence
- Each bucket: bordered card with bucket name (Satoshi 700), 1-line description, and a list of "// legs" (terse mono lines, no chips/tags).

### 9. AI / Tooling — 3 Cards
- Section number `// 05 · AI · TOOLING`.
- **Three cards** (one featured in gold border):
  - **Voice & SMS** — auto-dial within 60s, conversational AI handoffs
  - **Qualification** *(featured, gold border + gold accent stripe)* — strip out tire-kickers before they hit your team's calendar
  - **Copilot** — internal Slack/Notion bot trained on your funnel data

### 10. Founder
- Section number `// 06 · FOUNDER`.
- **Two-column layout**:
  - **Left**: Pull quote, Satoshi 700, ~36px, two sentences max — `"I built the machine. Now I'm consulting on yours."`
  - **Right**: Résumé card with hard 2px black border, contains:
    - Photo block (placeholder — swap with real headshot)
    - Name: `KYLE [LAST]` (JetBrains Mono 700)
    - Role: `Head of Lead-Gen Marketplace · 2020-2024`
    - One-paragraph description: `Ran a multi-vertical home services lead marketplace driving $50M+ in attributed pipeline and 350+ closed deals/month at peak.`
    - 3 stat lines below: `$50M+ pipeline · 350+ deals/mo · 5 verticals`

### 11. Engage — How It Works
- Section number `// 07 · ENGAGE`.
- **Three-step horizontal flow** explaining the engagement: `Audit (free, 30min) → Diagnostic ($X, 2 weeks) → Build (engagement-based)`.
- Each step is a bordered card with step number, name, duration, and a 1-line outcome.

### 12. KPI Band (thin, dark)
- Thin full-bleed dark strip — ink background, paper + gold text.
- **Single horizontal row** of 3-4 KPIs separated by vertical hairlines: `$50M+ DRIVEN · 350+ DEALS/MO · <5 MIN STL · 5 VERTICALS`.
- All JetBrains Mono, all-caps.

### 13. FAQ
- Section number `// 08 · FAQ`.
- **5-6 questions**, accordion-style (or just static expanded — current version is static).
- **Q2 is the cost question** (intentional — the user wants this answered early, not buried).
- Each Q: Satoshi 700 question, Inter 400 answer, hairline divider between rows.

### 14. Audit Form (the conversion)
- Section number `// 09 · BOOK AUDIT`.
- **Headline**: `30 minutes. No deck. No pitch.`
- **4 fields only** (intentionally short — Annual Revenue was cut):
  - Name
  - Company
  - Email
  - Vertical (dropdown: the 5 verticals + "Other")
- Submit button: Solid gold, full-width on mobile, `BOOK MY AUDIT →`.
- **Reassurance line below** (mono, 11px): `// We measure. Others guess.`

### 15. Footer
- Thin row, paper background, 2px black top border.
- **Three columns**: `© 2026 MEASURE3 · OPERATOR'S CONSULTANCY` · `// PRECISION OVER GUESSWORK` · `MEASURE3.COM`.
- **Above the row**: a small contact list — `Book audit` · `kyle@measure3.com` · `LinkedIn / Kyle`.

---

## Interactions & Behavior

### Navigation
- Topbar `position: sticky; top: 0; z-index: 50`. No blur, no shadow — just paper background + 2px solid black bottom border.
- Anchor links in the nav scroll to `#method`, `#services`, `#founder`, `#faq`, `#audit`. Use smooth scroll behavior (`scroll-behavior: smooth` on `html`).

### Hover states
- **Primary buttons** (`.btn`): black fill → gold fill on hover (150ms transition on `background, color`).
- **Gold buttons** (`.btn.gold`): gold fill → black fill on hover.
- **Ghost buttons / text links**: ink → gold-deep on hover, with bottom border color matching.
- **Nav links**: `--ink-2` → `--ink` on hover (subtle).
- **Active state on all buttons**: `transform: translateY(1px)` (100ms).

### Form
- Inert in the prototype. Wire to your form handler of choice (Formspree, ConvertKit, custom API route, etc.).
- On submit success: replace form with a confirmation block — same hard-bordered card style — with the message: `Audit request received. Kyle will be in touch within 24 hours.`
- Validate email client-side. Required fields: all 4.

### Animations
- **None.** Intentional. The design language is field-manual, not "modern web." No fade-ins on scroll, no parallax, no entrance animations. Static, confident, dense.

### Responsive
- **Desktop-first**, breakpoint at ~960px.
- Below 960px:
  - Topbar nav collapses (consider a slide-in panel or just hide secondary links — keep brand + CTA always visible)
  - Hero stats stack vertically with the divider becoming horizontal
  - 2-column sections (Built For / Not For, Founder) stack into single column
  - Funnel moneyshot becomes vertical with `↓` arrows instead of `→`
  - Verticals strip wraps to 2-3 rows
- Below 600px:
  - Hero stats remain readable — drop from ~120px to ~72px
  - Headline drops from ~88px to ~48px
  - All section padding compresses by ~40%

---

## State Management
This is effectively a static page. The only stateful surface is the audit form:
- 4 controlled inputs (`name`, `company`, `email`, `vertical`)
- Submit state: `idle | submitting | success | error`
- On success, swap the form container for the confirmation block

No global state, no routing, no auth.

---

## Design Tokens

### Colors (CSS custom properties from the source)
| Token | Hex | Usage |
|---|---|---|
| `--midnight` | `#0B0F14` | (defined but largely superseded by `--ink`) |
| `--paper` | `#F2EEE6` | Primary background — warm field-manual paper |
| `--ink` | `#0E1116` | Primary text + dark-section background |
| `--ink-2` | `#1F242C` | Secondary text |
| `--gold` | `#C8961F` | **Primary accent** — aged gold, intentionally less polished than `#D4AF37` |
| `--gold-deep` | `#8E6911` | Gold hover/pressed state |
| `--rust` | `#B7411F` | Section numbers, file stamps, "not for" markers |
| `--steel` | `#6E7480` | Tertiary text, muted labels |
| `--light` | `#D5D0C4` | Light text on dark backgrounds |
| `--rule` | `rgba(14,17,22,0.16)` | Hairline borders |
| `--rule-strong` | `rgba(14,17,22,0.55)` | Stronger hairline borders |

### Typography
- **Inter** (400, 500, 600, 700, 800, 900) — body copy, subheads, form labels. Loaded from Google Fonts.
- **Satoshi** (500, 700, 900) — headlines, big stats, founder pull quote. Loaded from Fontshare.
- **JetBrains Mono** (400, 500, 600, 700) — every piece of metadata, all uppercase labels, eyebrows, footer micro-copy, button labels. Loaded from Google Fonts.

**Type scale (desktop):**
| Element | Family | Weight | Size | Tracking |
|---|---|---|---|---|
| Hero proof stats | Satoshi | 900 | ~120px | -0.04em |
| Page headline | Satoshi | 900 | ~88px | -0.03em |
| Section titles | Satoshi | 700 | ~48px | -0.02em |
| Card titles | Satoshi | 700 | ~32px | -0.01em |
| Body copy | Inter | 400 | 16-18px | normal |
| Subhead body | Inter | 400 | 22px | normal |
| Button labels | JetBrains Mono | 700 | 11.5px | 0.1em uppercase |
| Nav links | JetBrains Mono | 600 | 11.5px | 0.08em uppercase |
| Eyebrows / metadata | JetBrains Mono | 500-600 | 10-12px | 0.06-0.18em uppercase |

**Font feature settings on mono**: `"ss01","zero"` — gives the slashed zero and stylistic alternates, key for the field-manual feel.

### Spacing
- **Container max-width**: `1360px`. Horizontal padding: `28px`.
- **Section vertical rhythm**: ~120px top + bottom on desktop, ~72px on mobile.
- **Card internal padding**: 28-32px.
- **Grid gap**: 28px between major columns, 16-20px between minor.

### Borders
- **Primary border**: `2px solid var(--ink)` — used on topbar, hero borders, cards, buttons. This is the page's signature.
- **Hairlines**: `1px solid var(--rule)` for subtle dividers, `1px solid var(--rule-strong)` for emphasized ones.
- **No border-radius anywhere.** Sharp corners are part of the design language. Do not soften.

### Shadows
- **None.** No drop shadows, no glows, no blur. The design relies on hard borders and color contrast.

### Background grain
The paper background uses a layered radial-gradient noise pattern:
```css
background-image:
  radial-gradient(rgba(14,17,22,0.05) 1px, transparent 1px),
  radial-gradient(rgba(14,17,22,0.04) 1px, transparent 1px);
background-size: 3px 3px, 7px 7px;
background-position: 0 0, 1px 2px;
```
Reproduce this exactly — it's a key part of the texture.

The hero proof block adds a faint grid overlay:
```css
background-image:
  linear-gradient(rgba(14,17,22,0.06) 1px, transparent 1px),
  linear-gradient(90deg, rgba(14,17,22,0.06) 1px, transparent 1px);
background-size: 56px 56px;
```

### Decorative motifs
- **File stamps**: Small rust-bordered, rust-text labels (e.g. `FILE 001 · OPERATOR-CONFIDENTIAL`), rotated 2°, top-right of dark sections.
- **Section numbers**: `// 0X · SECTION NAME` in rust JetBrains Mono — every major section starts with one.
- **Slashes prefix on metadata**: Every mono micro-label starts with `//` — file-comment style.
- **Plus/cross badges**: `+` (gold) and `×` (rust), bordered squares, used as bullets in the Built For / Not For section.

---

## Assets

- `assets/measure3-logo.png` — Logo bitmap. **Note: the v3 prototype currently uses an inline CSS logo mark (28×28 bordered square containing "M3"), not this PNG.** Decide during implementation whether to swap to the PNG or keep the CSS mark — the CSS mark is faster, sharper at all sizes, and matches the design language better; the PNG is included only in case you want a richer mark.
- **Founder photo**: NOT INCLUDED. Currently a placeholder block in the résumé card. Get a real headshot from Kyle before launch.
- **No icon library is used.** All glyphs in the design are typographic (`→`, `↓`, `+`, `×`) or bordered geometric shapes. Do not introduce Lucide / Phosphor / Heroicons — they will fight the design language.

---

## Copy Notes (the voice matters)

The voice is **terse, operator-coded, slightly self-aware**. Don't soften it during implementation. Specific lines that must not be changed without explicit approval:

- Tagline: `Precision over guesswork.`
- Closing reassurance: `We measure. Others guess.`
- Headline: `Built by an operator. Not an agency.`
- Founder quote: `I built the machine. Now I'm consulting on yours.`
- Form headline: `30 minutes. No deck. No pitch.`
- File stamp: `FILE 001 · OPERATOR-CONFIDENTIAL`

Section numbers use the format `// 0X · SECTION NAME` — preserve the `//` prefix and the `·` separator (middle dot, U+00B7, not a hyphen).

---

## Files in this Bundle

- `Measure3 Lander v3.html` — the full design reference. Self-contained, no external dependencies beyond Google Fonts + Fontshare CDN.
- `assets/measure3-logo.png` — logo bitmap (optional — see Assets note above).
- `README.md` — this file.

---

## Implementation Checklist

When porting, work in this order:

1. **Set up the design tokens** in your styling layer first (CSS custom properties, Tailwind theme, design-tokens.json — whatever your codebase uses). Lock in the palette, type scale, and the no-radius / no-shadow rules.
2. **Build the topbar** — it's the most-reused chrome and locks in the page's structural language (sticky, 2px bottom border, paper bg, JetBrains Mono nav).
3. **Build the hero proof block** next — it's the biggest typographic moment and validates the type scale.
4. **Build one section card style** that all the bordered-card sections (Method, Services, AI, Engage) can share. Don't fork it three times.
5. **Build the rest of the sections top-down**, copy-pasting from the HTML reference for exact wording.
6. **Wire the form** to your form handler of choice.
7. **Test responsive** at 1440 / 1024 / 768 / 414. Pay attention to the funnel moneyshot — that's the section most likely to break.
8. **Audit copy** against the "Copy Notes" section before shipping.

Good luck. Measure twice. Decide once.
