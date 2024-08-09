<script>
import { onMount } from "svelte";
import * as Tooltip from "@/components/ui/tooltip";
import SparkButton from "@/components/animated/spark-button.astro";
const tools = [
	{
		name: "Notion",
		icon: "/images/apps/app_notion.jpg",
		link: "https://apps.apple.com/us/app/notion-notes-docs-tasks/id1232780281",
	},
	{
		name: "Expedia",
		icon: "/images/apps/app_expedia.jpg",
		link: "https://apps.apple.com/us/app/expedia-hotels-flights-car/id427916203",
	},
	{
		name: "X (Twitter)",
		icon: "/images/apps/app_x.jpg",
		link: "https://apps.apple.com/de/app/x/id333903271",
	},
	{
		name: "Flighty",
		icon: "/images/apps/app_flighty.jpg",
		link: "https://apps.apple.com/us/app/flighty-live-flight-tracker/id1358823008",
	},
	{
		name: "Spotify",
		icon: "/images/apps/app_spotify.jpg",
		link: "https://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580",
	},
	{
		name: "Finanzguru",
		icon: "/images/apps/app_finanzguru.jpg",
		link: "https://apps.apple.com/us/app/finanzguru-konten-vertr%C3%A4ge/id1214803607",
	},
	{
		name: "Messages",
		icon: "/images/apps/app_messages.jpg",
		link: "https://apps.apple.com/us/app/messages/id1146560473",
	},
	{
		name: "Cron",
		icon: "/images/apps/app_cron.jpg",
		link: "https://apps.apple.com/us/app/cron-calendar/id1607562761",
	},
];

onMount(() => {
	iconsContainer.addEventListener("scroll", checkScroll);
});

function openLink(tool) {
	if (typeof window !== "undefined" && window.innerWidth > 768) {
		window.open(tool.link);
	}
}
</script>

<section
  class="w-full flex flex-col items-center lg:max-w-none max-w-md mx-auto"
>
  <!-- <a href="/stack">
    <SparkButton text="View Stack" />
  </a> -->
  <div class="lg:w-5/12 w-full">
    <div class="flex items-center relative">
      <div
        class="gradient-blur pointer-events-none w-4/12 ml-auto z-10 -right-16 absolute inset-0 -mr-10 hidden lg:block"
      >
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div
        class="gradient-blur pointer-events-none z-10 w-4/12 -left-16 absolute inset-0 rotate-180 -ml-10 hidden lg:block"
      >
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div
        class="w-full inline-flex pt-12 pb-20 flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          class="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll"
        >
          {#each tools as tool}
            <li class="group relative flex-shrink-0">
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    on:click={() => openLink(tool)}
                    src={tool.icon}
                    alt={tool.name}
                    class="w-16 h-16 rounded-xl border border-neutral-700 cursor-alias hover:shadow-lg hover:shadow-black/5 transition-all dark:border-neutral-800"
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <p>{tool.name}</p>
                </Tooltip.Content>
              </Tooltip.Root>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<style type="postcss">
  .gradient-blur > div,
  .gradient-blur::before,
  .gradient-blur::after {
    position: absolute;
    inset: 0;
  }
  .gradient-blur::before {
    content: "";
    z-index: 1;
    backdrop-filter: blur(0.5px);
    mask: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 12.5%,
      rgba(255, 255, 255, 1) 25%,
      rgba(255, 255, 255, 0) 37.5%
    );
  }
  .gradient-blur > div:nth-of-type(1) {
    z-index: 2;
    backdrop-filter: blur(1px);
    mask: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 12.5%,
      rgba(255, 255, 255, 1) 25%,
      rgba(255, 255, 255, 1) 37.5%,
      rgba(255, 255, 255, 0) 50%
    );
  }
  .gradient-blur > div:nth-of-type(2) {
    z-index: 3;
    backdrop-filter: blur(2px);
    mask: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 25%,
      rgba(255, 255, 255, 1) 37.5%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 62.5%
    );
  }
  .gradient-blur > div:nth-of-type(3) {
    z-index: 4;
    backdrop-filter: blur(4px);
    mask: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 37.5%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 1) 62.5%,
      rgba(255, 255, 255, 0) 75%
    );
  }
  .gradient-blur > div:nth-of-type(4) {
    z-index: 5;
    backdrop-filter: blur(8px);
    mask: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 1) 62.5%,
      rgba(255, 255, 255, 1) 75%,
      rgba(255, 255, 255, 0) 87.5%
    );
  }
  .gradient-blur > div:nth-of-type(5) {
    z-index: 6;
    backdrop-filter: blur(16px);
    mask: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 62.5%,
      rgba(255, 255, 255, 1) 75%,
      rgba(255, 255, 255, 1) 87.5%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .gradient-blur > div:nth-of-type(6) {
    z-index: 7;
    backdrop-filter: blur(32px);
    mask: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 75%,
      rgba(255, 255, 255, 1) 87.5%,
      rgba(255, 255, 255, 1) 100%
    );
  }
  .gradient-blur::after {
    content: "";
    z-index: 8;
    backdrop-filter: blur(64px);
    mask: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 87.5%,
      rgba(255, 255, 255, 1) 100%
    );
  }

  @keyframes infiniteScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(
        -75%
      ); /* Adjust this value based on the width of your tools list */
    }
  }

  .animate-infinite-scroll {
    animation: infiniteScroll 20s linear infinite;
  }
</style>
