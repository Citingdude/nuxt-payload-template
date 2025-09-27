import type { CollectionConfig } from 'payload'

export const tenantCollection: CollectionConfig = {
  access: {
    read: () => true,
    readVersions: () => true,
    unlock: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      admin: {
        position: 'sidebar',
      },
      localized: true,
      required: true,
      type: 'text',
    },
  ],
  labels: {
    plural: 'Tenants',
    singular: 'Tenant',
  },
  slug: 'tenants',
}
