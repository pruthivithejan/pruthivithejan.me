import { getCollection, type CollectionEntry } from "astro:content";
import rss from "@astrojs/rss";
import { formatBlogPosts } from "../lib/utils";

const postImportResult = await getCollection("blog");
const posts: CollectionEntry<"blog">[] = formatBlogPosts(postImportResult);

export const GET = async () => {
  const rssContent = await rss({
    title: "Pruthivi’s Blog",
    description: "Blog of a boy named after the planet earth.",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.slug,
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      customData: `
     <author>Pruthivi Thejan</author>
    `,
    })),
  });

  return new Response(rssContent, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
};
