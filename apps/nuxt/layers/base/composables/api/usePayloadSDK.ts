import { PayloadSDK } from '@payloadcms/sdk'
import type { Config } from '@repo/payload-types'

import { getEnv } from '~base/utils/env/getEnv.utils'

export function usePayloadSDK() {
  const {
    CMS_BASE_URL,
  } = getEnv()

  const sdk = new PayloadSDK<Config>({
    baseURL: `${CMS_BASE_URL}/api`,
    fetch: async (url, init) => {
      const response = await fetch(url, init)

      return response
    },
  })

  return sdk
}
