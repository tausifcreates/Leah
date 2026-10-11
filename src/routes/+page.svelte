<!-- Laid out like IINA's home page (source/localizable/index.html.slim); see LICENSE-IINA. -->
<script lang="ts">
  import { page } from "$app/state";
  import MainLayout from "#lib/MainLayout.svelte";
  import { faAngleRight, faClosedCaptioning, faFileVideo, faLifeRing, faLock, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
  import { faApple } from "@fortawesome/free-brands-svg-icons";
  import Icon from "#lib/Icon.svelte";
  import { site, url, canonicalUrl } from "#lib/site.ts";

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
    ],
  };
</script>

<MainLayout title={title} description={description} structuredData={structuredData}>
  <section class="title">
    <div class="background">
      <svg width="100%" height="100%" viewBox="0 0 1200 800">
        <circle cx="100" cy="120" r="500" fill="#42b0ff" fill-opacity="0.05"></circle>
        <circle cx="900" cy="620" r="140" fill="#ff4294" fill-opacity="0.05"></circle>
        <circle cx="360" cy="840" r="360" fill="#ff9142" fill-opacity="0.05"></circle>
        <circle cx="1000" cy="180" r="180" fill="#42ff91" fill-opacity="0.05"></circle>
      </svg>
    </div>
    <div class="container position-relative">
      <div class="sample-image">
        <!-- The picture is hidden on phones, so they get an empty image instead of downloading it. -->
        <picture>
          <source media="(max-width: 767.98px)" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
          <img src={url("/images/shot-hero.webp")} srcset={`${url("/images/shot-hero-1000.webp")} 1000w, ${url("/images/shot-hero.webp")} 2000w`} sizes="830px" width="2000" height="1255" fetchpriority="high" alt="Leah playing a video, with the timeline and volume controls showing" />
        </picture>
      </div>
      <div class="small-headline">/ˈliːə/</div>
      <h1 class="headline-group">
        <span class="headline">Leah</span>{" "}
        <span class="sub-headline">The&nbsp;<span class="modern">fast</span>&nbsp;video player for Mac.</span>
      </h1>

      <div class="download">
        <a class="dl-btn dmg" href={site.appStoreUrl}><Icon icon={faApple} />&nbsp;Mac App Store<span class="light">v{site.version}</span></a>
      </div>
      <p class="requirement">{site.requirement}</p>
      <p class="other-downloads"><a href={url("/features")}>See everything Leah does</a></p>
    </div>
  </section>

  <section class="highlight highlight--macos">
    <div class="container">
      <h2>Built for instant seeking.</h2>
      <p>
        Leah was built from the ground up for instant seeking and scrubbing. Skip, drag along the timeline or jump
        anywhere, and the picture keeps up, for an overall fluid experience.
      </p>
      <div class="highlight-features">
        <div class="item item--forcetouch">
          <div class="left">
            <div class="decoration-line"></div>
            <div class="item-name bg-1">Timeline Preview</div>
            <div class="item-desc">
              Hold the pointer over the timeline to preview any moment before you jump to it. Press the arrow keys to
              skip 5 seconds.
            </div>
          </div>
          <div class="right">
            <div class="item-img">
              <img src={url("/images/shot-scrub.webp")} srcset={`${url("/images/shot-scrub-1000.webp")} 1000w, ${url("/images/shot-scrub.webp")} 2000w`} sizes="(max-width: 767.98px) 100vw, 740px" width="800" height="502" loading="lazy" alt="A preview picture above Leah's timeline, showing the moment under the pointer" />
            </div>
          </div>
        </div>
        <div class="item item--pip reversed">
          <div class="right">
            <div class="decoration-line"></div>
            <div class="item-name bg-3">Out of the Way</div>
            <div class="item-desc">
              Controls fade away while you watch and come back when you move the pointer. Play and pause with your
              keyboard's media keys or your headphones.
            </div>
          </div>
          <div class="left">
            <div class="item-img">
              <img src={url("/images/shot-watch.webp")} srcset={`${url("/images/shot-watch-1000.webp")} 1000w, ${url("/images/shot-watch.webp")} 2000w`} sizes="(max-width: 767.98px) 100vw, 740px" width="800" height="502" loading="lazy" alt="A video playing in Leah with the controls hidden" />
            </div>
          </div>
        </div>
        <div class="more-features">
          <h3 class="h4">More Features</h3>
          <div class="features">
            <div class="left bg-large-l">
              MKV &amp; WebM<br />Lossless 7.1 Sound<br />PGS &amp; SRT Subtitles<br />Deinterlacing
            </div>
            <div class="right bg-large-r">
              Keyboard Control<br />Media Keys<br />Now Playing<br />Private &amp; Offline
            </div>
          </div>
          <a class="highlight-link" href={url("/features")}>
            <div>All Features</div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="highlight highlight--playback">
    <div class="background">
      <svg width="100%" height="100%" viewBox="0 0 1200 800">
        <circle cx="150" cy="200" r="120" fill="#99e1d0" fill-opacity="0.03"></circle>
        <circle cx="450" cy="700" r="180" fill="#99e1d0" fill-opacity="0.03"></circle>
        <circle cx="1100" cy="80" r="500" fill="#42b0ff" fill-opacity="0.05"></circle>
        <g transform="translate(1100,120)">
          <path d="M-150,220 L-150,-220 L300,0 z" fill="#fff" fill-opacity="0.03"></path>
        </g>
      </svg>
    </div>
    <div class="container">
      <div class="content">
        <h2>Plays your videos.</h2>
        <p>
          Leah plays MP4, MOV and M4V files, and every other video your Mac can play. It also plays MKV and WebM files
          with H.264, HEVC, MPEG-2, MPEG-1, VP9 or AV1 video, with surround sound exactly as it was recorded, and with
          their subtitles.
        </p>
      </div>
      <div class="items mb-4">
        <div class="item">
          <div class="item-icon"><Icon icon={faFileVideo} class="fa-2x m-0" /></div>
          <div class="item-text">MKV &amp; WebM</div>
        </div>
        <div class="item">
          <div class="item-icon"><Icon icon={faVolumeHigh} class="fa-2x m-0" /></div>
          <div class="item-text">Lossless 7.1 sound</div>
        </div>
        <div class="item">
          <div class="item-icon"><Icon icon={faClosedCaptioning} class="fa-2x m-0" /></div>
          <div class="item-text">PGS, VobSub &amp; SRT</div>
        </div>
      </div>
      <div class="content">
        <a href={url("/formats")}>Formats Leah plays<Icon icon={faAngleRight} class="ml-2" /></a>
      </div>
    </div>
  </section>

  <section class="highlight highlight--opensource">
    <div class="container">
      <div class="swift-bg"><img src={url("/images/swift.svg")} width="600" height="540" loading="lazy" alt="" /></div>
      <div class="content">
        <h2>Private, and simple to use.</h2>
        <div class="row">
          <div class="col-sm">
            <p>
              Leah doesn't collect any data and never connects to the internet. Your videos stay on your Mac. It has no
              accounts, no analytics, no advertising and no tracking.
            </p>
            <a class="highlight-link" href={url("/privacy")}><Icon icon={faLock} /><span class="mr-2">Privacy Policy</span><Icon icon={faAngleRight} /></a>
          </div>
          <div class="col-sm">
            <p>
              Open a video with a click, by dragging it onto the window, or from the Finder, and make Leah your default
              video player with one click. The support page covers subtitles, formats and what to do if a video won't
              play.
            </p>
            <a class="highlight-link" href={url("/support")}><Icon icon={faLifeRing} /><span class="mr-2">Support</span><Icon icon={faAngleRight} /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</MainLayout>
