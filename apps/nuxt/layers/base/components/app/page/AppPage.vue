<script setup lang="ts">
import AppContainer from '~base/components/app/container/AppContainer.vue'

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex w-full flex-1 flex-col">
    <div class="bg-primary sticky top-0 z-10">
      <AppContainer>
        <div class="flex min-h-10 items-center justify-between">
          <h1
            class="text-display-xs text-primary font-semibold"
          >
            {{ props.title }}
          </h1>

          <div
            id="header-actions"
            class="gap-xl flex items-center justify-end"
          >
            <slot name="header-actions" />
          </div>
        </div>
      </AppContainer>
    </div>

    <AppContainer class="pb-4xl pt-4xl flex flex-1 flex-col overflow-hidden">
      <slot />
    </AppContainer>
  </div>
</template>
