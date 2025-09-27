<script setup lang="ts">
import TheHeader from '~/components/header/TheHeader.vue'
</script>

<template>
  <div>
    <div class="flex min-h-screen flex-col">
      <TheHeader />
      <div class="flex w-full flex-1 flex-col items-center justify-center">
        <slot />
      </div>
    </div>
  </div>
</template>
