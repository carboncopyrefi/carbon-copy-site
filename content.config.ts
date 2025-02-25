import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    feature: defineCollection({
      type:'page',
      source: 'features/*.md',
      schema: z.object({
        authorSlug: z.string(),
        author: z.string(),
        mainImage: z.string(),
        mainImageCaption: z.string(),
        category: z.string(),
        date: z.string(),
        sortDate: z.date()
      })
    }),
    learn: defineCollection({
      type:'page',
      source: 'learn/*.md',
      schema: z.object({
        authorSlug: z.string(),
        author: z.string(),
        mainImage: z.string(),
        mainImageCaption: z.string(),
        category: z.string(),
        date: z.string()
      })
    }),
    author: defineCollection({
      type:'page',
      source: 'authors/*.md'
    }),
    guide: defineCollection({
      type:'page',
      source: 'guides/*.md'
    }),
    recap: defineCollection({
      type:'page',
      source: 'this-week-in-refi/*.md',
      schema: z.object({
        authorSlug: z.string(),
        author: z.string(),
        mainImage: z.string(),
        mainImageCaption: z.string(),
        category: z.string(),
        date: z.string()
      })
    })
  }
})