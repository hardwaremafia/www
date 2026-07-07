import { defineCollection, getCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const testimonialsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/testimonials",
  }),
  schema: z.object({
    hidden: z.boolean().default(false),
    author: z.string().max(28),
    org: z.object({
      name: z.string().max(20),
      title: z.string().max(20),
      url: z.string().url(),
    }),
  }),
});

export async function getTestimonialEntries() {
  return (
    await getCollection("testimonials", ({ data }) => data.hidden !== true)
  ).sort((a, b) => a.id.localeCompare(b.id));
}
