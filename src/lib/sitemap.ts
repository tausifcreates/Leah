import { site } from "./site.ts";

// Every page's path, in the order Astro's sitemap listed them.
const pages = import.meta.glob("/src/content/*.md");
export const paths = [
  "/",
  "/blog",
  "/faq",
  "/features",
  ...Object.keys(pages)
    .map((file) => `/${file.replace(/^.*\/|\.md$/g, "")}`)
    .filter((path) => path !== "/404"),
].sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));

export function xml(body: string): Response {
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>${body}`, {
    headers: { "Content-Type": "application/xml" },
  });
}

export const sitemapUrl = (name: string) => new URL(`/${name}`, site.origin).href;
