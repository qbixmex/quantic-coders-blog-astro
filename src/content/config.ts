import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image().refine((img) => img.width < 1280, {
      message: "Image width must be lower than 1280px width",
    }),
    date: z.date(),
    description: z.string(),
    author: reference("author"), // Relationship
    tags: z.array(z.string()), // Relationship
    isDraft: z.boolean().default(false),
  }),
});

const authorCollection = defineCollection({
  type: "data",
  schema: ({ image }) => z.object({
    name: z.string(),
    avatar: image(),
    twitter: z.string(),
    linkedIn: z.string().url(),
    github: z.string().url(),
    bio: z.string(),
    subtitle: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  author: authorCollection,
};
