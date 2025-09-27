/* eslint-disable func-style */
import type { CheckboxField, TextField } from 'payload'

import { formatSlugHook } from './utils/formatSlug.util'

interface Overrides {
  checkboxOverrides?: Partial<CheckboxField>
  slugOverrides?: Partial<TextField>
}

type Slug = (fieldToUse?: string, overrides?: Overrides) => [TextField, CheckboxField]

export const getSlugField: Slug = (fieldToUse = 'title', overrides = {}) => {
  const {
    checkboxOverrides,
    slugOverrides,
  } = overrides

  const checkBoxField: CheckboxField = {
    name: 'slugLock',
    admin: {
      hidden: true,
      position: 'sidebar',
    },
    defaultValue: true,
    type: 'checkbox',
    ...checkboxOverrides,
  }

  // @ts-expect-error - ts mismatch Partial<TextField> with TextField
  const slugField: TextField = {
    name: 'slug',
    index: true,
    label: 'Slug',
    localized: true,
    type: 'text',
    ...slugOverrides,
    admin: {
      position: 'sidebar',
      ...slugOverrides?.admin,
      components: {
        Field: {
          clientProps: {
            checkboxFieldPath: checkBoxField.name,
            fieldToUse,
          },
          path: '@payload/fields/slug/components/SlugComponent#SlugComponent',
        },
      },
    },
    hooks: {
      // Kept this in for hook or API based updates
      beforeValidate: [
        formatSlugHook(fieldToUse),
      ],
    },
  }

  return [
    slugField,
    checkBoxField,
  ]
}
