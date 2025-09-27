import type { CollectionConfig } from 'payload'

export const addressCollection: CollectionConfig = {
  admin: {
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'label',
      required: true,
      type: 'text',
    },
    {
      fields: [
        {
          name: 'street',
          admin: {
            width: '50% ',
          },
          required: true,
          type: 'text',
        },
        {
          name: 'number',
          required: true,
          type: 'text',
        },
        {
          name: 'box',
          type: 'text',
        },
      ],
      type: 'row',
    },
    {
      fields: [
        {
          name: 'postal_code',
          admin: {
            width: '10%',
          },
          required: true,
          type: 'text',
        },
        {
          name: 'city',
          required: true,
          type: 'text',
        },
        {
          name: 'region',
          required: false,
          type: 'text',
        },
        {
          name: 'country',
          required: true,
          type: 'text',
        },
      ],
      type: 'row',
    },
    {
      fields: [
        {
          name: 'email',

          type: 'text',
        },
        {
          name: 'phone',
          type: 'text',
        },
      ],
      type: 'row',
    },
    {
      hasMany: true,
      name: 'type',
      options: [
        'billing',
        'shipping',
      ],
      type: 'select',
    },
  ],
  slug: 'addresses',
}
