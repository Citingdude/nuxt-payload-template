<script setup lang="ts">
import { NuxtLinkLocale } from '#components'
import HeaderLogo from '~/components/header/HeaderLogo.vue'
import TheLocaleSelector from '~/components/locale/TheLocaleSelector.vue'

const {
  t,
} = useI18n()
</script>

<template>
  <header class="sticky top-0 z-20 w-full">
    <div class="bg-black to-transparent py-6">
      <div class="container mx-auto px-4">
        <div
          class="
            flex items-center justify-between
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
            >
              {{ t('app.header.home') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
              :to="{
                path: '/page/form',
              }"
            >
              {{ t('app.header.form') }}
            </NuxtLinkLocale>
            <TheLocaleSelector />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
