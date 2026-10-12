<!--
  A Font Awesome icon filled with a top-to-bottom gradient, like the icon
  font Elmedia Player's site colors with gradients.
-->
<script lang="ts">
  import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

  let {
    icon,
    from,
    to,
    angle = 180,
    id,
    class: className = "",
  }: { icon: IconDefinition; from: string; to: string; angle?: number; id: string; class?: string } = $props();

  const [width, height, , , path] = $derived(icon.icon);
  // The gradient line for a CSS angle (180deg is top to bottom).
  const rad = $derived(((angle - 90) * Math.PI) / 180);
  const x = $derived(Math.cos(rad) / 2), y = $derived(Math.sin(rad) / 2);
</script>

<svg viewBox="0 0 {width} {height}" class={className} aria-hidden="true">
  <defs>
    <linearGradient {id} x1={0.5 - x} y1={0.5 - y} x2={0.5 + x} y2={0.5 + y}>
      <stop offset="0" stop-color={from} />
      <stop offset="1" stop-color={to} />
    </linearGradient>
  </defs>
  <path fill="url(#{id})" d={Array.isArray(path) ? path.join(" ") : path} />
</svg>
