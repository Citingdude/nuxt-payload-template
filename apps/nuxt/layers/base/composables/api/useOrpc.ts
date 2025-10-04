import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import type { ContractRouterClient } from '@orpc/contract'
import type { ORPC_CONTRACT } from '@repo/contract'

import { useGlobalI18n } from '~base/composables/i18n/useGlobaI18n'
import { getEnv } from '~base/utils/env/getEnv.utils'

export function useOrpc() {
  const {
    CMS_BASE_URL,
  } = getEnv()
  const {
    locale,
  } = useGlobalI18n()

  const link = new RPCLink({
    headers() {
      const headers: Record<string, string> = {}

      headers['Accept-Language'] = locale.value

      return headers
    },
    url: `${CMS_BASE_URL}/api/rpc`,
  })

  const client: ContractRouterClient<typeof ORPC_CONTRACT> = createORPCClient(link)

  return client
}
