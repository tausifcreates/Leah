<!--
  A Font Awesome icon drawn as inline SVG when the site is built, the same
  markup Font Awesome's script used to put in the page as it loaded.
-->
<script lang="ts">
  import { icon as faIcon, type IconDefinition } from "@fortawesome/fontawesome-svg-core";

  let { icon, class: className }: { icon: IconDefinition; class?: string } = $props();
  const svg = $derived(faIcon(icon, { classes: className ? className.split(" ") : [] }).html.join(""));
</script>

{@html svg}
