<script setup lang="ts">
import type { VcButtonProps } from '@wisemen/vue-core-components'
import { VcButton } from '@wisemen/vue-core-components'

const props = defineProps<VcButtonProps>()
</script>

<template>
  <VcButton
    v-bind="props"
    :style-config="{
      '--button-border-radius-default': '0px',
      '--button-text-color-hover': 'var(--black)',
      '--button-bg-color-hover': 'var(--white)',
      '--button-bg-color-active': 'var(--black)',
      '--button-bg-color-default': 'var(--black)',
      '--button-bg-color-focus': 'var(--black)',
      '--button-text-color-default': 'var(--white)',
      '--button-text-color-focus': 'var(--white)',
      '--button-border-color-default': 'var(--white)',
      '--button-border-color-focus': 'var(--white)',
      '--button-border-color-hover': 'var(--white)',
      '--button-padding-left-default': '2rem',
      '--button-padding-right-default': '2rem',
    }"
    as="div"
    variant="secondary"
  >
    <slot />
  </VcButton>
</template>
