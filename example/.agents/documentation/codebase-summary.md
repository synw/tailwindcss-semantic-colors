# Example — Tailwind CSS Semantic Colors Demo App

## Summary
Vue + Vite demo application showcasing the tailwindcss-semantic-colors plugin with interactive components, style guide, and theme switching.

## Dependencies
- Internal: `tailwindcss-semantic-colors` (local reference via `file:../`)
- External: `vue ^3.5`, `vite ^8`, `@tailwindcss/vite ^4.3`, `sass-embedded` (CSS compilation)

## Used By
- Developers — testing and demonstrating plugin capabilities in a real app context
- Documentation — live examples of color utilities, components, and dark mode

## Entry Point
- `src/main.ts` — Vue app entry point, mounts root component
- `src/styles/global.css` — Imports Tailwind v4 + semantic colors plugin + custom snowind theme

## Key Files
| File | Purpose |
|------|---------|
| `src/App.vue` | Root component — wraps ThemeSwitcher and StyleGuide |
| `src/components/StyleGuide.vue` | Comprehensive color palette showcase — buttons, forms, alerts, cards |
| `src/components/ThemeSwitcher.vue` | Interactive theme/color variant selector |
| `src/state.ts` | Theme/dark mode state management using VueUse `useStorage` |
| `src/conf.ts` | Themes configuration — lists all available theme names for the ThemeSwitcher UI component |
| `src/styles/global.css` | CSS entry — imports tailwindcss + semantic-colors + snowind theme |
| `src/styles/snowind.css` | UI component styles — button and slide transition utilities |
| `src/scss/main.scss` | SCSS entry point — imports all theme variants |
| `src/scss/default.scss` | Default color definitions — base values for all 24 CSS custom properties |
| `src/scss/*.scss` | Theme variant files — each overrides a subset of color variables |
| `package.json` | Dependencies — Vue 3 + Vite 8 + Tailwind v4 + local plugin reference |
| `vite.config.ts` | Vite config — Vue plugin setup |

## Architecture
- **Local package reference**: Uses `file:../` to depend on parent tailwindcss-semantic-colors package (no npm publish needed for dev)
- **Theme system**: Multiple SCSS files in `src/scss/` override CSS custom properties via `.theme-{name}` class selectors. Each theme file can override any subset of 24 color variables (12 light + 12 dark). Themes are registered in `src/scss/main.scss`, activated via HTML class (e.g., `<html class="theme-blue">`), and listed in `src/conf.ts` for the ThemeSwitcher UI component.
- **Component-driven UI**: StyleGuide demonstrates all 17 utility classes with real-world components (buttons, forms, alerts, progress bars)

## Related
- See `tailwindcss-semantic-colors` — parent package providing the semantic color utilities consumed by this demo
