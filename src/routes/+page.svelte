<!--
  The home page: the live site's hero from IINA's home page, then sections
  laid out like Elmedia Player's home page (elmedia-video-player.com) with
  the computed sizes, fonts and colors of its sections, in Leah's own words
  and pictures. Elmedia's reviews and press logos are left out: Leah has
  none to show yet.
-->
<script lang="ts">
  import { page } from "$app/state";
  import Layout from "#lib/tw/Layout.svelte";
  import GradientIcon from "#lib/tw/GradientIcon.svelte";
  import Icon from "#lib/Icon.svelte";
  import { faAngleDown, faClosedCaptioning, faFilm, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
    import { site, url, canonicalUrl } from "#lib/site.ts";
  import { posts, coverUrl } from "#lib/blog.ts";
  import { faqs } from "#lib/faqs.ts";

  const title = "Leah: Fast Video Player for Mac That Plays MKV";
  const description =
    "Leah is a fast video player for the Mac, built for instant seeking. It plays MKV and WebM, lossless 7.1 sound, and PGS and SRT subtitles. Private and offline.";
  const home = canonicalUrl(page.url.pathname);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: site.name, alternateName: "Leah video player", url: home },
      {
        "@type": "SoftwareApplication",
        "@id": `${home}#app`,
        name: site.name,
        alternateName: [site.appStoreName, "Leah video player", "Leah for Mac"],
        description,
        url: home,
        installUrl: site.appStoreUrl,
        applicationCategory: "MultimediaApplication",
        applicationSubCategory: "Video player",
        sameAs: [site.appStoreUrl, site.wikidataUrl],
        featureList: [
          "Instant seeking and scrubbing",
          "Timeline preview",
          "MKV and WebM playback with H.264, HEVC, MPEG-2, MPEG-1, VP9 and AV1 video",
          "Dolby TrueHD in up to 7.1 channels, Dolby Digital, Dolby Digital Plus and DTS",
          "PGS, VobSub, SRT, ASS/SSA and WebVTT subtitles",
          "Deinterlacing of interlaced video",
          "Media keys and Now Playing",
          "No data collection and no internet access",
        ],
        operatingSystem: site.minimumSystem,
        softwareVersion: site.version,
        screenshot: canonicalUrl(url("/images/og-image.jpg")),
        author: { "@type": "Person", name: site.author },
        offers: { "@type": "Offer", price: site.price, priceCurrency: site.currency, url: site.appStoreUrl },
      },
      // The hero's demo. Phones, which Google crawls as, don't load it, so
      // its file is named here.
      {
        "@type": "VideoObject",
        name: "Leah video player demo",
        description:
          "Leah opening a video on a Mac, previewing the timeline while scrubbing, skipping through the video instantly, and playing it full screen.",
        thumbnailUrl: [canonicalUrl(url("/images/demo-thumbnail.jpg")), canonicalUrl(url("/images/demo-poster.webp"))],
        uploadDate: "2026-10-16T08:50:00+06:00",
        duration: "PT30S",
        contentUrl: canonicalUrl(url("/images/demo-vp9.webm")),
        encodingFormat: "video/webm",
        width: 1600,
        height: 900,
        about: { "@id": `${home}#app` },
      },
    ],
  };

  /** A screenshot in static/images, at 1000 and 2000 pixels wide. */
  const shot = (name: string) => ({
    src: url(`/images/shot-${name}.webp`),
    srcset: `${url(`/images/shot-${name}-1000.webp`)} 1000w, ${url(`/images/shot-${name}.webp`)} 2000w`,
  });

  /**
   * Where the hero's demo plays: phones hide it, so they don't download it,
   * and visitors who ask for less motion see its first frame instead.
   */
  const demoShown = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

  const seeking = [
    {
      title: "Timeline Preview",
      text: "Hold the pointer over the timeline to preview any moment before you jump to it. Press the arrow keys to skip 5 seconds.",
      image: "scrub",
      alt: "A preview picture above Leah's timeline, showing the moment under the pointer",
    },
    {
      title: "Out of the Way",
      text: "Controls fade away while you watch and come back when you move the pointer. Play and pause with your keyboard's media keys or your headphones.",
      image: "watch",
      alt: "A video playing in Leah with the controls hidden",
    },
  ];

  const playback = [
    { icon: faFilm, name: "MKV and WebM files", from: "#00b3ff", to: "#0080ff" },
    { icon: faVolumeHigh, name: "Lossless 7.1 surround sound", from: "#ffde22", to: "#ff9100" },
    { icon: faClosedCaptioning, name: "Blu-ray and DVD subtitles", from: "#ed46a7", to: "#c23cdc" },
  ];

  const playbackCards = [
    {
      heading: "Plays MKV and WebM",
      text: "Leah plays MKV and WebM files with H.264, HEVC (H.265), MPEG-2, MPEG-1, VP9 or AV1 video. VP9 plays on Macs with Apple silicon, and AV1 on Macs with Apple M3 or later.",
    },
    {
      heading: "Surround sound as recorded",
      text: "Dolby TrueHD plays in up to 7.1 channels, exactly as it was recorded. Leah also plays DTS in up to 5.1 channels, Dolby Digital and Dolby Digital Plus.",
    },
    {
      heading: "Subtitles that show up on their own",
      text: "A subtitle file next to the video with the same name, such as Movie.srt, shows up on its own. Drag any other SRT, WebVTT, ASS or SSA file onto the video to add it.",
    },
    {
      heading: "Smooth interlaced video",
      text: "Video from DVDs, TV recordings and older camcorders is often interlaced. Leah deinterlaces it as it plays, so moving edges stay smooth instead of showing comb-like lines.",
    },
    {
      heading: "Plays what your Mac plays",
      text: "Leah plays MP4, MOV and M4V files, and every other video your Mac can play, with the same instant seeking. Leah picks subtitles in your Mac's preferred language.",
      wide: true,
    },
  ];

  const latest = posts.slice(0, 3);
  const kind = (slug: string) => (slug.startsWith("leah-vs-") || slug.endsWith("-alternatives") ? "Comparison" : "Guide");
  const date = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });

  const questions = faqs.filter(({ q }) =>
    ["How much does Leah cost?", "Which Macs does Leah run on?", "Does Leah play MKV files?", "Does Leah collect data or connect to the internet?"].includes(q),
  );

  // Elmedia's shared text styles.
  const container = "mx-auto max-w-[970px] px-[15px]";
  const titleMain =
    "mx-auto max-w-[820px] px-[15px] text-center font-serif text-[26px] leading-[33.8px] font-black text-heading";
  const textMain =
    "mx-auto max-w-[820px] px-[15px] text-center text-[18px] leading-[28.08px] text-copy";
  const cardHeading = "card-heading mb-[52px] max-md:mb-[22px] font-serif text-[20px] leading-[26px] font-black text-heading";
  const cardText = "text-[18px] leading-[28.08px] text-copy";
