import { getUploadName } from '@payload/utils/upload/getUploadName.util'
import type { CollectionConfig } from 'payload'

export const imageCollection: CollectionConfig = {
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
  hooks: {
    beforeOperation: [
      (req) => {
        if (req.operation === 'create') {
          if (req.req.file) {
            req.req.file.name = getUploadName(req.req.file.name).fileNameWithExtension
          }
        }
      },
    ],
  },
  slug: 'images',
  upload: {
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 80,
          },
        },
        generateImageName: (doc) => {
          return `${doc.originalName}_thumbnail.webp`
        },
        height: undefined,
        position: 'centre',
        width: 400,
        withoutEnlargement: true,
      },
      {
        name: 'card',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 80,
          },
        },
        generateImageName: (doc) => {
          return `${doc.originalName}_card.webp`
        },
        height: undefined,
        position: 'centre',
        width: 768,
        withoutEnlargement: true,
      },
      {
        name: 'tablet',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 80,
          },
        },
        generateImageName: (doc) => {
          return `${doc.originalName}_tablet.webp`
        },
        height: undefined,
        position: 'centre',
        width: 1024,
        withoutEnlargement: true,
      },
      {
        name: 'desktop',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 80,
          },
        },
        generateImageName: (doc) => {
          return `${doc.originalName}_desktop.webp`
        },
        height: undefined,
        position: 'centre',
        width: 1280,
        withoutEnlargement: true,
      },
      {
        name: 'background',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 80,
          },
        },
        generateImageName: (doc) => {
          return `${doc.originalName}_background.webp`
        },
        height: undefined,
        position: 'centre',
        width: 1920,
        withoutEnlargement: true,
      },
    ],
    mimeTypes: [
      'image/*',
    ],
    staticDir: 'images',
  },
}
