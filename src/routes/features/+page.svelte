<!--
  Laid out like IINA's features page (source/localizable/features.html.slim;
  see LICENSE-IINA), rebuilt in Tailwind with the computed values of its
  Bootstrap styles. --r is their root font size: 13px on phones, 15px up to
  991px, 16px above.
-->
<script lang="ts">
  import { page } from "$app/state";
  import Layout from "#lib/tw/Layout.svelte";
  import { site, url, canonicalUrl } from "#lib/site.ts";

  const title = "Leah Features: MKV, Subtitles and Lossless Sound on Mac";
  const description =
    "Timeline preview, instant seeking, MKV and WebM with HEVC, VP9 and AV1, lossless 7.1 sound, PGS and SRT subtitles, and smooth interlaced video on your Mac.";
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Leah", item: canonicalUrl(url("/")) },
      { "@type": "ListItem", position: 2, name: "Features", item: canonicalUrl(page.url.pathname) },
    ],
  };

  const container = "relative mx-auto px-[15px] min-[576px]:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] min-[1200px]:max-w-[1140px]";
  const half = "basis-full p-[2px] min-[921px]:basis-1/2";
  const full = "basis-full p-[2px]";
  const content =
    "h-full bg-[#f4f4f4] p-[calc(var(--r)*4)] text-center max-md:px-[var(--r)] max-md:py-[calc(var(--r)*3)]";
  const heading = "mb-[calc(var(--r)*1.5)] font-serif text-[length:calc(var(--r)*1.5)] leading-[1.2] font-medium";
  const halfText = "min-[920px]:mx-[5%]";
  const fullText = "px-[calc(var(--r)*2)] min-[920px]:mx-[10%]";
  const link = "text-[#037ae3] hover:text-[#02529b] hover:underline";
</script>

