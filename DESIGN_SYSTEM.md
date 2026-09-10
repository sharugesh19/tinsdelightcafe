# Tin's Delight Café — Design System

This document is the single source of truth for the visual language of this
project. Every developer or AI agent who touches this codebase after the
foundation phase **must** read this before adding UI. The goal is one
consistent site, not a patchwork of different "eras" of design.

> **Rule #1: Do not introduce new colors, fonts, radii, or shadows.**
> If something you're building doesn't seem to fit the existing tokens,
> reuse the closest existing token rather than inventing a new one. If you
> truly believe a new token is required, add it to `src/index.css` in the
> matching section of this file and document it here — don't invent
> one-off values inline in a component.

All tokens live in **`src/index.css`** as CSS custom properties on `:root`.
Components should reference the semantic aliases (`--color-bg`,
`--color-text`, `--color-accent`, etc.), not the raw palette variables,
wherever possible — that's what keeps a future re-theme (if ever needed)
to a single file.

---

## 1. Creative direction

**Feel:** warm, premium, elegant, cozy, vintage-inspired, modern.

**Concept:** The name "Tin's Delight" is taken literally as the design's
anchor — this is a café that feels like it grew out of a hand-painted tin
sign and an old enamel coffee tin: deep espresso brown, aged brass, and
warm parchment cream, with a single circular "tin badge" emblem as the
site's signature mark. It should **not** read as a generic warm-cream/
terracotta AI-generated template — the palette is deliberately darker and
more metallic/vintage than that default, and the badge motif carries the
"tin" idea through instead of decorative icons.

**One bold element rule:** the circular brass-ringed emblem badge (used in
the Navbar and Hero) is the site's single memorable visual flourish.
Everything else — spacing, cards, buttons — stays quiet and disciplined
around it. Do not add competing decorative flourishes (extra badges,
gradient washes, icon soup) elsewhere on the site.

---

## 2. Color

### Base palette

| Token | Hex | Role |
|---|---|---|
| `--color-espresso` | `#2B1B14` | Deep coffee brown — dark section backgrounds (Hero, Footer) |
| `--color-espresso-2` | `#3A2419` | Lifted espresso — cards/panels placed on dark backgrounds |
| `--color-cream` | `#F3E9D2` | Warm parchment — main light background |
| `--color-cream-2` | `#EADFC3` | Slightly deeper cream — alternating section backgrounds |
| `--color-brass` | `#B8863B` | Aged brass/gold — primary accent, borders, emblem ring |
| `--color-brass-light` | `#D4A857` | Brass hover/highlight state |
| `--color-oxblood` | `#7A2E2A` | Vintage enamel red — **rare**, high-emphasis accent only (e.g. eyebrows, a single strong CTA if ever needed) |
| `--color-forest` | `#2F4632` | Deep vintage green — secondary accent, use sparingly for variety (e.g. a badge/tag) |
| `--color-charcoal` | `#241C16` | Primary text color on light backgrounds |
| `--color-ink-soft` | `#5A4C3E` | Secondary/muted text on light backgrounds |
| `--color-paper` | `#FBF6EB` | Lightest tone — card surfaces on cream background |

### Semantic aliases (use these in components)

`--color-bg`, `--color-bg-alt`, `--color-bg-dark`, `--color-surface`,
`--color-text`, `--color-text-muted`, `--color-text-on-dark`,
`--color-text-on-dark-muted`, `--color-accent`, `--color-accent-hover`,
`--color-accent-strong`, `--color-border`, `--color-border-on-dark`.

### Usage rules

- Light sections (default page background) use `--color-bg` /
  `--color-bg-alt` for alternation between sections, with
  `--color-surface` for any card sitting on top.
- Dark sections (Hero, Footer, and any full-bleed "statement" section) use
  `--color-bg-dark` with `--color-text-on-dark` / `--color-text-on-dark-muted`.
- `--color-accent` (brass) is for primary buttons, active states,
  underlines, borders, and the emblem. It is the workhorse accent.
