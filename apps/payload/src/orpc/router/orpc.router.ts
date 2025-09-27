import { authRouter } from '@payload/modules/auth/auth.router'
import { pagesRouter } from '@payload/modules/pages/pages.router'
import { settingsRouter } from '@payload/modules/settings/settings.router'
import { orpc } from '@payload/orpc/orpc'

export const orpcRouter = orpc.router({
  auth: authRouter,
  pages: pagesRouter,
  settings: settingsRouter,
})
