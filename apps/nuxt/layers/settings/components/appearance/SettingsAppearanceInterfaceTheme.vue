<script setup lang="ts">
import {
  VcRadioGroup,
  VcRadioGroupItem,
} from '@wisemen/vue-core-components'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppThemeProvider from '~base/components/app/theme-provider/AppThemeProvider.vue'
import { useDarkMode } from '~base/composables/dark-mode/useDarkMode'
import { useTheme } from '~base/composables/theme/theme.composable'
import SettingsAppearanceOverviewMiniDashboard from '~settings/components/appearance/SettingsAppearanceOverviewMiniDashboard.vue'
import SettingsTitleSubtitle from '~settings/components/SettingsTitleSubtitle.vue'

type ThemeValue = 'dark' | 'light' | 'system'

interface ThemeOption {
  label: string
  value: ThemeValue
}

const { t } = useI18n()
const theme = useTheme()
const darkMode = useDarkMode()

const themes = computed<ThemeOption[]>(() => [
  {
    label: t('settings.interface_theme.light'),
    value: 'light',
  },
  {
    label: t('settings.interface_theme.dark'),
    value: 'dark',
  },
  {
    label: t('settings.interface_theme.system_preference'),
    value: 'system',
  },
])

const value = computed<'dark' | 'light' | 'system'>({
  get: () => darkMode.value,
  set: (value) => {
    darkMode.value = value
  },
})
</script>

<template>
  <div>
    <SettingsTitleSubtitle
      :title="t('settings.appearance.interface_theme.title')"
      :subtitle="t('settings.appearance.interface_theme.description')"
    />
    <VcRadioGroup
      v-model="value"
    >
      <div
        class="
          gap-lg grid w-full
          lg:grid-cols-3
        "
      >
        <VcRadioGroupItem
          v-for="item of themes"
          :key="item.value"
          :value="item.value"
          :item="item"
          class="group w-full rounded-xl text-left !ring-0 !ring-offset-0"
        >
          <AppThemeProvider
            :dark-mode-value="item.value"
            :theme="theme.theme.value"
          >
            <div
              class="
                bg-tertiary ring-brand-primary-500 relative h-40 w-full
                overflow-hidden rounded-xl border-2 border-solid
                border-transparent ring-offset-1 duration-200
                group-data-[state=checked]:border-brand
                group-focus-visible:ring-2
              "
            >
              <SettingsAppearanceOverviewMiniDashboard
                class="absolute top-4 left-4"
              />
            </div>
          </AppThemeProvider>

          <span class="mt-md text-primary block text-sm">
            {{ item.label }}
          </span>
        </VcRadioGroupItem>
      </div>
    </VcRadioGroup>
  </div>
</template>
