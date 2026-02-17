import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    intro: z.string().optional(), // intro alanını şemaya ekledik
  }),
});

export const collections = { pages };
