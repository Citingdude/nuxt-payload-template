<script setup lang="ts">
import { useVcDialog, VcButton } from '@wisemen/vue-core-components'

import { NuxtLinkLocale } from '#components'
import HeaderLogo from '~/components/header/HeaderLogo.vue'
import TheLocaleSelector from '~/components/locale/TheLocaleSelector.vue'

const { t } = useI18n()

const settingsDialog = useVcDialog({
  component: () => import('~settings/dialog/SettingsDialog.vue'),

})

function onSettingsOpen(): void {
  settingsDialog.open()
}
</script>

<template>
  <header class="sticky top-0 z-20 w-full">
    <div class="bg-black to-transparent py-6">
      <div class="container mx-auto px-4">
        <div
          class="
            bg-primary-500 flex items-center justify-between
            lg:grid lg:grid-cols-3 lg:items-center lg:justify-center
          "
        >
          <HeaderLogo />
          <div />
          <div class="flex items-center justify-end gap-4">
            <NuxtLinkLocale
              :to="{
                path: '/page/home',
              }"
              class="text-primary-on-brand"
            >
              {{ t('app.header.home') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
              :to="{
                path: '/page/form',
              }"
              class="text-primary-on-brand"
            >
              {{ t('app.header.form') }}
            </NuxtLinkLocale>

            <VcButton @click="onSettingsOpen">
              {{ t('app.header.settings') }}
            </VcButton>
            <TheLocaleSelector />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
