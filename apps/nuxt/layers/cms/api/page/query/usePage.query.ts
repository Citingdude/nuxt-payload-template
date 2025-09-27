import { pageQueryKey } from '@cms/api/page/page.queryKey'

import { useOrpc } from '~base/composables/api/useOrpc'
import { useGlobalI18n } from '~base/composables/i18n/useGlobaI18n'
import { useQuery } from '~base/composables/query/useQuery'

export function usePageQuery({
  slug,
}: { slug: string }) {
  const orpc = useOrpc()
  const {
    locale,
  } = useGlobalI18n()

  return useQuery({
    queryFn: async () => {
      // Because we use the payload types, there is no zod type and we cast it to the payload type here
      const data = await orpc.pages.getPageBySlug({
        slug,
      })

      return data
    },
    queryKey: [
      pageQueryKey.detail(slug).queryKey,
      locale,
    ],
  })
}
