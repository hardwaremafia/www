import { z, defineCollection, getCollection } from 'astro:content';

const testimonialsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      hidden: z.boolean().default(false),
      author: z.string().max(28),
      byline: z.string().max(36),
    }),
});

export const collections = {
  'testimonials': testimonialsCollection,
};

export async function getTestimonialEntries() {
    return (await getCollection("testimonials", ({data}) =>  data.hidden !== true ));
}