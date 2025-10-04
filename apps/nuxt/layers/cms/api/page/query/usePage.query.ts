import { pageQueryKey } from '@cms/api/page/page.queryKey'
import { PageService } from '@cms/api/page/service/page.service'

import { useGlobalI18n } from '~base/composables/i18n/useGlobaI18n'
import { useQuery } from '~base/composables/query/useQuery'

export function usePageQuery({
  slug,
}: { slug: string }) {
  const {
    locale,
  } = useGlobalI18n()

  return useQuery({
    queryFn: async () => {
      return await PageService.getPageBySlug(slug)
    },
    queryKey: [
      pageQueryKey.detail(slug).queryKey,
      locale,
    ],
  })
}
