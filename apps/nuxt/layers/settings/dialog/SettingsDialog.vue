<script setup lang="ts">
import type { Icon } from '@wisemen/vue-core-components'
import {
  VcDialog,
  VcDialogCloseButton,
  VcDialogTitle,
  VcIcon,
} from '@wisemen/vue-core-components'
import { VisuallyHidden } from 'reka-ui'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppUnstyledButton from '~base/components/app/button/AppUnstyledButton.vue'
import SettingsAccounts from '~settings/components/account/SettingsAccounts.vue'
import SettingsAppearance from '~settings/components/appearance/SettingsAppearance.vue'
import { useSettingNavigation } from '~settings/composables/useSettingsNavigation.composable'
import type { SettingKey } from '~settings/types/settingsKey.type'

// import AppSearchInputField from '@/components/app/AppSearchInputField.vue'
// import AppUnstyledButton from '@/components/app/AppUnstyledButton.vue'
// import AppAsyncComponent from '@/components/app/async-component/AppAsyncComponent.vue'
// import AppTextHighlight from '@/components/app/text-highlight/AppTextHighlight.vue'

const { t } = useI18n()

interface MenuItem<TKey> {
  title: string
  icon: Icon
  key: TKey
}

interface MenuItemGroup<TKey> {
  title: string
  items: MenuItem<TKey>[]
}

const menuItems = computed<MenuItemGroup<SettingKey>>(() => {
  return {
    title: t('settings.general_settings'),
    items: [],
  }
})

const navigation = useSettingNavigation({
  default: 'account',
})

const activeMenuItem = computed<SettingKey>(() => navigation.currentItem.value.item)

function isActive(key: SettingKey): boolean {
  return activeMenuItem.value === key
}

function onMenuItemClick(key: SettingKey): void {
  navigation.onNavigate(key)
}
</script>

<template>
  <VcDialog
    class="
      my-4xl flex size-full max-h-[80vh] max-w-[90vw]
      lg:max-w-[70vw]
    "
  >
    <div class="absolute top-2 right-2">
      <VcDialogCloseButton />
    </div>

    <div
      class="
        bg-tertiary py-xl gap-xl border-secondary px-2xl flex w-full
        max-w-[16rem] shrink-0 flex-col overflow-y-auto border-r
      "
    >
      <div class="gap-xl flex flex-col">
        <VisuallyHidden>
          <VcDialogTitle>
            <h1 class="text-primary text-lg font-bold">
              {{ t('settings.title') }}
            </h1>
          </VcDialogTitle>
        </VisuallyHidden>
      </div>

      <div
        class="gap-lg flex flex-col"
      >
        <span class="text-tertiary text-xs font-semibold uppercase">{{ menuItems.title }}</span>

        <div
          v-for="item in menuItems.items"
          :key="item.key"
        >
          <div class="-mx-xs gap-sm flex flex-col">
            <AppUnstyledButton
              class="
                gap-lg p-xxs group flex w-full cursor-pointer items-center
                rounded-lg transition-all
              "
              @click="onMenuItemClick(item.key)"
            >
              <span
                :class="{
                  'bg-brand-solid border-brand text-primary-on-brand': isActive(item.key),
                  'bg-primary border-primary text-primary': !isActive(item.key),
                }"
                class="
                  group-hover:border-brand
                  p-md flex items-center justify-center rounded-lg border
                "
              >
                <VcIcon
                  :icon="item.icon"
                  class="size-3"
                />
              </span>
              <span
                :class="{
                  'text-primary': isActive(item.key),
                  'text-tertiary': !isActive(item.key),
                }"
                class="
                  group-hover:text-primary
                  text-sm font-medium
                "
              >
                {{ item.title }}
              </span>
            </AppUnstyledButton>
          </div>
        </div>
      </div>
    </div>
    <div class="gap-2xl p-2xl flex w-full flex-col">
      <SettingsAccounts v-if="isActive('account')" />
      <SettingsAppearance v-else-if="isActive('appearance')" />
    </div>
  </VcDialog>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
