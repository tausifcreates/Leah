// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

// The date of the last commit that changed a page's source, for its <lastmod>
// in the sitemap. The Deploy workflow checks out the whole history for this.
function lastModified(pageUrl) {
  const slug = new URL(pageUrl).pathname.replace(/^\/|\/$/g, "") || "index";
  const file = [`src/pages/${slug}.md`, `src/pages/${slug}.astro`].find((f) => existsSync(f));
  if (!file) return undefined;
  const date = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], { encoding: "utf8" }).trim();
  return date || undefined;
}

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
  integrations: [
    sitemap({
      serialize(item) {
        const lastmod = lastModified(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
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
