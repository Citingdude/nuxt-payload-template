import { defineNuxtRouteMiddleware } from 'nuxt/app'

import { useGlobalI18n } from '~base/composables/i18n/useGlobaI18n'
import { useAuthStore } from '~base/stores/auth.store'

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore()
  const { locale } = useGlobalI18n()
  const oAuthClient = useNuxtApp().$oAuthClient
  const localePath = `/${locale.value}`

  const loginRedirectPath = `${localePath}/auth/login`
  let userFound = true

  try {
    const hasTokens = await oAuthClient.isLoggedIn()

    if (hasTokens == null) {
      return navigateTo(loginRedirectPath)
    }

    await authStore.getCurrentUser()
  }
  catch {
    userFound = false
  }

  if (!userFound) {
    return navigateTo(loginRedirectPath)
  }
})
