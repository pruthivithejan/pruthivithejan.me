<script lang="ts">
  import { Drawer as DrawerPrimitive } from "vaul-svelte";
  import DrawerOverlay from "./drawer-overlay.svelte";
  import { cn } from "src/lib/utils.js";

  type $$Props = DrawerPrimitive.ContentProps;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<DrawerPrimitive.Portal>
  <DrawerOverlay />
  <DrawerPrimitive.Content
    class={cn(
      "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-neutral-100/20 backdrop-blur-2xl bg-neutral-200/10 ",
      className
    )}
    {...$$restProps}
  >
    <div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"></div>
    <slot />
  </DrawerPrimitive.Content>
</DrawerPrimitive.Portal>
