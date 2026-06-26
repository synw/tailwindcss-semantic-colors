# tailwindcss-semantic-colors — Project Overview

> **Role**: Concise "what is this" for context loading (~1 page overview).
> **See also**: `.agents/documentation/decision-tree.md` to find the right doc for your task.
> **See also**: `.agents/documentation/project-nav.md` for detailed navigation and task references.

---

## What is tailwindcss-semantic-colors?

A lightweight, zero-dependency Tailwind CSS v4+ plugin that provides semantic color utility classes with built-in dark mode support. Instead of hardcoding colors, developers use meaningful class names (`.prim`, `.success`, `.warning`, etc.) that automatically adapt between light and dark themes.

---

## Core Capabilities

- **Semantic color utilities** — Classes like `.prim`, `.sec`, `.ter`, `.success`, `.warning`, `.danger`, `.info` that map to CSS custom properties
- **Automatic dark mode** — Dark variants defined in `@layer base .dark {}` block, no JavaScript needed
- **Theme customization** — Override default colors via SCSS files (e.g., `.theme-blue`)
- **Background + text pairing** — Each utility applies both `bg-*` and `text-*` colors for complete styling

---

## Repository Structure

| File | Purpose |
|------|---------|
| `style.css` | Core package — all `@theme` tokens and `@utility` definitions |
| `package.json` | NPM manifest (CSS-only, no JS dependencies) |
| `README.md` | Installation, configuration, and usage documentation |

---

## Key Architecture Patterns

- **Token-based theming**: Colors defined as CSS custom properties in `@theme`, consumed by utilities via `var()`
- **Layer isolation**: Dark mode overrides live in `@layer base {}` to ensure proper cascade priority
- **Dual pairing**: Each utility class applies both background and text color simultaneously (`background-color` + `color`)

---

## Quick Reference: Common Tasks

| Task | Go To |
|------|-------|
| Add new color utility | `style.css` — add `@theme` token + `@utility` block |
| Customize dark mode colors | `style.css` → `@layer base .dark {}` section |
| Create custom theme | SCSS file overriding CSS variables (see README.md) |

---

## Code Snippets

### Adding a New Semantic Color

```css
/* 1. Add theme tokens */
@theme {
    --color-custom: var(--custom-light-bg);
    --color-on-custom: var(--custom-light-txt);
}

/* 2. Add dark mode override */
@layer base {
    .dark {
        --color-custom: var(--custom-dark-bg);
        --color-on-custom: var(--custom-dark-txt);
    }
}

/* 3. Add utility class */
@utility custom {
    background-color: var(--color-custom);
    color: var(--color-on-custom);
}
```

### Using the Plugin in Tailwind v4

```css
@import "tailwindcss";
@import "tailwindcss-semantic-colors";
```

---

## Documentation Links

| Resource | Path |
|----------|------|
| Quick guide | `.agents/documentation/decision-tree.md` |
| Codebase summary | `.agents/documentation/codebase-summary.md` |
| Navigation map | `.agents/documentation/project-nav.md` |
| Full README | `README.md` |
| Package on NPM | https://www.npmjs.com/package/tailwindcss-semantic-colors |
