/// <reference path="../.astro/types.d.ts" />
// Replace `astro/client` with `@astrojs/image/client`
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  RESEND_AUDIENCE_ID: string;
  RESEND_API_KEY: string;
  SITE: string | URL;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
