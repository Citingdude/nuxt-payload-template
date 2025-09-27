import { createQueryKeys } from '@lukemorales/query-key-factory'

export const pageQueryKey = createQueryKeys('page', {
  detail(slug: string) {
    return {
      queryKey: [
        slug,
      ],
    }
  },
  home: null,
})
