# tailwindcss-semantic-colors

## Summary
CSS-only Tailwind CSS v4 plugin providing semantic color utility classes with automatic dark mode support via CSS custom properties.

## Dependencies
- External: `tailwindcss >= 4.0.0` (peer dependency — required for `@theme`/`@utility` directives)

## Used By
- Any project using Tailwind CSS v4+ that needs semantic color utilities with dark mode

## Entry Point
- `style.css` — Exports all `@theme` tokens and `@utility` classes (CSS-only, no JS)

## Key Files
| File | Purpose |
|------|---------|
| `style.css` | Core source — contains `@theme` tokens, dark mode overrides (`@layer base .dark {}`), and 17 `@utility` definitions for semantic colors |
| `package.json` | NPM manifest — CSS-only distribution with `./style.css` as export |
| `README.md` | Installation, configuration, and usage documentation |

## Architecture
- **Token-based theming**: All colors are defined as CSS custom properties in `@theme {}` (e.g., `--color-prim`, `--color-on-prim`)
- **Dark mode isolation**: Dark variants wrapped in `@layer base .dark {}` to ensure proper cascade ordering
- **Utility pattern**: Each of 17 utilities applies both `background-color` and `color` properties using the theme tokens

## Related
- Tailwind CSS v4 documentation — https://tailwindcss.com/docs

## Documentation
| Resource | Path |
|----------|------|
| Decision tree | `.agents/documentation/decision-tree.md` |
| Project overview | `.agents/documentation/project-overview.md` |
| Navigation map | `.agents/documentation/project-nav.md` |
| Full README | `README.md` |
