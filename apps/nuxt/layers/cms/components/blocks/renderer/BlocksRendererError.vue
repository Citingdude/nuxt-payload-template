<script setup lang="ts">
import { VcIcon } from '@wisemen/vue-core-components'

const { t } = useI18n()
</script>

<template>
  <div
    class="
      border-error-800 bg-error-50 text-error-800 mx-4 flex items-center gap-4
      rounded border p-4
    "
  >
    <VcIcon
      icon="alertCircle"
      size="lg"
      class="text-error-800"
    />
    <div>
      <p class="text-subtext">
        {{ t('cms.blocks.error_title') }}
      </p>
      <p class="text-caption">
        {{ t('cms.blocks.error') }}
      </p>
    </div>
  </div>
</template>
