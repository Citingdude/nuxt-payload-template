import { getEnv } from '@payload/env'
import { getPayload } from '@payload/utils/payload/getPayload.util'
import {
  createRemoteJWKSet,
  jwtVerify,
} from 'jose'
import type {
  AuthStrategy,
  AuthStrategyResult,
} from 'payload'

export const USER_NOT_AUTHENTICATED: AuthStrategyResult = {
  user: null,
}
export const zitadalStrategy: AuthStrategy = {
  name: 'zitadel',
  authenticate: async (ctx) => {
    const payload = await getPayload()

    const env = getEnv()

    const authorizationHeader = ctx.headers.get('Authorization')
    const bearerToken = authorizationHeader?.split(' ')[1]

    if (bearerToken == null) {
      return USER_NOT_AUTHENTICATED
    }

    const jwk = createRemoteJWKSet(new URL(env.AUTH_JWKS_ENDPOINT))

    try {
      const jwtVerifyResponse = await jwtVerify(bearerToken, jwk, {
        issuer: env.AUTH_ISSUER,
        audience: env.AUTH_PROJECT_ID,
      })

      const userEmail = jwtVerifyResponse.payload.email as string

      const users = await payload.find({
        collection: 'users',
        where: {
          email: {
            equals: userEmail,
          },
        },
      })
      const singleUser = users.docs[0]

      if (singleUser == null) {
        const existingUsers = await payload.find({
          collection: 'users',
          limit: 1,
        })

        const existingTenants = await payload.find({
          collection: 'tenants',
          limit: 1,
        })

        let existingTenant = existingTenants.docs[0]
        const isFirstUser = existingUsers.docs.length === 0
        const isFirstTenant = existingTenant == null

        if (isFirstTenant) {
          existingTenant = await payload.create({
            collection: 'tenants',
            data: {
              title: 'Global',
            },
          })
        }

        const createdUser = await payload.create({
          collection: 'users',
          data: {
            darkMode: 'light',
            email: userEmail,
            role: isFirstUser ? 'super-admin' : 'user',
            tenants: [
              {
                roles: [
                  'tenant-admin',
                ],
                tenant: existingTenant.id,
              },
            ],
          },
        })

        return {
          user: {
            ...createdUser,
            collection: 'users',

          },
        }
      }

      if (singleUser.role === 'user') {
        return USER_NOT_AUTHENTICATED
      }

      return {
        user: {
          collection: 'users',
          ...singleUser,
        },
      }
    }
    catch (error) {
      console.error(error)

      return USER_NOT_AUTHENTICATED
    }
  },
}

export const tempZitadalStrategy: AuthStrategy = {
  name: 'zitadel-temp',
  authenticate: async () => {
    const payload = await getPayload()
    const users = await payload.find({
      collection: 'users',
    })

    const singleUser = users.docs[0]

    return {
      user: {
        ...singleUser,
        collection: 'users',
      },
    }
  },
}
