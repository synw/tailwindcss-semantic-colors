# tailwindcss-semantic-colors — Project Navigation

> Purpose: Single-reference map for AI coding agents to understand, navigate, and modify the tailwindcss-semantic-colors codebase.

---

## 1. Project Overview

| Repo | Path | Purpose |
|------|------|---------|
| `tailwindcss-semantic-colors` | `/workspace/` | Core package — semantic color utilities for Tailwind CSS v4+ |

---

## 2. Architecture Principles

| Principle | Detail | Key Files |
|-----------|--------|-----------|
| CSS-only plugin | No JavaScript; all code in single `style.css` using native Tailwind v4 directives | `style.css` |
| Token-based theming | Colors as CSS custom properties in `@theme {}`, consumed by utilities via `var()` | `style.css` (lines 1-35) |
| Dark mode via layers | Dark variants in `@layer base .dark {}` for proper cascade priority | `style.css` (lines 37-76) |
| Utility pairing | Each utility applies both background and text color simultaneously | `style.css` (lines 77-154) |

---

## 3. Dependency Graph

```
tailwindcss-semantic-colors/style.css
    │
    └── tailwindcss >= 4.0.0 (peer dep — provides @theme/@utility directives)
```

**Explanation**: This is a CSS-only package with no runtime dependencies. The only dependency is Tailwind CSS v4+ which must be installed in the consuming project to provide the `@theme` and `@utility` directives.

---

## 4. Packages/Modules

### style.css — Core Plugin Source

- **Lines 1-35**: `@theme {}` block — defines all semantic color tokens (background + text pairs)
- **Lines 37-76**: `@layer base .dark {}` — dark mode overrides for all color tokens (`.dark` and `[data-theme="dark"]`)
- **Lines 77-154**: 16 `@utility` definitions — `.prim`, `.sec`, `.ter`, `.background`, `.light`, `.l1`, `.semilight`, `.l2`, `.lighter`, `.l3`, `.superlight`, `.l4`, `.success`, `.warning`, `.danger`, `.info`

**Key tokens**:
- Brand: `--color-prim`, `--color-on-prim`, `--color-sec`, `--color-on-sec`, `--color-ter`, `--color-on-ter`
- Background: `--color-background`, `--color-on-background`
- Neutral: `--color-light`, `--color-l1`, `--color-semilight`, `--color-l2`, `--color-lighter`, `--color-l3`, `--color-superlight`, `--color-l4`
- Semantic: `--color-success`, `--color-warning`, `--color-danger`, `--color-info`

### example/ — Demo Application

Vue + Vite app demonstrating the plugin in a real application context.

- **Components**: `StyleGuide.vue` (color palette showcase), `ThemeSwitcher.vue` (variant selector)
- **State**: `state.ts` — Theme/dark mode state management via VueUse `useStorage`
- **Themes**: 12 SCSS variants (`default`, `black`, `navy`, `forest`, `slate`, `royal`, `teal`, `pearl`, `sandstone`, `cloud`, `graphite`, `airy-soft`) overriding CSS custom properties
- **Usage**: Local reference via `file:../` — no npm publish needed for development

**Key files**:
| File | Purpose |
|------|---------|
| `src/styles/global.css` | Imports tailwindcss + semantic-colors + snowind theme |
| `src/styles/snowind.css` | UI component styles — button and slide transition utilities |
| `src/scss/main.scss` | SCSS entry point, imports all 12 theme variants |
| `src/conf.ts` | Themes configuration — lists all available theme names for ThemeSwitcher UI |
| `src/state.ts` | Theme/dark mode state management using VueUse `useStorage` |
| `package.json` | Dependencies — Vue 3.5+, Vite 8, @tailwindcss/vite ^4.3, sass-embedded, local plugin |

---

## 5. Code Snippets

### Adding a New Color Utility

