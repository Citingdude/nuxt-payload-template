import { blogCollections } from '@payload/collections/blogs/blog.collections'
import { mediaCollections } from '@payload/collections/medias/media.collections'
import { pageCollections } from '@payload/collections/pages/page.collections'
import { userCollections } from '@payload/collections/users/user.collections'

export default [
  ...pageCollections,
  ...userCollections,
  ...mediaCollections,
  ...blogCollections,
]
