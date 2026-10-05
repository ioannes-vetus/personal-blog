# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this
repository.

## Commands

- `yarn start` — dev server with hot reload
- `yarn build` — production build to `build/` (also runs the custom search-index plugin, see below)
- `yarn typecheck` — `tsc` against the whole project (no test runner is configured; this plus
  `format:check` and `build` are the only checks)
- `yarn format` / `yarn format:check` — Prettier over `src/**/*.{ts,tsx,css}`
- `yarn serve` — serve an existing `build/` output locally
- `yarn preview` — `build` + `serve` in one step
- `yarn clear` — wipe the Docusaurus cache (`.docusaurus/`) when things behave strangely

There is no test suite. CI (`.github/workflows/ci.yml`) runs `format:check` then `build`, and
deploys `build/` to GitHub Pages on pushes to `main`.

## Architecture

This is a Docusaurus 3 site, but with the **docs plugin fully disabled** (`docs: false` in
`docusaurus.config.ts`) and **no sidebar** anywhere on the site. The homepage is not an MDX doc —
it's a plain React page at `src/pages/index.tsx`, built with `<Layout>` from `@theme/Layout`. Don't
reintroduce a `docs/` folder or `sidebars.ts` expecting the old doc-sidebar behavior; that was
deliberately removed in favor of a single custom homepage + the blog.

### Custom search (not a Docusaurus search plugin)

Site search is entirely hand-rolled, not Algolia/local-search:

- `src/searchIndex.ts` is invoked from a `postBuild` plugin hook in `docusaurus.config.ts`. It walks
  every `index.html` in the built output, extracts headings/paragraphs, and writes
  `search-index.json` to the build root.
- It distinguishes blog posts from listing pages via path-prefix heuristics
  (`BLOG_LISTING_PREFIXES`) since custom slugs make blog posts otherwise indistinguishable from
  listings by path alone.
- Non-blog pages (i.e. the homepage) are found via a `[data-search-content]` attribute —
  `src/pages/index.tsx` sets this on its content wrapper. If you add another plain page you want
  searchable, tag its content container the same way.
- `src/theme/SearchBar/index.tsx` is a swizzled replacement for the default navbar search. It
  fetches `search-index.json` client-side and queries it with `minisearch`. Its user-facing strings
  are in English, matching the site's content language.

### Theming

`src/css/custom.css` defines the "old money" dark-green palette and typography (JetBrains Mono for
both headings and body) as CSS custom properties, with a separate `[data-theme='dark']` block for
the dark-mode variants. Two things to know before touching it:

- `--brand-ink` is a *foreground* color that intentionally flips light↔dark between themes — never
  use it for a background (it previously broke the footer this way).
- The footer background instead uses `--brand-footer-bg`, a fixed value defined once at `:root` and
  deliberately **not** overridden in the dark-mode block, so the footer stays the same dark green
  regardless of site theme.

### `src/components/Avatar`

The circular portrait component used on the homepage. `src`, `name`, and `role` are all required
props (no defaults) — the only call site is `src/pages/index.tsx`.

### `baseUrl` handling

The site is served on the custom domain `https://janstary.com` (via GitHub Pages' "Custom domain"
setting plus the `static/CNAME` file, which Docusaurus copies to the build root), so it lives at the
domain root and `baseUrl` in `docusaurus.config.ts` is `/`. A `const baseUrl` is still defined once
at the top of the config and reused both for the `baseUrl` field and for hand-written absolute paths
inside the footer's raw HTML `copyright` string (that string bypasses React's
`useBaseUrl`/`<Link>` resolution, so it needs the prefix manually) — keep routing any other
hardcoded absolute path (`/img/...`, `/blog/...`) outside JSX through this same constant, in case the
site is ever moved back under a sub-path. Inside JSX/TSX, prefer `useBaseUrl()` or Docusaurus's
`<Link>`, which handle this automatically.

### Deployment

GitHub Actions (`.github/workflows/ci.yml`) builds and deploys to GitHub Pages on every push to
`main`. Two one-time manual settings outside the workflow file are required for this to work:

- Settings → Pages → Source must be set to "GitHub Actions".
- Settings → Pages → Custom domain must be set to `janstary.com`, and the domain's DNS must point at
  GitHub Pages (an `A`/`ALIAS` record at the apex to GitHub's Pages IPs, or a `CNAME` record if
  serving from a `www` subdomain instead). The `static/CNAME` file only tells GitHub Pages which
  domain to serve the build under; it doesn't configure DNS.
