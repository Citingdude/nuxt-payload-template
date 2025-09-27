import { getCtasField } from '@payload/fields/cta/ctas.field'
import type { Block } from 'payload'

export const contentColumnMultipleTextBlock: Block = {
  fields: [
    {
      name: 'texts',
      fields: [
        {
          name: 'subtitle',
          required: true,
          type: 'text',
        },
        {
          name: 'text',
          required: true,
          type: 'textarea',
        },
      ],
      required: true,
      type: 'array',
    },
    getCtasField({
      name: 'ctas',
      label: 'CTAs',
      maxItems: 2,
      minItems: 0,
    }),
  ],
  interfaceName: 'ColumnMultipleTextBlock',
  labels: {
    plural: 'Column multiple text blocks',
    singular: 'Column multiple text block',
  },
  slug: 'columnMultipleText',
}
