import type { ComputedRef, InjectionKey } from 'vue'
import {
  computed,
  inject,
  provide,
} from 'vue'

import type { DarkModeValue } from '~base/composables/dark-mode/useDarkMode'

interface ThemeProviderContext {
  darkModeValue: ComputedRef<DarkModeValue>
  theme: ComputedRef<string & {} | 'default'>
}

export const themeProviderContextKey: InjectionKey<ThemeProviderContext> = Symbol('themeProviderContextKey')

export function provideThemeProviderContext(context: ThemeProviderContext): void {
  provide(themeProviderContextKey, context)
}

export function injectThemeProviderContext(): ThemeProviderContext {
  const context = inject(themeProviderContextKey, null)

  if (context === null) {
    return {
      darkModeValue: computed<DarkModeValue>(() => 'system'),
      theme: computed<string>(() => 'default'),
    }
  }

  return context
}
