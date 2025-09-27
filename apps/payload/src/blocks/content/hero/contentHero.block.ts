import { BLOCK_GROUPS } from '@payload/blocks/blockGroups'
import { getCtasField } from '@payload/fields/cta/ctas.field'
import { getImageField } from '@payload/fields/media/image.field'
import type { Block } from 'payload'

export const contentHeroBlock: Block = {
  admin: {
    group: BLOCK_GROUPS.hero,
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
    getCtasField({
      name: 'ctas',
      label: 'CTAs',
      maxItems: 2,
      minItems: 0,
    }),
    getImageField({
      name: 'backgroundImage',
      label: 'Background image',
    }),
  ],
  interfaceName: 'HeroBlock',
  labels: {
    plural: 'Hero blocks',
    singular: 'Hero block',
  },
  slug: 'hero',
}
