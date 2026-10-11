<!--
  The text pages, such as the privacy policy and support page, keep the look
  they had when this repository was published with GitHub Pages' Jekyll and
  its Primer theme: this is that site's _layouts/default.html, with the head
  tags Jekyll's SEO plugin added, and static/assets/css/style.css is the
  theme's stylesheet as it was published.
-->
<script lang="ts">
  import type { Snippet } from "svelte";
  import { page } from "$app/state";
  import { site, url, canonicalUrl, pageLinks, type MarkdownPage } from "./site.ts";

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

  const siteTitle = "Leah";

  // seoTitle replaces the whole <title> when "{title} | Leah, a Video Player for
  // Mac" would be too short or too long; noindex is for the 404 page.
  const pageTitle = $derived(frontmatter.seoTitle ?? `${frontmatter.title} | Leah, a Video Player for Mac`);
  const noindex = $derived(frontmatter.noindex === true);
  const description = $derived(frontmatter.description);
  const canonical = $derived(canonicalUrl(path ?? page.url.pathname));
  const image = new URL(url("/images/og-image.jpg"), site.origin).href;
  const breadcrumbs = $derived({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Leah", item: canonicalUrl("/") },
      { "@type": "ListItem", position: 2, name: frontmatter.title, item: canonical },
    ],
  });
  const jsonLd = (data: object) => `<script type="application/ld+json">${JSON.stringify(data)}<\/script>`;
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{pageTitle}</title>
  <meta property="og:title" content={frontmatter.title} />
  <meta property="og:locale" content="en_US" />
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  {#if noindex}
    <meta name="robots" content="noindex" />
  {:else}
    <link rel="canonical" href={canonical} />
  {/if}
  <link rel="sitemap" href={url("/sitemap-index.xml")} />
  <meta property="og:url" content={canonical} />
  <meta property="og:site_name" content={siteTitle} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={image} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Leah playing a video on a Mac" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={frontmatter.title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <link rel="icon" type="image/png" href={url("/logo.png")} />
  {#if !noindex}{@html jsonLd(breadcrumbs)}{/if}
  {#if structuredData}{@html jsonLd(structuredData)}{/if}
  <link rel="stylesheet" href={url("/assets/css/style.css")} />
  {@html `<style>
      .site-title { font-size: 2em; font-weight: 600; line-height: 1.25; margin-bottom: 16px; padding-bottom: 0.3em; border-bottom: 1px solid #eaecef; }
      .site-title a { display: inline-flex; align-items: center; gap: 0.35em; }
      .site-title img { height: 1.3em; width: auto; }
      .page-links { margin-top: 3em; padding-top: 1em; border-top: 1px solid #eaecef; font-size: 0.9em; }
      .page-links a { margin-right: 1em; white-space: nowrap; }
    </style>`}
</svelte:head>

<div class="container-lg px-3 my-5 markdown-body">
  <p class="site-title"><a href={url("/")}><img src={url("/logo.png")} width="144" height="134" alt="" />{siteTitle}</a></p>

  {@render children()}

  <nav class="page-links" aria-label="Leah pages">
    {#each pageLinks as [name, path]}<a href={url(path)}>{name}</a>{/each}
    <a href="https://apps.apple.com/app/id6816698102">Mac App Store</a>
  </nav>
</div>
