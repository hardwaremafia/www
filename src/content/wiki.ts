import { defineCollection, getCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const wikiCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/wiki" }),
  schema: z.object({
    hidden: z.boolean().default(false),
    title: z.string().max(40),
    goto: z.string().url().optional(),
  }),
});

export async function getWikiEntries() {
  return (await getCollection("wiki", ({ data }) => data.hidden !== true)).sort(
    (a, b) => a.id.localeCompare(b.id),
  );
}
