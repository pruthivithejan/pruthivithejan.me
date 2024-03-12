import { vitePreprocess } from "@astrojs/svelte";

export default {
  preprocess: vitePreprocess(),
  alias: {
    "@/*": "./path/to/lib/*",
  },
};
