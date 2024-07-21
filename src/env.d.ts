/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
// Replace `astro/client` with `@astrojs/image/client`
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
	SPOTIFY_CLIENT_SECRET: string;
	SPOTIFY_CLIENT_ID: string;
	SPOTIFY_USER_ID: string;
	LMSQUEEZY_API_KEY: string;
	RESEND_AUDIENCE_ID: string;
	RESEND_API_KEY: string;
	SITE: string | URL;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
