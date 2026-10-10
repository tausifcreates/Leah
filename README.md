# Leah

The website for Leah, a video player for the Mac: https://tausifcreates.github.io/Leah/

## About this site

It's built with [Astro](https://astro.build) from the code of
[IINA's website](https://github.com/iina/iina-website) (master branch, June
2026), used under the MIT License (see `LICENSE-IINA`).

IINA's stylesheets in `src/styles/` are unchanged apart from the Bootstrap
import path and the heading levels they style. The home and features pages
keep the layout of IINA's, converted from Slim into `.astro` files in `src/`,
with Leah's own text, written from its App Store description. Its script is
`src/scripts/index.js`, unchanged apart from the jQuery import and the added
icons. Like IINA's site, it uses Bootstrap 4, jQuery, Font Awesome and Rubik
from Google Fonts.

## Search and link previews

Every page has a title, a description, a canonical address and link-preview
tags. The home and features pages set theirs in their own files; the privacy
policy and support page set their description in their front matter. The home
page also describes Leah to search engines as a `SoftwareApplication` with its
price. Link previews use `public/images/og-image.jpg` (1200 × 630).

`src/site.ts` holds Leah's version, price and requirement. Keep it the same as
the App Store listing.

## Work on it

```sh
npm install
npm run dev
```

Then open http://localhost:4321/Leah/. Pages reload as you save.

`npm run build` makes the finished site in `dist/`.

## Where things are

| What | Where | From IINA's |
| --- | --- | --- |
| App Store link, version, price and requirement | `src/site.ts` | `data/versions.yml` |
| Page frame | `src/layouts/Layout.astro` | `source/layouts/layout.slim` |
| Header, footer | `src/components/` | `source/_header.slim`, `_footer.slim` |
| Home page | `src/pages/index.astro` | `source/localizable/index.html.slim` |
| Features | `src/pages/features.astro` | `source/localizable/features.html.slim` |
| Privacy policy, support | `src/pages/privacy.md`, `src/pages/support.md` | |
| Styles | `src/styles/` | `assets/stylesheets/` |
| Pictures | `public/images/` | `source/images/` |

## Pictures to replace

| File | What it is now | Used for |
| --- | --- | --- |
| `shot-hero.webp` | Leah App Store screenshot | Top of the home page, Features page |
| `og-image.jpg` | `shot-hero.webp` on a dark background, 1200 × 630 | Link previews |
| `shot-scrub.webp`, `shot-watch.webp` | Leah App Store screenshots | Timeline Preview and Out of the Way on the home page, Features page |
| `shot-preview.webp`, `shot-play.webp`, `shot-open.webp` | Leah App Store screenshots | Features page |
| `logo.png` | Leah's start-screen logo, copied unchanged from the app | Header, browser icons |
| `swift.svg` | IINA's artwork (the Swift logo) | Behind the privacy section |
| `text-bg*.png` | IINA's artwork | The picture-filled headings ("fast", feature names, More Features) |
| `index-bg.svg` | IINA's artwork | The pattern behind the dark features section |

Keep the same file names, or change them in the pages and styles.

## Privacy policy and support

`/privacy` and `/support` are the privacy policy and support pages this
repository published before, with GitHub Pages' Jekyll and Primer theme. Their
text is unchanged, and `src/layouts/Page.astro` and
`public/assets/css/style.css` keep their look. Leah's App Store page links to
both.

## Publishing

`.github/workflows/deploy.yml` builds the site and publishes it with GitHub
Pages on every push to main. In Settings > Pages, Source must be "GitHub
Actions".
