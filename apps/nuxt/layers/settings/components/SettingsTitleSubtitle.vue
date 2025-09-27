<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="mb-2 flex flex-col">
    <h2
      class="text-primary font-medium"
    >
      {{ props.title }}
    </h2>
    <p
      class="mt-sm text-secondary text-sm"
    >
      {{ props.subtitle }}
    </p>
  </div>
</template>
