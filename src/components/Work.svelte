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

<div class="grid gap-6 my-6">
  {#if works.length > 0}
    {#each works as work (work.id)}
      <Card.Root class="w-[350px] dark animate-enter">
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
              <a href={work.data.details.repo}>Repository</a>
            </Button>
          {/if}
          <Button><a href={work.data.details.url}>View Demo </a></Button>
        </Card.Footer>
      </Card.Root>
    {/each}
  {/if}
</div>
