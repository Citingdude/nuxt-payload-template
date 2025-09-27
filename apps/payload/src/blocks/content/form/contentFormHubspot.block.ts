import { BLOCK_GROUPS } from '@payload/blocks/blockGroups'
import type { Block } from 'payload'

export const contentHubspotFormBlock: Block = {
  admin: {
    group: BLOCK_GROUPS.form,
  },
  fields: [
    {
      name: 'hubspotForm',
      relationTo: 'form-hubspot',
      required: true,
      type: 'relationship',
    },
  ],
  interfaceName: 'HubspotFormBlock',
  labels: {
    plural: 'Hubspot form blocks',
    singular: 'Hubspot form block',
  },
  slug: 'hubspot-form',
}
