# Tailwindcss semantic colors plugin

[![pub package](https://img.shields.io/npm/v/tailwindcss-semantic-colors)](https://www.npmjs.com/package/tailwindcss-semantic-colors)

A Tailwind css plugin to generate semantic color utilities with dark mode support

## Colors

### Brand/main colors

- `prim`: primary color
- `sec`: secondary color
- `ter`: tertiary color
- `background`: base background

### Semantic colors

Classic `success`, `warning`, `danger`, `info`

### Neutral colors

Nuances of grey: `light`, `semilight`, `lighter`, `superlight`

## Install

```bash
npm install -D tailwindcss-semantic-colors
```

Enable the plugin in `global.css`:

```css
@import "tailwindcss";
@import "tailwindcss-semantic-colors";
```

## Configuration

Define your default semantic colors in a `scss/default.scss` file:

```scss
:root {
    --prim-light-bg: #0e7490;
    --prim-light-txt: white;
    --sec-light-bg: #06b6d4;
    --sec-light-txt: white;
    --ter-light-bg: #4cdaf3;
    --ter-light-txt: white;
    --success-light-bg: #16a34a;
    --success-light-txt: white;
    --warning-light-bg: #f59e0b;
    --warning-light-txt: white;
    --danger-light-bg: #ef4444;
    --danger-light-txt: white;
    --info-light-bg: #4758ef;
    --info-light-txt: white;
    --background-light-bg: white;
    --background-light-txt: #1f2937;
    --light-light-bg: #6b7280;
    --light-light-txt: white;
    --lighter-light-bg: #e2e8f0;
    --lighter-light-txt: #1f2937;
    --semilight-light-bg: #94a3b8;
    --semilight-light-txt: #1f2937;
    --superlight-light-bg: #d7dbe0;
    --superlight-light-txt: #1f2937;
    // dark theme
    --prim-dark-bg: #0a0a0a;
    --prim-dark-txt: #f5f5f5;
    --sec-dark-bg: #475569;
    --sec-dark-txt: #f5f5f5;
    --ter-dark-bg: #8f959d;
    --ter-dark-txt: #f5f5f5;
    --success-dark-bg: #16a34a;
    --success-dark-txt: #f5f5f5;
    --warning-dark-bg: #f59e0b;
    --warning-dark-txt: white;
    --danger-dark-bg: #ef4444;
    --danger-dark-txt: #f5f5f5;
    --info-dark-bg: #0b0b13;
    --info-dark-txt: #f5f5f5;
    --light-dark-bg: #9ca3af;
    --light-dark-txt: #1f2937;
    --lighter-dark-bg: #525252;
    --lighter-dark-txt: white;
    --semilight-dark-bg: #525252;
    --semilight-dark-txt: white;
    --superlight-dark-bg: #1d1c1c;
    --superlight-dark-txt: white;
    --background-dark-bg: #272822;
    --background-dark-txt: #d4d4d4;
}
```

Create a theme:

Create a `scss/blue.scss` file to override some default variables:

```scss
.theme-blue {
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

Create a `scss/main.scss` file:

```scss
@use "./default.scss" as *;
@use "./blue.scss" as *;
```

Import `main.scss"` in your application. Vitejs:

```js
<style lang="scss">
@use "./scss/main.scss";
</style>
```

Astro:

```js
import "../scss/main.scss";
```

## Usage

Enable your theme in the html:

```html
<html class="theme-blue">
```

To switch to dark mode:

```html
<html class="dark theme-blue">
```

### Background and text utilities

All the color utilities generated support the dark mode. Example: writing:

```html
<div class="prim">Primary block</div>
```

will do the same as:

```html
<div class="text-white bg-cyan-700 dark:bg-cyan-800 dark:text-neutral-100">Primary block</div>
```

### Background only utilities

```html
<div class="bg-prim">Primary background block</div>
```

will do the same as:

```html
<div class="bg-cyan-700 dark:bg-cyan-800">Primary background block</div>
```

### Text only utilities

```html
<div class="text-prim">Primary text block</div>
```

will do the same as:

```html
<div class="text-cyan-700 dark:text-cyan-800">Primary text block</div>
```

### Border utilities

```html
<div class="border border-prim">Block with border</div>
```

will do the same as:

```html
<div class="border border-cyan-700 dark:border-cyan-800">Block with border</div>
```

### Variants

Example of the `hover` variant:

```html
<div class="prim hover:warning">Primary hover block</div>
```

will do the same as:

```html
<div class="text-white bg-cyan-700 dark:bg-cyan-800 dark:text-neutral-100 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-600 dark:hover:text-neutral-100">
  Primary hover block
</div>
```
