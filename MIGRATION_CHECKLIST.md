# BOCCA Website Migration Checklist

## Repository inventory

- [x] Confirmed clean Git working tree and latest commit `bbd08fb`.
- [x] Confirmed there is no existing Next.js project, package manifest, lockfile, router, or package manager configuration. Current project is a static HTML export served by `serve.js`.
- [x] Runtime available: Node.js 24.20.0 and npm 11.19.0. No package manager is established by the repository.
- [x] Identified four source pages: `index.html`, `about.html`, `menu.html`, and `reservation.html`.
- [x] Identified shared styles: `css/style.css` (1,759 lines) and `css/animations.css` (144 lines).
- [x] Identified existing behavior in `js/main.js` and `js/data.js`: mobile/navigation drawer and overlay, reservation modal and form feedback, localStorage pantry cart and quantity controls, checkout toast, marquee duplication, and hero image mouse parallax.
- [x] Identified local media: 140 files (63 AVIF, 25 WebP, 21 PNG, 8 SVG, 4 TTF, 19 JS, 1 CSS) under `assets/`; includes food/restaurant photos, paper textures, SVG marks, favicon, and font files.
- [x] Identified responsive breakpoints in the existing CSS at 480, 500, 600, 650, 768, 800, 900, 960, 1026, 1351, and 1440px (some are minified/overlapping legacy rules).
- [x] No existing Next.js code is available to reuse. `serve.js` is the static preview server; Webflow runtime chunks are also present under `assets/js/` but are not referenced by the four pages.

## Migration map

| Original file(s) | Next.js destination | Approach |
| --- | --- | --- |
| `index.html` | `app/page.jsx` | Preserve current home page markup and class names; connect shared interactive shell. |
| `about.html` | `app/about/page.jsx` | Preserve heritage page markup and interactions. |
| `menu.html` | `app/menu/page.jsx` | Preserve menu markup and reservation modal behavior. |
| `reservation.html` | `app/reservation/page.jsx` | Preserve booking form, contact details, and shared navigation. |
| `css/style.css` | `public/css/style.css` | Keep original CSS and its relative `../assets/media/...` references valid. |
| `css/animations.css` | `public/css/animations.css` | Keep animation definitions unchanged. |
| `assets/**` | `public/assets/**` | Copy all static source assets without renaming or deleting originals. |
| `js/data.js` | `public/js/data.js` | Preserve original catalog data for the existing controller. |
| `js/main.js` | `public/js/main.js` plus Next client bootstrap | Retain DOM behavior; initialize after the React-rendered markup exists and clean up page-level listeners. |
| `serve.js` | Removed from runtime path, retained in source | Next.js development/build scripts become the project entry points. |
| `assets/js/**` | `public/assets/js/**` | Preserve Webflow export/runtime files as source assets; do not load unless page references require them. |

## Implementation stages

1. [x] Add the minimal Next.js App Router configuration and shared root layout.
2. [x] Copy CSS and all static assets into `public/`, preserving original files and filenames.
3. [x] Add a reusable page shell and route each of the four original pages, retaining its body markup, styles, image references, and class names.
4. [x] Load the existing controller once from a client component and reinitialize page-level behavior safely; support navigation, cart, reservation modal, forms, toast feedback, marquee, and parallax.
5. [x] Start the Next development server; verify `/`, `/about`, `/menu`, and `/reservation`, rendering at the available narrow browser viewport, local assets, menu drawer, reservation modal, and reservation form feedback.
6. [x] Run `npm run build`; the production build and Next's build-time type checks passed. There was no existing ESLint configuration or lint script, so no separate lint command is configured.

## Known scope note

The provided source branding and page copy say “Da Maria Ristorante”; the requested “BOCCA — Italian Coffee & Pizza House” identity is not present in the supplied files. To honor the no-redesign/no-theme-change instruction, this migration preserves the supplied source exactly instead of inventing new branding or content.

The page bodies are kept as source HTML inside one reusable React shell to prioritize a lossless visual and behavior migration. Turning every page section into individually maintained JSX components remains a separate refactoring step. The source files and original static server remain in place for reference.

No original-site screenshot was available in the same browser session, and desktop viewport comparison was not completed. The existing responsive CSS was retained without edits; these visual comparisons remain to be done.
