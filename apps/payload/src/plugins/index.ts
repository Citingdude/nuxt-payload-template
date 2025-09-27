import { pluginMultiTentant } from '@payload/plugins/multiTenant.plugin'
import { pluginStorage } from '@payload/plugins/s3Storage.plugin'
import { pluginSeo } from '@payload/plugins/seo.plugin'
import type { Plugin } from 'payload'

export const plugins: Plugin[] = [
  pluginSeo(),
  pluginStorage(),
  pluginMultiTentant(),
]
