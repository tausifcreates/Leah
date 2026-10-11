<!-- Every address without a page shows src/content/404.md, which isn't indexed. -->
<script lang="ts">
  import PageLayout from "#lib/PageLayout.svelte";
  import notFound from "../content/404.md";
</script>

<PageLayout frontmatter={notFound.frontmatter} path="/404">
  {@html notFound.html}
</PageLayout>
