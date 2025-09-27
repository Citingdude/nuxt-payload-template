import { ZitadelClient } from '@wisemen/vue-core-auth'
import type { FetchOptions } from 'ofetch'

import { CookieTokensStrategy } from '~base/utils/auth/tokensStrategy.utils'
import { getEnv } from '~base/utils/env/getEnv.utils'

export function addAuthorizationHeader(
  token: string,
  fetchOptions: FetchOptions,
): FetchOptions {
  fetchOptions.headers = {
    ...fetchOptions.headers,
    Authorization: `Bearer ${token}`,
  }

  return fetchOptions
}

export default defineNuxtPlugin({
  setup() {
    const {
      AUTH_BASE_URL,
      AUTH_CLIENT_ID,
      AUTH_ORGANIZATION_ID,
      CMS_BASE_URL,
      ENVIRONMENT,
      SITE_BASE_URL,
    } = getEnv()

    const oAuthClient = new ZitadelClient({
      clientId: AUTH_CLIENT_ID,
      organizationId: AUTH_ORGANIZATION_ID,
      baseUrl: AUTH_BASE_URL,
      loginRedirectUri: `${SITE_BASE_URL}/auth/callback`,
      offline: ENVIRONMENT === 'e2e',
      postLogoutRedirectUri: `${SITE_BASE_URL}/auth/logout`,
      tokensStrategy: new CookieTokensStrategy(),
    })

    const api = $fetch.create({
      baseURL: `${CMS_BASE_URL}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      async onRequest({ options }) {
        const token = await oAuthClient.getAccessToken()

        if (token == null) {
          return
        }

        addAuthorizationHeader(token, options)
      },
      async onResponseError({ response }) {
        const localeRoute = useLocaleRoute()

        if (response.status === 401) {
          await navigateTo(localeRoute('auth-login'))
        }
      },
    })

    const unauthorizedApi = $fetch.create({
      baseURL: `${CMS_BASE_URL}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    return {
      provide: {
        api,
        oAuthClient,
        unauthorizedApi,
      },
    }
  },
})
