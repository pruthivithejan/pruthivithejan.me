<script>
  import RollingText from "@/components/animated/RollingText.svelte";

  let words = ["Designer", "Developer"];
</script>

<div class=" flex justify-center items-center mb-10">
  <div class="glass-container animate-enter">
    <div
      class="grayscale flex justify-center items-center overflow-hidden rounded-lg"
    >
      <img
        src={`https://avatars.githubusercontent.com/pruthivithejan`}
        alt="Avatar"
        class="rounded-md animate-enter"
        width="280"
        height="280"
      />
    </div>
  </div>
</div>
<h1 class="text-6xl animate-enter" style="--stagger: 1">Pruthivi Thejan</h1>
<h1 class="text-6xl font-body animate-enter" style="--stagger: 1">
  <RollingText {words} />
</h1>
<div class="container py-10 animate-enter" style="--stagger: 2">
  <h2 class="text-4xl">21</h2>
  <h2 class="text-4xl">Sri Lankan</h2>
  <h2 class="text-4xl">Undergratuate at USJP</h2>
</div>
