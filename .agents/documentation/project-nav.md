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
| Token-based theming | Colors as CSS custom properties in `@theme {}`, consumed by utilities via `var()` | `style.css` (lines 1-50) |
| Dark mode via layers | Dark variants in `@layer base .dark {}` for proper cascade priority | `style.css` (lines 28-75) |
| Utility pairing | Each utility applies both background and text color simultaneously | `style.css` (lines 78-140) |

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

- **Lines 1-50**: `@theme {}` block — defines all semantic color tokens (background + text pairs)
- **Lines 28-75**: `@layer base .dark {}` — dark mode overrides for all color tokens
- **Lines 78-140**: 17 `@utility` definitions — `.prim`, `.sec`, `.ter`, `.background`, `.light`, `.l1`, `.semilight`, `.l2`, `.lighter`, `.l3`, `.superlight`, `.l4`, `.success`, `.warning`, `.danger`, `.info`

**Key tokens**:
- Brand: `--color-prim`, `--color-on-prim`, `--color-sec`, `--color-on-sec`, `--color-ter`, `--color-on-ter`
- Background: `--color-background`, `--color-on-background`
- Neutral: `--color-light`, `--color-l1`, `--color-semilight`, `--color-l2`, `--color-lighter`, `--color-l3`, `--color-superlight`, `--color-l4`
- Semantic: `--color-success`, `--color-warning`, `--color-danger`, `--color-info`

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

```scss
.theme-custom {
    --prim-light-bg: #0e599a;
    --prim-light-txt: white;
    --background-light-bg: #eff7ff;
}
```

---

## 6. Navigation Quick Reference

| Task | Go To |
|------|-------|
| Understand project purpose | `.agents/documentation/project-overview.md` |
| Find the right doc for your task | `.agents/documentation/decision-tree.md` |
| Technical summary (entry points, key files) | `.agents/documentation/codebase-summary.md` |
| Add a new semantic color | `style.css` — add `@theme` token + `@utility` block |
| Modify dark mode colors | `style.css` → `@layer base .dark {}` section |
| Create custom theme | SCSS file overriding CSS variables (see README.md) |
| Update package version | Edit `package.json` |

---

## 7. Documentation Links

| Resource | Path |
|----------|------|
| Decision tree | `.agents/documentation/decision-tree.md` |
| Codebase summary | `.agents/documentation/codebase-summary.md` |
| Project overview | `.agents/documentation/project-overview.md` |
| Full README | `README.md` |
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
