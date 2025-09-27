import { publicProcedure } from '@payload/orpc/procedures/public.procedure'
import { getPayload } from '@payload/utils/payload/getPayload.util'

export const getPageBySlug = publicProcedure.pages.getPageBySlug
  .handler(async ({
    context,
    errors,
    input,
  }) => {
    const payload = await getPayload()

    const paginatedPages = await payload.find({
      collection: 'pages',
      fallbackLocale: false,
      locale: context.locale,
      where: {
        slug: {
          equals: input.slug,
        },
      },
    })

    if (paginatedPages.docs.length === 0) {
      throw errors.ERROR_NOT_FOUND()
    }

    return paginatedPages.docs[0]
  })
