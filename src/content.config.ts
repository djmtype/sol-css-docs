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
    dateUpdated: z.coerce.date().optional().transform((str) => (str ? new Date(str) : undefined)),
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
    dateUpdated: z.coerce.date().optional().transform((str) => (str ? new Date(str) : undefined)),
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
        url: z.string().url(),
        analyticsId: z.string().optional(),
      })
    ),
    openGraph: z.array(
      z.object({
        image: z.object({
          src: z.string().url(),
          alt: z.string(),
        }),
      })
    ),
  })
});



// const blog = defineCollection({

//   schema: z.object({
// 		permalink: z.string().optional(),
//     title: z.string().max(100),
// 		subtitle: z.string().max(100).optional(),
// 		description: z.string(),
//     date: z.coerce.date().transform((str) => new Date(str)),
//     image: z.object({
//       src: z.string(),
//       alt: z.string(),
// 			width: z.number().optional(),
// 			height: z.number().optional(),
//     }).optional(),
//     status: z.string()
//   })
// });

export const collections = {
  siteConfig,
  docs,
  pages,
  navPrimary
};
