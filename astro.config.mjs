import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import path from "path";

import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://pruthivithejan.me",
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
  integrations: [
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    svelte(),
    icon(),
  ],
});
