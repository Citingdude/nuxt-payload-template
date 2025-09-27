import { settingsQueryKey } from '@cms/api/settings/settings.queryKey'

import { useOrpc } from '~base/composables/api/useOrpc'
import { useGlobalI18n } from '~base/composables/i18n/useGlobaI18n'
import { useQuery } from '~base/composables/query/useQuery'

export function useSettingsSocialsQuery() {
  const orpc = useOrpc()
  const { locale } = useGlobalI18n()

  return useQuery({
    queryFn: async () => {
      const data = await orpc.settings.getSettingsSocials()

      return data ?? []
    },
    queryKey: [
      settingsQueryKey.socials.queryKey,
      locale,
    ],
  })
}
