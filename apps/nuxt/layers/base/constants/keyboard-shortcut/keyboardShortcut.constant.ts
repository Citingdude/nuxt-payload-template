import type { VcKeyboardShortcutProviderProps } from '@wisemen/vue-core-components'

export const KEYBOARD_SHORTCUT = {
  EDIT: {
    keyboardKeys: [
      'e',
    ],
  },
  NEW: {
    keyboardKeys: [
      'n',
    ],
  },
  SAVE: {
    keyboardKeys: [
      'enter',
    ],
  },
  SEARCH: {
    keyboardKeys: [
      'meta',
      'f',
    ],
    preventDefault: true,
  },
} satisfies Record<string, VcKeyboardShortcutProviderProps>
