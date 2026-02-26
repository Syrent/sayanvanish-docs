# SayanVanish Docs

Official documentation source for SayanVanish (server setup, operations, and API integration).

Live site: https://syrent.github.io/sayanvanish-docs/

## Stack

- Astro + Starlight
- Markdown/MDX content
- GitHub Pages deployment via GitHub Actions

## Local Development

Run from the docs project root:

```bash
cd /home/syrent/IdeaProjects/SayanVanish/docs
npm install
npm run dev -- --host 0.0.0.0 --port 4321
```

## Build

```bash
cd /home/syrent/IdeaProjects/SayanVanish/docs
npm run build
```

Output is generated in `dist/`.

## Content Layout

Docs pages live in `src/content/docs/` and are grouped by section:

- `administration/` for server-owner and operator docs
- `development/` for API and plugin developer docs
- `index.mdx` for the docs homepage

## Deployment

The `Syrent/sayanvanish-docs` repository deploys automatically on pushes to `main` using:

- `.github/workflows/deploy.yml`

The workflow builds the site and publishes `dist/` to GitHub Pages.

## Maintenance Notes

- Keep examples aligned with current API names and signatures.
- Prefer short, task-oriented pages over long narrative text.
- Validate docs changes locally before pushing.
