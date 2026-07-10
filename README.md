# tailwindcss-semantic-colors

[![pub package](https://img.shields.io/npm/v/tailwindcss-semantic-colors)](https://www.npmjs.com/package/tailwindcss-semantic-colors)

A CSS-only Tailwind CSS v4 plugin providing semantic color utilities with automatic dark mode support. Part of the [Agent Smith toolkit](https://github.com/lynxai-team/agent-smith).

## Features

- 🎨 **Semantic Color System** — Brand, neutral, and status colors defined as CSS custom properties
- 🌙 **Automatic Dark Mode** — Built-in dark mode via `.dark` / `[data-theme="dark"]` selectors
- 🔧 **CSS-Only** — No JavaScript runtime; pure CSS using Tailwind v4 native directives
- 🎭 **Theme Variants** — Easily create custom themes by overriding CSS custom properties
- ⚡ **16 Utility Classes** — Pre-built utilities that apply both background and text color simultaneously
- 🔗 **Tailwind v4 Native** — Uses `@theme`, `@utility`, and `@layer` directives — no PostCSS plugin needed

## Documentation

### For AI Agents

| Doc | Description |
|-----|-------------|
| [Codebase Summary](.agents/documentation/codebase-summary.md) | Architecture, key files, and patterns for the `tailwindcss-semantic-colors` package |
| [Project Overview](.agents/documentation/project-overview.md) | High-level project context and mission |
| [Project Navigation](.agents/documentation/project-nav.md) | Detailed navigation map with dependency graph |

### For Humans

| Doc | Description |
|-----|-------------|
| [Example App](example/) | Vue + Vite demo app showcasing all features, themes, and components |
| [GitHub Repository](https://github.com/lynxai-team/agent-smith) | Source code and issues |

## Installation

```bash
npm install -D tailwindcss-semantic-colors
```

Or with yarn:

```bash
yarn add -D tailwindcss-semantic-colors
```

## Quick Start

Add the package to your CSS file (e.g., `global.css` or `app.css`):

```css
@import "tailwindcss";
@import "tailwindcss-semantic-colors";
```

Create a theme file (e.g., `scss/mytheme.scss`) with only the colors you want to customize:

```scss
.theme-mytheme {
    /* Override only what you need — unspecified variables use defaults */
    --prim-light-bg: #0e7490;
    --prim-light-txt: white;
    --sec-light-bg: #06b6d4;
    --sec-light-txt: white;
    --background-light-bg: #f8fafc;
    --background-light-txt: #1e293b;
}
```

Use the utilities in your HTML with the theme class:

```html
<html class="theme-mytheme">
<div class="prim p-6 rounded-lg">Primary block</div>
<div class="success p-4 rounded">Success alert</div>
<button class="sec px-4 py-2 rounded">Secondary button</button>
```

Toggle dark mode by adding the `.dark` class:

```html
<html class="dark theme-mytheme">
```

## Usage

### How It Works

The package exports a single `style.css` file that uses Tailwind CSS v4's native directives:

1. **`@theme` block** — Defines CSS custom properties for all colors (e.g., `--color-prim`, `--color-on-prim`). Each color has a background (`--color-{name}`) and text (`--color-on-{name}`) token.
2. **`@layer base .dark {}`** — Overrides the theme tokens when dark mode is active, supporting both `.dark` class and `[data-theme="dark"]` attribute selectors.
3. **`@utility` definitions** — 16 utility classes that apply both `background-color` and `color` simultaneously using the theme tokens.

### Available Utilities

| Utility Class | Description |
|---------------|-------------|
| `prim` | Primary brand color (bg + text) |
| `sec` | Secondary brand color (bg + text) |
| `ter` | Tertiary brand color (bg + text) |
| `background` | Main background surface (bg + text) |
| `light` | Dark text on light background (bg + text) |
| `l1` | Alias for `light` |
| `semilight` | Medium grey tone (bg + text) |
| `l2` | Alias for `semilight` |
| `lighter` | Light grey surface (bg + text) |
| `l3` | Alias for `lighter` |
| `superlight` | Very light accent (bg + text) |
| `l4` | Alias for `superlight` |
| `success` | Positive / completed status (bg + text) |
| `warning` | Caution / attention status (bg + text) |
| `danger` | Error / destructive status (bg + text) |
| `info` | Information / help status (bg + text) |

### Color Patterns

The plugin supports three usage patterns:

**Combined background and text** — The utility class applies both:

```html
<div class="prim p-4 rounded">
    This has primary background AND primary text color
</div>
```

**Background only** — Use Tailwind's `bg-{name}` mapping:

```html
<div class="bg-prim p-4 rounded">
    Primary background with default text color
</div>
```

**Text only** — Use Tailwind's `text-{name}` mapping:

```html
<span class="text-prim">Primary colored text</span>
```

**Borders** — Use the color as a border value:

```html
<div class="border border-prim p-4 rounded">
    Border with primary color
</div>
```

### Hover and Other Variants

All utilities work with Tailwind's modifier variants:

```html
<div class="prim hover:warning">Hover to change to warning</div>
<div class="sec focus:danger">Focus to change to danger</div>
<button class="success active:prim">Click me</button>
```

### Theme Variants

Create custom themes by defining a scoped CSS/SCSS rule that overrides the color tokens:

```scss
// scss/bluestar.scss
.theme-bluestar {
    --prim-light-bg: #0e599a;
    --prim-light-txt: white;
    --sec-light-bg: #dbecfe;
    --sec-light-txt: #0e599a;
    --success-light-bg: #01DA97;
    --warning-light-bg: #FAC165;
    --danger-light-bg: #FE606C;
    --light-light-bg: #c2d3e5;
    --light-light-txt: #0e599a;
    --lighter-light-bg: #dbecfe;
    --lighter-light-txt: #0e599a;
    --background-light-bg: #eff7ff;
}
```

Compose multiple theme files in `scss/main.scss`:

```scss
@use "./default.scss" as *;
@use "./bluestar.scss" as *;
@use "./black.scss" as *;
```

Apply a theme by adding the class to your root element:

```html
<html class="theme-bluestar">
```

### Dark Mode

Dark mode is triggered by either of these selectors (defined in `@layer base`):

```css
.dark,
[data-theme="dark"] {
    /* dark theme token overrides */
}
```

**Using the `.dark` class:**

```html
<html class="dark theme-bluestar">
```

**Using the `data-theme` attribute:**

```html
<html data-theme="dark" class="theme-bluestar">
```

You can toggle dark mode with JavaScript:

```js
// Toggle .dark class
document.documentElement.classList.toggle('dark');

// Or use data attribute
document.documentElement.setAttribute('data-theme', 'dark');
```

## Complete Example

A minimal working example with a Vue + Vite setup:

**`src/style.css`**
```css
@import "tailwindcss";
@import "tailwindcss-semantic-colors";
```

**`src/scss/mytheme.scss`**
```scss
.theme-mytheme {
    --prim-light-bg: #0e7490; --prim-light-txt: white;
    --sec-light-bg: #06b6d4;  --sec-light-txt: white;
    --background-light-bg: #f8fafc; --background-light-txt: #1e293b;
}
```

**`src/App.vue`**
```vue
<template>
  <div class="min-h-screen theme-mytheme background">
    <header class="prim p-6 text-center">
      <h1 class="text-2xl font-bold">My App</h1>
    </header>
    <main class="p-6 space-y-4">
      <div class="success p-4 rounded">Operation successful!</div>
      <div class="warning p-4 rounded">Please review this item.</div>
      <button class="sec px-4 py-2 rounded">Secondary</button>
    </main>
  </div>
</template>
```

## API Reference

### Package Structure

This is a **CSS-only package** — there is no JavaScript API or factory function. The entire functionality comes from the exported `style.css` file:

```json
// package.json exports
{
  "exports": {
    ".": {
      "import": "./style.css"
    }
  }
}
```

### CSS Custom Properties (Tokens)

The `@theme` block defines these custom properties:

| Token | Description |
|-------|-------------|
| `--color-prim` | Primary brand background color |
| `--color-on-prim` | Primary brand text color |
| `--color-sec` | Secondary brand background color |
| `--color-on-sec` | Secondary brand text color |
| `--color-ter` | Tertiary brand background color |
| `--color-on-ter` | Tertiary brand text color |
| `--color-background` | Main background surface color |
| `--color-on-background` | Text color on background surface |
| `--color-light` / `--color-l1` | Dark text on light bg |
| `--color-semilight` / `--color-l2` | Medium grey tone |
| `--color-lighter` / `--color-l3` | Light grey surface |
| `--color-superlight` / `--color-l4` | Very light accent |
| `--color-success` | Positive status color |
| `--color-warning` | Caution status color |
| `--color-danger` | Error status color |
| `--color-info` | Information status color |

Each token pairs with an `--color-on-{name}` variant for text color.

### Token Naming Convention

Override tokens via CSS custom properties in your SCSS files:

| Mode | Background Token | Text Token |
|------|-------------------|------------|
| Light | `--{name}-light-bg` | `--{name}-light-txt` |
| Dark | `--{name}-dark-bg` | `--{name}-dark-txt` |

For example:

```scss
:root {
    --prim-light-bg: #0e7490;   /* Primary bg in light mode */
    --prim-light-txt: white;    /* Primary text in light mode */
    --prim-dark-bg: #0a0a0a;    /* Primary bg in dark mode */
    --prim-dark-txt: #f5f5f5;   /* Primary text in dark mode */
}
```

### Utility Classes Reference

| Class | Alias | Applies |
|-------|-------|---------|
| `prim` | — | `background-color: var(--color-prim)` + `color: var(--color-on-prim)` |
| `sec` | — | `background-color: var(--color-sec)` + `color: var(--color-on-sec)` |
| `ter` | — | `background-color: var(--color-ter)` + `color: var(--color-on-ter)` |
| `background` | — | `background-color: var(--color-background)` + `color: var(--color-on-background)` |
| `light` | `l1` | `background-color: var(--color-light)` + `color: var(--color-on-light)` |
| `semilight` | `l2` | `background-color: var(--color-semilight)` + `color: var(--color-on-semilight)` |
| `lighter` | `l3` | `background-color: var(--color-lighter)` + `color: var(--color-on-lighter)` |
| `superlight` | `l4` | `background-color: var(--color-superlight)` + `color: var(--color-on-superlight)` |
| `success` | — | `background-color: var(--color-success)` + `color: var(--color-on-success)` |
| `warning` | — | `background-color: var(--color-warning)` + `color: var(--color-on-warning)` |
| `danger` | — | `background-color: var(--color-danger)` + `color: var(--color-on-danger)` |
| `info` | — | `background-color: var(--color-info)` + `color: var(--color-on-info)` |

## Important Notes

- **Browser-only** — This package has no Node.js runtime or build step. It is a pure CSS distribution.
- **Tailwind CSS v4+ required** — The peer dependency requires `tailwindcss >= 4.0.0`. The plugin uses native Tailwind v4 directives (`@theme`, `@utility`, `@layer`) and will not work with Tailwind v3 or earlier.
- **No PostCSS plugin** — There is no JavaScript code, no PostCSS plugin configuration, and no build-time processing. Simply import the CSS file.
- **Token scoping** — Color tokens are defined globally on `:root`. Theme overrides should use scoped selectors (e.g., `.theme-bluestar`) to avoid affecting other themes.
- **Alias utilities** — `l1`, `l2`, `l3`, and `l4` are short aliases for `light`, `semilight`, `lighter`, and `superlight` respectively. They produce identical output.

## Documentation Links

- [Example App](example/) — Full Vue demo with style guide, theme switcher, and 12+ color themes
- [Codebase Summary](.agents/documentation/codebase-summary.md) — Technical documentation for developers
- [GitHub Repository](https://github.com/lynxai-team/agent-smith) — Source code, issues, and contributions

## License

[MIT](LICENSE) — Copyright (c) 2025 Lynx AI Team
