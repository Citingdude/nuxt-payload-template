import { getSeoFields } from '@payload/fields/seo/seo.fields'
import type { Tab } from 'payload'

export const pageSeoTab: Tab = {
  name: 'seo',
  fields: [
    ...getSeoFields(),
  ],
  label: 'SEO',
}
