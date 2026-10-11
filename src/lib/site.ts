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

/** The links at the foot of the text pages and the blog. */
export const pageLinks: [string, string][] = [
  ["Home", "/"],
  ["Features", "/features"],
  ["Formats", "/formats"],
  ["Fast seeking", "/fast-seeking-video-player-mac"],
  ["FAQ", "/faq"],
  ["Blog", "/blog"],
  ["Play MKV on Mac", "/play-mkv-on-mac"],
  ["IINA alternatives", "/iina-alternatives"],
  ["Leah vs IINA", "/leah-vs-iina"],
  ["Leah vs VLC", "/leah-vs-vlc"],
  ["Leah vs Infuse", "/leah-vs-infuse"],
  ["Leah vs Elmedia", "/leah-vs-elmedia"],
  ["MKV has no sound", "/mkv-no-sound-mac"],
  ["TrueHD and Atmos on Mac", "/dolby-truehd-atmos-mac"],
  ["DTS on Mac", "/dts-on-mac"],
  ["PGS and VobSub subtitles", "/pgs-vobsub-subtitles-mac"],
  ["QuickTime can't open MKV", "/quicktime-cant-open-mkv"],
  ["Support", "/support"],
  ["Privacy", "/privacy"],
];

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
