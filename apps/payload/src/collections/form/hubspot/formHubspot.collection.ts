import type { CollectionConfig } from 'payload'

export const formHubspotCollection: CollectionConfig = {
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      localized: true,
      required: true,
      type: 'text',
    },
    {
      name: 'formId',
      required: true,
      type: 'text',
    },
  ],
  slug: 'form-hubspot',
}
