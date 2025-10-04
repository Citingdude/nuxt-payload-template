<script setup lang="ts">
import type { Image } from '@repo/payload-types'

const props = defineProps<{
  image: string | Image

}>()
</script>

<template>
  <picture v-if="(typeof props.image !== 'string')">
    <template
      v-for="size in Object.values(props.image.sizes ?? {})"
      :key="size.url ?? 'url'"
    >

      <source
        v-if="size.url"
        :media="`(max-width:${size.width}px)`"
        :srcset="size.url"
      >
    </template>

    <img
      v-if="props.image.url"
      :src="props.image.sizes?.desktop?.url ?? props.image.url"
      :alt="props.image.alt ?? ''"
      :class="$attrs.class"
    >
  </picture>
</template>
