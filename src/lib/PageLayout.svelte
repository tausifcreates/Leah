<!--
  The text pages (the FAQ, the formats, support and privacy pages, the
  guides and the 404 page): the shared layout, with the page's Markdown set
  by Tailwind's typography plugin in the home page's fonts and colors.
-->
<script lang="ts">
  import type { Snippet } from "svelte";
  import { page } from "$app/state";
  import Layout from "./tw/Layout.svelte";
  import { canonicalUrl, type MarkdownPage } from "./site.ts";

  let {
    frontmatter,
    structuredData,
    path,
    children,
  }: {
    frontmatter: MarkdownPage["frontmatter"];
    structuredData?: object;
    /** The page's path, when it isn't the address being shown (the 404 page). */
    path?: string;
    children: Snippet;
  } = $props();

  // seoTitle replaces the whole <title> when "{title} | Leah, a Video Player for
  // Mac" would be too short or too long; noindex is for the 404 page.
  const pageTitle = $derived(frontmatter.seoTitle ?? `${frontmatter.title} | Leah, a Video Player for Mac`);
  const noindex = $derived(frontmatter.noindex === true);
  const breadcrumbs = $derived({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Leah", item: canonicalUrl("/") },
      { "@type": "ListItem", position: 2, name: frontmatter.title, item: canonicalUrl(path ?? page.url.pathname) },
    ],
  });
  const jsonLd = $derived([...(noindex ? [] : [breadcrumbs]), ...(structuredData ? [structuredData] : [])]);
</script>

<Layout title={pageTitle} description={frontmatter.description} shareTitle={frontmatter.title} structuredData={jsonLd} {path} {noindex}>
  <div class="mx-auto max-w-[970px] px-[15px] pt-[60px] pb-[100px] max-md:pt-[30px] max-md:pb-[50px]">
    <article
      class="prose prose-lg mx-auto max-w-[820px] text-copy prose-headings:font-serif prose-headings:text-heading prose-h1:text-[44px] prose-h1:leading-[1.32] prose-h1:font-black prose-h2:mt-12 prose-h2:font-bold prose-a:text-[#037ae3] prose-a:no-underline hover:prose-a:underline prose-strong:text-heading prose-th:text-heading prose-table:text-base max-md:prose-h1:text-[32px]"
    >
      {@render children()}
    </article>
  </div>
</Layout>
