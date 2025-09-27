<script setup lang="ts">
import AppCard from '~base/components/app/AppCard.vue'

const { t } = useI18n()
</script>

<template>
  <AppCard>
    <div
      class="
        flex h-full min-h-80 flex-1 flex-col items-center justify-center gap-2
      "
    >
      <p class="font-bold text-gray-500">
        {{ t('base.shared.under_construction') }}
      </p>
      <p class="text-neutral-300">
        {{ t('base.shared.coming_soon') }}
      </p>
      <slot />
    </div>
  </AppCard>
</template>
