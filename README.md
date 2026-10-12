# Leah

The website for Leah, a video player for the Mac: https://leahapp.xyz/

## About this site

It's built with [SvelteKit](https://svelte.dev/docs/kit) and
[Tailwind CSS](https://tailwindcss.com), and published on Cloudflare Workers.
Every page is built to HTML ahead of time and ships no JavaScript from
SvelteKit.

Every page is styled with Tailwind from one stylesheet,
`src/styles/tailwind.css`, which holds the site's colors, fonts and
breakpoints. Every page uses `src/lib/tw/Layout.svelte` for its head tags,
header and footer. The text pages (the FAQ, formats, support and privacy
pages, the guides and the 404 page) go through `src/lib/PageLayout.svelte`,
which sets their Markdown with Tailwind's typography plugin.

The home page and the blog are laid out like
[Elmedia Player's site](https://www.elmedia-video-player.com/), rebuilt from
the computed styles of its home page (sizes, spacing, colors, radii and its
breakpoints, read in the browser's developer tools), in Leah's own words and
screenshots. Elmedia's reviews and press logos are left out. The top of the
home page and the features page are rebuilt from the computed styles of
[IINA's website](https://github.com/iina/iina-website), which this site was
first made from, used under the MIT License (see `LICENSE-IINA`). The home
page's questions come from `src/lib/faqs.ts`, which the FAQ page also uses.

Every page uses the fonts built into Apple devices, named in CSS rather than
shipped (Apple's licences don't allow serving them): SF Pro for text
(`-apple-system`) and New York for headings (`ui-serif`, `"New York"`).
Other systems fall back to their own: Segoe UI or Roboto for text, and
Georgia, Palatino or Times for headings.

## Search and link previews

Every page has a title, a description, a canonical address and link-preview
tags. The home and features pages set theirs in their own files; the privacy
policy and support page set their description in their front matter. The home
page also describes Leah to search engines as a `SoftwareApplication` with its
price. Link previews use `static/images/og-image.jpg` (1200 × 630).

Pages written for search engines and AI assistants: `formats.md` (format
tables), `src/routes/faq/+page.svelte` (with FAQPage structured data built from the same
answers), and these Markdown pages in `src/content/`: `leah-vs-iina.md`, `leah-vs-vlc.md`, `leah-vs-infuse.md`,
`leah-vs-elmedia.md`, `iina-alternatives.md`, `fast-seeking-video-player-mac.md`,
`mkv-no-sound-mac.md`,
`play-mkv-on-mac.md` (the guide that links the others), `dts-on-mac.md`,
`dolby-truehd-atmos-mac.md`, `pgs-vobsub-subtitles-mac.md`
and `quicktime-cant-open-mkv.md`. Their facts come from the
app's Help Book; keep them in step with it. Other players' details come from
their developers' sites and App Store listings, dated at the foot of each page. Text pages can set `seoTitle` in
their front matter to replace the whole `<title>`, and each gets
BreadcrumbList structured data from `src/lib/PageLayout.svelte`. `404.md` is
the page shown, with a 404 status, for any missing address; it's marked noindex
and left out of the sitemap. The screenshots each have a 1000-pixel copy
(`shot-*-1000.webp`, made with `cwebp -q 82 -resize 1000 0`) for `srcset`.
`/blog` (`src/routes/blog/`) lists the guides and comparisons as cards, newest
first, as cards laid out like Efferd's blogs-3 block. The list is in `src/lib/blog.ts`;
each card takes its title and description from the page's front matter, its
date from the page's first commit and its read time from its word count. The
covers in `static/blog/covers/` are made from the players' official icons
(`design/blog-icons/`) by `swift design/make-blog-covers.swift`; add a line
there for each new post. Dolby, DTS, Matroska and Apple logos are licensed
trademarks, so guides about them get Leah's icon and a text label instead.
`static/llms.txt` sums up Leah for AI crawlers. The 32-character `.txt` file
in `static/` is the site's IndexNow key: after publishing new or changed
pages, send their addresses to https://api.indexnow.org/indexnow (Bing and
others) with that key.

`src/routes/sitemap-index.xml` and `src/routes/sitemap-0.xml` write the
sitemap on every build, listing every page with the date of the last commit
that changed its source, and each page links to it. Submit
https://leahapp.xyz/sitemap-index.xml in Google Search Console, under the
leahapp.xyz domain property. `static/robots.txt` also points crawlers to it.

`src/lib/site.ts` holds Leah's version, price and requirement. Keep it the same as
the App Store listing.

## Work on it

```sh
bun install
bun run dev
```

Then open http://localhost:5173/. Pages reload as you save.

`bun run build` makes the finished site in `.svelte-kit/cloudflare/`, and
`bun run preview` serves it with Wrangler as Cloudflare will, at
http://localhost:4173/.

## Where things are

| What | Where | From IINA's |
| --- | --- | --- |
| App Store link, version, price and requirement | `src/lib/site.ts` | `data/versions.yml` |
| Head tags, header and footer | `src/lib/tw/Layout.svelte`, `src/lib/tw/Header.svelte`, `src/lib/tw/Footer.svelte` | |
| Features | `src/routes/features/+page.svelte` | `source/localizable/features.html.slim` |
| Privacy policy, support, guides | `src/content/*.md` | |
| Styles | `src/styles/tailwind.css` | |
| Pictures | `static/images/` | `source/images/` |

## Pictures to replace

| File | What it is now | Used for |
| --- | --- | --- |
| `shot-hero.webp` | Leah App Store screenshot | Top of the home page, Features page |
| `og-image.jpg` | `shot-hero.webp` on a dark background, 1200 × 630 | Link previews |
| `shot-scrub.webp`, `shot-preview.webp`, `shot-watch.webp` | Leah App Store screenshots | The seeking cards on the home page, Features page |
| `shot-play.webp`, `shot-open.webp` | Leah App Store screenshots | Playback and download sections of the home page, Features page |
| `mac-app-store-badge.svg` | Apple's black "Download on the Mac App Store" badge, from developer.apple.com/app-store/marketing/guidelines | Download buttons on the home page |
| `logo.png` | Leah's start-screen logo from the app, 192 pixels wide | Header, browser icons |

Keep the same file names, or change them in the pages and styles.

## Privacy policy and support

`/privacy` and `/support` are the privacy policy and support pages this
repository published before, with GitHub Pages' Jekyll and Primer theme. Their
text is unchanged; they now share the site's layout. Leah's App Store page
links to both.

## Publishing

Cloudflare Workers Builds builds the site and deploys it as the Worker
`leah-website` on every push to main (build command `bun run build`, deploy
command `bunx wrangler deploy`), with Bun as the package manager (`bun.lock`). `wrangler.jsonc` configures the Worker, and
`_headers` sets the security and cache headers Cloudflare sends with the
files. Every page is a static file, so serving the site is free; only
addresses with no page run the Worker, to show the 404 page.

leahapp.xyz's DNS is on Cloudflare.
