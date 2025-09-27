import path from 'node:path'

import { ONE_HOUR_IN_SECONDS } from '@repo/constants'

export default defineNuxtConfig({
  alias: {
    '@cms': path.resolve(__dirname, '../cms'),
    '~base': path.resolve(__dirname, '../base'),
  },
  components: [],
  extends: [
    '../base',
  ],
  routeRules: {
    '/page/**': {
      swr: ONE_HOUR_IN_SECONDS,
    },
  },
})
