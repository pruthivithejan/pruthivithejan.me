import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";

import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://pruthivithejan.me",
  integrations: [
    sitemap(),
    icon(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    svelte(),
  ],
});
