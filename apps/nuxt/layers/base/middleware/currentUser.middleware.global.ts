import { defineNuxtRouteMiddleware } from 'nuxt/app'

import { useAuthStore } from '~base/stores/auth.store'

export const ROUTES_TO_IGNORE = [
  '/auth/callback',
  '/auth/register',
  '/auth/login',
]
export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore()
  const oAuthClient = useNuxtApp().$oAuthClient
  const localeRoute = useLocaleRoute()

  const localeRoutes = ROUTES_TO_IGNORE.map((route) => localeRoute(route as any))
  const foundIgnoredPath = localeRoutes.find((route) => route.path === to.path)

  if (foundIgnoredPath != null) {
    return
  }

  const hasTokens = await oAuthClient.isLoggedIn()

  try {
    if (hasTokens) {
      await authStore.getCurrentUser()
    }
  }
  catch {
    authStore.logoutWithoutRedirect()
  }
})
