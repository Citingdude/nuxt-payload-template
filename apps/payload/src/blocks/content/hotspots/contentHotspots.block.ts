import { BLOCK_GROUPS } from '@payload/blocks/blockGroups'
import { getCtasField } from '@payload/fields/cta/ctas.field'
import { getImageField } from '@payload/fields/media/image.field'
import type { Block } from 'payload'

export const contentHotspotsBlock: Block = {
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
      name: 'hotspots',
      fields: [
        {
          name: 'hotspot',
          fields: [
            {
              name: 'nr',
              required: true,
              type: 'text',
            },
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
            {
              name: 'coordinates',
              fields: [
                {
                  name: 'x',
                  admin: {
                    description: 'The X coordinate of the hotspot in %',
                  },
                  max: 100,
                  min: 0,
                  required: true,
                  type: 'number',
                },
                {
                  name: 'y',
                  admin: {
                    description: 'The Y coordinate of the hotspot in %',
                  },
                  max: 100,
                  min: 0,
                  required: true,
                  type: 'number',
                },
              ],
              type: 'group',
            },
          ],
          interfaceName: 'Hotspot',
          type: 'group',
        },
      ],
      type: 'array',
    },
    getImageField({
      name: 'image',
      label: 'Image',
    }),
    getCtasField({
      name: 'ctas',
      label: 'CTAs',
      maxItems: 2,
      minItems: 0,
    }),
  ],
  interfaceName: 'HotspotsBlock',
  slug: 'hotspots',
}
