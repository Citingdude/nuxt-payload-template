import { getIconField } from '@payload/fields/media/icon.field'
import type { Tab } from 'payload'

export const settingsSocialsTab: Tab = {
  name: 'socials',
  fields: [
    {
      name: 'socials',
      admin: {
        components: {
          RowLabel: '@payload/components/fields/FieldArrayRowLabelSocials.tsx#FieldArrayRowLabelSocials',
        },
      },
      fields: [
        {
          name: 'social',
          fields: [
            {
              name: 'name',
              label: 'Name',
              required: true,
              type: 'text',
            },
            {
              name: 'url',
              label: 'URL',
              type: 'text',
            },
            getIconField({
              name: 'icon',
              label: 'Icon',
            }),
          ],
          interfaceName: 'Social',
          label: 'Social',
          type: 'group',
        },
      ],
      label: 'Socials',
      type: 'array',
    },
  ],
  label: 'Socials',
}
