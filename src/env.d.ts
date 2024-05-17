/// <reference path="../.astro/types.d.ts" />
// Replace `astro/client` with `@astrojs/image/client`
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  SPOTIFY_CLIENT_SECRET: any;
  SPOTIFY_CLIENT_ID: any;
  SPOTIFY_USER_ID: any;
  LMSQUEEZY_API_KEY: any;
  RESEND_AUDIENCE_ID: string;
  RESEND_API_KEY: string;
  SITE: string | URL;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
