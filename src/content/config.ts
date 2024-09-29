// 1. Import utilities from "astro:content".
import { z, defineCollection } from "astro:content";

// 2. Define a "type" and "schema" for each collection.
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image().refine((img) => img.width < 1280, {
      message: "Image width must be lower than 1280px width",
    }),
    date: z.date(),
    description: z.string(),
    author: z.string(), // Relationship
    tags: z.array(z.string()), // Relationship
  }),
});

// 3. Export a single "collections" object to register your collection(s). 
export const collections = {
  blog: blogCollection,
};
