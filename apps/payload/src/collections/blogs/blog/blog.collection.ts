import { contentBlocks } from '@payload/blocks/content/content.blocks'
import {
  BlocksFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const blogCollection: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: [
      'title',
      'slug',
      'blocks',
    ],
    listSearchableFields: [
      'title',
      'slug',
    ],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      admin: {
        position: 'sidebar',
      },
      localized: true,
      required: true,
      type: 'text',
    },
    {
      name: 'slug',
      admin: {
        position: 'sidebar',
      },
      localized: true,
      required: true,
      type: 'text',
    },
    {
      name: 'blog',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [
              ...contentBlocks,
            ],
          }),
        ],
      }),
      required: true,
      type: 'richText',
    },
  ],
  lockDocuments: {
    duration: 300,
  },
  slug: 'blogs',
}
