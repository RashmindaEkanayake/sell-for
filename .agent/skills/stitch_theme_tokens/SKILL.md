---
name: stitch_theme_tokens
description: Provides a complete Tailwind CSS design token system for building Glaido-style ecommerce UIs. Covers typography, spacing, colors, buttons, cards, shadows, and borders — with ready-to-use Tailwind class recipes for Stitch prompts.
---

# Skill: stitch_theme_tokens

Use this skill whenever you need to establish or reference the design token system for a Glaido-style ecommerce project. This gives you the Tailwind class recipes to use in Stitch prompts, HTML files, or style guides.

---

## Color Palette

| Token | Light Mode | Dark Mode | Tailwind Custom Key |
|---|---|---|---|
| Primary (CTA, accents) | `#ec5b13` | `#ec5b13` | `primary` |
| Background | `#f8f6f6` | `#221610` | `background-light` / `background-dark` |
| Surface / Card | `white/40` | `slate-800/40` | — |
| Border | `white/20` | `slate-700/30` | — |
| Text Primary | `slate-900` | `white` | — |
| Text Secondary | `slate-500` | `slate-400` | — |
| Overlay | `black/80` | `black/80` | — |

### Tailwind Config Snippet
```js
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#ec5b13",
        "background-light": "#f8f6f6",
        "background-dark": "#221610",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "serif": ["Playfair Display", "serif"],
      },
    },
  },
}
```

---

## Typography Scale

| Usage | Classes |
|---|---|
| Hero heading | `text-5xl lg:text-7xl font-bold font-serif leading-tight tracking-tight` |
| Page / section heading | `text-4xl font-bold font-serif` |
| Card title | `text-base font-bold font-sans truncate` |
| Body / paragraph | `text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans` |
| Label / caption | `text-sm text-slate-500 dark:text-slate-400 font-sans` |
| Micro (badge, tag) | `text-xs font-bold` |
| Footer heading | `text-xs font-bold uppercase tracking-wider` |

### Fonts to Import
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet"/>
```

---

## Spacing Rhythm

| Usage | Value |
|---|---|
| Section vertical padding | `py-16` (standard) / `py-20` (hero) |
| Card inner padding | `p-3` (tight) |
| Grid gap (cards) | `gap-6 lg:gap-8` |
| Header height | `h-16` |
| Sidebar width | `w-64` |
| Container max width | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |

---

## Button Recipes

### Primary CTA Button
```html
<button class="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2">
  Shop Now
</button>
```

### Secondary Ghost Button
```html
<button class="px-8 py-4 bg-white/40 dark:bg-slate-800/40 border border-white/30 dark:border-slate-700/30 text-slate-900 dark:text-white font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all backdrop-blur-md">
  Browse Categories
</button>
```

### Icon Button (round)
```html
<button class="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors flex items-center justify-center">
  <!-- SVG icon here -->
</button>
```

### Add-to-Cart Mini Button
```html
<button class="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-colors">
  <!-- Cart SVG -->
</button>
```

---

## Card Recipes

### Glassmorphism Product Card
```html
<div class="group flex flex-col gap-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md rounded-xl p-3 border border-white/20 dark:border-slate-700/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
```

### Glassmorphism Panel / Sidebar
```html
<div class="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-xl border border-white/20 dark:border-slate-700/30 p-6 shadow-sm">
```

### Category Tile (image overlay)
```html
<a class="relative h-48 overflow-hidden rounded-xl group cursor-pointer">
  <div class="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors z-10"></div>
  <img class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
  <div class="relative z-20 h-full flex items-center justify-center">
    <h3 class="text-2xl font-bold text-white font-serif drop-shadow-md">Fiction</h3>
  </div>
</a>
```

---

## Shadows & Borders

| Token | Classes |
|---|---|
| Card shadow (default) | `shadow-sm` |
| Card shadow (hover) | `shadow-xl` |
| CTA button glow | `shadow-lg shadow-primary/20` |
| Glassmorphism border | `border border-white/20 dark:border-slate-700/30` |
| Divider | `border-t border-slate-200 dark:border-slate-800` |

---

## Animated Background

```css
body {
  background: linear-gradient(-45deg, #f8f6f6, #ffffff, #fef3c7, #f8f6f6);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
.dark body {
  background: linear-gradient(-45deg, #221610, #1a1a1a, #2d1b14, #221610);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
@keyframes gradient {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

## How to Use (Example Prompts)

```
What Tailwind classes should I use for a glassmorphism product card? Use the stitch_theme_tokens skill.
```

```
Give me the full design token reference for my Stitch ecommerce project using the stitch_theme_tokens skill.
```

```
What button styles should I use in my Stitch prompts? Use stitch_theme_tokens.
```
