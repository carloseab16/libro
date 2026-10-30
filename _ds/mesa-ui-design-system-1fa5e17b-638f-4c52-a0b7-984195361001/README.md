# Shadcn Mobile Design System

A mobile-first implementation of [shadcn/ui](https://ui.shadcn.com) — neutral, typography-led, radix-primitives-based components adapted for iOS/Android app surfaces. The system prizes restraint: generous whitespace, clear hierarchy, tactile-but-quiet interactivity.

This system was extracted from a Figma file called **"Design System Mobile Shadcn.fig"** (71 pages, 125 top-level frames) containing the canonical shadcn/ui component library with mobile-oriented example blocks.

## Source materials

- **Figma file:** `Design System Mobile Shadcn.fig` (attached as virtual filesystem)
- **Upstream:** [shadcn/ui](https://ui.shadcn.com) — MIT License
- **Icons:** [Tabler Icons](https://tabler.io/icons) — MIT License (7k+ outline + filled icons)
- **Fonts:** Inter (primary), JetBrains Mono (code), Geist (occasional)

## Products / surfaces in scope

The Figma file represents one product: a **mobile UI component library** with pages for every primitive (Button, Input, Card, etc.) plus example Blocks laid out for Mobile (390px) / Tablet / Desktop / Responsive viewports. The sample kit ships a payment-methods flow as the working example of mobile screen composition.

---

## CONTENT FUNDAMENTALS

Shadcn's voice is **utilitarian, direct, slightly literary.** Copy avoids marketing fluff. Strings in the Figma file skew developer-documentation — things like *"A modal dialog that interrupts the user with important content and expects a response"* (the Alert Dialog's `lead` example) or *"Beautifully designed. Copy and paste into your apps. Open Source"* (the Blocks header).

**Tone**
- **Second person**, never first. "Enter your email address.", not "We need your email."
- **Declarative.** States of fact, not exhortations. "Payment successful." vs "Yay, you paid!"
- **Lowercase where possible** for inline labels; Title Case for screen titles and primary buttons; sentence case for supporting text.
- **No emoji** in any UI-facing copy. None. The system reads as engineering-grade.
- **Jokes are allowed in dummy content.** The Typography specimen uses the "Joke Tax Chronicles" placeholder copy — a wink, not a personality. Production copy stays dry.
- **No exclamation marks.** Ever, if you can help it.

**Casing / punctuation**
- Button labels: **Title Case** for primary CTAs ("Add Card", "Continue"), **sentence case** for secondary / ghost ("Cancel", "Learn more").
- Field labels: `small` style (14/14, medium weight), sentence case ("Email address", "Card number").
- Helper text: `muted` style (14/20, regular), sentence case, ends with a period.
- Error text: same as helper but `--destructive` color.
- No Oxford comma in lists inside UI chrome; use it in prose.

**Example pairings (from Figma)**
- Form label → helper: **"Email address"** → *"Enter your email address."*
- Section title → lead: **"Are you absolutely sure?"** → *"This action cannot be undone."*
- Empty state: concise description + single CTA. No illustrations-with-a-face.

---

## VISUAL FOUNDATIONS

**Color vibe**
- Near-monochrome. The system is built on the **Zinc** scale (`#fafafa` → `#09090b`), a cool-neutral grey with the faintest blue cast. Black on white is the primary palette; accent color is used with surgical restraint.
- The Figma catalog ships 21 additional Tailwind palettes (Red, Orange, Amber, Yellow, Lime, Green, Emerald, Teal, Cyan, Sky, Blue, Indigo, Violet, Purple, Fuchsia, Pink, Rose, plus Gray/Neutral/Stone variants) — use them to theme individual apps, but **pick one and commit**.
- Recurring accent in the file is **`#C54600`** (burnt orange, 1214 uses) — treat it as the example theme color. Otherwise defaults are **black/white**.

**Type**
- **Inter** for UI text (400, 500, 600, 700, 800). Display sizes (h1=48, h2=30) use 700 with negative letter-spacing (`-0.012em` for h1 down to `-0.005em` for h4). Body 16/28 regular. See `colors_and_type.css` for exact tokens.
- **JetBrains Mono** (500) for data/monospace (hex codes, IDs, card numbers when shown in mono). **Menlo** appears in a few `inline-code` spots — interchangeable with JetBrains Mono.
- No italic except inside blockquotes.
- Text is **never below 12px** in the system. Body minimum is 14px (`small`/`muted`). Touch targets keep their labels at 14 or 16.

**Backgrounds**
- Flat. Always. `--background` is `#ffffff`, `--card` is `#ffffff`. Dark mode flips to `#09090b`.
- **No gradients** anywhere in component chrome. No blurred backgrounds, no aurora, no noise.
- Full-bleed imagery appears only inside app-specific surfaces (e.g. a Music or Dashboard example) — never in navigation chrome.
- Patterns, textures, hand-drawn illustrations: absent by design. Shadcn's aesthetic is "we removed everything we could."

**Animation**
- Fast and flat. Transitions are **150–200ms**, `cubic-bezier(0.4, 0, 0.2, 1)` (Tailwind's default ease). No bounces, no overshoot.
- Fades (popovers, dialogs) pair with a 2–4px translate. Drawers slide from the edge, 300ms.
- No parallax. No scroll-tied motion.

**Hover / focus / press**
- **Hover:** primary → `zinc-900/90` (10% alpha peel); outline/ghost → `--accent` (`zinc-100`) fill.
- **Focus:** `outline: 2px solid var(--ring)` + `outline-offset: 2px`. Ring is `zinc-950` on light, `zinc-300` on dark. Never a glow, never a drop shadow.
- **Press:** subtle — no scale transforms on desktop; on mobile, touchables use `:active` → `--accent` fill + 50ms no-transition to feel immediate. No shrink animations.
- **Disabled:** `opacity: 0.5` + `pointer-events: none`. Always.

**Borders**
- 1px, `--border` (`zinc-200` light / `zinc-800` dark). Hairlines only — never 2px chrome.
- Dashed borders appear inside Figma documentation frames (marking swap placeholders) but do NOT ship in components.

**Shadows**
- Tailwind scale (sm / base / md / lg / xl / 2xl / inner). Components use `shadow-sm` or `shadow` at most; the Button ships flat with zero shadow on primary. Popover uses `shadow-md`. Dialog uses `shadow-lg`. Nothing goes above `shadow-lg` in UI chrome.
- **No inner shadows** as decoration — `shadow-inner` exists in the scale but isn't used in standard components.
- **No "protection gradients"** (colored fades at card edges for text legibility) — shadcn doesn't do photographic content.

**Transparency / blur**
- `rgba(0,0,0,0.1)` and `rgba(0,0,0,0.06)` appear as shadow colors only. The UI itself is opaque.
- `backdrop-filter` is **not used** in shadcn primitives. Dialog overlay is plain `bg-black/80`.

**Corner radii**
- The canonical `--radius` token is **6px** (was 8px in older shadcn). Scale: 2 / 6 / 8 / 12 / 16 / 20 / full.
- Buttons, inputs, badges → `6px`. Cards → `8–12px`. Dialogs/sheets → `12–16px`. Avatars → full.
- Inputs and buttons at `size=sm` → 4–6px. At `size=lg` → 8px.

**Cards**
- Flat white (`--card`), 1px `--border`, `--radius-md` (8px) or `--radius-lg` (12px). Optional `shadow-sm`. Internal padding: 24px.
- Card anatomy: `CardHeader` (title + description) → `CardContent` → `CardFooter` (action buttons, right-aligned).

**Layout rules**
- Mobile container is **390px wide** (iPhone 14). Horizontal padding is **16px** (edge) or **24px** (content-heavy screens).
- Fixed chrome: top app bar is 56px (56 tall on mobile incl. safe area). Bottom nav (if used) is 64px plus 34px home-indicator safe area.
- Spacing uses the 4px grid: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64.
- Lists items: min-height 56px on mobile; 44px minimum touch target never violated.

---

## ICONOGRAPHY

- **Tabler Icons** (MIT) is the canonical icon set — the Figma file ships both Stroke and Fill variants. 24px default, 1.5–2px stroke, rounded linecaps/joins, geometric feel.
- **Do not hand-draw SVG icons.** Link Tabler from CDN (`https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3/dist/tabler-icons.min.css`) or import the React/SVG version. Lucide icons are a compatible drop-in substitute (same author upstream, same stroke/feel) and are what shadcn/ui docs themselves use.
- **No emoji** in any UI-facing surface. The Figma file contains zero emoji in component examples.
- **No unicode glyph icons** (✓, ×, ↓ etc) inside chrome — always the SVG. Arrow glyphs appear inline in prose-y copy, not as buttons.
- **Flags** — for country/currency selectors, the Figma has a full Flags page. Use SVG country flags (`/assets/flags/` if present) or a library like `flag-icons`.
- **Social media icons** — Simple Icons or brand-provided SVGs; the Figma has a page for these.
- **Logos** — shadcn has no corporate logo. Apps built on this system ship their own wordmark; keep it monospace or Inter Bold, no icon-glyph mark needed.

### Usage guidance

- Inside buttons: 16px icon at `size=sm`/`md`, 18px at `size=lg`. Icon-only buttons are always square (matching button height).
- In lists: 20–24px, color `--muted-foreground` unless the icon is the action.
- On empty states: 40–48px, color `--muted-foreground`.

---

## Index — files in this system

| Path | Purpose |
|---|---|
| `README.md` | This file |
| `SKILL.md` | Agent Skill entry point (read this first when the skill is invoked) |
| `colors_and_type.css` | CSS custom properties for all tokens. Import this in every artifact. |
| `preview/*.html` | Small cards for the Design System review tab (Type, Colors, Spacing, Components, Brand) |
| `assets/` | Tabler icon CDN references; no bundled assets since the system is font-first |
| `ui_kits/mobile/` | High-fidelity mobile UI kit; shows a complete **Payment Methods** flow as the working example |
| `ui_kits/mobile/index.html` | Entry point — interactive mobile app click-through |
| `ui_kits/mobile/payment-app.jsx` | Payment flow screens, built from the exported components |
| `components/<Name>/` | Exported components (`.jsx`, `.d.ts`, card `.html`) |

## Components

Exported on `window.ShadcnMobileDesignSystem_1fa5e1` (source in `components/<Name>/`):

- **Button** — primary, secondary, outline, ghost, destructive, accent; sm/md/lg
- **Input** — labelled field with help and error text
- **Badge** — status pill
- **BrandMark** — placeholder card-network mark (visa, mc, amex, discover, paypal, apple)
- **CardRow** — saved payment method row
- **AppBar** — 56px mobile top bar with back and trailing slot
- **Sheet** — bottom-sheet dialog

Global stylesheet: `styles.css` (imports `colors_and_type.css`).

### Getting started

1. Import `colors_and_type.css` in any new HTML artifact.
2. For icons, pull Tabler via CDN: `<link href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3/dist/tabler-icons.min.css" rel="stylesheet">` then use `<i class="ti ti-credit-card"></i>`.
3. For components, copy from `ui_kits/mobile/` — they are small JSX files, one concept each.
4. Follow the VISUAL FOUNDATIONS above: near-monochrome, flat surfaces, hairline borders, 150ms animations.

---

## Caveats & substitutions

- **No bundled font files.** Inter, JetBrains Mono, and Geist are loaded from Google Fonts via `colors_and_type.css`. The upstream shadcn system doesn't ship font binaries either — it assumes Google/self-hosted fonts.
- **Icons are CDN-linked, not bundled.** Tabler Icons via jsDelivr.
- The Figma file's accent color (`#C54600`, burnt orange) is used as the default brand accent in the Payment Methods example. Swap via the `--accent-orange` token or rethemeing to another Tailwind scale.
