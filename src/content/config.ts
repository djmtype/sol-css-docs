import { glob, file } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

import { SITE } from '@/config';

const docs = defineCollection({
	// type: 'content',
	loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/docs" }),
	schema: z.object({
		title: z.string().default(SITE.title),
		description: z.string().default(SITE.description),
		image: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.optional(),
	}),
});



const docsNavigation = defineCollection({
  loader: file("src/data/docsNavigation.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    links: z.array(
      z.object({
        label: z.string(),
        path: z.string(),
      })
    )
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
  'docs': docs,
	'docsNavigation': docsNavigation
};