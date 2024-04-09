<script lang="ts">
  import { cn } from "src/lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLTableRowElement> & {
    "data-state"?: unknown;
  };

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<tr
  class={cn(
    "border-b border-neutral-700 transition-colors hover:bg-muted/25 data-[state=selected]:bg-muted",
    className
  )}
  {...$$restProps}
  on:click
  on:keydown
>
  <slot />
</tr>
