<script>
  import * as Card from "@/components/ui/card/index";
  import { Button } from "@/components/ui/button/index";
  import { Badge } from "@/components/ui/badge/index";
  import { Skeleton } from "@/components/ui/skeleton";
  import { onMount } from "svelte";
  let works = [];

  onMount(async () => {
    const res = await fetch("/api/getWork.json");
    const data = await res.json();
    works = data.map((work) => ({ ...work }));
  });
</script>

<section
  class="grid grid-cols-1 gap-6 px-8 py-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
>
  {#if works.length > 0}
    {#each works as work (work.id)}
      <div
        class="glass-container col-span-1 lg:col-span-1 w-full animate-enter"
        style="--stagger: 2"
      >
        <Card.Root class="dark h-full">
          {#if work.loading}
            <Skeleton class="h-[240px] rounded-none" />
          {:else}
            <img
              src={work.data.img}
              alt={work.data.work_name}
              height="240"
              width="fit-content"
              class="w-full h-60 object-cover rounded-t-lg border-b"
            />
          {/if}
          <Card.Content class="p-6 space-y-6">
            <div class="flex items-center justify-between">
              <Card.Title>{work.data.work_name}</Card.Title>
              <Badge variant={work.data.status}>
                {work.data.status}
              </Badge>
            </div>
            <Card.Description>{work.data.work_description}</Card.Description>
            <div class="flex flex-wrap gap-2">
              {#each work.data.details.tech_stack as tech}
                <Badge variant="outline" class="bg-muted text-muted-foreground"
                  ><img
                    src={tech.icon}
                    alt={tech.name}
                  />&nbsp;&nbsp;{tech.name}</Badge
                >
              {/each}
            </div>
          </Card.Content>
          <Card.Footer class="flex justify-between items-center">
            <Button
              href={work.data.details.url}
              target="_blank"
              variant="outline">Preview</Button
            >
            {#if work.data.details.repo}
              <Button
                variant="link"
                href={work.data.details.repo}
                target="_blank"
              >
                Repository
              </Button>
            {/if}
          </Card.Footer>
        </Card.Root>
      </div>
    {/each}
  {/if}
</section>
