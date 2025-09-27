import { settingsSocialsTab } from '@payload/globals/settings/settingsSocials.global'
import type { GlobalConfig } from 'payload'

export const settingsGlobal: GlobalConfig = {

  fields: [
    {
      tabs: [
        settingsSocialsTab,
      ],
      type: 'tabs',
    },
  ],
  slug: 'settings',
}
