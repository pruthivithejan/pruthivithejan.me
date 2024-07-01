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
    works = data.map((work) => ({ ...work, loading: true }));
    setTimeout(() => {
      works = works.map((work) => ({ ...work, loading: false }));
    }, 2000);
  });
</script>

<div class="px-8 py-24 pt-0 mx-auto md:px-12 lg:px-32 max-w-7xl">
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-28 justify-items-center"
  >
    {#if works.length > 0}
      {#each works as work (work.id)}
        <div class="glass-container animate-enter items-center">
          <Card.Root class="w-[350px] h-full dark">
            <Card.Header>
              <Card.Title>{work.data.work_name}</Card.Title>
              <Card.Description>{work.data.work_description}</Card.Description>
            </Card.Header>
            <Card.Content>
              <Badge variant={work.data.status}>{work.data.status}</Badge>
              {#if work.loading}
                <Skeleton class="h-[200px] w-[300px]" />
              {:else}
                <img
                  src={work.data.img}
                  alt={work.data.work_name}
                  height="200"
                  width="300"
                />
              {/if}
              <h1 class="space-x-2">
                Technogly Stack: <br />
                {#each work.data.details.tech_stack as tech}
                  <Badge>{tech.name}</Badge>
                {/each}
              </h1>
            </Card.Content>
            <Card.Footer class="flex justify-between">
              {#if work.data.details.repo}
                <Button variant="outline">
                  <a href={work.data.details.repo} target="_blank">Repository</a
                  >
                </Button>
              {/if}
              <Button
                ><a href={work.data.details.url} target="_blank"
                  >View Demo
                </a></Button
              >
            </Card.Footer>
          </Card.Root>
        </div>
      {/each}
    {/if}
  </div>
</div>
