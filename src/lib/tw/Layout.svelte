<!--
  The layout of every page: head tags, then the header and footer laid out
  like Elmedia Player's (elmedia-video-player.com), rebuilt in Svelte with
  Tailwind from the computed styles of its home page.
-->
<script lang="ts">
  import type { Snippet } from "svelte";
  import { page } from "$app/state";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import { site, url, canonicalUrl } from "../site.ts";
  import "@fortawesome/fontawesome-svg-core/styles.css";
  import "../../styles/tailwind.css";

  let {
    title,
    description,
    shareTitle = title,
    structuredData,
    path,
    noindex = false,
    children,
  }: {
    title: string;
    description: string;
    /** The title in link previews, when it differs from the page's. */
    shareTitle?: string;
    /** Schema.org data for the page, written as JSON-LD, one block each. */
    structuredData?: object | object[];
    /** The page's path, when it isn't the address being shown (the 404 page). */
    path?: string;
    /** Keeps the page out of search engines, and gives it no canonical address. */
    noindex?: boolean;
    children: Snippet;
  } = $props();

  const canonical = $derived(canonicalUrl(path ?? page.url.pathname));
  const jsonLd = $derived(structuredData ? [structuredData].flat() : []);
  const image = canonicalUrl(url("/images/og-image.jpg"));
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title}</title>
  <meta name="description" content={description} />
  {#if noindex}
    <meta name="robots" content="noindex" />
  {:else}
    <link rel="canonical" href={canonical} />
  {/if}
  <link rel="sitemap" href={url("/sitemap-index.xml")} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:title" content={shareTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={image} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Leah playing a video on a Mac" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={shareTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  {#each jsonLd as data}
    {@html `<script type="application/ld+json">${JSON.stringify(data)}<\/script>`}
  {/each}
  <link rel="apple-touch-icon" href={url("/images/logo.png")} />
  <link rel="icon" type="image/png" href={url("/images/logo.png")} />
  <link rel="manifest" href={url("/images/site.webmanifest")} />
  <meta name="theme-color" content="#ffffff" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-white font-sans text-[13px] leading-[18.5714px] text-body">
  <Header />
  <main class="grow">
    {@render children()}
  </main>
  <Footer />
</div>
