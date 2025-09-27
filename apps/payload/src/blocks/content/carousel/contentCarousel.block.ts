import { BLOCK_GROUPS } from '@payload/blocks/blockGroups'
import type { Block } from 'payload'

export const contentCarouselBlock: Block = {
  admin: {
    group: BLOCK_GROUPS.images,
  },
  fields: [
    {
      hasMany: true,
      name: 'images',
      relationTo: 'images',
      required: true,
      type: 'upload',
    },
  ],
  interfaceName: 'CarouselBlock',
  slug: 'carousel',
}
