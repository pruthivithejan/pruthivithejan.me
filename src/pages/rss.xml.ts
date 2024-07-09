import { getCollection, type CollectionEntry } from "astro:content";
import rss from "@astrojs/rss";
import { formatBlogPosts } from "../lib/utils";

async function generateRssFeed() {
	const postImportResult = await getCollection("blog");
	const posts: CollectionEntry<"blog">[] = formatBlogPosts(postImportResult);

	const rssContent = await rss({
		title: "Pruthivi Thejan’s Blog",
		description: "Blog of a boy named after the planet Earth.",
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			link: `/blog/${post.slug}`,
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			customData: `
     <author>Pruthivi Thejan</author>
    `,
		})),
	});

	return rssContent;
}

export const GET = generateRssFeed;
