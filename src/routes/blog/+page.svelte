<!--
  The blog: every guide and comparison, newest first, as cards. Laid out like
  Efferd's blogs-3 block (efferd.com), rebuilt in Svelte with Tailwind.
-->
<script lang="ts">
  import { site, url, canonicalUrl, pageLinks } from "#lib/site.ts";
  import { posts, coverUrl } from "#lib/blog.ts";
  import "./blog.css";

  const title = "Leah Blog: Guides to Playing Video on a Mac";
  const description =
    "Guides to playing MKV files, lossless surround sound and Blu-ray subtitles on a Mac, and how Leah compares with IINA, VLC, Infuse and Elmedia Player.";
  const canonical = canonicalUrl("/blog");
  const image = canonicalUrl("/images/og-image.jpg");

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Leah", item: canonicalUrl("/") },
          { "@type": "ListItem", position: 2, name: "Blog", item: canonical },
        ],
      },
      {
        "@type": "Blog",
        name: "Leah Blog",
        url: canonical,
        description,
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          url: canonicalUrl(`/${post.slug}`),
          image: canonicalUrl(coverUrl(post.slug)),
          datePublished: post.createdAt,
          author: { "@type": "Person", name: post.author },
        })),
      },
    ],
  };

  const date = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  <link rel="sitemap" href={url("/sitemap-index.xml")} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:title" content="Leah Blog" />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={image} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Leah playing a video on a Mac" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Leah Blog" />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <link rel="icon" type="image/png" href={url("/logo.png")} />
  {@html `<script type="application/ld+json">${JSON.stringify(structuredData)}<\/script>`}
</svelte:head>

<div class="mx-auto w-full max-w-5xl grow text-foreground antialiased">
  <a href={url("/")} class="flex w-fit items-center gap-2 px-4 pt-8 text-2xl font-semibold md:px-6">
    <img src={url("/logo.png")} width="144" height="134" alt="" class="h-8 w-auto" />Leah
  </a>

  <div class="space-y-1 px-4 py-8 md:px-6">
    <h1 class="text-2xl font-semibold tracking-wide md:text-4xl">Blog</h1>
    <p class="text-sm text-muted-foreground md:text-base">
      Guides to playing video on a Mac, and how Leah compares with other video players.
    </p>
  </div>

  <div aria-hidden="true" class="h-px w-full bg-border"></div>

  <div class="grid p-4 md:grid-cols-2 lg:grid-cols-3">
    {#each posts as post, i (post.slug)}
      <a
        href={url(`/${post.slug}`)}
        class="group flex flex-col gap-2 rounded-lg p-3 hover:bg-muted/50 active:bg-muted"
      >
        <div
          class="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-accent/30 shadow-md outline outline-offset-3 outline-border/50"
        >
          <img
            src={coverUrl(post.slug)}
            width="1280"
            height="720"
            alt=""
            decoding="async"
            loading={i < 3 ? "eager" : "lazy"}
            class="size-full object-cover transition-all duration-500 group-hover:scale-105"
          />
        </div>
        <div class="space-y-2 px-2 pb-2">
          <div class="flex items-center gap-2 text-[11px] text-muted-foreground group-hover:text-foreground sm:text-xs">
            <p>by {post.author}</p>
            <div class="size-1 rounded-full bg-muted-foreground"></div>
            <p><time datetime={post.createdAt}>{date(post.createdAt)}</time></p>
            <div class="size-1 rounded-full bg-muted-foreground"></div>
            <p>{post.readTime}</p>
          </div>
          <h2 class="line-clamp-2 text-lg font-semibold">{post.title}</h2>
          <p class="line-clamp-3 text-sm text-muted-foreground group-active:text-foreground">{post.description}</p>
        </div>
      </a>
    {/each}
  </div>

  <nav class="mx-4 mt-4 mb-12 flex flex-wrap gap-x-4 gap-y-1 border-t border-border pt-4 text-sm md:mx-6" aria-label="Leah pages">
    {#each pageLinks as [name, path]}<a href={url(path)} class="whitespace-nowrap text-link hover:underline">{name}</a>{/each}
    <a href={site.appStoreUrl} class="whitespace-nowrap text-link hover:underline">Mac App Store</a>
  </nav>
</div>
