<script>
  import RollingText from "@/components/animated/RollingText.svelte";

  let words = ["Designer", "Developer"];

  function getAge(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }
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
<h1 class="text-6xl font-body font-bold animate-enter" style="--stagger: 1">
  <RollingText {words} />
</h1>
<div
  class="container py-10 animate-enter text-4xl text-center text-neutral-50/75"
  style="--stagger: 2"
>
  <span class="text-neutral-50">{getAge("2002-06-28")}</span> year old, <br />
  Undergratuate at
  <span class="text-neutral-50">University of Sri Jayewardenepura</span>, <br />
  based in <span class="text-neutral-50">Sri Lanka .</span>
</div>
