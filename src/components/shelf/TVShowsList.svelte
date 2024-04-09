<script>
  import StarRating from "./StarRating.svelte";
  import * as Table from "@/components/ui/table";

  const movies = [
    {
      movieName: "The Matrix",
      director: "The Wachowskis",
      year: 1999,
      rating: 5,
    },
    {
      movieName: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      rating: 4.5,
    },
    {
      movieName: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      rating: 4.5,
    },
    {
      movieName: "Gravity",
      director: "Alfonso Cuarón",
      year: "2013-2019",
      rating: 4,
    },
    {
      movieName: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      rating: 9,
    },
    {
      movieName: "Mad Max: Fury Road",
      director: "George Miller",
      year: 2015,
      rating: 8.5,
    },
    {
      movieName: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      rating: 9.3,
    },
  ];
</script>

<div>
  <h2 class="text-2xl font-bold font-heading">TV Shows</h2>
  <Table.Root>
    <Table.Caption>A list of my favorite movies.</Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.Head>Movie</Table.Head>
        <Table.Head>Director</Table.Head>
        <Table.Head class="w-[200px]">Years</Table.Head>
        <Table.Head class="text-right">Rating</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each movies as movie, i (i)}
        <Table.Row>
          <Table.Cell class="font-medium">{movie.movieName}</Table.Cell>
          <Table.Cell>{movie.director}</Table.Cell>
          <Table.Cell>{movie.year}</Table.Cell>
          <Table.Cell class="flex justify-end text-right"
            ><StarRating rating={movie.rating} /></Table.Cell
          >
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
