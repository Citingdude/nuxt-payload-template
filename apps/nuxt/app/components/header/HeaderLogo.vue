<script setup lang="ts">
import { NuxtLinkLocale } from '#components'
import AppLogo from '~base/components/app/AppLogo.vue'
</script>

<template>
  <NuxtLinkLocale
    :to="{
      name: 'index',
    }"
    class="focus-ring-white"
  >
    <AppLogo class="h-12" />
  </NuxtLinkLocale>
</template>
