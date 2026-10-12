import adapter from "@sveltejs/adapter-cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, type Plugin } from "vite";
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { parse as parseYaml } from "yaml";

// Turns each Markdown page in src/content into { frontmatter, html } when the
// site is built, so pages and the Worker get finished HTML. Like Astro's
// Markdown: GitHub tables, curly quotes and ids on headings.
function markdown(): Plugin {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkSmartypants)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify);
  return {
    name: "leah-markdown",
    async transform(code, id) {
      if (!id.endsWith(".md")) return;
      const [, yaml, body] = code.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/) ?? [, "", code];
      const frontmatter = parseYaml(yaml) ?? {};
      const html = String(await processor.process(body));
      return { code: `export default ${JSON.stringify({ frontmatter, html })};`, map: null };
    },
  };
}

// Dates from git for each page's source, keyed by the page's path: when it
// was first added (for the blog) and last changed (for the sitemap's <lastmod>).
function gitDates(): { created: Record<string, string>; lastmod: Record<string, string> } {
  const created: Record<string, string> = {};
  const lastmod: Record<string, string> = {};
  // Build servers often check out only the latest commit; the dates need the rest.
  const git = (...args: string[]) => execFileSync("git", args, { encoding: "utf8" }).trim();
  if (git("rev-parse", "--is-shallow-repository") === "true") git("fetch", "--unshallow", "--quiet");
  // Moves and renames don't count as changes.
  const log = (file: string) => git("log", "--follow", "--diff-filter=AM", "--format=%cI", "--", file).split("\n");
  const pages: Record<string, string> = {
    "/": "src/routes/+page.svelte",
    "/features": "src/routes/features/+page.svelte",
    "/faq": "src/routes/faq/+page.svelte",
    "/blog": "src/routes/blog/+page.svelte",
  };
  for (const file of readdirSync("src/content")) {
    if (file.endsWith(".md") && file !== "404.md") pages[`/${file.slice(0, -3)}`] = `src/content/${file}`;
  }
  for (const [path, file] of Object.entries(pages)) {
    const dates = existsSync(file) ? log(file).filter(Boolean) : [];
    if (dates.length) {
      lastmod[path] = dates[0];
      created[path] = dates[dates.length - 1];
    }
  }
  return { created, lastmod };
}

const dates = gitDates();

export default defineConfig({
  define: {
    __LASTMOD__: JSON.stringify(dates.lastmod),
    __CREATED__: JSON.stringify(dates.created),
  },
  plugins: [
    markdown(),
    // Every page is styled with Tailwind (src/styles/tailwind.css).
    tailwindcss(),
    sveltekit({
      compilerOptions: {
        // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
        runes: ({ filename }) => (filename.split(/[/\\]/).includes("node_modules") ? undefined : true),
      },
      adapter: adapter(),
      // The sitemaps aren't linked from any page, so they're named here to be built.
      // Absolute /_app/ addresses, so the 404 page finds its styles at any depth.
      paths: { relative: false },
      prerender: { entries: ["*", "/sitemap-index.xml", "/sitemap-0.xml"] },
    }),
  ],
});
