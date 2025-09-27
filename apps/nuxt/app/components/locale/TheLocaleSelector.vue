<script setup lang="ts">
import type { vcDropdownMenuItemProps } from '@wisemen/vue-core-components'
import {
  VcDropdownMenu,
  VcIcon,
} from '@wisemen/vue-core-components'

import { translateLocale } from '~base/translations/locale.translate'

const { locale, locales } = useI18n()

type LocaleObject = typeof locales.value[number]
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed<LocaleObject[]>(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})

const dropdownItems = computed<vcDropdownMenuItemProps[]>(() => {
  return availableLocales.value.map((i) => ({
    label: translateLocale(i.code),
    type: 'option',
    onSelect: () => {
      void navigateTo(switchLocalePath(i.code))
    },
  }))
})
</script>

<template>
  <VcDropdownMenu
    :items="dropdownItems"
    popover-align="end"
  >
    <template #trigger>
      <button
        class="
          flex items-center gap-1 px-2 py-1 text-sm font-medium text-white
          uppercase
        "
      >
        <span>
          {{ locale }}
        </span>
        <VcIcon
          icon="chevronDown"
          class="size-4"
        />
      </button>
    </template>
  </VcDropdownMenu>
</template>
