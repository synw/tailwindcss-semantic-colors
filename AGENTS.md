# tailwindcss-semantic-colors

## Mission
A Tailwind CSS v4+ plugin that generates semantic color utilities with automatic dark mode support.

## Repositories

| Repo | Path | Purpose |
|------|------|---------|
| `tailwindcss-semantic-colors` | `/workspace/` | Core package — semantic color utilities for Tailwind CSS v4+ |

## Conventions (for AI Agents)

- **CSS-only plugin**: This is a pure CSS distribution package with no JavaScript entry point; the single `style.css` file contains all `@theme` tokens and `@utility` definitions
- **Tailwind CSS v4 native**: Uses native Tailwind v4 features (`@theme`, `@utility`, `@layer`) — do not generate PostCSS plugin code or custom plugins
- **Dark mode via CSS classes**: Dark mode is triggered by `.dark` or `[data-theme="dark"]` CSS selectors in `@layer base` — theme variants are applied via class names like `.theme-blue`
- **Semantic color naming**: Colors follow a consistent pattern: `--{color}-light-bg` / `--{color}-light-txt` for light mode, `--{color}-dark-bg` / `--{color}-dark-txt` for dark mode
- **Utility classes**: Generated utilities (`.prim`, `.sec`, etc.) apply both background and text color by default; `.bg-{color}` and `.text-{color}` are implicit through Tailwind's class mapping

## Quick Start for AI Agents

1. Read `.agents/documentation/decision-tree.md` to find the right doc for your task
2. Read `.agents/documentation/project-overview.md` for high-level context
3. Read `.agents/documentation/project-nav.md` for detailed navigation and dependency graph
4. Read `.agents/documentation/codebase-summary.md` for technical summary

## Documentation

- `.agents/documentation/decision-tree.md` — Quick guide: find the right doc for your task
- `.agents/documentation/codebase-summary.md` — Codebase summary (structured, machine-readable)
- `.agents/documentation/project-overview.md` — Concise project overview (~1 page)
- `.agents/documentation/project-nav.md` — Detailed navigation map with dependency graph

Each package or library directory has `.agents/documentation/codebase-summary.md`. Use them to navigate in the codebase easily.
