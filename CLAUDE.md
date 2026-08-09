> Cross-project context: `C:\Users\My PC\projects\_global\CLAUDE.md`
> Eudomia: product project (Mark's personal site). Engineering dept can audit; Design owns visual/UX; Marketing owns copy.

# Mark Portfolio

Mark Alejandro's personal portfolio site — showcases his projects (Imagine SD, MedsPLUS, AIRA skill, etc.).

## Stack

- React 18 (JSX) — single-page app
- **No build step.** React + ReactDOM load as UMD bundles from the unpkg CDN, and
  `@babel/standalone` transpiles the `src/*.jsx` files in the browser at runtime via
  `<script type="text/babel">` tags. There is no `package.json`, no bundler, no
  TypeScript, and no Tailwind in this repo.
- Deployed to Vercel as raw static files — `vercel.json` is `{"buildCommand": null,
  "outputDirectory": ".", "framework": null}`
- Repo: `github.com/MarkAl0324/mark-portfolio` (origin configured)

> ⚠ This was previously documented as "Vite build". That was wrong and had propagated
> into the wiki and the Eudomia briefs. Any change here must work without a build step —
> adding one would break the `buildCommand: null` deploy.

## Status

Active. Live site with project showcase sections and screenshots.

## Key files

| Path | Purpose |
|---|---|
| `index.html` | Entry |
| `src/app.jsx` | Root app |
| `src/sections.jsx` | Page sections |
| `src/components.jsx` | Shared components |
| `src/data.jsx` | Project/content data |
| `src/tweaks.jsx` | Style/behavior tweaks |
| `images/` | Project screenshots |
| `vercel.json` | Deploy config |

## For Senior Dev specialists

- **sd-ui / sd-code**: React component structure in `src/`. Content is data-driven via `data.jsx`.
- **sd-deploy**: Vercel deployment; origin remote on GitHub.
- No backend / DB — static SPA.
