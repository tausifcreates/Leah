<!-- From IINA's website (source/layouts/layout.slim); see LICENSE-IINA. -->
<script lang="ts">
  import type { Snippet } from "svelte";
  import { page } from "$app/state";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import { site, url, canonicalUrl } from "./site.ts";
  import menuScript from "./menu.js?raw";
  import "@fortawesome/fontawesome-svg-core/styles.css";
  import "../styles/index.sass";

  let {
    title,
    description,
    structuredData,
    children,
  }: {
    title: string;
    description: string;
    /** Schema.org data for the page, written as JSON-LD. */
    structuredData?: object;
    children: Snippet;
  } = $props();

  const canonical = $derived(canonicalUrl(page.url.pathname));
  const image = new URL(url("/images/og-image.jpg"), site.origin).href;
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta content="ie=edge" http-equiv="x-ua-compatible" />
  <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  <link rel="sitemap" href={url("/sitemap-index.xml")} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={image} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Leah playing a video on a Mac" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  {#if structuredData}
    {@html `<script type="application/ld+json">${JSON.stringify(structuredData)}<\/script>`}
  {/if}
  <!-- favicons -->
  <link rel="apple-touch-icon" href={url("/images/logo.png")} />
  <link rel="icon" type="image/png" href={url("/images/logo.png")} />
  <link rel="manifest" href={url("/images/site.webmanifest")} />
  <meta name="msapplication-TileColor" content="#da532c" />
  <meta name="theme-color" content="#ffffff" />
  <!-- assets -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link href="https://fonts.googleapis.com/css?family=Rubik:400,500,700&subset=latin-ext&display=swap" rel="stylesheet" />
</svelte:head>

<Header />
<div id="main">
  {@render children()}
  <Footer />
</div>
{@html `<script type="module">${menuScript}<\/script>`}
