import type { Ref } from 'vue'

const COOKIE_KEY = 'high-contrast-mode'

export function useHighContrastMode(): Ref<boolean> {
  return useCookie<boolean>(COOKIE_KEY, {
    default: () => false,
  })
}
