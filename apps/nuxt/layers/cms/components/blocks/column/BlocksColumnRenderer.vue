<script setup lang="ts">
import BlocksColumnMultipleText from '@cms/components/blocks/column/BlocksColumnMultipleText.vue'
import BlocksColumnTextCta from '@cms/components/blocks/column/BlocksColumnTextCta.vue'
import BlocksRendererNotSupported from '@cms/components/blocks/renderer/BlocksRendererNotSupported.vue'
import type { SingleColumnBlock } from '@cms/types/blocks.type'

interface Props {
  block: SingleColumnBlock
}

defineProps<Props>()
</script>

<template>
  <BlocksColumnTextCta
    v-if="block.blockType === 'columnTextCta'"
    :block="block"
  />
  <BlocksColumnMultipleText
    v-else-if="block.blockType === 'columnMultipleText'"
    :block="block"
  />
  <BlocksRendererNotSupported
    v-else
    :block-name="(block as any).blockType ?? 'Unknown'"
  />
</template>
