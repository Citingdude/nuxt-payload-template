import type { FetchOptions } from 'ofetch'

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
      CMS_BASE_URL,
    } = getEnv()

    const unauthorizedApi = $fetch.create({
      baseURL: `${CMS_BASE_URL}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    return {
      provide: {
        unauthorizedApi,
      },
    }
  },
})
