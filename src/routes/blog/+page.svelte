<!--
  The blog: every guide and comparison, newest first, as cards. Laid out like
  Efferd's blogs-3 block (efferd.com), rebuilt in Svelte with Tailwind, in
  the header and footer of the home page.
-->
<script lang="ts">
  import Layout from "#lib/tw/Layout.svelte";
  import { url, canonicalUrl } from "#lib/site.ts";
  import { posts, coverUrl, postData } from "#lib/blog.ts";

  const title = "Leah Blog: Guides to Playing Video on a Mac";
  const description =
    "Guides to playing MKV files, lossless surround sound and Blu-ray subtitles on a Mac, and how Leah compares with IINA, VLC, Infuse and Elmedia Player.";
  const canonical = canonicalUrl("/blog");

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
        blogPost: posts.map(postData),
      },
    ],
  };

  const date = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
</script>

<Layout {title} {description} shareTitle="Leah Blog" {structuredData}>
  <div class="mx-auto w-full max-w-[1002px] text-foreground">
    <div class="space-y-1 px-4 py-8 md:px-8">
      <h1 class="font-serif text-[32px] leading-[1.32] font-black text-heading md:text-[44px]">Blog</h1>
      <p class="text-sm text-muted-foreground md:text-base">
        Guides to playing video on a Mac, and how Leah compares with other video players.
      </p>
    </div>

    <div class="grid p-4 pb-12 md:grid-cols-2 lg:grid-cols-3">
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
              <span aria-hidden="true">|</span>
              <p><time datetime={post.createdAt}>{date(post.createdAt)}</time></p>
              <span aria-hidden="true">|</span>
              <p>{post.readTime}</p>
            </div>
            <h2 class="line-clamp-2 font-serif text-lg font-semibold">{post.title}</h2>
            <p class="line-clamp-3 text-sm text-muted-foreground group-active:text-foreground">{post.description}</p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</Layout>
