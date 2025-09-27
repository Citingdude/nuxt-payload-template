<script setup lang="ts">
interface Props {
  theme: 'dark' | 'light'
}

withDefaults(defineProps<Props>(), {
  theme: 'dark',
})
</script>

<template>
  <section
    :class="{
      'bg-brand-primary': theme === 'dark',
      'bg-white': theme === 'light',
    }"
    class="py-24"
  >
    <slot />
  </section>
</template>