<Layout {title} {description} structuredData={breadcrumbs}>
  <div class="font-sans text-[length:var(--r)] leading-[1.5] text-[#212529] [--r:13px] min-[576px]:[--r:15px] lg:[--r:16px]">
    <section class="pt-[var(--r)] pb-[calc(var(--r)*1.5)]">
      <div class={container}>
        <h1 class="mt-[var(--r)] mb-[calc(var(--r)*0.5)] font-serif text-[length:calc(var(--r)*2)] leading-[1.2] font-medium">
          Features of Leah, the video player for Mac
        </h1>
      </div>
    </section>

    <section class="pb-[var(--r)]">
      <div class={container}>
        <div class="-mx-[2px] flex flex-wrap items-stretch">
          <div class={half}>
            <div class={content}>
              <div>
                <img src={url("/images/shot-scrub.webp")} srcset={`${url("/images/shot-scrub-1000.webp")} 1000w, ${url("/images/shot-scrub.webp")} 2000w`} sizes="(max-width: 920px) 100vw, (max-width: 1199px) 335px, 425px" width="2000" height="1255" class="w-full" alt="A preview picture above Leah's timeline, showing the moment under the pointer" />
              </div>
              <h2 class={heading}>Preview before you jump.</h2>
              <p class={halfText}>Hold the pointer over the timeline to preview any moment before you jump to it.</p>
            </div>
          </div>
          <div class={half}>
            <div class={content}>
              <div>
                <img src={url("/images/shot-preview.webp")} srcset={`${url("/images/shot-preview-1000.webp")} 1000w, ${url("/images/shot-preview.webp")} 2000w`} sizes="(max-width: 920px) 100vw, (max-width: 1199px) 335px, 425px" width="2000" height="1255" loading="lazy" class="w-full" alt="Scrubbing along Leah's timeline, with the preview following the pointer" />
              </div>
              <h2 class={heading}>Instant seeking and scrubbing.</h2>
              <p class={halfText}>
                Leah was built from the ground up for instant seeking. Drag along the timeline and the picture keeps up.
                Press the Left Arrow or Right Arrow key to skip 5 seconds, or hold it to keep going.
              </p>
            </div>
          </div>
          <div class={full}>
            <div class={content}>
              <h2 class={heading}>Controls that stay out of the way.</h2>
              <p class={fullText}>
                Controls fade away while you watch and come back when you move the pointer. Press Space to play or pause,
                and the Up Arrow or Down Arrow key to change the volume.
              </p>
              <div class="mt-[calc(var(--r)*1.5)]">
                <img src={url("/images/shot-play.webp")} srcset={`${url("/images/shot-play-1000.webp")} 1000w, ${url("/images/shot-play.webp")} 2000w`} sizes="(max-width: 920px) 100vw, (max-width: 1199px) 802px, 982px" width="2000" height="1255" loading="lazy" class="w-full" alt="A video playing in Leah, with the timeline, time and volume controls along the bottom" />
              </div>
            </div>
          </div>
          <div class={half}>
            <div class={content}>
              <div>
                <img src={url("/images/shot-open.webp")} srcset={`${url("/images/shot-open-1000.webp")} 1000w, ${url("/images/shot-open.webp")} 2000w`} sizes="(max-width: 920px) 100vw, (max-width: 1199px) 335px, 425px" width="2000" height="1255" loading="lazy" class="w-full" alt="Leah's start screen, with a button to open a video" />
              </div>
              <h2 class={heading}>Open a video your way.</h2>
              <p class={halfText}>
                Open a video with a click, by dragging it onto the window, or from the Finder. Make Leah your default video
                player with one click.
              </p>
            </div>
          </div>
          <div class={half}>
            <div class={content}>
              <div>
                <img src={url("/images/shot-hero.webp")} srcset={`${url("/images/shot-hero-1000.webp")} 1000w, ${url("/images/shot-hero.webp")} 2000w`} sizes="(max-width: 920px) 100vw, (max-width: 1199px) 335px, 425px" width="2000" height="1255" loading="lazy" class="w-full" alt="Leah playing an MKV video" />
              </div>
              <h2 class={heading}>Plays MKV and WebM.</h2>
              <p class={halfText}>
                Leah plays MP4, MOV and M4V files, and every other video your Mac can play. It also plays MKV and WebM files
                with H.264, HEVC (H.265), MPEG-2, MPEG-1, VP9 or AV1 video. VP9 plays on Macs with Apple silicon, and AV1
                on Macs with Apple M3 or later.
              </p>
            </div>
          </div>
          <div class={half}>
            <div class={content}>
              <h2 class={heading}>Subtitles that show up on their own.</h2>
              <p class={halfText}>
                Leah shows SRT, ASS/SSA, WebVTT, PGS and VobSub subtitles. A subtitle file next to the video with the same
                name, such as Movie.srt, shows up on its own. Drag any other SRT, WebVTT, ASS or SSA file onto the video to
                add it. Leah picks subtitles in your Mac's preferred language.
              </p>
            </div>
          </div>
          <div class={half}>
            <div class={content}>
              <h2 class={heading}>Lossless surround sound.</h2>
              <p class={halfText}>
                Lossless surround sound in up to 7.1 channels plays exactly as it was recorded. Leah also plays 5.1
                surround sound, and AAC, Apple Lossless, FLAC, Opus, PCM, MP3 and MP2 audio.
              </p>
            </div>
          </div>
          <div class={full}>
            <div class={content}>
              <h2 class={heading}>Smooth interlaced video.</h2>
              <p class={fullText}>
                Interlaced video from DVDs, TV recordings and camcorders is deinterlaced as it plays, so motion stays
                smooth.
              </p>
            </div>
          </div>
          <div class={half}>
            <div class={content}>
              <h2 class={heading}>Media keys and Now Playing.</h2>
              <p class={halfText}>
                Play and pause with your keyboard's media keys or your headphones, and control Leah from Now Playing in
                Control Center.
              </p>
            </div>
          </div>
          <div class={half}>
            <div class={content}>
              <h2 class={heading}>Private.</h2>
              <p class={halfText}>
                Leah doesn't collect any data and never connects to the internet. Your videos stay on your Mac.
                <a href={url("/privacy")} class={link}>Privacy Policy</a>
              </p>
            </div>
          </div>
          <div class={full}>
            <div class={content}>
              <h2 class={heading}>Get Leah.</h2>
              <p class={fullText}>
                <a href={site.appStoreUrl} class={link}>Leah on the Mac App Store</a>. {site.requirement} Questions? See
                <a href={url("/support")} class={link}>Leah Support</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</Layout>
