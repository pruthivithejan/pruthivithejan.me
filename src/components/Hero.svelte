<script>
  import RollingText from "@/components/animated/RollingText.svelte";

  let words = ["Designer", "Developer"];
</script>

<div class="flex justify-center items-center mb-10">
  <h2 class="sr-only">Hero Section</h2>
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
<h1 class="text-6xl animate-enter" style="--stagger: 1">
  Pruthivi Thejan
  <span></span>
</h1>
<h1 class="text-6xl animate-enter" style="--stagger: 1">
  <RollingText {words} />
</h1>
<div
  class="container py-10 animate-enter text-4xl text-center text-neutral-50/75"
  style="--stagger: 2"
>
  I'm <span class="text-neutral-50 font-italic">Pruthivi</span><br />
  Undergratuate at
  <span class="text-neutral-50 font-italic"
    >University of <br /> Sri Jayewardenepura</span
  >,
  <br />
  based in <span class="text-neutral-50 font-italic">Sri Lanka .</span>
</div>
