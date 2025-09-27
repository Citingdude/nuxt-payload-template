<script setup lang="ts">
import BlocksColumnRenderer from '@cms/components/blocks/column/BlocksColumnRenderer.vue'
import type { SingleColumnBlock } from '@cms/types/blocks.type'
import type { ColumnBlock } from '@repo/payload-types'

interface Props {
  block: ColumnBlock
}

const props = defineProps<Props>()

const firstColumn = computed<SingleColumnBlock | null>(() => props.block.columns?.[0]?.block?.[0] ?? null)
const secondColumn = computed<SingleColumnBlock | null>(() => props.block.columns?.[1]?.block?.[0] ?? null)
</script>

<template>
  <section class="overflow-hidden">
    <div class="container">
      <!-- <LayoutDivider :text="pageData?.quality_seekers_subtitle" /> -->

      <!-- <div class="flex mt-40 space-x-14 xl:w-[150%]">
        <AppImageSlider :images="getImages" lazy />
      </div> -->
      <div class="grid grid-cols-2 gap-20">
        <div>
          <BlocksColumnRenderer
            v-if="firstColumn"
            :block="firstColumn"
          />
        </div>
        <div>
          <BlocksColumnRenderer
            v-if="secondColumn"
            :block="secondColumn"
          />
        </div>
      </div>
    </div>
  </section>
</template>
