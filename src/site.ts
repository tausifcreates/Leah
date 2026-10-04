// Leah's values for the places IINA's pages fill in from their data.

export const site = {
  appStoreUrl: "https://apps.apple.com/app/id6816698102",
  // IINA's data/versions.yml: the latest stable release.
  latest: { version: "2.0", system_arm: "macOS 15.0", system_x86: "macOS 15.0" },
};

/** A path inside the site, under the base folder it is published in. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
