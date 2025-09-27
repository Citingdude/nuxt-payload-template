import { hubspotFormQueryKey } from '@cms/api/hubspot/hubspotForm.queryKey'
import type { HubspotForm } from '@cms/types/hubspotForm.type'

import { useQuery } from '~base/composables/query/useQuery'
import { getEnv } from '~base/utils/env/getEnv.utils'

export function useHubspotFormQuery({ formId }: { formId: string }) {
  const BASE_URL = getEnv().CMS_BASE_URL

  return useQuery({
    queryFn: async () => {
      const data = await $fetch<HubspotForm>(`${BASE_URL}/api/hubspot/forms/${formId}`)

      return data
    },
    queryKey: [
      hubspotFormQueryKey.detail(formId).queryKey,
    ],
    throwOnError: true,
  })
}
