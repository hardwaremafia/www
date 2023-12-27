import { z, defineCollection, getCollection } from 'astro:content';

const testimonialsCollection = defineCollection({
    type: 'content',
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

const wikiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    hidden: z.boolean().default(false),
    title: z.string().max(40),
    goto: z.string().url().optional(),
  }),
});

export const collections = {
  'testimonials': testimonialsCollection,
  'wiki': wikiCollection,
};

export async function getTestimonialEntries() {
    return (await getCollection("testimonials", ({data}) =>  data.hidden !== true )).sort((a, b) => a.slug.localeCompare(b.slug));
}

export async function getWikiEntries() {
  return (await getCollection("wiki", ({data}) =>  data.hidden !== true )).sort((a, b) => a.slug.localeCompare(b.slug));
}