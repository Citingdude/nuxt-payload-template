import { getUploadName } from '@payload/utils/upload/getUploadName.util'
import type { CollectionConfig } from 'payload'

export const iconCollection: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: [
      'filename',
      'alt',
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'content',
      admin: {
        hidden: true,
      },
      type: 'text',
    },
  ],
  hooks: {
    beforeChange: [
      ({
        data,
        req,
      }) => {
        const svgAsString = req.file?.data.toString()

        data.content = svgAsString

        return data
      },
    ],
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
  slug: 'icons',
  upload: {
    mimeTypes: [
      'image/svg+xml',
    ],
    staticDir: 'icons',
  },
}
