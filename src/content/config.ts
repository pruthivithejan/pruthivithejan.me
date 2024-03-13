import { z, defineCollection } from "astro:content";
import categories from "@/data/categories.json";

const categoryEnum = categories.map((category) => category.name);

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    description: z
      .string()
      .max(
        160,
        "For best SEO results, please keep the description under 160 characters."
      ),
    draft: z.boolean().default(false),
    category: z.enum(categoryEnum),
  }),
});

export const collections = { blog };
