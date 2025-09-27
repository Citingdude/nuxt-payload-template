import { contentBlocks } from '@payload/blocks/content/content.blocks'
import type { Tab } from 'payload'

export const pageStructureTab: Tab = {
  fields: [
    {
      name: 'blocks',
      blocks: contentBlocks,
      localized: true,
      minRows: 1,
      type: 'blocks',
    },
  ],
  label: 'Structure',
}
