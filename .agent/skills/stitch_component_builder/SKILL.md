---
name: stitch_component_builder
description: Generates reusable ecommerce UI components (Navbar, Footer, Product Card, Category Card, Filter Sidebar) in a Glaido-style design system using Stitch MCP. Works with any ecommerce project.
---

# Skill: stitch_component_builder

Use this skill to generate individual reusable components for an ecommerce or bookstore Stitch project. Each component matches the same design system (glassmorphism, warm dark/light aesthetic, Playfair + Inter fonts, orange primary).

Requires an existing `projectId` from a previous `mcp_stitch_create_project` call.

---

## Components Available

### 1. Navbar (with Cart Badge)

Call `mcp_stitch_generate_screen_from_text` with:

**Prompt:**
```
Design a reusable sticky navigation bar component for an ecommerce site.

Left: logo SVG (geometric square) + brand name in Playfair Display.
Center: nav links — Home, Shop, Categories, Best Sellers — in Inter Medium, with hover color change to orange #ec5b13.
Right: 
  - Search bar (rounded, with magnifying glass SVG icon inside, placeholder "Search products...") 
  - Dark mode toggle button (moon SVG for light mode, sun SVG for dark mode), rounded pill button
  - Shopping cart icon (shopping bag SVG) with a notification badge showing count "3" in orange circle
  - User avatar (small circle, 32px)

Background: white/70 with backdrop-blur in light mode, slate-900/70 in dark mode. Bottom border: white/20 in light, slate-700/30 in dark.
Height: 64px.
Fully responsive — hamburger menu icon on mobile.
Design tokens: primary #ec5b13, font Inter + Playfair Display.
```

---

### 2. Footer

**Prompt:**
```
Design a reusable ecommerce footer component.

4-column grid layout (collapses to 2 on tablet, 1 on mobile):
  Col 1: Logo + brand name + short tagline paragraph.
  Col 2: "Shop" links — Bestsellers, New Releases, E-books, Gift Cards.
  Col 3: "Support" links — Help Center, Shipping Policy, Returns, Contact Us.
  Col 4: "Newsletter" — short label, email input field, send button (paper plane SVG icon) in orange.

Bottom bar: copyright text on left, Privacy Policy / Terms of Service / Cookie Settings links on right.

Background: white/60 backdrop-blur in light, slate-900/60 in dark. Top border: white/20 in light, slate-700/30 in dark.
Design tokens: primary #ec5b13, Inter font.
```

---

### 3. Product / Book Card

**Prompt:**
```
Design a reusable product card component for an ecommerce site.

Card dimensions: fixed width ~180px, flex column layout.
Background: white/40 with backdrop-blur-md, rounded-xl, border white/20, subtle box-shadow.
Hover: lifts up (-translate-y-1) and shadow intensifies.

Top: product image in 2:3 aspect ratio, rounded-lg, overflow hidden. On hover, a dark gradient overlay slides up from the bottom with a "Quick View" button centered.

Bottom info section:
  - Product title (bold, truncated)
  - Subtitle/author (small, muted)
  - Star rating row: filled star SVG in orange + numeric rating
  - Price row: price in orange bold on the left, add-to-cart icon button (shopping bag + plus SVG) on the right in a rounded pill bg-slate-100 that turns orange on hover.

Design tokens: primary #ec5b13, white/40 glassmorphism background.
```

---

### 4. Category Card

**Prompt:**
```
Design a reusable category tile component for an ecommerce site.

Dimensions: full width, 192px height, rounded-xl, overflow hidden.
Layered structure:
  - Background: full-cover image
  - Middle overlay: semi-transparent color tint (customizable per category) that darkens on hover
  - Top: centered category label in large Playfair Display bold white text with drop-shadow.
On hover: background image scales up (scale-110 transition).
Cursor pointer, behaves as a clickable link.
```

---

### 5. Filter Sidebar + Mobile Filter Drawer

**Prompt:**
```
Design a reusable filter sidebar component for an ecommerce listing page.

Desktop: fixed left sidebar, ~256px wide.
Mobile: hidden by default, opens as a full-screen drawer from the left when the "Filters" button is tapped (with a close X button at top right).

Sections:
  - Category: list of checkboxes (Fiction, Non-Fiction, Fantasy, Romance, Kids, Self-Help)
  - Price Range: dual-handle range slider (min $0, max $100)
  - Rating: checkboxes with star icons (5★, 4★+, 3★+)
  - Clear Filters button (ghost/outline style) at the bottom.

Background: white/60 glassmorphism, rounded-xl on desktop, full-screen on mobile.
Design tokens: primary #ec5b13, Inter font.
```

---

## How to Use (Example Prompts)

```
Build a Navbar component for my Stitch project using the stitch_component_builder skill.
```

```
Generate all 5 reusable components for my bookstore Stitch project using stitch_component_builder.
```

```
Add a Filter Sidebar component to project ID 1234567890 using the stitch_component_builder skill.
```

---

## Notes
- Generate each component as a separate screen in Stitch for clean separation.
- Use `mcp_stitch_generate_variants` to create mobile and dark-mode variants of each component.
- Component screens can be referenced or embedded when editing full-page screens with `mcp_stitch_edit_screens`.
