<script setup lang="ts">
import { tv } from '~base/libs/twVariants.lib'

const props = withDefaults(defineProps<{
  direction?: 'horizontal' | 'vertical'
}>(), {
  direction: 'horizontal',
})

const style = tv({
  variants: {
    base: 'bg-tertiary',
    direction: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px',
    },
  },
})
</script>

<template>
  <div
    :class="
      style({
        direction: props.direction,
      })
    "
    role="presentation"
  />
</template>
