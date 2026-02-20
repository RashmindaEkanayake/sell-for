---
name: stitch_generate_pages
description: Generates a 3-page Stitch ecommerce project (Home, Shop, Cart/Checkout) in a Glaido-style aesthetic using the Stitch MCP tools. Produces consistent prompts and components across all pages.
---

# Skill: stitch_generate_pages

Use this skill whenever the user asks to generate a full multi-page ecommerce or bookstore project inside Stitch. This skill covers 3 core pages: **Home**, **Shop**, and **Cart/Checkout**.

---

## Step 1 — Create a Stitch Project

Call `mcp_stitch_create_project` with a descriptive title:

```
mcp_stitch_create_project({ title: "<ProjectName> - Ecommerce" })
```

Save the returned `projectId` for all subsequent calls.

---

## Step 2 — Generate the Home Page

Call `mcp_stitch_generate_screen_from_text` with the following prompt (adapt product type as needed):

**Prompt:**
```
Design a premium ecommerce Home page in a dark/warm Glaido aesthetic.

Header: sticky navbar with logo on the left, nav links (Home, Shop, Categories, Best Sellers) in the center, and search bar + dark-mode toggle (moon/sun SVG) + shopping cart icon with a badge count (3) + avatar on the right.

Hero section: full-width with a large serif headline ("Discover your next favorite book."), a short subtitle, a primary CTA button ("Shop Now" in orange #ec5b13) and a secondary ghost button ("Browse Categories"). Include a decorative hero image of a book stack on the right with a subtle orange glow behind it.

Featured Products section: a horizontal scrollable grid of 6 product cards. Each card has: cover image (2:3 ratio), title, author, star rating in orange, price in orange, and a small add-to-cart icon button.

Categories section: a 3-column grid of category tiles with background images and overlay text labels (Fiction, Non-Fiction, Fantasy, Romance, Kids, Self-Help).

Footer: 4-column layout with brand info, Shop links, Support links, and a Newsletter email + send button.

Design tokens: primary color #ec5b13, background #f8f6f6 (light) / #221610 (dark), font: Playfair Display for headings + Inter for body. Glassmorphism cards with backdrop-blur, white/10 borders.
```

---

## Step 3 — Generate the Shop Page

**Prompt:**
```
Design a premium ecommerce Shop/Listing page in a Glaido aesthetic matching the Home page.

Same sticky header as the Home page.

Page title "All Books" with a subtitle showing result count.

Left sidebar (hidden on mobile, toggled by filter button): filters for Category (checkboxes), Price Range (slider), Rating (star checkboxes), and a Clear Filters button.

Main content area: sort bar at top (dropdown: Newest, Price Low-High, etc.) + 4-column product grid (3 on tablet, 2 on mobile). Each product card: cover image, title, author, star rating, price, add-to-cart button. On hover: a "Quick View" overlay slides up from the bottom.

Pagination at bottom.

Same footer as the Home page.

Design tokens: same as Home page.
```

---

## Step 4 — Generate the Cart/Checkout Page

**Prompt:**
```
Design a premium ecommerce Cart and Checkout page in a Glaido aesthetic matching the Home page.

Same sticky header.

Two-column layout (stacks on mobile):
  Left column (wider): Cart Items list. Each row has: book cover thumbnail, title + author, quantity stepper (+/- buttons), unit price, line total, remove (trash) icon button.
  Right column: Order Summary card with: item subtotal, shipping fee, discount code input + Apply button, tax line, bold grand total, and a large "Proceed to Checkout" CTA button in orange #ec5b13.

Below the cart, show a "You May Also Like" row of 4 related product cards.

Checkout form section (below or on same page): fields for Name, Email, Address, City, Postal Code, Country. Payment section with card number, expiry, CVV. A "Place Order" button.

Same footer.

Design tokens: same as Home page.
```

---

## Step 5 — Verify Screens

After generating all three screens, call `mcp_stitch_list_screens` to confirm all screens exist in the project, then return the screen IDs to the user.

---

## How to Use (Example Prompts)

```
Generate a 3-page Stitch project for my bookstore "Sell For" using the stitch_generate_pages skill.
```

```
Create a full Stitch ecommerce project with Home, Shop, and Cart pages for a clothing store using the stitch_generate_pages skill.
```

---

## Notes
- All pages must share the same design tokens (colors, fonts, spacing).
- Use `deviceType: "DESKTOP"` for initial generation; use `mcp_stitch_generate_variants` for mobile variants if needed.
- Save all screen IDs for later use with `stitch_component_builder` or `stitch_export_checklist`.
