import { z, defineCollection } from "astro:content";
import categories from "@/data/categories.json";

const categoryEnum = categories.map((category) => category.name);

const blog = defineCollection({
	type: z.literal("data"),
	schema: z.object({
		title: z.string(),
		date: z.date(),
		edited: z.date(),
		image: z.object({
			src: z.string(),
			alt: z.string(),
		}),
		description: z
			.string()
			.max(
				160,
				"For best SEO results, please keep the description under 160 characters.",
			),
		draft: z.boolean().default(false),
		category: z.enum(categoryEnum),
	}),
});

const work = z.object({
	type: z.literal("data"),
	schema: z.object({
		work_id: z.number(),
		work_name: z.string(),
		work_description: z
			.string()
			.max(
				160,
				"For best SEO results, please keep the description under 160 characters.",
			),
		img: z.string(),
		status: z.enum(["started", "ongoing", "finished"]),
		details: z.object({
			url: z.string(),
			repo: z.string(),
			tech_stack: z.array(
				z.object({
					name: z.string(),
					icon: z.string(),
				}),
			),
		}),
	}),
});

export const collections = { blog, work };
