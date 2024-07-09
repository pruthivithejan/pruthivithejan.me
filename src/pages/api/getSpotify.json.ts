import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
	const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
	const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;

	const authOptions = {
		url: "https://accounts.spotify.com/api/token",
		method: "POST",
		headers: {
			Authorization:
				"Basic " +
				Buffer.from(clientId + ":" + clientSecret).toString("base64"),
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "client_credentials",
		}),
		json: true,
	};

	try {
		const res = await fetch(authOptions.url, {
			method: authOptions.method,
			headers: authOptions.headers,
			body: authOptions.body,
		});

		if (!res.ok) {
			throw new Error(`HTTP error status: ${res.status}`);
		}

		const body = await res.json();
		const token = body.access_token;

		return new Response(JSON.stringify({ access_token: token }), {
			status: 200,
		});
	} catch (error) {
		console.error("Error fetching access token:", error);
		return new Response(
			JSON.stringify({ error: "Failed to fetch access token" }),
			{ status: 500 },
		);
	}
};
