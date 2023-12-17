import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://pruthivithejan.me",
  integrations: [sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  })],
  output: "server",
  adapter: vercel()
});