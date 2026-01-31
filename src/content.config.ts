import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const stories = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/stories" }),
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        date: z.date(),
    }),
});
export const collections = { stories };
