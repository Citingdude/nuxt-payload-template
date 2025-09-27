import type { CurrentUser } from '@repo/models'
import {
  computed,
  ref,
} from 'vue'

import { AuthService } from '~base/modules/auth/api/services/auth.service'

export const useAuthStore = defineStore('auth', () => {
  const oAuthClient = useNuxtApp().$oAuthClient
  const lastLoginAttemptEmail = ref<string | null>(null)
  const currentUser = ref<CurrentUser | null>(null)
  const lastLoggedInUser = useCookie<CurrentUser | null>('lastLoggedInUser')
  const isAuthenticated = computed<boolean>(() => currentUser.value !== null)

  async function getLoginUrl(): Promise<string> {
    return await oAuthClient.getLoginUrl()
  }

  function getLogoutUrl(): string {
    return oAuthClient.getLogoutUrl()
  }

  function setCurrentUser(user: CurrentUser | null): void {
    currentUser.value = user
  }

  function setLastLoginAttemptEmail(email: string | null): void {
    lastLoginAttemptEmail.value = email
  }

  function setLastLoggedInUser(user: CurrentUser | null): void {
    lastLoggedInUser.value = user
  }

  async function getCurrentUser(): Promise<CurrentUser> {
    if (currentUser.value != null) {
      return currentUser.value
    }

    currentUser.value = await AuthService.getCurrentUser()

    return currentUser.value
  }

  async function logout(): Promise<void> {
    const router = useRouter()
    const localeRoute = useLocaleRoute()
    const localeAuthRoute = localeRoute('auth-login')

    oAuthClient.logout()
    setCurrentUser(null)

    if (localeAuthRoute == null) {
      return
    }

    await router.push(localeAuthRoute)
  }

  function logoutWithoutRedirect(): void {
    oAuthClient.logout()
    setCurrentUser(null)
  }

  async function loginWithCode(code: string): Promise<void> {
    await oAuthClient.loginWithCode(code)
    setLastLoggedInUser(currentUser.value)
  }

  async function getToken(): Promise<string | null> {
    return await oAuthClient.getAccessToken()
  }

  return {
    isAuthenticated,
    currentUser,
    getCurrentUser,
    getLoginUrl,
    getLogoutUrl,
    getToken,
    lastLoggedInUser,
    lastLoginAttemptEmail,
    loginWithCode,
    logout,
    logoutWithoutRedirect,
    setCurrentUser,
    setLastLoggedInUser,
    setLastLoginAttemptEmail,
  }
})
