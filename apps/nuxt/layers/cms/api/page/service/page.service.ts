import { usePayloadSDK } from '~base/composables/api/usePayloadSDK'
import { useGlobalI18n } from '~base/composables/i18n/useGlobaI18n'

export class PageService {
  public static async getPageBySlug(slug: string) {
    const sdk = usePayloadSDK()
    const {
      locale,
    } = useGlobalI18n()

    const paginatedPages = await sdk.find({
      collection: 'pages',
      depth: 1,
      fallbackLocale: false,
      locale: locale.value,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (paginatedPages.docs.length === 0) {
      throw new Error(`Page with slug "${slug}" not found in locale "${locale}"`)
    }

    return paginatedPages.docs[0]
  }
}
