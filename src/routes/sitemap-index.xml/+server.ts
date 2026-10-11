export const prerender = true;

import { xml, sitemapUrl } from "#lib/sitemap.ts";

// The sitemap index search engines are pointed to, from robots.txt and each page.
export const GET = () =>
  xml(
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${sitemapUrl("sitemap-0.xml")}</loc></sitemap></sitemapindex>`,
  );
