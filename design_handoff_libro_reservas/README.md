# Handoff: mesa 24/7 — Libro de Reservas y Operación y horarios

## Overview
Restaurant back-office for mesa 24/7 (local "Sheraton"). Covers the reservations book and the operation setup: weekly/daily schedule calendar, schedule editor (Crear/Editar horario), consumption types (Tipos de consumo), shifts (Turnos), closures (Cerrar cupos) and tables (Mesas y combinaciones).

## About the Design Files
The files here are **design references built in HTML** — prototypes showing intended look and behavior, not production code. Recreate them in the target codebase's environment (React, Vue, etc.) using its patterns and libraries. If there is no codebase yet, pick the most appropriate framework.

- `standalone/` — self-contained, offline HTML. Open in a browser to click through. `Prototipo Libro de Reservas.html` is the full app entry; `Operacion y Horarios.html` opens directly on the operations module.
- `source/` — readable source. Each `.dc.html` contains an HTML template (inline styles, `{{ }}` holes) and a `class Component` logic block (state + derived values in `renderVals()`). Read these for exact values and behavior. `support.js` is the prototype runtime only — do not port it.

## Fidelity
**High-fidelity.** Final colors, typography, spacing and interactions. Recreate pixel-accurately.

## Global layout
- Top bar 64px: hamburger, local selector (avatar 40px + "Local / Sheraton"), centered mesa 24/7 logo, chat button right.
- Left sidebar 200px (Operación y horarios): Calendario, Turnos, Cerrar Cupos, Tipos de consumo, Cobros en reservas, Mesas y combinaciones. Active item has right 2px white border. Footer "Actualizado…" + "Ocultar menú". Below ~900px it becomes a horizontal tab bar.
- Content panel rounded top-left 24px on #16181A.
- 8px spacing grid. Text sizes only 12 / 14 / 16px. Buttons 40px tall (32px compact).

## Screens

### 1. Calendario (Operación y horarios)
- Toolbar: Hoy · ‹ range › · view select (Día / Semana / Mes) · filter · help · split button "Cerrar cupos | count badge (red #ef4444) | chevron" · primary "+ Nuevo horario".
- Week grid: 64px per hour, 1 AM–11 PM. Hour labels 12px #a1a1aa. Current-time line orange #ff8c1a with dot.
- Day header row 40px; the **entire header cell is clickable** → daily view. Today's number in orange. Days with closures show a red pill (lock + count) and the column tints rgba(239,68,68,0.12).
- Schedule blocks: colored by tipo de consumo; title 12px/600, time range, channels at 70% opacity; turno letter badge (D/A/T/C) bottom-left 16px black square. Overlapping blocks split into columns. No lock icons on blocks.
- Partial closures render as a dark pill inside the block: lock + "3 PM – 6 PM · name".
- Clicking a block opens a peek popover (floats; flips upward to stay in view): color square + title + date; rows Duración / Turno / Canal / Zonas; if closed, the **closure card** (see tokens below); primary "Ver reservados (n)". Kebab menu: Editar, Duplicar, Eliminar. (No "Deshabilitar tipo de consumo".)
- Chevron on Cerrar cupos opens right drawer "Cierres": range nav, search, "+ Agregar cierre", groups by date ("Miércoles 28 de octubre" + "Ver día"), each closure as a **closure card**, then "+ Agregar cierre este día" secondary button.

### Closure card (shared everywhere: peek, drawer, Cerrar cupos page, day popover)
- Padding 12px 16px, radius 12px, background rgba(239,68,68,0.08), border 1px rgba(239,68,68,0.35).
- Lock icon 20px #f87171.
- Title 14px/600 "Bloqueado por cierre: {name}".
- Scope 12px #d4d4d8 "{Día completo|Rango de horas} · {Todo el día|7 AM – 9 AM} · {date}".
- Meta 12px #a1a1aa "{motivo} · por {user} · {date}".
- Channels 12px #a1a1aa "Canales cerrados: Widget, mesa 24/7 y Internas".
- In lists: Editar (pencil) and Abrir cupos (lock-open) 32px ghost icon buttons on the right.

### 2. Cerrar cupos (page + flow)
- Page: title + description + primary "Cerrar cupos". List grouped by date using closure cards (max-width 760px).
- Flow (modal): one date / date-range picker with "Todo el día" toggle (otherwise from/to time). Then three collapsible sections, closed by default, each with an "X agregados" counter: **Zonas y mesas**, **Tipos de consumo**, **Turnos**. Add via searchable checklists (multi-select); edit selection afterwards. Turnos shows "Incluye todos los horarios y tipos de consumo de este turno" only once items are added.
- No prior configuration required: if nothing is added, the whole local closes. No Comunicación section. Existing reservations are kept.

