<script setup lang="ts">
import type { Component } from 'vue'

import { useInjectBaseFieldsetContext } from '~base/components/app/fieldset/appFieldset.context'

const props = defineProps<{
  as: string | Component
}>()

const baseFieldsetContext = useInjectBaseFieldsetContext()
</script>

<template>
  <Component
    :is="props.as"
    :id="baseFieldsetContext.id"
  >
    <slot />
  </Component>
</template>