```css
/* Step 1: Add theme tokens in @theme block */
@theme {
    --color-newcolor: var(--newcolor-light-bg);
    --color-on-newcolor: var(--newcolor-light-txt);
}

/* Step 2: Add dark mode override in @layer base .dark */
@layer base {
    .dark {
        --color-newcolor: var(--newcolor-dark-bg);
        --color-on-newcolor: var(--newcolor-dark-txt);
    }
}

/* Step 3: Add utility class */
@utility newcolor {
    background-color: var(--color-newcolor);
    color: var(--color-on-newcolor);
}
```

### Import in Tailwind v4 Project

```css
@import "tailwindcss";
@import "tailwindcss-semantic-colors";
```

### Create Theme Variant (SCSS)

Create a new SCSS theme file in `example/src/scss/` following this pattern:

```scss
.theme-custom {
    /* Light mode overrides (only override what you need) */
    --prim-light-bg: #0e599a;
    --prim-light-txt: white;
    --background-light-bg: #eff7ff;
    --background-light-txt: #1f2937;
}
```

**See detailed guide below** → [How to Add a SCSS Theme](#how-to-add-a-scss-theme)

### How to Add a SCSS Theme — Complete Guide

#### Overview

Themes are SCSS files that override CSS custom properties defined by the plugin. Each theme is activated via a CSS class on the `<html>` element (e.g., `.theme-blue`). Themes can override any subset of the 24 color variables (12 light + 12 dark).

#### Step 1: Create the Theme File

Create a new file in `src/scss/` named after your theme (e.g., `src/scss/mytheme.scss`):

```scss
.theme-mytheme {
    /* ===== Light Mode Overrides ===== */
    /* Brand colors */
    --prim-light-bg: #0e599a;    /* Primary background */
    --prim-light-txt: white;      /* Primary text */
    --sec-light-bg: #06b6d4;      /* Secondary background */
    --sec-light-txt: white;       /* Secondary text */
    --ter-light-bg: #4cdaf3;      /* Tertiary background */
    --ter-light-txt: white;       /* Tertiary text */

    /* Semantic colors */
    --success-light-bg: #16a34a;
    --success-light-txt: white;
    --warning-light-bg: #f59e0b;
    --warning-light-txt: white;
    --danger-light-bg: #ef4444;
    --danger-light-txt: white;
    --info-light-bg: #4758ef;
    --info-light-txt: white;

    /* Background & neutral colors */
    --background-light-bg: #eff7ff;
    --background-light-txt: #1f2937;
    --light-light-bg: #6b7280;
    --light-light-txt: white;
    --lighter-light-bg: #dbecfe;
    --lighter-light-txt: #0e599a;
    --semilight-light-bg: #94a3b8;
    --semilight-light-txt: #1f2937;
    --superlight-light-bg: #d7dbe0;
    --superlight-light-txt: #1f2937;

    /* ===== Dark Mode Overrides (optional) ===== */
    /* Only include if you want different dark mode colors */
    --prim-dark-bg: #1e3a5f;
    --prim-dark-txt: #f5f5f5;
    --background-dark-bg: #0f172a;
    --background-dark-txt: #d4d4d4;
}
```

#### Step 2: Register the Theme

Add your theme to `src/scss/main.scss`:

```scss
@use "./default.scss" as *;
@use "./black.scss" as *;
@use "./navy.scss" as *;
@use "./forest.scss" as *;
@use "./slate.scss" as *;
@use "./royal.scss" as *;
@use "./teal.scss" as *;
@use "./pearl.scss" as *;
@use "./sandstone.scss" as *;
@use "./cloud.scss" as *;
@use "./graphite.scss" as *;
@use "./airy-soft.scss" as *;
@use "./mytheme.scss" as *;  /* Add your new theme */
```

#### Step 3: Activate the Theme in HTML

Add the theme class to your `<html>` element:

```html
<html class="theme-mytheme">
```

For dark mode:

```html
<html class="dark theme-mytheme">
```

#### Step 4: Register the Theme in conf.ts

Add your theme name to the themes array in `src/conf.ts` so it appears in the ThemeSwitcher UI:

```ts
const themes = new Array<string>(
    "default",
    "black",
    "navy",
    "forest",
    "slate",
    "royal",
    "teal",
    // Neutral/Soft Corporate Themes
    "pearl",
    "sandstone",
    "cloud",
    "graphite",
    "airy-soft",
    // Add your new theme here
    "mytheme",  // <-- Add your theme name (matches .theme-mytheme class)
);

export {
    themes,
}
```

**Note**: The theme name in `conf.ts` must match the suffix of your SCSS class (e.g., `.theme-mytheme` → `"mytheme"`).

#### Variable Reference

| Variable | Purpose | Example Value |
|----------|---------|---------------|
| `--{color}-light-bg` | Light mode background color | `#0e599a` |
| `--{color}-light-txt` | Light mode text color | `white` |
| `--{color}-dark-bg` | Dark mode background color | `#1e3a5f` |
| `--{color}-dark-txt` | Dark mode text color | `#f5f5f5` |

**Available colors**: `prim`, `sec`, `ter`, `success`, `warning`, `danger`, `info`, `background`, `light`, `lighter`, `semilight`, `superlight`

#### Best Practices

- **Override only what you need**: You don't need to define all 24 variables. Unspecified variables fall back to defaults from `default.scss`
- **Ensure contrast**: Text color should have sufficient contrast against its background (WCAG AA minimum 4.5:1)
- **Name your class**: Use `.theme-{name}` format (e.g., `.theme-corporate`, `.theme-vibrant`)
- **Keep it minimal**: Only override variables that differ from defaults

---

## 6. Navigation Quick Reference

| Task | Go To |
|------|-------|
| Understand project purpose | `.agents/documentation/project-overview.md` |
| Find the right doc for your task | `.agents/documentation/decision-tree.md` |
| Technical summary (entry points, key files) | `.agents/documentation/codebase-summary.md` |
| Add a new semantic color | `style.css` — add `@theme` token + `@utility` block |
| Modify dark mode colors | `style.css` → `@layer base .dark {}` section |
| Create custom theme | SCSS file overriding CSS variables (see "How to Add a SCSS Theme") |
| Update package version | Edit `package.json` |
| Run demo app | `example/` — `npm run dev` |
| Manage theme variants | `example/src/scss/` — add SCSS file + register in `main.scss` and `conf.ts` |
| Deploy demo to GitHub Pages | `.github/workflows/static.yml` — deploys `example/dist` |

---

## 7. Documentation Links

| Resource | Path |
|----------|------|
| Decision tree | `.agents/documentation/decision-tree.md` |
| Codebase summary | `.agents/documentation/codebase-summary.md` |
| Example app summary | `example/.agents/documentation/codebase-summary.md` |
| Project overview | `.agents/documentation/project-overview.md` |
| Full README | `README.md` |
| Example README | `example/README.md` |
| NPM package | https://www.npmjs.com/package/tailwindcss-semantic-colors |

---

## 8. Key Conventions & Patterns

| Convention | Detail |
|------------|--------|
| CSS-only distribution | No JS entry point; single `style.css` file exported via `exports` field |
| Tailwind v4 native syntax | Uses `@theme`, `@utility`, `@layer` — not PostCSS plugins |
| Color variable naming | `{color}-{mode}-{property}` pattern: `--{color}-light-bg`, `--{color}-dark-txt` |
| Dark mode selectors | `.dark` and `[data-theme="dark"]` in `@layer base {}` |
| Utility pairing | Each utility sets both `background-color` and `color` properties |
| Theme variant system | SCSS files in `example/src/scss/` override CSS variables via `.theme-{name}` class; registered in `main.scss` and `conf.ts` |
| Alias utilities | `l1`→`light`, `l2`→`semilight`, `l3`→`lighter`, `l4`→`superlight` — identical output |
