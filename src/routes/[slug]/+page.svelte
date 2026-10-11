<script lang="ts">
  import PageLayout from "#lib/PageLayout.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<PageLayout frontmatter={data.frontmatter}>
  {@html data.html}
</PageLayout>
