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

// export const GET: APIRoute = async (context) => {
//   // Extract the access token from the environment variables
//   const accessToken = import.meta.env.SPOTIFY_ACCESS_TOKEN;

//   // Define the URL for fetching playlists
//   const playlistsUrl = `https://api.spotify.com/v1/users/{user_id}/playlists`;

//   try {
//     // Make the HTTP request to fetch playlists
//     const res = await fetch(playlistsUrl, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${accessToken}`,
//         'Content-Type': 'application/json'
//       }
//     });

//     // Check if the request was successful
//     if (!res.ok) {
//       throw new Error(`HTTP error status: ${res.status}`);
//     }

//     // Parse the response body as JSON
//     const data = await res.json();

//     // Return the playlists data as a JSON object
//     return new Response(JSON.stringify(data));
//   } catch (error) {
//     console.error('Error fetching playlists:', error);
//     // Return an error response if the fetch fails
//     return new Response(JSON.stringify({ error: 'Failed to fetch playlists' }), { status: 500 });
//   }
// };
