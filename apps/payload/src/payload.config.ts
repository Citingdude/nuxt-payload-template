/* eslint-disable perfectionist/sort-objects */
/* eslint-disable node/prefer-global/process */
import 'dotenv/config'

import path from 'node:path'
import { fileURLToPath } from 'node:url'

import collections from '@payload/collections/collections'
import globals from '@payload/globals/globals'
import { tasks } from '@payload/jobs/tasks/tasks'
import { workflows } from '@payload/jobs/workflows/workflows'
import { migrations } from '@payload/migrations'
import { setCollectionGroups } from '@payload/payload.nav'
import { plugins } from '@payload/plugins'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { en } from 'payload/i18n/en'
import { nl } from 'payload/i18n/nl'
import sharp from 'sharp'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  globals: setCollectionGroups(globals),
  collections: setCollectionGroups(collections),
  admin: {
    components: {
      graphics: {
        Icon: '/components/logo/Logo#Icon',
        Logo: '/components/logo/Logo#Logo',
      },
      Nav: '@payload/components/nav/Nav#DefaultNav',
      afterLogin: [
        '@payload/components/auth/LoginButton',
      ],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  cors: [
    'http://localhost:3000',
    'http://localhost:5173',
  ],
  routes: {
    admin: '/',
  },
  db: postgresAdapter({
    idType: 'uuid',
    prodMigrations: migrations,
    push: true,
    pool: {
      connectionString: process.env.POSTGRES_URI ?? '',
    },
  }),
  editor: lexicalEditor(),
  i18n: {
    supportedLanguages: { en, nl },
  },
  localization: {
    defaultLocale: 'nl',
    locales: [
      'en',
      'nl',
      'fr',
    ],
  },
  plugins: [
    ...plugins,
  ],
  jobs: {
    tasks,
    workflows,
    deleteJobOnComplete: false,
  },
  secret: process.env.PAYLOAD_SECRET ?? '',

  sharp,
  typescript: {
    autoGenerate: true,
    outputFile: path.resolve(`${dirname}/../../../packages/payload-types/src`, 'payload-types.d.ts'),
  },
  async onInit() {

  },

})
