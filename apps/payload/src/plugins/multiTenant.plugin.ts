import { multiTenantPlugin } from '@payloadcms/plugin-multi-tenant'
import type { Config } from '@repo/payload-types'

export function pluginMultiTentant() {
  return multiTenantPlugin<Config>({
    collections: {
      blogs: {},
    },
    tenantField: {
      access: {
        read: () => true,
        update: () => true,
      },
    },
    tenantsArrayField: {
      includeDefaultField: false,
    },
    userHasAccessToAllTenants: (user) => {
      return user.role === 'super-admin'
    },
  })
}
