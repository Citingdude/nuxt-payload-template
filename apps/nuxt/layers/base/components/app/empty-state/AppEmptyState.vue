<script setup lang="ts">
import type { Icon } from '@wisemen/vue-core-components'
import { VcIcon } from '@wisemen/vue-core-components'

import SvgGridBackground from '~base/components/svg/SvgGridBackground.vue'

interface Props {
  icon: Icon
}

defineProps<Props>()
</script>

<template>
  <div
    class="
      relative flex size-[480px] flex-col items-center justify-center rounded-md
    "
  >
    <SvgGridBackground
      class="
        pointer-events-none absolute top-1/2 left-1/2 size-full -translate-x-1/2
        -translate-y-1/2 opacity-10
      "
    />
    <div class="z-20 flex flex-col items-center justify-center text-center">
      <div
        class="mb-6 max-w-max rounded-md p-3"
      >
        <VcIcon
          :icon="icon"
          size="lg"
        />
      </div>
      <div class="flex flex-col gap-2">
        <slot />
      </div>
    </div>
  </div>
</template>
