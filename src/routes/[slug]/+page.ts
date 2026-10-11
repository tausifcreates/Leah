import { error } from "@sveltejs/kit";
import type { MarkdownPage } from "#lib/site.ts";
import type { EntryGenerator, PageLoad } from "./$types";

// The Markdown pages in src/content, one per address: support.md is /support.
const pages = import.meta.glob<MarkdownPage>("/src/content/*.md", { eager: true, import: "default" });
const slugOf = (file: string) => file.replace(/^.*\/|\.md$/g, "");

export const entries: EntryGenerator = () =>
  Object.keys(pages)
    .map((file) => ({ slug: slugOf(file) }))
    .filter(({ slug }) => slug !== "404");

export const load: PageLoad = ({ params }) => {
  const page = Object.entries(pages).find(([file]) => slugOf(file) === params.slug)?.[1];
  if (!page || params.slug === "404") error(404, "Not Found");
  return page;
};
