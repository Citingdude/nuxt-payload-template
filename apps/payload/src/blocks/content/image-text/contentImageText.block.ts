import { BLOCK_GROUPS } from '@payload/blocks/blockGroups'
import type { Block } from 'payload'

export const contentImageTextBlock: Block = {
  admin: {
    group: BLOCK_GROUPS.images,
  },

  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      name: 'text',
      required: true,
      type: 'textarea',
    },
  ],
  interfaceName: 'ImageTextBlock',
  slug: 'image-text',
}
