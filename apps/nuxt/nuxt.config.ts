/* eslint-disable node/prefer-global/process */
import path from 'node:path'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-07',
  alias: {
    '@': path.resolve(__dirname, './disable'),
    '@@': path.resolve(__dirname, './disable'),
    '@trpc-router': path.resolve(__dirname, '../payload/src/trpc/router/trpc.router.ts'),
    '~base': path.resolve(__dirname, './layers/base'),
    '~cms': path.resolve(__dirname, './layers/cms'),
    '~root': path.resolve(__dirname, './'),
    '~settings': path.resolve(__dirname, './layers/settings'),
    '~~': path.resolve(__dirname, './disable'),

  },

  app: {
    head: {
      title: 'Nuxt Project Template',
      link: [
        { href: '/favicon.ico', rel: 'icon', type: 'image/ico' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { id: 'description', name: 'description', content: '' },
      ],
    },
  },

  components: [],

  devtools: { enabled: true },

  eslint: {
    config: {
      standalone: false,
    },
  },

  experimental: {
    typedPages: true,
  },

  future: {
    compatibilityVersion: 4,
  },

  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
    defaultLocale: 'nl',
    experimental: {
      typedOptionsAndMessages: 'default',
      typedPages: true,
    },
    langDir: 'locales',
    locales: [
      { iso: 'en-US', code: 'en', file: 'en.json', language: 'en-US' },
      { iso: 'nl-BE', code: 'nl', file: 'nl.json', language: 'nl-BE' },
      { iso: 'fr-FR', code: 'fr', file: 'fr.json', language: 'fr-FR' },
    ],
    strategy: 'prefix',
  },

  imports: {
    scan: false,
  },
  modules: [
    '@nuxt/eslint',
  ],

  nitro: {
    compressPublicAssets: {
      brotli: true,
    },
    prerender: {
      failOnError: false,
    },
  },
})
