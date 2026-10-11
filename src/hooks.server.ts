import type { Handle } from "@sveltejs/kit";

// The home and features pages use IINA's layout, styled by a class on <body>;
// the other pages use the text layout, with US English as their language.
const bodyClass: Record<string, string> = { "/": "index", "/features": "features" };

export const handle: Handle = ({ event, resolve }) => {
  const path = event.route.id ?? "";
  const cls = bodyClass[path];
  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace("%leah.lang%", cls ? "en" : "en-US").replace("%leah.bodyClass%", cls ? ` class="${cls}"` : ""),
  });
};
