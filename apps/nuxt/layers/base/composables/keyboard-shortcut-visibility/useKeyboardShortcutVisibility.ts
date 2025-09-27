const COOKIE_KEY = 'show-keyboard-shortcuts'

export function useKeyboardShortcutVisibilityValue(): Ref<boolean> {
  return useCookie<boolean>(COOKIE_KEY, {
    default: () => false,
  })
}
