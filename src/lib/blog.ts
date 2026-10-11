import { site, type MarkdownPage } from "./site.ts";

// The guides and comparisons listed on the blog, in this order when they
// were added at the same time. Each is a Markdown page in src/content.
const slugs = [
  "play-mkv-on-mac",
  "fast-seeking-video-player-mac",
  "iina-alternatives",
  "leah-vs-infuse",
  "leah-vs-elmedia",
  "dolby-truehd-atmos-mac",
  "pgs-vobsub-subtitles-mac",
  "dts-on-mac",
  "quicktime-cant-open-mkv",
  "mkv-no-sound-mac",
  "leah-vs-iina",
  "leah-vs-vlc",
];

export interface Post {
  slug: string;
  title: string;
  description: string;
  author: string;
  /** When the page was first published, from git. */
  createdAt: string;
  readTime: string;
}

const pages = import.meta.glob<MarkdownPage>("/src/content/*.md", { eager: true, import: "default" });

function readTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

/** The blog's posts, newest first. */
export const posts: Post[] = slugs
  .map((slug) => {
    const page = pages[`/src/content/${slug}.md`];
    if (!page) throw new Error(`No src/content/${slug}.md for the blog`);
    return {
      slug,
      title: page.frontmatter.title,
      description: page.frontmatter.description,
      author: site.author,
      createdAt: __CREATED__[`/${slug}`] ?? new Date().toISOString(),
      readTime: readTime(page.html),
    };
  })
  .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

/** A post's cover picture, made by design/make-blog-covers.swift. */
export const coverUrl = (slug: string) => `/blog/covers/${slug}.webp`;
