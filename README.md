# Tailwindcss semantic colors plugin

[![pub package](https://img.shields.io/npm/v/tailwindcss-semantic-colors)](https://www.npmjs.com/package/tailwindcss-semantic-colors)

A Tailwind CSS v4 plugin to generate semantic color utilities with dark mode support.

## ⚠️ Tailwind CSS v4 Compatibility

This version is compatible with **Tailwind CSS v4**. For Tailwind CSS v3, please use the previous version of this plugin.

## Install

```bash
npm install -D tailwindcss-semantic-colors
```

## Setup

### 1. Install Tailwind CSS v4

If you haven't already, install Tailwind CSS v4:

```bash
npm install tailwindcss@latest @tailwindcss/postcss@latest
# or with Vite
npm install tailwindcss@latest @tailwindcss/vite@latest
```

### 2. Configure PostCSS (for most build tools)

Create or update your `postcss.config.js`:

```javascript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### 3. Configure Vite (if using Vite)

Update your `vite.config.js`:

```javascript
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
});
```

### 4. Import Tailwind CSS and the Plugin

In your main CSS file (e.g., `src/input.css` or `src/index.css`):

```css
@import "tailwindcss";
@import "tailwindcss-semantic-colors";
```

### 5. Enable the Plugin in Tailwind Config

Update your `tailwind.config.js`:

```javascript
module.exports = {
  // ... other config
  plugins: [
    require('tailwindcss-semantic-colors'),
  ],
}
```

## Usage

Define your semantic colors in the theme in `tailwind.config.js`.

```javascript
const colors = require('tailwindcss/colors')

module.exports = {
  // ...
  darkMode: 'class',
  theme: {
    semanticColors: {
      primary: {
        light: {
          bg: colors.cyan[700],
          txt: colors.white
        },
        dark: {
          bg: colors.cyan[800],
          txt: colors.neutral[100]
        }
      },
      warning: {
        light: {
          bg: colors.amber[500],
          txt: colors.white
        },
        dark: {
          bg: colors.amber[600],
          txt: colors.neutral[100]
        }
      },
      // ... define more semantic colors as needed
    }
  },
}
```

### Background and text utilities

All the color utilities generated support the dark mode. Example: writing:

```html
<div class="primary">Primary block</div>
```

will do the same as:

```html
<div class="bg-[var(--color-primary-light-bg)] text-[var(--color-primary-light-txt)] dark:bg-[var(--color-primary-dark-bg)] dark:text-[var(--color-primary-dark-txt)]">Primary block</div>
```

### Background only utilities

```html
<div class="block-primary">Primary background block</div>
```

will do the same as:

```html
<div class="bg-[var(--color-primary-light-bg)] dark:bg-[var(--color-primary-dark-bg)]">Primary background block</div>
```

### Text only utilities

```html
<div class="txt-primary">Primary text block</div>
```

will do the same as:

```html
<div class="text-[var(--color-primary-light-bg)] dark:text-[var(--color-primary-dark-bg)]">Primary text block</div>
```

### Border utilities

```html
<div class="border bord-primary">Block with border</div>
```

will do the same as:

```html
<div class="border border-[var(--color-primary-light-bg)] dark:border-[var(--color-primary-dark-bg)]">Block with border</div>
```

### Variants

To apply variants on a color. The plugin supports all standard Tailwind CSS v4 variants by default. Example of the `hover` variant:

```html
<div class="primary hover:warning">Primary hover block</div>
```

will apply the warning colors on hover.

### Customizing Variants

If you need to customize which variants are available for semantic colors, you can do so in your `tailwind.config.js`. However, with Tailwind v4's `@variant` directive in the plugin CSS, most common variants are supported by default.

```javascript
// Note: Variant customization in v4 might work differently
// This is a conceptual example based on v3 patterns
module.exports = {
  // ...
  // You might need to configure variants differently in v4
  // Refer to Tailwind v4 documentation for variant configuration
}
```

## Migration from v3

If you're upgrading from v3:

1.  **Update Dependencies**: Ensure you're using Tailwind CSS v4 and this plugin v1.0.0+.
2.  **Change CSS Import**: From `@import "tailwindcss-semantic-colors";` instead of requiring it in the config.
3.  **Update Tailwind Config**: The plugin is now required in the `plugins` array of `tailwind.config.js`.
4.  **No `addUtilities`**: The plugin no longer uses JavaScript-based `addUtilities`. All utilities are now CSS-based.
5.  **Class Names**: Generated class names remain the same (e.g., `primary`, `txt-primary`, etc.) for compatibility.

## Troubleshooting

- **Utilities not generated**: 
  - Ensure `@import "tailwindcss-semantic-colors";` is in your main CSS file.
  - Check that the plugin is listed in your `tailwind.config.js` `plugins` array.
  - Verify your `semanticColors` theme configuration is correctly defined.
- **Dark mode not working**: 
  - Make sure `darkMode: 'class'` is set in your `tailwind.config.js`.
  - Ensure you're adding the `dark:` class to a parent element.

## License

MIT
