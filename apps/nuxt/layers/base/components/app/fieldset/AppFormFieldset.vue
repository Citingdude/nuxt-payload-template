<script setup lang="ts">
import { VisuallyHidden } from 'reka-ui'

import AppFieldset from '~base/components/app/fieldset/AppFieldset.vue'
import AppFieldsetLegend from '~base/components/app/fieldset/AppFieldsetLegend.vue'

const props = withDefaults(
  defineProps<{
    title: string
    isTitleHidden?: boolean
    description?: string | null
  }>(),
  {
    isTitleHidden: false,
    description: null,
  },
)
</script>

<template>
  <AppFieldset
    class="
      gap-x-6xl gap-y-xl grid
      md:grid-cols-3
    "
  >
    <div>
      <Component :is="props.isTitleHidden ? VisuallyHidden : 'div'">
        <AppFieldsetLegend
          as="h2"
          class="text-primary font-medium"
        >
          {{ props.title }}
        </AppFieldsetLegend>
      </Component>

      <p
        v-if="props.description !== null"
        class="mt-sm text-secondary text-sm"
      >
        {{ props.description }}
      </p>
    </div>

    <div class="col-span-2">
      <slot />
    </div>
  </AppFieldset>
</template>
