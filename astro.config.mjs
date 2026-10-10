// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// The site is published at https://tausifcreates.github.io/Leah/. With a
// custom domain, set SITE to it and BASE to "/".
export default defineConfig({
  site: process.env.SITE ?? "https://tausifcreates.github.io",
  base: process.env.BASE ?? "/Leah/",
  trailingSlash: "ignore",
  // Pages as support.html rather than support/index.html, so /Leah/support
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
