export const prerender = true;

import { canonicalUrl } from "#lib/site.ts";
import { paths, xml } from "#lib/sitemap.ts";

// Every page, with the date its source last changed.
export const GET = () =>
  xml(
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths
      .map((path) => {
        const lastmod = __LASTMOD__[path];
        return `<url><loc>${canonicalUrl(path)}</loc>${lastmod ? `<lastmod>${new Date(lastmod).toISOString()}</lastmod>` : ""}</url>`;
      })
      .join("")}</urlset>`,
  );
