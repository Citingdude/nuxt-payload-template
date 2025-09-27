import type { Page } from '@repo/payload-types'
import { z } from 'zod'

import { ERROR_NOT_FOUND } from '../../errors/errors'
import { publicProcedure } from '../../procedures/procedures'

export const zodPage = z.custom<Page>((val) => {
  if (val.slug == null) {
    return false
  }

  return true
}, { message: 'Page is invalid' })

const getPageBySlug = publicProcedure
  .route({
    method: 'GET',
  })
  .input(z.object({
    slug: z.string(),
  }))
  .output(zodPage)
  .errors({
    ERROR_NOT_FOUND,
  })

export const PAGES_CONTRACT = {
  getPageBySlug,
}
