// Leah's facts, used by the pages, their head tags and their structured data.
// Keep them the same as the App Store listing.

export const site = {
  name: "Leah",
  origin: "https://leahapp.xyz",
  appStoreName: "Leah: Modern Fast Video Player",
  appStoreUrl: "https://apps.apple.com/app/id6816698102",
  wikidataUrl: "https://www.wikidata.org/wiki/Q141696867",
  author: "Tausif Khan",
  version: "4.0",
  price: "9.99",
  currency: "USD",
  requirement: "Requires a Mac with Apple silicon and macOS 15 or later.",
  minimumSystem: "macOS 15",
  supportUrl: "https://github.com/tausifcreates/Leah/issues",
};

/** A path on the site, such as "/features". */
export function url(path: string): string {
  return `/${path.replace(/^\//, "")}`;
}

/** The full address of a path on the site, without the .html of its file. */
export function canonicalUrl(pathname: string): string {
  return new URL(pathname.replace(/\.html$/, "").replace(/\/index$/, "/"), site.origin).href;
}

/** A Markdown page in src/content, rendered to HTML when the site is built. */
export interface MarkdownPage {
  frontmatter: {
    title: string;
    seoTitle?: string;
    description: string;
    noindex?: boolean;
  };
  html: string;
}
