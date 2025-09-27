import { BLOCK_GROUPS } from '@payload/blocks/blockGroups'
import { getCtasField } from '@payload/fields/cta/ctas.field'
import { getIconField } from '@payload/fields/media/icon.field'
import type { Block } from 'payload'

export const contentBannerBlock: Block = {
  admin: {
    group: BLOCK_GROUPS.other,
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
      type: 'text',
    },
    getIconField({
      name: 'icon',
      label: 'Icon',
    }),
    getCtasField({
      name: 'ctas',
      label: 'CTAs',
      maxItems: 2,
      minItems: 0,
    }),
  ],
  interfaceName: 'BannerBlock',
  labels: {
    plural: 'Banner blocks',
    singular: 'Banner block',
  },
  slug: 'banner',
}