### 3. Crear / Editar horario (modal, bento layout)
Opens directly into the form (no view chooser). Two columns at ≥960px, one column below. Boxes #16181A, radius 16px, 24px padding; label column 136px.
- **Left:** Servicio (Tipo de consumo select + Color button 150px; Turno chips + "+" to add turno) · ¿Cuándo? (Fecha de inicio with custom month calendar popover, Inicia/Termina, Repetición) · Se reflejará en (channel chips; "Reservas internas" always on).
- **Right:** Reglas de reserva (Capacidad: máximo de personas por hora, Hasta esta hora se puede reservar; Ventanas de anticipación: Para aceptar reservas / Para modificar reservas — each opens popover: number + Min / Hrs / Días segmented + "Listo" secondary) · Zonas (full-width selector) · Lista de espera (switch) · Cobros en reservas (switch).
- Only required fields show a red "Obligatorio" tag until filled; no "Opcional" labels. No "Fecha especial".
- Footer: Cancelar (secondary) + Guardar (primary). "Pendiente: …" hint when invalid.

**Chips (Turno, Canales):** 40px pill. Default: bg #1E2021, border #38393A, no icon, padding 0 24px. Selected: border #ff8c1a + orange check icon 16px, left padding 16px.

**Agregar turno modal (440px):** Nombre del turno * · Nombre del turno en inglés * · Máximo de personas por turno (numeric, 0 = sin límite). Validation: both names required (red border), duplicate name blocked. On save the new turno is selected. Default turnos: Desayuno (D), Almuerzo (A), Tea Time (T, 4–6 PM), Cena (C).

### 4. Tipos de consumo
List without Todos/Deshabilitados tabs. Breadcrumb appears only after selecting an item. Creator uses the same bento layout: Nombre field then Color button; "Preview en el listado de reservas" chip under the name; description, rules, dates.

### 5. Turnos
Table: letter badge · Nombre · Nombre en inglés · Máximo de personas · Horarios · actions. "Crear" primary opens the Agregar turno modal.

### 6. Mesas y combinaciones · Libro de Reservas
See `source/` files for full structure.

## Interactions
- Every input is fully clickable (whole field opens its picker/menu, not only the icon).
- Popovers/menus: absolutely positioned at 56px below their trigger, flip up when out of bounds, close on outside click / Escape.
- Transitions 150ms on background/border-color. Hover border #71717a on inputs.
- Toast confirmations bottom-center.

## State
- `blocks[]` closures: {id, name, what: 'dia'|'horas', from, to, h0, h1, sel:{turnos, mesas, tipos}, ch[], reason, user, at, log[]}. `unblocked` map for per-horario exceptions.
- `items[]` horarios: {id, n, c (color), t (turno key), s, e (hours), ch, form{...}}.
- `turnos[]`: [nameEs, key, nameEn, maxPax]. Prototype persists to localStorage (`mesa247.*`) — replace with API.

## Design tokens
- Background darkest #0B0B0C · panels/boxes #16181A · inputs & secondary buttons #1E2021 / border #38393A (hover bg #2a2c2d) · popover #1c1c1f · dividers #27272a.
- Text #fafafa · secondary #a1a1aa · tertiary #71717a · #d4d4d8.
- Primary #ff8c1a (hover #ffa040), text on primary #1a0d00.
- Danger #ef4444 / #f87171; closure tint rgba(239,68,68,0.08) bg, rgba(239,68,68,0.35) border.
- Radius: 8 (small buttons), 12 (inputs, cards), 16 (boxes/modals), 999 (pills).
- Shadow: 0 10px 15px -3px rgba(0,0,0,0.5) on popovers/modals.
- Font: Manrope 400/500/600/700 (Google Fonts). Sizes 12/14/16.

## Assets
- Icons: Tabler Icons webfont (`@tabler/icons-webfont@3`).
- No raster images.

## Files
- `source/Libro de Reservas.dc.html` — app shell + reservations book
- `source/Operacion y Horarios.dc.html` — calendar, turnos, cerrar cupos, tipos list, drawers, popovers
- `source/Crear Horario.dc.html` — schedule editor + Agregar turno modal
- `source/Tipo de Consumo.dc.html` — consumption type creator/editor
- `source/Mesas y Combinaciones.dc.html` — tables
- `standalone/*.html` — clickable offline prototypes
