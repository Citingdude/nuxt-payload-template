import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import type { Field } from 'payload'

export function getSeoFields(): Field[] {
  const fields: Field[] = [
    OverviewField({
      descriptionPath: 'seo.description',
      imagePath: 'seo.image',
      titlePath: 'seo.title',
    }),
    MetaTitleField({
      hasGenerateFn: true,

    }),
    MetaDescriptionField({
      hasGenerateFn: true,

    }),
    MetaImageField({
      relationTo: 'images',
    }),
    PreviewField({
      descriptionPath: 'seo.description',
      titlePath: 'seo.title',
    }),
  ]

  return fields
}
