# Tailwindcss semantic colors plugin

[![pub package](https://img.shields.io/npm/v/tailwindcss-semantic-colors)](https://www.npmjs.com/package/tailwindcss-semantic-colors)

A Tailwind css plugin to generate semantic color utilities with dark mode support

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
    --primary-light-bg: #0e7490;
    --primary-light-txt: white;
    --secondary-light-bg: #06b6d4;
    --secondary-light-txt: white;
    --success-light-bg: #16a34a;
    --success-light-txt: white;
    --warning-light-bg: #f59e0b;
    --warning-light-txt: white;
    --danger-light-bg: #ef4444;
    --danger-light-txt: white;
    --light-light-bg: #6b7280;
    --light-light-txt: white;
    --lighter-light-bg: #e2e8f0;
    --lighter-light-txt: #1f2937;
    --semilight-light-bg: #94a3b8;
    --semilight-light-txt: #1f2937;
    --background-light-bg: white;
    --background-light-txt: #1f2937;
    --foreground-light-bg: white;
    --foreground-light-txt: #1f2937;
    --secondary-strong-light-bg: #06b6d4;
    --secondary-strong-light-txt: white;
    // dark theme
    --primary-dark-bg: #0a0a0a;
    --primary-dark-txt: #f5f5f5;
    --secondary-dark-bg: #475569;
    --secondary-dark-txt: #f5f5f5;
    --success-dark-bg: #16a34a;
    --success-dark-txt: #f5f5f5;
    --warning-dark-bg: #f59e0b;
    --warning-dark-txt: white;
    --danger-dark-bg: #ef4444;
    --danger-dark-txt: #f5f5f5;
    --light-dark-bg: #9ca3af;
    --light-dark-txt: #1f2937;
    --lighter-dark-bg: #525252;
    --lighter-dark-txt: white;
    --semilight-dark-bg: #525252;
    --semilight-dark-txt: white;
    --background-dark-bg: #272822;
    --background-dark-txt: #d4d4d4;
    --foreground-dark-bg: black;
    --foreground-dark-txt: #d4d4d4;
    --secondary-strong-dark-bg: #475569;
    --secondary-strong-dark-txt: #f5f5f5;
}
```

Create a theme:

Create a `scss/blue.scss` file to override some default variables:

```scss
.theme-blue {
    --primary-light-bg: #0e599a;
    --primary-light-txt: white;
    --secondary-light-bg: #dbecfe;
    --secondary-light-txt: #0e599a;
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

Use `import "../scss/main.scss"` in your application.

Enable your theme in the html:

```html
<html class="theme-blue">
```

To switch to dark mode:

```html
<html class="dark theme-blue">
```

## Usage

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
<div class="bg-primary">Primary background block</div>
```

will do the same as:

```html
<div class="bg-cyan-700 dark:bg-cyan-800">Primary background block</div>
```

### Text only utilities

```html
<div class="text-primary">Primary text block</div>
```

will do the same as:

```html
<div class="text-cyan-700 dark:text-cyan-800">Primary text block</div>
```

### Border utilities

```html
<div class="border border-primary">Block with border</div>
```

will do the same as:

```html
<div class="border border-cyan-700 dark:border-cyan-800">Block with border</div>
```

### Variants

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
