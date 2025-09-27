import { createQueryKeys } from '@lukemorales/query-key-factory'

export const hubspotFormQueryKey = createQueryKeys('hubspot-form', {
  detail(formId: string) {
    return {
      queryKey: [
        formId,
      ],
    }
  },
})
