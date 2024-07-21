<script>
  import { onMount } from "svelte";
  import StarRating from "./star-rating.svelte";
  let books = [];

  onMount(async () => {
    const res = await fetch("/api/getBooks.json");
    const data = await res.json();
    books = data.map((book) => ({ ...book, loading: true }));
  });
</script>

<div class="px-8 py-24 pt-0 mx-auto md:px-12 lg:px-32">
  <div class="container grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
    {#each books as book}
      <div
        class="group glass-container relative rounded-lg shadow-sm transition-all hover:shadow-md"
      >
        <div class="aspect-[2/3] overflow-hidden">
          <img
            src={book.imageUrl}
            alt="Book Cover"
            width={400}
            height={600}
            class="h-full w-full object-cover rounded-md transition-all group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-lg"
          />
        </div>
        <div class="p-4">
          <h3 class="text-lg text-neutral-100 font-semibold">{book.title}</h3>
          <div class="text-sm text-muted-foreground">{book.author}</div>
          <div class="mt-2 flex items-center gap-1 text-sm">
            <StarRating rating={book.userRating} />
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
