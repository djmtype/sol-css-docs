import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob, file } from 'astro/loaders';

import { SITE } from "@/config";

const docs = defineCollection({
  // type: 'content',
  //
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string().default(SITE.title),
    description: z.string().default(SITE.description),
    order: z.number().optional(),
    category: z.string().default('components'),
    draft: z.boolean().optional(),
    dateUpdated: z.coerce.date().transform((str) => (str ? new Date(str) : undefined)).optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});


const pages = defineCollection({
  // type: 'content',
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string().default(SITE.title),
    description: z.string().default(SITE.description),
    order: z.number().optional(),
    draft: z.boolean().optional(),
    dateUpdated: z.coerce.date().transform((str) => (str ? new Date(str) : undefined)).optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});

const navPrimary = defineCollection({
  loader: file("./src/data/navPrimary.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    links: z.array(
      z.object({
        label: z.string(),
        url: z.string(),
        external: z.boolean().optional()
      }),
    ),
  }),
});

const siteConfig = defineCollection({
  loader: file("./src/data/config.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    settings: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        defaultLanguage: z.string(),
        url: z.string(),
        analyticsId: z.string().optional(),
      })
    ),
    openGraph: z.array(
      z.object({
        image: z.object({
          src: z.string(),
          alt: z.string(),
        }),
      })
    ),
  })
});



export const collections = {
  siteConfig,
  docs,
  pages,
  navPrimary
};
