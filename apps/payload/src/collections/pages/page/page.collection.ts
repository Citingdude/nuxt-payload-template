import { pageSeoTab } from '@payload/collections/pages/page/pageSeo.tab'
import { pageStructureTab } from '@payload/collections/pages/page/pageStructure.tab'
import { getEnv } from '@payload/env'
import { getSlugField } from '@payload/fields/slug/slug.field'
import type { CollectionConfig } from 'payload'

export const pageCollection: CollectionConfig = {
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
    livePreview: {
      url: ({
        data,
      }) => {
        const env = getEnv()
        const baseUrl = env.SITE_BASE_URL

        if (data.slug === 'home') {
          return `${baseUrl}`
        }

        return `${baseUrl}/${data.slug}`
      },
    },
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
    ...getSlugField(),
    {
      tabs: [
        pageStructureTab,
        pageSeoTab,
      ],
      type: 'tabs',
    },

  ],
  lockDocuments: {
    duration: 300,
  },
  slug: 'pages',
  versions: {
    drafts: {
      autosave: {
        interval: 2000, // ms
      },
      schedulePublish: true,
    },
    maxPerDoc: 50, // Max versions saved per document
  },
}
