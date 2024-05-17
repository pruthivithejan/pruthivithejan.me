import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const apiKey = import.meta.env.LMSQUEEZY_API_KEY;

  const url = `https://api.lemonsqueezy.com/v1/products?api_key=${apiKey}`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error status: ${res.status}`);
    }

    const data = await res.json();

    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
    });
  }
};
