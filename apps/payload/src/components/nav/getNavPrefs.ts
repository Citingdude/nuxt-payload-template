import type {
  NavPreferences,
  Payload,
  User,
} from 'payload'
import { cache } from 'react'

export const getNavPrefs = cache(
  async ({ payload, user }: { payload: Payload, user: User }): Promise<NavPreferences> =>
    user
    // @ts-expect-error - ts mismatch Partial<TextFieldClientProps>
      ? await payload
        .find({
          collection: 'payload-preferences',
          depth: 0,
          limit: 1,
          user,
          where: {
            and: [
              {
                key: {
                  equals: 'nav',
                },
              },
              {
                'user.relationTo': {
                  equals: user.collection,
                },
              },
              {
                'user.value': {
                  equals: user.id,
                },
              },
            ],
          },
        })
        ?.then((res) => res?.docs?.[0]?.value)
    // @ts-expect-error - ts mismatch Partial<TextFieldClientProps>
      : null,
)
