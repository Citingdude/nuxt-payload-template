import { BLOCK_GROUPS } from '@payload/blocks/blockGroups'
import type { Block } from 'payload'

export const contentTextBlock: Block = {
  admin: {
    group: BLOCK_GROUPS.text,
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
  interfaceName: 'TextBlock',
  slug: 'text',
}
