import type { HubspotForm } from '@cms/types/hubspotForm.type'
import { useMutation } from '@tanstack/vue-query'

import { getEnv } from '~base/utils/env/getEnv.utils'

export function useHubspotFormMutation() {
  const BASE_URL = getEnv().CMS_BASE_URL

  return useMutation({
    mutationFn: async ({ formId, data }: { formId: string, data: Record<string, any> }) => {
      const response = await $fetch<HubspotForm>(`${BASE_URL}/api/hubspot/forms/${formId}`, {
        body: JSON.stringify(data),
        method: 'POST',
      })

      return response
    },
    throwOnError: true,
  })
}
