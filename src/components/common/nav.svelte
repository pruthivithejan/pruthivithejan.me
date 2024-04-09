<script>
  import navData from "@/data/navData";
  import { onMount } from "svelte";

  let links;

  onMount(() => {
    links = document.querySelectorAll("ul a");
    links.forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add(
          "bg-neutral-50",
          "rounded-md",
          "font-bold",
          "py-3",
          "px-5"
        );
      }
    });
  });
</script>

<div class="flex justify-center">
  <nav class="fixed bottom-4 z-50 text-black">
    <ul
      class="flex flex-row gap-2.5 items-center font-body font-medium text-base sm:text-lg md:text-xl lg:text-2xl rounded-lg backdrop-blur-2xl bg-neutral-400/75"
    >
      {#each navData as item (item.path)}
        <li class="px-1 py-3">
          <a href={item.path} class="link px-5" target="_self">
            {item.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>
