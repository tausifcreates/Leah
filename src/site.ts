// Leah's facts, used by the pages, their head tags and their structured data.
// Keep them the same as the App Store listing.

export const site = {
  name: "Leah",
  appStoreName: "Leah: Modern Fast Video Player",
  appStoreUrl: "https://apps.apple.com/app/id6816698102",
  author: "Tausif Khan",
  version: "4.0",
  price: "9.99",
  currency: "USD",
  requirement: "Requires a Mac with Apple silicon and macOS 15 or later.",
  minimumSystem: "macOS 15",
  supportUrl: "https://github.com/tausifcreates/Leah/issues",
};

/** A path inside the site, under the base folder it is published in. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}

/** The page's full address, without the .html the build gives its files. */
export function canonicalUrl(pathname: string, siteUrl: URL | undefined): string {
  return new URL(pathname.replace(/\.html$/, "").replace(/\/index$/, "/"), siteUrl).href;
}
