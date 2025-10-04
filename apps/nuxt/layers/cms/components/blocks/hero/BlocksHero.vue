<script setup lang="ts">
import CmsImage from '@cms/components/image/CmsImage.vue'
import type { HeroBlock } from '@repo/payload-types'

interface Props {
  block: HeroBlock
}

const props = defineProps<Props>()
</script>

<template>
  <section class="body-font text-gray-600">
    <div
      class="
        container mx-auto flex flex-col items-center px-5 py-24
        md:flex-row
      "
    >
      <div
        class="
          mb-10 w-5/6
          md:mb-0 md:w-1/2
          lg:w-full
        "
      >
        <CmsImage
          :image="props.block.backgroundImage"
          alt="hero"
          class="w-full"
        />
      </div>
      <div
        class="
          flex flex-col items-center text-center
          md:w-1/2 md:items-start md:pl-16 md:text-left
          lg:flex-grow lg:pl-24
        "
      >
        <h1
          class="
            title-font mb-4 text-3xl font-medium text-gray-900
            sm:text-4xl
          "
        >
          {{ props.block.title }}
        </h1>

        <p class="mb-8 leading-relaxed">
          {{ props.block.text }}
        </p>

        <div
          v-if="props.block.ctas && props.block.ctas.length > 0"
          class="flex justify-center"
        >
          <button
            v-if="props.block.ctas[0]"
            class="
              bg-primary inline-flex rounded border-0 px-6 py-2 text-lg
              text-white
              hover:bg-indigo-600
              focus:outline-none
            "
          >
            {{ props.block.ctas[0].cta.label }}
          </button>

          <button
            v-if="props.block.ctas[1]"
            class="
              ml-4 inline-flex rounded border-0 bg-gray-100 px-6 py-2 text-lg
              text-gray-700
              hover:bg-gray-200
              focus:outline-none
            "
          >
            {{ props.block.ctas[1].cta.label }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
