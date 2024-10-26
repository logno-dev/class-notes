import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

// const article = defineCollection({
// 	type: "content",
// 	// Type-check frontmatter using a schema
// 	schema: z.object({
// 		title: z.string(),
// 		description: z.string(),
// 		// Transform string to Date object
// 		pubDate: z.coerce.date(),
// 		updatedDate: z.coerce.date().optional(),
// 		heroImage: z.string().optional(),
// 		published: z.boolean(),
// 	}),
// });
//
export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	blog: defineCollection({
		type: "content",
		schema: z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			published: z.boolean(),
		}),
	}),
};
