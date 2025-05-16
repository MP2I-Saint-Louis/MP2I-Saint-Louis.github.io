import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const promotionsCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/contents/promotions" }),
    schema: z.object({
        name: z.string(),
        name_first_year: z.string(),
        name_second_year: z.string(),
        year_start: z.number(),
        year_end: z.number(),
        arts: z.array(z.object({
            name: z.string(),
            url: z.string(),
            variants: z.boolean(),
        }))
    })
});

export const collections = {
    promotions: promotionsCollection,
};