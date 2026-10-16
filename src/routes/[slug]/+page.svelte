<script lang="ts">
  import { page } from "$app/state";
  import PageLayout from "#lib/PageLayout.svelte";
  import { postData, posts } from "#lib/blog.ts";
  import { url } from "#lib/site.ts";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  // The guides and comparisons say when they were published and last changed.
  const post = $derived(posts.find((post) => post.slug === page.params.slug));
  const structuredData = $derived(post && { "@context": "https://schema.org", ...postData(post) });

  // A guide's byline goes under its title, as on Medium.
  const titleEnd = $derived(data.html.indexOf("</h1>") + "</h1>".length);
  const date = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
  const updated = $derived(post && date(post.updatedAt) !== date(post.createdAt));
</script>

{#if post}
  <PageLayout frontmatter={data.frontmatter} {structuredData} story>
    {@html data.html.slice(0, titleEnd)}
    <!--
      Medium's byline in its computed values: the picture, the name, then the
      read time and date in grey, on one line, or above the name on phones.
      Pipes stand in for Medium's middle dots; there's nothing to follow.
    -->
    <div
      class="flex items-center font-[sohne,'Helvetica_Neue',Helvetica,Arial,sans-serif] text-[14px] leading-5 tracking-normal max-[728px]:flex-col-reverse max-[728px]:items-start"
    >
      <div class="flex h-10 items-center max-[728px]:mt-[14px] max-[728px]:h-8">
        <img src={url("/images/logo.png")} width="32" height="32" alt="" class="ml-[2px] size-8 rounded-full max-[728px]:ml-0" />
        <span class="ml-[14px]">{post.author}</span>
      </div>
      <div class="flex flex-wrap items-center gap-x-2 text-[#6b6b6b] min-[728px]:ml-3">
        <span>{post.readTime}</span>
        <span aria-hidden="true">|</span>
        <time datetime={post.createdAt}>{date(post.createdAt)}</time>
        {#if updated}
          <span aria-hidden="true">|</span>
          <span>Updated <time datetime={post.updatedAt}>{date(post.updatedAt)}</time></span>
        {/if}
      </div>
    </div>
    {@html data.html.slice(titleEnd)}
  </PageLayout>
{:else}
  <PageLayout frontmatter={data.frontmatter}>
    {@html data.html}
  </PageLayout>
{/if}
