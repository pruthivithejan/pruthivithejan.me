<script>
import * as Card from "@/components/ui/card/index";
import { Button } from "@/components/ui/button/index";
import { Badge } from "@/components/ui/badge/index";
import { Skeleton } from "@/components/ui/skeleton";
import { onMount } from "svelte";
let books = [];

onMount(async () => {
	const res = await fetch("/api/getBooks.json");
	const data = await res.json();
	books = data.map((book) => ({ ...book, loading: true }));

	console.log(books);
});
</script>

<div class="px-8 py-24 pt-0 mx-auto md:px-12 lg:px-32 max-w-7xl">
  <div class="container grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
    {#if books.length > 0}
      {#each books as book (book.id)}
        <div
          class="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md"
        >
          <div class="aspect-[2/3] overflow-hidden">
            <img
              src={book.imageUrl}
              alt="Book Cover"
              width={400}
              height={600}
              class="h-full w-full object-cover transition-all group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-lg"
            />
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold">{book.title}</h3>
            <div
              class="mt-2 flex items-center gap-1 text-sm text-muted-foreground"
            ></div>
            <div class="mt-2 text-sm text-muted-foreground">{book.author}</div>
          </div>
        </div>
      {/each}
    {/if}
  </div>
</div>
