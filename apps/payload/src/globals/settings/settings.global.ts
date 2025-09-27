import { settingsHubspotTab } from '@payload/globals/settings/settingsHubspot.global'
import { settingsSocialsTab } from '@payload/globals/settings/settingsSocials.global'
import type { GlobalConfig } from 'payload'

export const settingsGlobal: GlobalConfig = {

  fields: [
    {
      tabs: [
        settingsSocialsTab,
        settingsHubspotTab,
      ],
      type: 'tabs',
    },
  ],
  slug: 'settings',
}
