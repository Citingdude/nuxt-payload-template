import path from 'node:path'

import { defineLocalBusiness } from 'nuxt-schema-org/schema'

// TODO: Fill in seo data
export default defineNuxtConfig({
  alias: {
    '~base': path.resolve(__dirname, '../base'),
  },

  extends: [
    '../base',
  ],

  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org',
  ],
  schemaOrg: {
    identity: defineLocalBusiness({
      // Basic Information
      'name': 'Template',
      '@type': 'EmploymentAgency',
      'address': {
        addressCountry: 'Belgium',
        addressLocality: 'Diepenbeek',
        addressRegion: 'Flanders',
        postalCode: '3590',
        streetAddress: 'Watertorenstraat 2',
      },
      'logo': '/logo.png',
      'url': 'https://wisemen.digital',
    }),
  },
  site: {
    title: 'Template',
    description: 'Fill this in!',
    url: 'https://wisemen.digital',
  },

  sitemap: {
    cacheMaxAgeSeconds: 1 * 60 * 60 * 24,
    experimentalCompression: true,
    experimentalWarmUp: true,
  },

})
