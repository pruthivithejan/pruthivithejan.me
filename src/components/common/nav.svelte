<script>
  import navData from "@/data/navData";
  import { onMount } from "svelte";

  let links;

  onMount(() => {
    links = document.querySelectorAll("ul a");
    links.forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add(
          "bg-neutral-100",
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
  <h2 class="sr-only">Navigation Bar</h2>
  <nav class="fixed bottom-4 z-50 text-neutral-950">
    <ul
      class="flex flex-row items-center font-medium backdrop-blur-2xl bg-neutral-400/75 rounded-lg gap-2 text-base sm:text-lg md:text-xl lg:text-2xl"
    >
      {#each navData as item (item.path)}
        <li class="px-1 py-3">
          <a href={item.path} class="link px-3" target="_self">
            {item.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>
