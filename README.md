# Edwin and Evelina Sells Foundation

The website for the Edwin and Evelina Sells Foundation, which exists to benefit
non-profit organizations focused on **the arts, children, education, and animal
welfare** in the Upstate New York and western New England areas.

This is a bare-bones scaffold. A Claude Design system will be applied later once
logos and branding are secured.

## Tech stack

- [Vite](https://vitejs.dev/) — build tooling and dev server
- [React](https://react.dev/) + TypeScript
- Deployed to **GitHub Pages** via GitHub Actions

## Local development

Requires Node.js 20+.

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check and build to ./dist
npm run preview  # preview the production build locally
```

## Deployment

Deployment is automated by the workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). On every push to
`main` (or a manual `workflow_dispatch` run), the site is built and published to
GitHub Pages.

To enable it, in the repository settings under **Settings → Pages**, set the
build and deployment **Source** to **GitHub Actions**.

### Custom domain

The site is configured to serve from the apex domain **sellsfoundation.org** via
[`public/CNAME`](public/CNAME), so the Vite `base` is set to `/`. Point the
domain's DNS at GitHub Pages and confirm the custom domain under
**Settings → Pages**.

If instead the site is served from the default
`https://<org>.github.io/sellsfoundation.org/` path, update `base` in
[`vite.config.ts`](vite.config.ts) to `'/sellsfoundation.org/'` and remove
`public/CNAME`.