</script>

{#snippet appStore(height = "h-10")}
  <a href={site.appStoreUrl} class="inline-block">
    <img src={url("/images/mac-app-store-badge.svg")} width="156" height="40" alt="Download on the Mac App Store" class="{height} w-auto" />
  </a>
{/snippet}

<Layout {title} {description} {structuredData}>
  <!--
    The live site's hero, from IINA's home page (see LICENSE-IINA), rebuilt
    with its computed values. Its sizes follow the root font size of IINA's
    styles (13px on phones, 15px up to 991px, 16px above), kept here as --r.
    The top padding leaves out the header's height, which IINA's header
    floated over.
  -->
  <section
    class="relative overflow-hidden bg-linear-to-b from-[#fefefe] to-[#eee] pt-[71.375px] pb-[169px] font-sans text-[#212529] [--r:13px] min-[576px]:pt-[37px] min-[576px]:pb-[195px] min-[576px]:[--r:15px] md:pt-10 lg:pt-[192px] lg:pb-[240px] lg:[--r:16px] min-[1200px]:pt-[208px] min-[1200px]:pb-[256px]"
  >
    <div class="absolute inset-0 overflow-hidden">
      <svg viewBox="0 0 1200 800" class="h-full w-full max-md:h-[120%] max-md:w-[120%]" aria-hidden="true">
        <circle cx="100" cy="120" r="500" fill="#42b0ff" fill-opacity="0.05"></circle>
        <circle cx="900" cy="620" r="140" fill="#ff4294" fill-opacity="0.05"></circle>
        <circle cx="360" cy="840" r="360" fill="#ff9142" fill-opacity="0.05"></circle>
        <circle cx="1000" cy="180" r="180" fill="#42ff91" fill-opacity="0.05"></circle>
      </svg>
    </div>
    <div class="relative mx-auto px-[15px] min-[576px]:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] min-[1200px]:max-w-[1140px]">
      <!--
        The demo is shown whole: it fills the old picture's height, unless
        that would take it past 32px from the window's right edge, where it
        shrinks to fit.
      -->
      <div class="absolute top-[-24%] right-[calc(50%-50vw+32px)] bottom-[-42%] hidden items-center @container-[size] md:left-[60%] md:flex lg:left-[45%] min-[1200px]:top-[-20%] min-[1200px]:bottom-[-36%]">
        <!-- AV1 where the Mac or browser decodes it, else VP9, both at 60 fps. -->
        <video
          poster={url("/images/demo-poster.webp")}
          width="1600"
          height="900"
          autoplay
          muted
          loop
          playsinline
          aria-label="Leah opening a video, skipping through it with the timeline preview, and playing it full screen"
          class="aspect-video h-auto w-[min(100cqw,100cqh*16/9)] max-w-none rounded-[12px] shadow-[0_24px_64px_rgba(0,0,0,0.22)]"
        >
          <source media={demoShown} src={url("/images/demo-av1.webm")} type={'video/webm; codecs="av01.0.09M.08"'} />
          <source media={demoShown} src={url("/images/demo-vp9.webm")} type={'video/webm; codecs="vp9"'} />
        </video>
      </div>
      <h1 class="m-0 font-serif leading-[1.2] font-medium">
        <span class="block text-[length:calc(var(--r)*4)] leading-[1.2] font-normal tracking-[calc(var(--r)*0.1)]">Leah</span>{" "}
        <span class="mt-[var(--r)] block text-[length:calc(var(--r)*1.6)] leading-[1.4] font-normal">
          The&nbsp;<span class="bg-[url(/images/text-bg.png)] bg-[position:0_50%] bg-clip-text text-transparent">fast</span>&nbsp;video player for Mac.
        </span>
      </h1>
      <div class="mt-[calc(var(--r)*4)] mb-[var(--r)]">
        <div class="my-[calc(var(--r)*0.25)]">{@render appStore("h-[calc(var(--r)*3)]")}</div>
      </div>
      <p class="mt-[var(--r)] text-[length:calc(var(--r)*0.8)] leading-[1.4] text-[#777]">{site.requirement}</p>
      <p class="mt-[calc(var(--r)*0.5)] text-[length:calc(var(--r)*0.8)] leading-[1.4] text-[#777]">
        <a href={url("/features")} class="text-[#037ae3] hover:underline">See everything Leah does</a>
      </p>
    </div>
  </section>

  <!--
    The live site's "Built for instant seeking." section, from IINA's home
    page (see LICENSE-IINA), rebuilt with its computed values, on the
    background of the live site's "Plays your videos" section. --r is the
    root font size of IINA's styles: 13px on phones, 15px up to 991px, 16px
    above.
  -->
  <section
    class="relative overflow-hidden bg-[linear-gradient(154deg,#042a84_0%,#2c98a5_69%,#b9ae9b_100%)] py-[calc(var(--r)*6)] text-center font-sans text-[length:var(--r)] leading-[1.5] text-white [--r:13px] min-[576px]:[--r:15px] lg:[--r:16px]"
  >
    <div class="absolute inset-0 overflow-hidden">
      <svg viewBox="0 0 1200 800" class="h-full w-full max-md:h-[120%] max-md:w-[120%]" aria-hidden="true">
        <circle cx="150" cy="200" r="120" fill="#99e1d0" fill-opacity="0.03"></circle>
        <circle cx="450" cy="700" r="180" fill="#99e1d0" fill-opacity="0.03"></circle>
        <circle cx="1100" cy="80" r="500" fill="#42b0ff" fill-opacity="0.05"></circle>
        <g transform="translate(1100,120)">
          <path d="M-150,220 L-150,-220 L300,0 z" fill="#fff" fill-opacity="0.03"></path>
        </g>
      </svg>
    </div>
    <div class="relative mx-auto px-[15px] min-[576px]:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] min-[1200px]:max-w-[1140px]">
      <h2 class="my-[calc(var(--r)*0.83)] font-serif text-[3em] leading-[1.2] font-medium">Built for instant seeking.</h2>
      <p class="mx-[4%] mt-[calc(var(--r)*4)] text-[length:calc(var(--r)*1.2)] leading-[1.6] text-[#ccc] md:mx-[10%] md:mb-[calc(var(--r)*6)]">
        Leah was built from the ground up for instant seeking and scrubbing. Skip, drag along the timeline or jump
        anywhere, and the picture keeps up, for an overall fluid experience.
      </p>
      <div class="mt-[calc(var(--r)*2)] md:mt-[calc(var(--r)*4)]">
        {#each seeking as { title, text, image, alt }, i}
          <div class="py-[calc(var(--r)*2)] text-left lg:flex {i % 2 ? 'md:flex-row-reverse' : ''}">
            <div class="mb-[calc(var(--r)*1.6)] md:w-1/2 lg:mb-0 min-[1200px]:w-[35%] {i % 2 ? 'md:pl-[var(--r)]' : 'md:pr-[var(--r)]'}">
              <div class="mx-0.5 mt-[calc(var(--r)*2)] mb-[var(--r)] hidden h-[3px] w-[50px] bg-white/75 lg:block"></div>
              <div class="mb-[var(--r)] font-serif text-[length:calc(var(--r)*2)] font-bold text-white">
                {title}
              </div>
              <div>{text}</div>
            </div>
            <div class={i % 2 ? "md:pr-[var(--r)]" : "md:pl-[var(--r)]"}>
              <img
                {...shot(image)}
                sizes="(max-width: 767.98px) 100vw, 740px"
                width="800"
                height="502"
                loading="lazy"
                {alt}
                class="max-w-full"
              />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Elmedia: Effortless Home Streaming and its cards -->
  <section class="bg-white">
    <div class={container}>
      <div class="-mx-[15px] pt-[120px] max-lg:pt-[50px]">
        <h2 class="{titleMain} mb-5">
          <span class="mx-auto block max-w-[633px]">Your Videos, Sound and Subtitles, Exactly as Recorded</span>
        </h2>
        <p class={textMain}>
          Leah plays the files other players struggle with: MKV and WebM from Blu-ray and DVD rips, lossless surround sound
          in up to 7.1 channels, and the picture subtitles those discs carry. Interlaced video from DVDs and TV recordings
          is deinterlaced as it plays.
        </p>
        <ul class="mt-[60px] flex flex-wrap max-md:mt-[30px]">
          {#each playback as { icon, name, from, to }, i}
            <li class="w-1/3 px-[15px] max-lg:not-last:mb-[30px] max-md:w-full">
              <div class="mb-5 flex h-10 justify-center">
                <GradientIcon {icon} {from} {to} id="g-play-{i}" class="size-10" />
              </div>
              <h3 class="mx-auto max-w-[230px] text-center font-serif text-[20px] leading-[26px] font-black text-heading max-md:text-[18px] max-md:leading-[23.4px]">
                {name}
              </h3>
            </li>
          {/each}
        </ul>
      </div>

      <div class="mt-[60px] mb-[160px] flex flex-wrap justify-center gap-[30px] max-lg:mt-[30px] max-lg:mb-[50px] max-lg:gap-2.5">
        {#each playbackCards as { heading, text, wide }}
          <div
            class="rounded-2xl border border-black/10 bg-panel px-10 pt-10 pb-[50px] max-lg:w-full max-md:p-[15px] {wide ? 'w-full' : 'w-[calc(50%-15px)]'}"
          >
            <h3 class={cardHeading}>{heading}</h3>
            <p class={cardText}>{text}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Elmedia: Most Popular -->
  <section class="relative overflow-hidden bg-white">
    <div class="relative {container}">
      <div class="-mx-[15px] pt-[120px] pb-[140px] max-lg:pt-[50px] max-lg:pb-[50px]">
        <h2 class="{titleMain} mb-5">From the Blog</h2>
        <div class="mt-9 flex flex-wrap">
          {#each latest as post (post.slug)}
            <article class="mb-5 w-1/3 px-[15px] max-md:mb-10 max-md:w-full">
              <a href={url(`/${post.slug}`)} class="mb-[15px] block overflow-hidden rounded-lg max-md:mx-auto max-md:max-w-[293px]">
                <img src={coverUrl(post.slug)} width="1280" height="720" alt="" loading="lazy" class="h-[174px] w-full object-cover max-md:h-auto" />
              </a>
              <p class="my-3 flex items-center text-[13px] leading-5 font-medium text-orange">{kind(post.slug)}</p>
              <h3 class="mb-3 text-left font-serif text-[20px] leading-7 font-extrabold text-heading">
                <a href={url(`/${post.slug}`)} class="transition-all duration-200 ease-linear hover:text-orange">{post.title}</a>
              </h3>
              <p class="text-left text-[18px] leading-7 text-copy">{post.description}</p>
              <p class="mt-3 flex items-center text-[13px] leading-5 font-medium text-copy">
                <span class="mr-2">{post.author}</span><time datetime={post.createdAt}>{date(post.createdAt)}</time>
              </p>
            </article>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Elmedia: FAQ -->
  <section class="bg-white">
    <div class={container}>
      <div class="pt-[120px] pb-[100px] max-lg:pt-[50px] max-lg:pb-[50px]">
        <div class="-mx-[15px]">
          <div class="mx-auto max-w-[808px] px-[15px]">
            <h2 class="mb-[35px] text-center font-serif text-[26px] leading-[37.1429px] font-black text-heading">FAQ</h2>
            {#each questions as { q, a }, i}
              <details class="group border-t-2 border-black/10 first-of-type:border-t-0" open={i === 0}>
                <summary class="cursor-pointer list-none px-[26px] py-[15px] max-md:[details:last-of-type>&]:pb-0 [&::-webkit-details-marker]:hidden">
                  <span class="relative flex items-center font-serif text-[20px] leading-[26px] font-black text-heading group-open:text-orange hover:text-orange">
                    <span class="absolute top-0.5 -left-[30px] text-[18px] leading-[18px] text-copy group-open:rotate-180 group-open:text-orange">
                      <Icon icon={faAngleDown} />
                    </span>
                    {q}
                  </span>
                </summary>
                <p class="pb-[18px] pl-[26px] text-[18px] leading-[28.08px] text-copy">{a}</p>
              </details>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Elmedia: products-product-info (the last download block) -->
  <section class="bg-white">
    <div class={container}>
      <div
        class="glow-download relative my-[150px] overflow-hidden rounded-2xl bg-night px-[50px] py-[35px] text-sm leading-[21.84px] max-lg:my-[50px] max-md:px-[15px] max-md:py-5"
      >
        <div class="relative z-1 flex justify-around max-lg:block">
          <div class="w-[460px] max-lg:w-full max-md:text-center">
            <p class="mt-3 font-serif text-[30px] leading-[39px] font-black text-white">Leah</p>
            <p class="mt-[3px] leading-7 text-white">${site.price} on the Mac App Store</p>
            <div class="mt-[30px] flex flex-wrap items-center max-md:flex-col max-md:justify-center max-md:gap-[15px]">
              {@render appStore("h-[52px]")}
            </div>
            <dl class="pt-[30px]">
              <div class="mb-2.5 flex flex-col max-md:mb-[15px]">
                <dt class="text-base leading-7 text-white/50 max-md:leading-[22px]">Requirements:</dt>
                <dd class="text-base leading-7 text-white max-md:leading-[22px]">macOS 15 or later, on a Mac with Apple silicon</dd>
              </div>
            </dl>
          </div>
          <div class="max-w-[380px] max-lg:mt-[30px] max-lg:max-w-full">
            <img
              {...shot("play")}
              sizes="(max-width: 991px) 100vw, 380px"
              width="2000"
              height="1255"
              loading="lazy"
              alt="A video playing in Leah, with the timeline, time and volume controls along the bottom"
              class="w-full max-lg:mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</Layout>
