import { getLinkField } from '@payload/fields/link/link.field'
import type { Field, GroupField } from 'payload'

export interface GetCtaFieldOptions {
  name: string
  label: GroupField['label']
}

export const CTA_EVENTS = [
  {
    label: 'Some form',
    value: 'some_form',
  },
]

export function getCtaField({ name, label }: GetCtaFieldOptions): GroupField {
  const fields: Field[] = [
    {
      name: 'label',
      required: true,
      type: 'text',
    },
    {
      name: 'ctaVariant',
      defaultValue: 'primary',
      enumName: 'cta_variant',
      label: 'Variant',
      options: [
        {
          label: 'Primary',
          value: 'primary',
        },
        {
          label: 'Secondary',
          value: 'secondary',
        },
      ],
      type: 'select',
    },
    {
      name: 'ctaType',
      defaultValue: 'link',
      enumName: 'cta_type',
      label: 'Type',
      options: [
        {
          label: 'Link',
          value: 'link',
        },
        {
          label: 'Event',
          value: 'event',
        },
      ],
      type: 'select',
    },
    getLinkField({
      disableLabel: true,
      overrides: {
        admin: { condition: (_, siblingData) => siblingData?.ctaType === 'link' },
      },
    }),
    {
      name: 'event',
      admin: {
        condition: (_, siblingData) => siblingData?.ctaType === 'event',
      },
      defaultValue: 'some_form',
      enumName: 'cta_event',
      options: CTA_EVENTS,
      type: 'select',
    },
  ]

  return {
    name,
    fields,
    label,
    type: 'group',
  }
}
