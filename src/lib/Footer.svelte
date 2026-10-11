<!-- From IINA's website (source/_footer.slim); see LICENSE-IINA. -->
<script lang="ts">
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import Icon from "./Icon.svelte";
  import { site, url } from "./site.ts";
</script>

<footer>
  <div class="container">
    <div class="contact mb-2 d-flex justify-content-between">
      <div class="left">
        <span>Leah, a fast video player for the Mac</span>
      </div>
      <div class="right">
        <Icon icon={faGithub} class="mr-2" />
        <a href={site.supportUrl}>Report a problem</a>
      </div>
    </div>
    <hr />
    <div class="source">
      <a href={url("/features")}>Features</a> ·
      <a href={url("/formats")}>Formats</a> ·
      <a href={url("/fast-seeking-video-player-mac")}>Fast seeking</a> ·
      <a href={url("/faq")}>FAQ</a> ·
      <a href={url("/blog")}>Blog</a> ·
      <a href={url("/play-mkv-on-mac")}>Play MKV on Mac</a> ·
      <a href={url("/iina-alternatives")}>IINA alternatives</a> ·
      <a href={url("/leah-vs-iina")}>Leah vs IINA</a> ·
      <a href={url("/leah-vs-vlc")}>Leah vs VLC</a> ·
      <a href={url("/leah-vs-infuse")}>Leah vs Infuse</a> ·
      <a href={url("/leah-vs-elmedia")}>Leah vs Elmedia</a> ·
      <a href={url("/mkv-no-sound-mac")}>MKV has no sound</a> ·
      <a href={url("/dolby-truehd-atmos-mac")}>TrueHD and Atmos on Mac</a> ·
      <a href={url("/dts-on-mac")}>DTS on Mac</a> ·
      <a href={url("/pgs-vobsub-subtitles-mac")}>PGS and VobSub subtitles</a> ·
      <a href={url("/quicktime-cant-open-mkv")}>QuickTime can't open MKV</a> ·
      <a href={url("/support")}>Support</a> ·
      <a href={url("/privacy")}>Privacy Policy</a> ·
      <a href={site.appStoreUrl}>Mac App Store</a>
    </div>
    <div class="contribute">Made by {site.author}.</div>
    <div class="attribution">
      <p>
        Screenshots show Tears of Steel © Blender Foundation | mango.blender.org (CC BY 3.0). Site design from
        <a href="https://github.com/iina/iina-website">IINA's website</a>, under the MIT License.
      </p>
    </div>
  </div>
</footer>
