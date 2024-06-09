<script>
  import { onMount, onDestroy } from "svelte";
  import { slide } from "svelte/transition";

  export let words = [];
  let index = 0;
  let roller;

  onMount(() => {
    roller = setInterval(() => {
      if (index === words.length - 1) index = 0;
      else index++;
    }, 3500);
  });

  onDestroy(() => {
    clearInterval(roller);
  });
</script>

{#key index}
  <h1 transition:slide>{words[index]}</h1>
{/key}