- `--color-accent-strong` (oxblood) is reserved for eyebrows/labels and
  rare high-emphasis moments — never use it as a large background fill.
- `--color-forest` is available as a tertiary accent for future
  variety (e.g. a "vegetarian" tag, a seasonal badge) — do not overuse.
- Never use pure black (`#000`) or pure white text-on-dark; always use the
  warm near-black/near-white tokens above.

---

## 3. Typography

| Token | Font | Role |
|---|---|---|
| `--font-display` | **Fraunces** (serif, vintage-soft) | All headings (`h1`–`h4`), the emblem letterform, hero headline |
| `--font-body` | **Karla** (humanist sans) | Body copy, navigation, buttons, UI text |

Both are loaded via Google Fonts `@import` at the top of `src/index.css`.
Do not add additional font families — two is the limit for this site.

### Type scale (fluid, mobile-first via `clamp()`)

| Token | Size | Typical use |
|---|---|---|
| `--text-xs` | 13px | Fine print, footer copyright |
| `--text-sm` | 15px | Nav links, buttons, meta text |
| `--text-base` | 16px | Body copy default |
| `--text-md` | 18px | Lead paragraphs, subheadline |
| `--text-lg` | 20–24px | Small section headings |
| `--text-xl` | 24–32px | Card/feature titles |
| `--text-2xl` | 30–44px | Section titles (h2) |
| `--text-3xl` | 36–60px | Large section titles |
| `--text-4xl` | 44–76px | Hero headline (h1) only |

### Rules

- Headings are `font-weight: 600` by default (set globally on `h1–h4`).
  Do not mix in additional weights for headings.
- Body line-height is `--leading-normal` (1.55); use `--leading-loose`
  (1.75) for short lead paragraphs like the hero subheadline, and
  `--leading-tight` (1.1) only for large display headlines.
- Keep line length under ~60–70 characters for body paragraphs
  (`max-width` in `ch` units, see `.hero__subheadline` for the pattern).
- **Do not** use all-caps for labels/eyebrows — the `.eyebrow` utility
  uses letter-spacing and color for emphasis instead, in sentence case.
- **Do not** bold or italicize a single word inside a headline for
  emphasis — if something needs emphasis, it's a copy problem, not a
  typographic one.

---

## 4. Spacing

4px base unit, exposed as a numbered scale — always use these tokens,
never raw `px`/`rem` values in component CSS:

`--space-1` (4px) → `--space-12` (128px). See `src/index.css` for the
full list.

Section-level rhythm has its own dedicated tokens — **always use these
for section padding**, not the raw `--space-*` scale directly:

- `--section-padding-y` — fluid vertical padding for any `.section`
- `--section-padding-x` — fluid horizontal padding, used by `.container`
- `--container-max` (1180px) — max width for standard content
- `--container-narrow` (760px) — max width for text-heavy/centered content

Use the existing `.container` / `.container--narrow` and `.section`
utility classes rather than re-declaring padding per component.

One additional layout utility token exists outside the numbered scale:

- `--navbar-height` (76px) — approximate rendered height of the sticky
  navbar. Used only as `scroll-margin-top` on anchor targets (`#home`,
  `#menu`, `#story`, `#visit`) so in-page nav links don't land with their
  heading hidden underneath the sticky header. Not a color/font/radius
  token, so it doesn't affect visual identity — update it here and in
  `src/index.css` together if the navbar's rendered height ever changes.

---

## 5. Border radius

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Chips, tags, small inputs |
| `--radius-md` | 10px | Buttons, form fields |
| `--radius-lg` | 18px | Cards, panels |
| `--radius-xl` | 28px | Large feature panels, framed images |
| `--radius-full` | 999px | Circular emblem, pills, avatars |

Do not mix radii within the same visual "family" of component — e.g. all
cards on the site should use `--radius-lg`, not a mix of `--radius-lg`
and `--radius-xl`.

---

## 6. Shadows

