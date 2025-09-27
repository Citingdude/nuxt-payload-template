import { getPayload } from '@payload/utils/payload/getPayload.util'
import type { User } from '@repo/payload-types'
import type { TypedLocale } from 'payload'

export interface ContextHeaders {
  'Accept-Language': string | null
  'Authorization': string | null
}

export interface Context {
  locale: TypedLocale
  token: string | null
  user: User | null
}

export async function createContext({
  locale, token,
}:
{ locale: TypedLocale
  token: string | null }): Promise<Context> {
  if (token == null) {
    return {
      locale,
      token,
      user: null,
    }
  }

  const headers = new Headers({
    'Accept-Language': locale,
    'Authorization': token,
  })

  const payload = await getPayload()
  const {
    user,
  } = await payload.auth({
    headers,
  })

  if (user == null) {
    return {
      locale,
      token,
      user: null,
    }
  }

  const foundUser = await payload.findByID({
    id: user.id,
    collection: 'users',
  })

  return {
    locale,
    token,
    user: foundUser,
  }
}
