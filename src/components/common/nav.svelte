<script lang="ts">
  import navData from "@/data/navData";
  import { onMount } from "svelte";
  import * as Command from "@/components/ui/command/index";
  import * as Drawer from "@/components/ui/drawer/index";
  import { Separator } from "@/components/ui/separator/index";
  import { Button } from "@/components/ui/button/index";
  import {
    LibraryBig,
    Layers3,
    Github,
    Linkedin,
    ExternalLink,
    Twitter,
    PanelTopClose,
  } from "lucide-svelte";

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
  // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
  let links;

  onMount(() => {
    links = document.querySelectorAll("ul a");
    // biome-ignore lint/complexity/noForEach: <explanation>
    links.forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add(
          "bg-neutral-100",
          "rounded-md",
          "text-neutral-950",
          "font-semibold",
          "shadow-md",
          "shadow-neutral-100/10",
          "shadow-inner",
          "py-1.5",
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
      class="flex flex-row items-center font-medium backdrop-blur-2xl bg-neutral-200/10 border border-neutral-100/20 rounded-lg gap-2 text-base"
    >
      {#each navData as item (item.path)}
        <li class="py-2 px-1">
          <a href={item.path} class="link px-2" target="_self">
            {item.name}
          </a>
        </li>
      {/each}
      <Separator orientation="vertical" class="bg-neutral-100/20" />
      <li class="hidden xl:flex px-3 text-neutral-50/75">
        <p class="text-sm">
          <span class="gap-1">⌘</span>K
        </p>
      </li>
      <li class="flex xl:hidden">
        <Drawer.Root>
          <Drawer.Trigger asChild let:builder>
            <Separator orientation="vertical" class="bg-neutral-100/20" />
            <Button
              builders={[builder]}
              variant="ghost"
              class="p-0 hover:bg-transparent focus:bg-transparent active:bg-transparent hover:text-neutral-50"
            >
              <PanelTopClose class="mr-2 h-4 w-4" />
            </Button>
          </Drawer.Trigger>
          <Drawer.Content class="dark text-neutral-50">
            <div class="mx-auto w-full max-w-sm">
              <Drawer.Header>
                <Drawer.Description class="text-left">
                  Routes</Drawer.Description
                >
                <Button href="/shelf" class="flex justify-start gap-2">
                  <LibraryBig class="mr-2 h-4 w-4" />
                  <span>Shelf</span>
                </Button>
                <Button href="/stack" class="flex justify-start gap-2">
                  <Layers3 class="mr-2 h-4 w-4" />
                  <span>Stack</span>
                </Button>
                <Drawer.Description class="text-left">
                  Subdomains</Drawer.Description
                >
                <Button
                  href="https://links.pruthivithejan.me/"
                  target="_blank"
                  class="flex justify-start gap-2"
                >
                  <ExternalLink class="mr-2 h-4 w-4" />
                  <span>links.pruthivithejan.me</span>
                </Button>
              </Drawer.Header>

              <Drawer.Footer>
                <Drawer.Close asChild let:builder>
                  <Button
                    builders={[builder]}
                    variant="outline"
                    class="bg-neutral-100/20 backdrop-blur-2xl">Close</Button
                  >
                </Drawer.Close>
              </Drawer.Footer>
            </div>
          </Drawer.Content>
        </Drawer.Root>
      </li>
    </ul>
  </nav>
  <Command.Dialog bind:open class="dark">
    <Command.Input placeholder="Select an item or search..." />
    <Command.List>
      <Command.Empty>No route or link found.</Command.Empty>
      <Command.Group heading="Routes">
        <a href="/shelf">
          <Command.Item>
            <LibraryBig class="mr-2 h-4 w-4" />
            <span>Shelf</span>
          </Command.Item>
        </a>
        <a href="/stack">
          <Command.Item>
            <Layers3 class="mr-2 h-4 w-4" />
            <span>Stack</span>
          </Command.Item>
        </a>
      </Command.Group>
      <Command.Separator />
      <Command.Group heading="Subdomains">
        <a href="https://links.pruthivithejan.me/" target="_blank">
          <Command.Item>
            <ExternalLink class="mr-2 h-4 w-4" />
            <span>links.pruthivithejan.me</span>
          </Command.Item>
        </a>
      </Command.Group>
      <Command.Group heading="Links">
        <a href="https://github.com/pruthivithejan" target="_blank">
          <Command.Item>
            <Github class="mr-2 h-4 w-4" />
            <span>Github</span>
          </Command.Item>
        </a>
        <a href="https://lk.linkedin.com/in/pruthivithejan" target="_blank">
          <Command.Item>
            <Linkedin class="mr-2 h-4 w-4" />
            <span>LinkedIn</span>
          </Command.Item>
        </a>
        <a href="https://x.com/pruthivithejan" target="_blank">
          <Command.Item>
            <Twitter class="mr-2 h-4 w-4" />
            <span>X</span>
          </Command.Item>
        </a>
      </Command.Group>
    </Command.List>
  </Command.Dialog>
</div>
