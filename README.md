# Tailwindcss semantic colors plugin

[![pub package](https://img.shields.io/npm/v/tailwindcss-semantic-colors)](https://www.npmjs.com/package/tailwindcss-semantic-colors)

A Tailwind css plugin to generate semantic color utilities with dark mode support

## Install

```bash
npm install -D tailwindcss-semantic-colors
# or
yarn add -D tailwindcss-semantic-colors
```

Enable the plugin in `tailwind.config.js`:

```javascript
module.exports = {
  // ...
  plugins: [
    // ...
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
      // ...
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
<div class="text-white bg-cyan-700 dark:bg-cyan-800 dark:text-neutral-100">Primary block</div>
```

### Background only utilities

```html
<div class="block-primary">Primary background block</div>
```

will do the same as:

```html
<div class="bg-cyan-700 dark:bg-cyan-800">Primary background block</div>
```

### Text only utilities

```html
<div class="txt-primary">Primary text block</div>
```

will do the same as:

```html
<div class="text-cyan-700 dark:text-cyan-800">Primary text block</div>
```

### Border utilities

```html
<div class="border bord-primary">Block with border</div>
```

will do the same as:

```html
<div class="border border-cyan-700 dark:border-cyan-800">Block with border</div>
```

### Variants

To apply variants on a color. If we have defined another semantic color:

```javascript
    semanticColors: {
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
      // ...
    }
```

Example of the `hover` variant:

```html
<div class="primary hover:warning">Primary hover block</div>
```

will do the same as:

```html
<div class="text-white bg-cyan-700 dark:bg-cyan-800 dark:text-neutral-100 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-600 dark:hover:text-neutral-100">
  Primary hover block
</div>
```

Many variants are enabled by default but you can configure your variants in `tailwind.config.js`.

```javascript
module.exports = {
  // ...
  variants: {
    semanticColors: ['focus', 'hover']
  }
}
```