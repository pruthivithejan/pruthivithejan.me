import type { APIRoute } from "astro";
import Parser from "rss-parser";

const parser = new Parser();

export const GET: APIRoute = async () => {
	const feedUrl =
		"https://www.goodreads.com/review/list_rss/178774351?shelf=read";

	try {
		const feed = await parser.parseURL(feedUrl);
		const parsedItems = feed.items.map((item) => {
			const content = item.content || "";

			const imageMatch = content.match(/<img alt="[^"]*" src="([^"]+)" \/>/);
			const authorMatch = content.match(/author: ([^<]+)<br\/>/);
			const nameMatch = content.match(/name: ([^<]+)<br\/>/);
			const averageRatingMatch = content.match(/average rating: ([^<]+)<br\/>/);
			const bookPublishedMatch = content.match(/book published: ([^<]+)<br\/>/);
			const userRatingMatch = content.match(/rating: (\d+)<br\/>/);
			const readAtMatch = content.match(/read at: ([^<]+)<br\/>/);
			const dateAddedMatch = content.match(/date added: ([^<]+)<br\/>/);
			const imageUrl = imageMatch
				? imageMatch[1]
						.replace("_SY75_", "")
						.replace(/\.+null\.jpg$/, ".jpg")
						.replace(/\.\.jpg$/, ".jpg")
				: null;
			// 293 x 475
			const author = authorMatch ? authorMatch[1] : null;
			const name = nameMatch ? nameMatch[1] : null;
			const averageRating = averageRatingMatch ? averageRatingMatch[1] : null;
			const bookPublished = bookPublishedMatch ? bookPublishedMatch[1] : null;
			const userRating = userRatingMatch ? userRatingMatch[1] : null;
			const readAt = readAtMatch ? readAtMatch[1] : null;
			const dateAdded = dateAddedMatch ? dateAddedMatch[1] : null;

			return {
				title: item.title,
				link: item.link,
				pubDate: item.pubDate,
				guid: item.guid,
				isoDate: item.isoDate,
				imageUrl,
				author,
				name,
				averageRating,
				bookPublished,
				userRating,
				readAt,
				dateAdded,
			};
		});

		return new Response(JSON.stringify(parsedItems), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
};
