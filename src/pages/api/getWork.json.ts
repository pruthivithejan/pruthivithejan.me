import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (context) => {
  const works = await getCollection(
    "work",
    ({ data }) => data.status === "finished" || data.status === "ongoing"
  );
  return new Response(JSON.stringify(works));
};
