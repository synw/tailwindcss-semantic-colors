# Documentation Decision Tree

> Quick guide: What to read based on your task

## I need to understand the project

- High-level overview → `.agents/documentation/project-overview.md`
- Full navigation map → `.agents/documentation/project-nav.md`
- Structured summary → `.agents/documentation/codebase-summary.md`

## I need to work on the codebase

- Core package (`tailwindcss-semantic-colors`) → `style.css` (the only source file)
- Configuration reference → `.agents/documentation/project-overview.md`

## Common Tasks (Quick Reference)

| Task | Go To |
|------|-------|
| Understand project purpose | `.agents/documentation/project-overview.md` |
| Find the right doc for your task | `.agents/documentation/decision-tree.md` |
| Technical summary (entry points, key files) | `.agents/documentation/codebase-summary.md` |
| Add a new semantic color | Edit `style.css` — add `@theme` token + `@utility` rule |
| Modify dark mode colors | Edit `@layer base .dark {}` block in `style.css` |
| Create a theme variant | Create SCSS file overriding CSS variables (see README.md) |
| Update package version | Edit `package.json` |

## Conventions

- **CSS-only plugin** — No JavaScript; all code is in `style.css` using Tailwind v4 native features
- **Tailwind v4 syntax** — Use `@theme`, `@utility`, `@layer` directives (not PostCSS plugins)
- **Dark mode** — Defined in `@layer base .dark {}` block
- **Color naming** — Variables follow `{color}-{mode}-{property}` pattern (e.g., `--prim-light-bg`)

→ See `AGENTS.md` for full conventions summary.
