import process from 'node:process'

import { getEnv } from '@payload/env'
import { s3Storage } from '@payloadcms/storage-s3'

export function pluginStorage() {
  const env = getEnv()

  return s3Storage({
    bucket: env.S3_BUCKET as string,
    collections: {
      icons: true,
      images: true,
    },
    config: {
      credentials: {
        accessKeyId: env.S3_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
      },
      endpoint: env.S3_ENDPOINT as string,
      region: env.S3_REGION as string,
    },
    enabled: env.ENVIRONMENT !== 'local',
  })
}
