import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://pruthivithejan.me",
  integrations: [sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react()]
});