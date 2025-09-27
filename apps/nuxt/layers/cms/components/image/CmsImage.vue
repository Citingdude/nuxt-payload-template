<script setup lang="ts">
import type { Image } from '@repo/payload-types'

import { getEnv } from '~base/utils/env/getEnv.utils'

interface Props {
  image: string | Image
}

defineProps<Props>()

const { CMS_BASE_URL } = getEnv()

function getImageUrl(url: string): string {
  return `${CMS_BASE_URL}/${url}`
}
</script>

<template>
  <picture v-if="(typeof image !== 'string')">
    <template
      v-for="size in Object.values(image.sizes ?? {})"
      :key="size.url ?? 'url'"
    >

      <source
        v-if="size.url"
        :media="`(max-width:${size.width}px)`"
        :srcset="getImageUrl(size.url)"
      >
    </template>

    <img
      v-if="image.url"
      :src="getImageUrl(image.sizes?.desktop?.url ?? image.url)"
      :alt="image.alt ?? ''"
      :class="$attrs.class"
    >
  </picture>
</template>
