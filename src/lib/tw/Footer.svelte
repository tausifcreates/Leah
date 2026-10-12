<!--
  The footer, with the computed sizes, fonts and colors of Elmedia Player's:
  columns of links on gray-green, which fold into a list that opens per
  column below 992 pixels, then a line and the small print.
-->
<script lang="ts">
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import Icon from "../Icon.svelte";
  import { site, url } from "../site.ts";

  const columns: [string, [string, string][]][] = [
    [
      "Leah",
      [
        ["Features", url("/features")],
        ["Formats", url("/formats")],
        ["Fast seeking", url("/fast-seeking-video-player-mac")],
        ["FAQ", url("/faq")],
        ["Blog", url("/blog")],
      ],
    ],
    [
      "Guides",
      [
        ["Play MKV on Mac", url("/play-mkv-on-mac")],
        ["MKV has no sound", url("/mkv-no-sound-mac")],
        ["QuickTime can't open MKV", url("/quicktime-cant-open-mkv")],
        ["TrueHD and Atmos on Mac", url("/dolby-truehd-atmos-mac")],
        ["DTS on Mac", url("/dts-on-mac")],
        ["PGS and VobSub subtitles", url("/pgs-vobsub-subtitles-mac")],
      ],
    ],
    [
      "Compare",
      [
        ["IINA alternatives", url("/iina-alternatives")],
        ["Leah vs IINA", url("/leah-vs-iina")],
        ["Leah vs VLC", url("/leah-vs-vlc")],
        ["Leah vs Infuse", url("/leah-vs-infuse")],
        ["Leah vs Elmedia", url("/leah-vs-elmedia")],
      ],
    ],
    [
      "Help",
      [
        ["Support", url("/support")],
        ["Privacy Policy", url("/privacy")],
        ["Report a problem", site.supportUrl],
        ["Mac App Store", site.appStoreUrl],
      ],
    ],
  ];
</script>

<footer class="bg-mist">
  <div class="mx-auto max-w-[970px] px-[15px] pb-[40px] text-[13px] text-subtle">
    <div class="hidden py-[30px] lg:block">
      <div class="-mx-[15px] flex flex-wrap">
        {#each columns as [heading, links]}
          <div class="w-[194px] px-[15px] leading-[22px]">
            <h2 class="mb-2.5 text-sm leading-[25.9px] font-semibold">{heading}</h2>
            <ul class="leading-4">
              {#each links as [name, href]}
                <li class="mb-[15px] last:mb-0"><a {href} class="hover:text-sky">{name}</a></li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
    <div class="border-b border-[#d2d2d7] lg:hidden">
      {#each columns as [heading, links]}
        <details class="group border-t border-[#d2d2d7] first:border-t-0">
          <summary class="relative flex cursor-pointer list-none py-[15px] leading-6 [&::-webkit-details-marker]:hidden">
            <span class="text-[13px] leading-6 font-bold text-[#707070]">{heading}</span>
            <span class="absolute top-[15px] right-0 text-[16px] text-[#707070] after:content-['+'] group-open:after:content-['-']"></span>
          </summary>
          <ul class="pb-[15px]">
            {#each links as [name, href]}
              <li class="leading-[30px]"><a {href} class="hover:text-sky">{name}</a></li>
            {/each}
          </ul>
        </details>
      {/each}
    </div>
    <div class="border-b border-[#dadada] pt-[40px] pb-[22px]">
      <a href={site.supportUrl} class="flex h-7 w-[29px] items-center text-[28px] leading-4 hover:text-black" aria-label="Leah on GitHub">
        <Icon icon={faGithub} />
      </a>
    </div>
    <div class="pt-[20px] text-xs leading-5">
      <p>Leah, a fast video player for the Mac. Made by {site.author}.</p>
      <p>
        Screenshots show Tears of Steel © Blender Foundation | mango.blender.org (CC BY 3.0). The top of the home page and the features page are
        from <a href="https://github.com/iina/iina-website" class="underline">IINA's website</a>, under the MIT License.
      </p>
    </div>
  </div>
</footer>
