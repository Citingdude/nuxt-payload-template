import { implement } from '@orpc/server'
import type { ContextHeaders } from '@payload/orpc/context/context'
import { createContext } from '@payload/orpc/context/context'
import { ORPC_CONTRACT } from '@repo/contract'
import type { TypedLocale } from 'payload'
import { z } from 'zod'

export const ORPC_BASE_LOCALE: TypedLocale = 'en'
const osWithContract = implement(ORPC_CONTRACT)
const orpcWithContextHeaders = osWithContract.$context<ContextHeaders>()

export const locales = [
  'en',
  'fr',
  'nl',
] as const
export const localeSchema = z.enum(locales)
export const orpc = orpcWithContextHeaders.use(async ({ context, next }) => {
  const locale = localeSchema.parse(context['Accept-Language'] ?? ORPC_BASE_LOCALE)

  const runtimeContext = await createContext({
    locale,
    token: context.Authorization ?? null,
  })

  return next({
    context: {
      locale: runtimeContext.locale,
      token: runtimeContext.token,
      user: runtimeContext.user,
    },
  })
})