Shadows are warm-toned (based on the espresso brown, never pure black)
and intentionally low-contrast:

- `--shadow-sm` — resting state for cards
- `--shadow-md` — hover state for cards, or resting state for elevated
  elements like the sticky navbar if it ever needs one
- `--shadow-lg` — modals, popovers, or strongly elevated feature panels
- `--shadow-xl` *(added in the 2026 visual redesign)* — deeper lift for
  full-bleed feature panels only (currently: the Hero visual panel, the
  Cart Drawer). Do not use it for ordinary cards — `--shadow-md` on hover
  is still the ceiling for `.card`.
- `--shadow-inset-line` — subtle inner highlight, used sparingly for a
  "pressed metal" edge effect if needed on badge-like elements

Never use a generic `rgba(0,0,0,0.1)` grey shadow — always use the
tokens above so shadows stay warm and consistent with the palette.

---

## 7. Buttons

Base class `.btn`, always paired with a modifier:

- **`.btn--primary`** — brass fill, espresso text. The default action
  button (e.g. "View the Menu", "Reserve a Table"). Use once per view as
  the clear primary action; don't put two primary buttons side by side.
- **`.btn--outline`** — transparent with a currentColor border, used on
  dark backgrounds (e.g. Hero secondary action) or as a secondary action
  next to a primary button.
- **`.btn--ghost`** — no border/fill, text-only with a color shift on
  hover. Use for tertiary/low-emphasis actions (e.g. "Learn more" links
  inside a card).

Buttons are `border-radius: var(--radius-md)`, `font-weight: 600`,
`font-size: var(--text-sm)`, with generous horizontal padding (`1.7em`)
so they never feel cramped. On mobile, primary hero/CTA buttons stack
full-width; from the tablet breakpoint up they sit inline (see
`.hero__actions` for the reference pattern).

---

## 8. Cards

Base class `.card`:

- Background: `--color-surface`
- Border: `1px solid var(--color-border)`
- Radius: `--radius-lg`
- Shadow: `--shadow-sm` at rest

When a card needs a hover state (e.g. a future menu item card), transition
`box-shadow` up to `--shadow-md` and optionally lift with
`transform: translateY(-2px)` — keep the transition on
`var(--duration-base) var(--ease-standard)`. Do not add a hover scale or
rotation; lift + shadow is the established pattern.

---

## 9. Responsive breakpoints

This site is **mobile-first**: all base styles in every stylesheet target
mobile, and larger screens are addressed with `min-width` media queries
layered on top. Never write a `max-width` query as the primary layout
mechanism.

| Breakpoint | Width | Target |
|---|---|---|
| (base) | 0px+ | Phones |
| `--bp-sm` | 480px | Large phones |
| `--bp-md` | 768px | Tablets |
| `--bp-lg` | 1024px | Small laptops |
| `--bp-xl` | 1280px | Desktop |
| `--bp-2xl` | 1536px | Large desktop |

