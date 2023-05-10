import { defineConfig } from "astro/config";
import image from "@astrojs/image";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: "https://pruthivithejan.me",
  integrations: [image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  })]
});