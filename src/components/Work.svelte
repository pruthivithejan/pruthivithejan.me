<script>
  import * as Card from "@/components/ui/card/index";
  import { Button } from "@/components/ui/button/index";
  import { Badge } from "@/components/ui/badge/index";
  import { onMount } from "svelte";
  let works = [];

  onMount(async () => {
    const res = await fetch("/api/getWork.json");
    const data = await res.json();
    works = data;
  });
</script>

<div
  class="grid gap-16 grid-cols-1 grid-rows-3 md:grid-cols-2 lg:grid-cols-3 mt-24"
>
  {#if works.length > 0}
    {#each works as work (work.id)}
      <div class="glass-container w-[350px] animate-enter" style="--stagger: 2">
        <Card.Root class="w-[350px] dark  ">
          <Card.Header>
            <Card.Title>{work.data.work_name}</Card.Title>
            <Card.Description>{work.data.work_description}</Card.Description>
          </Card.Header>
          <Card.Content>
            <Badge variant={work.data.status}>{work.data.status}</Badge>
            <img src={work.data.img} alt={work.data.work_name} />
            <h1 class="space-x-2">
              Tech Stack: <br />
              {#each work.data.details.tech_stack as tech}
                <Badge>{tech.name}</Badge>
              {/each}
            </h1>
          </Card.Content>
          <Card.Footer class="flex justify-between">
            {#if work.data.details.repo}
              <Button variant="outline">
                <a href={work.data.details.repo} target="_blank">Repository</a>
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
