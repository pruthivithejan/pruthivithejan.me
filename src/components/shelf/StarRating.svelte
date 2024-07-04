<script>
export let rating = 5;
import StarIcon from "./StarIcon.svelte";

rating = Math.max(1, Math.min(5, rating));

const stars = Array.from({ length: 5 }, (_, index) => ({
	id: index,
	fill: index < rating ? "white" : "none",
}));
</script>

<div class="flex gap-1">
  {#each stars as star (star.id)}
    <StarIcon fill={star.fill} />
  {/each}
</div>
