// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// The site is published at https://leahapp.xyz/. GitHub Pages serves it there
// as the repository's custom domain, and sends tausifcreates.github.io/Leah/
// addresses on to it.
export default defineConfig({
  site: process.env.SITE ?? "https://leahapp.xyz",
  base: process.env.BASE ?? "/",
  trailingSlash: "ignore",
  // Pages as support.html rather than support/index.html, so /support
  // is served as is, as Jekyll served it, and Leah's App Store page links to.
  build: { format: "file" },
  devToolbar: { enabled: false },
  // Writes sitemap-index.xml, listing every page, for search engines.
  integrations: [sitemap()],
  vite: {
    css: {
      preprocessorOptions: {
        // IINA's styles and Bootstrap 4 are written for an older Sass;
        // today's Sass builds them the same but warns about each old form.
        sass: {
          quietDeps: true,
          silenceDeprecations: ["import", "global-builtin", "color-functions", "slash-div", "abs-percent"],
        },
        scss: {
          quietDeps: true,
          silenceDeprecations: ["import", "global-builtin", "color-functions", "slash-div", "abs-percent"],
        },
      },
    },
  },
});