These are documented as a reference comment in `src/index.css` (CSS
custom properties can't be used inside `@media` conditions directly), so
when writing a media query, hard-code the pixel value but **use the table
above** to stay consistent — don't invent your own breakpoint values.

```css
/* Pattern used throughout the codebase */
.component { /* mobile styles */ }

@media (min-width: 768px) {
  .component { /* tablet-and-up overrides */ }
}

@media (min-width: 1024px) {
  .component { /* laptop-and-up overrides */ }
}
```

---

## 10. Component styling rules

- **Co-locate CSS with components.** Each component has its own `.css`
  file imported directly into its `.jsx` file (e.g. `Navbar.jsx` /
  `Navbar.css`). Do not add a global stylesheet per page — keep styles
  scoped to the component that owns them.
- **Class naming:** BEM-flavored, component-prefixed —
  `.navbar`, `.navbar__link`, `.navbar--open`. Follow this pattern for
  every new component so class names never collide across files.
- **No inline styles** except for truly dynamic, computed values (there
  are none in the foundation phase). Everything else goes through CSS
  classes and tokens.
- **No new global utility classes** without a good reason — prefer
  component-scoped classes. The exceptions already established are:
  `.container`, `.container--narrow`, `.section`, `.btn` (+ modifiers),
  `.card`, `.eyebrow`, `.visually-hidden`.
- Always design the mobile layout first in each component's CSS file,
  then layer breakpoints on top, matching the structure already used in
  `Navbar.css` and `Hero.css`.

---

## 11. Animation rules

- **Motion is deliberate, not decorative.** The only orchestrated
  animation in the foundation phase is the Hero's staggered fade-up
  reveal on load (badge → eyebrow → headline → subheadline → actions).
  Do not add scroll-triggered fade-ins to every section as a matter of
  course — that's the generic "AI template" tell this project explicitly
  avoids.
- Interactive hover/focus transitions (button color shift, nav link
  underline, card lift) are fine and expected — those respond to user
  action rather than running on page load.
- Use the shared motion tokens: `--ease-standard` for UI state changes
  (color, background, border), `--ease-out-soft` for reveals/entrances,
  and the `--duration-fast` / `--duration-base` / `--duration-slow`
  scale. Don't hand-roll new easing curves or durations per component.
- **Always respect reduced motion.** The global
  `prefers-reduced-motion: reduce` rule in `src/index.css` already
  neutralizes animations/transitions site-wide — if you add a new
  `@keyframes` animation, also add it to that reduced-motion block by
  name (see `Hero.css` for the pattern) so it's explicitly disabled
  there too.

---

## 12. File/folder structure

```
src/
  assets/            static images/illustrations — logo.png goes here
                      (see components/common/LogoMark.jsx for how it's
                      wired in once supplied)
  components/
    common/          shared, cross-section primitives: Icons.jsx (all
                      SVG icons used site-wide) and LogoMark.jsx/.css
                      (the brand mark used by Navbar, Hero, Footer)
    layout/          Navbar, Footer, and any future structural chrome
    sections/        Hero, PlaceholderSection, and future page sections
  config/
    cafeConfig.js    brand/nav/hero copy — NOT menu or cart data
  styles/            (reserved for any future shared style modules)
  App.jsx            page shell / section assembly only
  main.jsx           React entry point
  index.css          design tokens + global reset + shared utilities
```

Each new feature area (menu, story, visit, ordering) should get its own
subfolder under `components/sections/` with a co-located `.css` file,
following the Hero/Navbar pattern exactly. `menu`, `contact` (the "Visit
Us" section), and `ordering` are now built this way; `story` remains a
`PlaceholderSection` for a future phase.

---

## 13. What NOT to change without strong reason

- The color palette, type families, radii, and shadow values in
  `src/index.css`. If a future phase truly needs a new token (e.g. a
  success/error color for a form), add it as a new semantic alias next
  to the existing ones and document it in this file — don't replace or
  rename existing tokens.
- The single-badge-as-signature-element rule (§1). New sections should
  earn their visual interest from layout, imagery, and copy — not by
  adding more badges/emblems.
- The mobile-first breakpoint structure (§9).

This file should be updated in the same commit/session as any change to
`src/index.css` tokens, so it never drifts out of sync with the code.

---

## 14. 2026 visual redesign addendum

This section documents the pass that took the foundation-phase site from
"functionally complete but visually basic" to the premium/editorial
look the café brief asked for. It **extends** the rules above; nothing
in §1–§13 was invalidated, only built on. Read this alongside the
sections above, not instead of them.

### 14.1 What changed and why

- **Logo system.** `src/assets/logo.png` was not supplied with this
  brief. Rather than fabricate a text logo scattered across components,
  a single `LogoMark` component (`components/common/LogoMark.jsx`) now
  renders a designed placeholder badge (matches the existing "tin badge"
  emblem concept from §1) and is the *only* place that will ever
  reference the image file. Navbar, mobile nav, Hero, and Footer all
  import `LogoMark` — never the image directly. When the real logo is
  supplied, uncomment the two marked lines in `LogoMark.jsx`; no other
  file changes.
- **Shared icon set.** `components/common/Icons.jsx` centralizes every
  SVG glyph used across the site (WhatsApp, phone, pin, clock, bag,
  close, plus/minus, search). Previously each component hand-rolled its
  own inline `<svg>` (see the original `Menu.jsx` search icon) — that's
  now consolidated so stroke weight/size/viewBox stay identical in the
  Navbar cart button, Contact cards, Cart Drawer, Cart Launcher, and
  Footer meta links.
- **Hero** moved from a single centered column to a proper two-panel
  split on desktop (copy + CTAs on the left, a textured "tin badge"
  visual panel on the right) while staying a tightly composed single
  column on mobile, with the logo, headline, subheadline, and both CTAs
  above the fold on common phone sizes. Copy was updated to the brief's
  requested headline/subheadline/CTA wording (marketing copy only —
  no address/phone/price data was invented; those still come from
  `cafeConfig.contact` and `menuData.js` unchanged).
- **Menu** changed from a flat responsive grid of boxed cards to an
  editorial layout: results are grouped under a category heading with a
  short brass rule (`.menu__group-heading`), and each item renders as a
  row (`MenuCard.jsx`, now producing `.menu-row` markup) with a dotted
  leader between name and price, description underneath, and a
  pill-style "+ Add" control — closer to a printed café menu than a
  product grid. A new `FeaturedItems.jsx` component adds a "Fan
  Favourites" signature strip using bigger `.card`-based treatment, but
  it **only renders items explicitly flagged `featured: true` in
  `menuData.js`** — see the note in that file. No signature items were
  invented to populate it; it stays hidden until real ones exist.
- **Contact** and the **Cart Drawer / Cart Launcher** were wired up to
  the shared icon set and restyled to match (dark drawer header, pill
  steppers, icon-labelled call/WhatsApp actions) so ordering and contact
  feel like the same product rather than two different "eras" of UI.
- **Footer** now uses `LogoMark` + the tagline from `cafeConfig.brand`
  and icon-labelled contact links, replacing the plain text block.
- **Navbar** gained a working cart button (bag icon + live item-count
  badge, wired to `useCart().openCart`) next to the hamburger on mobile
  and next to the nav links/CTA on desktop, plus a subtle
  scroll-elevated state (`.navbar--scrolled`) for depth once the page is
  scrolled.

### 14.2 New tokens (documented per the §13 rule)

Three tokens were added to `src/index.css`, all additive — no existing
token was renamed or removed:

- `--shadow-xl` — see §6 above.
- `--divider-rule` — a horizontal brass-to-transparent gradient used as
  the short decorative rule under section eyebrows (`.section-heading__rule`)
  and between menu category groups (`.menu__group-rule`). This is the
  system's one recurring "editorial" flourish — don't introduce a second,
  different divider style elsewhere.
- `--texture-grain` — an extremely low-opacity dot pattern used only on
  the Hero visual panel background, standing in for paper/tin grain
  without an image asset. Not intended for general use on cards or
  buttons — texture stays reserved for that one full-bleed panel so it
  doesn't become visual noise site-wide.

A shared `.section-heading` utility class (eyebrow + rule + title +
subtitle) was also added to `src/index.css` and is now used by both
Menu and Contact, replacing what were previously two near-duplicate
heading blocks — reuse this for any future section header rather than
writing a new one.

### 14.3 Still true from the foundation phase

- One bold decorative element rule (§1): the brass "tin badge" is still
  the single recurring emblem motif — it now also appears, larger and
  textured, in the Hero visual panel, but no *new* competing flourishes
  were added elsewhere.
- Two-font system, color palette, spacing scale, and radii are
  unchanged (§2–§5).
- Mobile-first breakpoint structure is unchanged (§9); every component
  touched in this pass was re-verified at 320/375/390/430/768/1024/1440px.
