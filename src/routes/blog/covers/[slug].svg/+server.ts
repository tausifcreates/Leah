import { error } from "@sveltejs/kit";
import { posts } from "#lib/blog.ts";
import type { EntryGenerator, RequestHandler } from "./$types";

// Each post's cover: soft blurred circles in the home page's colours on a
// dark background, with the play-button triangle from the home page. The
// layout comes from the post's address, so every cover differs but stays the
// same from build to build.
export const prerender = true;

export const entries: EntryGenerator = () => posts.map(({ slug }) => ({ slug }));

const colours = ["#42b0ff", "#ff4294", "#ff9142", "#42ff91", "#99e1d0", "#8f7bff"];

function random(seed: string) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

export const GET: RequestHandler = ({ params }) => {
  if (!posts.some(({ slug }) => slug === params.slug)) error(404, "Not Found");
  const r = random(params.slug);
  const start = Math.floor(r() * colours.length);
  const circles = [0, 1, 2, 3]
    .map((i) => {
      const colour = colours[(start + i * 2) % colours.length];
      const cx = Math.round(80 + r() * 1120);
      const cy = Math.round(60 + r() * 600);
      const radius = Math.round(150 + r() * 220);
      return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${colour}" fill-opacity="${(0.55 + r() * 0.35).toFixed(2)}"/>`;
    })
    .join("");
  const tx = Math.round(760 + r() * 260);
  const ty = Math.round(250 + r() * 200);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14161c"/><stop offset="1" stop-color="#07080b"/></linearGradient><filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="90"/></filter></defs><rect width="1280" height="720" fill="url(#bg)"/><g filter="url(#blur)">${circles}</g><path transform="translate(${tx},${ty})" d="M-110,160 L-110,-160 L220,0 z" fill="#fff" fill-opacity="0.08"/></svg>`;
  return new Response(svg, { headers: { "Content-Type": "image/svg+xml" } });
};
