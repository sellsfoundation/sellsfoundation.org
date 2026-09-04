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

### Base path

The Vite `base` in [`vite.config.ts`](vite.config.ts) is set to `'./'` (a
relative base) so the built assets resolve correctly regardless of where the
site is hosted:

- the GitHub Pages project subpath — `https://<org>.github.io/sellsfoundation.org/`
- the apex custom domain — `https://sellsfoundation.org/`

The relative base works for both, so no change is needed when moving to the
custom domain.

### Custom domain (sellsfoundation.org)

The custom domain is **not enabled yet**. To turn it on:

1. Point the domain's DNS at GitHub Pages (apex `A`/`AAAA` records, or a `CNAME`
   for `www`, per
   [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
2. Once DNS resolves, set the custom domain under **Settings → Pages**. GitHub
   will recreate the `CNAME` file in the published site.

Do not add the `CNAME` file back before DNS is pointed — GitHub will redirect
the working `github.io` URL to a domain that does not resolve yet, breaking the
live site.
