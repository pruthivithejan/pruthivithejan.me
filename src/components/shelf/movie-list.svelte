<script>
  import StarRating from "./star-rating.svelte";

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
      year: 2013,
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
  <h2 class="text-2xl font-bold font-heading">Movies</h2>
</div>
