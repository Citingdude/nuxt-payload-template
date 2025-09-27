import { getCtaField } from '@payload/fields/cta/cta.field'
import type {
  ArrayField,
  Field,
  GroupField,
} from 'payload'

export interface GetCtasFieldOptions {
  name: string
  label: GroupField['label']
  maxItems?: number
  minItems?: number
}

export function getCtasField({ name, label, maxItems, minItems }: GetCtasFieldOptions): ArrayField {
  const field: Field = {
    name,
    fields: [
      getCtaField({
        name: 'cta',
        label: 'CTA',
      }),
    ],
    label,
    maxRows: maxItems,
    minRows: minItems,
    required: false,
    type: 'array',
  }

  return field
}
