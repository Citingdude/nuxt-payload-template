import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    resolve: {
      alias: [
        {
          find: '~base',
          replacement: '/apps/nuxt/layers/base',
        },
        {
          find: '~cms',
          replacement: '/apps/nuxt/layers/cms',
        },
        {
          find: '@payload',
          replacement: '/apps/payload/src',
        },
        {
          find: '@payload-config',
          replacement: '/apps/payload/src/payload.config.ts',
        },
        {
          find: '@payload-types',
          replacement: '/apps/payload',
        },
        {
          find: '@trpc-router',
          replacement: '/apps/payload/src/trpc/router/trpc.router.ts',
        },
        {
          find: '~root',
          replacement: '/apps/nuxt',
        },
      ],
    },
    test: {
      include: ['**/apps/nuxt/**/*.test.{ts,js}'],
      name: 'nuxt',
    }
  },
  {
    test: {
      include: ['**/apps/payload/**/*.test.{ts,js}'],
      name: 'payload',
    }
  },
  {
    test: {
      include: ['**/packages/**/*.test.{ts,js}'],
      name: 'packages',
    }
  }
])