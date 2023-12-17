/// <reference path="../.astro/types.d.ts" />
// Replace `astro/client` with `@astrojs/image/client`
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  SITE: string | URL;
  readonly PUBLIC_BREVO_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
