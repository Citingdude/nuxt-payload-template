<script setup lang="ts">
defineProps<{
  blockName: string
}>()

const { t } = useI18n()
</script>

<template>
  <div class="border-error-200 bg-error-50 rounded border p-4">
    <div class="flex flex-col gap-2">
      <p class="text-body text-error-800 text-center">
        {{ t('cms.blocks.not_supported', { blockName }) }}
      </p>
    </div>
  </div>
</template>
