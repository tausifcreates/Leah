<!--
  Questions people ask about Leah, with FAQPage structured data built from
  the same answers.
-->
<script lang="ts">
  import PageLayout from "#lib/PageLayout.svelte";
  import { faqs } from "#lib/faqs.ts";

  const frontmatter = {
    title: "Leah FAQ",
    seoTitle: "Leah FAQ: Common Questions About the Mac Video Player",
    description:
      "Answers about Leah, the video player for Mac: price, Macs supported, MKV, PGS subtitles, Dolby TrueHD, DTS, seeking speed, privacy and more.",
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
</script>

<PageLayout {frontmatter} {structuredData}>
  <h1>Leah FAQ</h1>
  <p>Common questions about Leah, the video player for Mac.</p>
  {#each faqs as { q, a, link, link2 }}
    <h2>{q}</h2>
    <p>
      {a}{#if link}{" "}See <a href={link[0]}>{link[1]}</a>{#if link2}{" "}and <a href={link2[0]}>{link2[1]}</a>{/if}.{/if}
    </p>
  {/each}
</PageLayout>
