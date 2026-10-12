<script lang="ts">
  import { page } from "$app/state";
  import PageLayout from "#lib/PageLayout.svelte";
  import { postData, posts } from "#lib/blog.ts";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  // The guides and comparisons say when they were published and last changed.
  const post = $derived(posts.find((post) => post.slug === page.params.slug));
  const structuredData = $derived(post && { "@context": "https://schema.org", ...postData(post) });
</script>

<PageLayout frontmatter={data.frontmatter} {structuredData}>
  {@html data.html}
</PageLayout>
