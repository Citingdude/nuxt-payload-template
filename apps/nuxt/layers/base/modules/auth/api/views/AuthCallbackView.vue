<script lang="ts" setup>
import { useVcToast } from '@wisemen/vue-core-components'
import { useI18n } from 'vue-i18n'

import { useAuthStore } from '~base/stores/auth.store'

const i18n = useI18n()
const authStore = useAuthStore()
const localeRoute = useLocaleRoute()
const routeQuery = useRoute()
const toast = useVcToast()

async function loginCallback() {
  const authorizationCode = routeQuery.query.code as string

  if (authorizationCode === undefined) {
    toast.error({
      title: i18n.t('auth.callback.login_error.title'),
      description: i18n.t('auth.callback.login_error.description'),
    })

    const localeLoginRoute = localeRoute('auth-login')

    if (localeLoginRoute == null) {
      return
    }

    await navigateTo(localeLoginRoute)

    return
  }

  try {
    await authStore.loginWithCode(authorizationCode)

    const localeIndexRoute = localeRoute('index')

    if (localeIndexRoute == null) {
      return
    }

    await navigateTo(localeIndexRoute)
  }
  catch (error) {
    console.error(error)
    toast.error({
      title: i18n.t('auth.callback.login_error.title'),
      description: i18n.t('auth.callback.login_error.description'),
    })
  }
}

onMounted(() => {
  loginCallback()
})
</script>

<template>
  <div />
</template>
