# Leah

The website for Leah, a video player for the Mac: https://tausifcreates.github.io/Leah/

## About this site

It's built with [Astro](https://astro.build) from the code of
[IINA's website](https://github.com/iina/iina-website) (master branch, June
2026), used under the MIT License (see `LICENSE-IINA`).

IINA's stylesheets in `src/styles/` are unchanged apart from the Bootstrap
import path. Its home and features pages, written in Slim, are converted one
for one into `.astro` files in `src/`, keeping IINA's wording with "IINA"
replaced by "Leah". Links to things only IINA has (plugins, translation,
GitHub, browser extensions, beta builds) point to `#`. Its script is
`src/scripts/index.js`, unchanged apart from the jQuery import. Like IINA's
site, it uses Bootstrap 4, jQuery, Font Awesome and Rubik from Google Fonts.

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
| App Store link, version and macOS requirement | `src/site.ts` | `data/versions.yml` |
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
| `shot-hero.webp` | Leah App Store screenshot | Top of the home page, link previews |
| `shot-scrub.webp`, `shot-watch.webp` | Leah App Store screenshots | Dark Mode and Picture-in-Picture on the home page, Features page |
| `shot-preview.webp`, `shot-play.webp`, `shot-open.webp` | Leah App Store screenshots | Features page |
| `logo.png` | Leah's start-screen logo, copied unchanged from the app | Header, browser icons |
| `swift.svg` | IINA's artwork (the Swift logo) | Behind the open-source section |
| `text-bg*.png` | IINA's artwork | The picture-filled headings ("modern", feature names, More Features) |
| `index-bg.svg` | IINA's artwork | The pattern behind the dark features section |

Keep the same file names, or change them in the pages and styles. The
music-mode block on the features page uses `/media/feature-mmode-bg.png`,
which isn't in IINA's repository either.

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
