import path from 'node:path'

// TODO: Fill in seo data
export default defineNuxtConfig({
  alias: {
    '~base': path.resolve(__dirname, '../base'),
    '~settings': path.resolve(__dirname, './'),
  },
  extends: [
    '../base',
  ],
})
