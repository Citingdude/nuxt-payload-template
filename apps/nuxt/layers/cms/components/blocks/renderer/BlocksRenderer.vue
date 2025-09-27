<script setup lang="ts">
import BlocksColumn from '@cms/components/blocks/column/BlocksColumn.vue'
import BlocksHero from '@cms/components/blocks/hero/BlocksHero.vue'
import BlocksHubspotForm from '@cms/components/blocks/hubspot/BlocksHubspotForm.vue'
import BlocksRendererError from '@cms/components/blocks/renderer/BlocksRendererError.vue'
import BlocksRendererNotSupported from '@cms/components/blocks/renderer/BlocksRendererNotSupported.vue'
import type { Page } from '@repo/payload-types'

import { NuxtErrorBoundary } from '#components'

interface Props {
  blocks: Page['blocks']
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <template
      v-for="(block) in blocks"
      :key="JSON.stringify(block)"
    >
      <NuxtErrorBoundary>
        <BlocksHero
          v-if="block.blockType === 'hero'"
          :block="block"
        />
        <BlocksColumn
          v-else-if="block.blockType === 'column'"
          :block="block"
        />
        <BlocksHubspotForm
          v-else-if="block.blockType === 'hubspot-form'"
          :block="block"
        />
        <BlocksRendererNotSupported
          v-else
          :block-name="(block as any).blockType ?? 'Unknown'"
        />
        <template #error>
          <BlocksRendererError />
        </template>
      </NuxtErrorBoundary>
    </template>
  </div>
</template>
