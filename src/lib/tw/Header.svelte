<!--
  The header, with the computed sizes, fonts and colors of Elmedia Player's
  at desktop and phone widths: logo on the left, links and the download
  button on the right. Phones get the links in a full-height menu that
  opens without script, with the download button fixed at the bottom.
-->
<script lang="ts">
  import { site, url } from "../site.ts";

  const links: [string, string][] = [
    ["Features", "/features"],
    ["Formats", "/formats"],
    ["FAQ", "/faq"],
    ["Blog", "/blog"],
  ];
</script>

<header class="relative z-20 bg-white max-md:bg-white/96">
  <nav class="mx-auto flex max-w-[970px] px-[15px] pb-[20px] max-md:px-[30px]" aria-label="Leah">
    <a href={url("/")} class="mt-[23px] -ml-[5px] flex h-8 items-center max-md:mt-[20px]">
      <img src={url("/images/logo.png")} width="192" height="179" alt="" class="mr-[5px] size-8 object-contain" />
      <span class="ml-[3px] font-serif text-[20px] leading-8 font-bold text-[#101010] uppercase">Leah</span>
    </a>
    <ul class="mt-[20px] ml-auto hidden h-10 items-center md:flex">
      {#each links as [name, path]}
        <li class="px-[5px]">
          <a href={url(path)} class="block border-2 border-transparent px-[5px] py-[8px] text-[15px] leading-5 font-medium text-nav hover:text-[#303030]">{name}</a>
        </li>
      {/each}
      <li class="pl-[5px]">
        <a
          href={site.appStoreUrl}
          class="ml-[15px] block rounded-[7px] border-2 border-[#d9d7d4] px-[17px] py-[8px] text-sm leading-5 font-semibold text-[#303030] hover:border-[#303030]"
        >
          Download
        </a>
      </li>
    </ul>
    <details class="group ml-auto md:hidden">
      <summary
        class="mt-[21px] mb-[8px] flex h-[34px] cursor-pointer list-none flex-col justify-center gap-1 rounded-[4px] border-[1px] border-transparent py-[9px] pl-2.5 [&::-webkit-details-marker]:hidden"
        aria-label="Menu"
      >
        <span class="h-0.5 w-[22px] rounded-[1px] bg-[#888]"></span>
        <span class="h-0.5 w-[22px] rounded-[1px] bg-[#888]"></span>
        <span class="h-0.5 w-[22px] rounded-[1px] bg-[#888]"></span>
      </summary>
      <div class="absolute inset-x-0 top-[60px] z-9 h-[calc(100vh-60px)] overflow-y-auto bg-white shadow-[0_4px_3px_rgba(0,0,0,0.1)]">
        <ul class="flex flex-col pb-[100px]">
          {#each links as [name, path]}
            <li class="w-full px-[15px]">
              <a
                href={url(path)}
                class="flex items-center justify-between border-y-2 border-transparent py-[10.5px] text-left text-[18px] leading-[22px] font-medium text-[#303030] hover:text-[#da5e1c] active:text-[#da5e1c]"
              >
                {name}
              </a>
            </li>
          {/each}
        </ul>
        <div class="fixed inset-x-0 bottom-0 z-1 bg-white px-[15px] pt-[15px]">
          <a
            href={site.appStoreUrl}
            class="mb-[15px] block w-full rounded-[7px] border-2 border-[#d9d7d4] py-[8px] text-center text-sm leading-5 font-semibold text-[#303030]"
          >
            Download
          </a>
        </div>
      </div>
    </details>
  </nav>
</header>
