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
| `src/styles/global.css` | CSS entry — imports tailwindcss + semantic-colors + snowind theme |
| `src/scss/main.scss` | SCSS theme overrides (default, bluestar, brown, black variants) |
| `package.json` | Dependencies — Vue 3 + Vite 8 + Tailwind v4 + local plugin reference |
| `vite.config.ts` | Vite config — Vue plugin setup |

## Architecture
- **Local package reference**: Uses `file:../` to depend on parent tailwindcss-semantic-colors package (no npm publish needed for dev)
- **Theme system**: Multiple SCSS files per theme variant, imported via `main.scss` to override CSS custom properties
- **Component-driven UI**: StyleGuide demonstrates all 17 utility classes with real-world components (buttons, forms, alerts, progress bars)

## Related
- See `tailwindcss-semantic-colors` — parent package providing the semantic color utilities consumed by this demo
