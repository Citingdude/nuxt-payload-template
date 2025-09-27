import { blogCollections } from '@payload/collections/blogs/blog.collections'
import { formCollections } from '@payload/collections/form/form.collections'
import { mediaCollections } from '@payload/collections/medias/media.collections'
import { pageCollections } from '@payload/collections/pages/page.collections'
import { tenantCollections } from '@payload/collections/tenants/tenant.collections'
import { userCollections } from '@payload/collections/users/user.collections'

export default [
  ...pageCollections,
  ...formCollections,
  ...userCollections,
  ...mediaCollections,
  ...tenantCollections,
  ...blogCollections,
]
