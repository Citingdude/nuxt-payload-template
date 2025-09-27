import { BLOCK_GROUPS } from '@payload/blocks/blockGroups'
import { contentColumnBlocks } from '@payload/blocks/content/contentColumn.blocks'
import type { Block } from 'payload'

export const contentColumnBlock: Block = {
  admin: {
    group: BLOCK_GROUPS.images,
  },
  fields: [
    {
      name: 'columns',
      admin: {
        components: {
          RowLabel: '@payload/components/fields/FieldArrayRowColumnLabel.tsx#FieldArrayRowColumnLabel',
        },
      },
      fields: [
        {
          name: 'block',
          blocks: contentColumnBlocks,
          maxRows: 1,
          type: 'blocks',
        },
      ],
      interfaceName: 'ColumnBlocks',
      localized: true,
      maxRows: 2,
      minRows: 1,
      type: 'array',
    },
  ],
  interfaceName: 'ColumnBlock',
  labels: {
    plural: 'Column blocks',
    singular: 'Column block',
  },
  slug: 'column',
}
