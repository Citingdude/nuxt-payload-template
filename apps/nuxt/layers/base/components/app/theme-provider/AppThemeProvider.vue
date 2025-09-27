<script setup lang="ts">
import type { DarkModeValue } from '~base/composables/dark-mode/useDarkMode'
import { useDarkMode } from '~base/composables/dark-mode/useDarkMode'
import {
  injectThemeProviderContext,
  provideThemeProviderContext,
} from '~base/context/theme.context'

const props = withDefaults(defineProps<{
  darkModeValue?: DarkModeValue | null
  theme?: string & {} | 'default' | null
}>(), {
  darkModeValue: null,
  theme: null,
})

function getThemeClasses(theme: string, darkModeValue: DarkModeValue): string {
  const classes = [
    theme,
  ]

  if (darkModeValue === 'dark') {
    classes.push('dark')
  }

  if (darkModeValue === 'system') {
    classes.push('system')
  }

  if (darkModeValue === 'light') {
    classes.push('light')
  }

  return classes.join(' ')
}

const themeContext = injectThemeProviderContext()
const darkMode = useDarkMode()
const darkModeValue = computed<DarkModeValue>(() => (
  props.darkModeValue ?? darkMode.value
))

const theme = computed<string>(() => props.theme ?? themeContext.theme.value)

provideThemeProviderContext({
  darkModeValue,
  theme,
})
</script>

<template>
  <div
    :class="getThemeClasses(theme, darkModeValue)"
  >
    <slot />
  </div>
</template>
