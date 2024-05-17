<script lang="ts">
  import navData from "@/data/navData";
  import { onMount } from "svelte";
  import * as Command from "@/components/ui/command/index";
  import { Smile } from "lucide-svelte";
  let open = false;

  onMount(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        open = !open;
      }
    }

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });
  let links;

  onMount(() => {
    links = document.querySelectorAll("ul a");
    links.forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add(
          "bg-neutral-100",
          "rounded-md",
          "text-neutral-950",
          "font-bold",
          "py-2",
          "px-4"
        );
      }
    });
  });
</script>

<div class="flex justify-center">
  <h2 class="sr-only">Navigation Bar</h2>
  <nav class="fixed bottom-4 z-50 text-neutral-50">
    <ul
      class="flex flex-row items-center font-medium backdrop-blur-2xl bg-neutral-400/50 border border-gray-100/20 rounded-lg gap-2 text-base sm:text-lg md:text-xl lg:text-2xl"
    >
      {#each navData as item (item.path)}
        <li class="px-1 py-2">
          <a href={item.path} class="link px-3" target="_self">
            {item.name}
          </a>
        </li>
      {/each}
      <li class="px-1 py-1 hidden lg:flex">
        <p class="text-sm">
          <kbd
            class="pointer-events-none inline-flex px-2 py-5 h-8 select-none items-center gap-0.5 rounded bg-muted text-neutral-950 font-bold opacity-100"
          >
            <span class="text-xs">⌘</span>K
          </kbd>
        </p>
      </li>
    </ul>
  </nav>
  <Command.Dialog bind:open class="dark">
    <Command.Input placeholder="Type a command or search..." />
    <Command.List>
      <Command.Empty>No results found.</Command.Empty>
      <Command.Group heading="Suggestions">
        <Command.Item>
          <Smile class="mr-2 h-4 w-4" />
          <span>Calendar</span>
        </Command.Item>
        <Command.Item>
          <Smile class="mr-2 h-4 w-4" />
          <span>Search Emoji</span>
        </Command.Item>
        <Command.Item>
          <Smile class="mr-2 h-4 w-4" />
          <span>Calculator</span>
        </Command.Item>
      </Command.Group>
      <Command.Separator />
      <Command.Group heading="Settings">
        <Command.Item>
          <Smile class="mr-2 h-4 w-4" />
          <span>Profile</span>
          <Command.Shortcut>⌘P</Command.Shortcut>
        </Command.Item>
        <Command.Item>
          <Smile class="mr-2 h-4 w-4" />
          <span>Billing</span>
          <Command.Shortcut>⌘B</Command.Shortcut>
        </Command.Item>
        <Command.Item>
          <Smile class="mr-2 h-4 w-4" />
          <span>Settings</span>
          <Command.Shortcut>⌘S</Command.Shortcut>
        </Command.Item>
      </Command.Group>
    </Command.List>
  </Command.Dialog>
</div>
