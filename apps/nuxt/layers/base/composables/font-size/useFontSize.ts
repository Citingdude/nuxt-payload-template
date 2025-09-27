import type { VcSelectItemProps } from '@wisemen/vue-core-components'
import type {
  ComputedRef,
  Ref,
} from 'vue'
import {
  computed,
  watch,
} from 'vue'

import { useGlobalI18n } from '~base/composables/i18n/useGlobaI18n'
import { createI18nKeyMap } from '~base/types/i18n/i18n.type'

type FontSize = 'default' | 'large' | 'larger' | 'small' | 'smaller'

interface UseFontSizeReturnType {
  displayFn: (value: FontSize) => string
  items: ComputedRef<VcSelectItemProps[]>
  value: Ref<FontSize>
}

const COOKIE_KEY = 'fontSize'

export function useFontSizeSelect(): UseFontSizeReturnType {
  const fontSizes: FontSize[] = [
    'smaller',
    'small',
    'default',
    'large',
    'larger',
  ]

  const i18nKeys = createI18nKeyMap<FontSize>({
    default: 'settings.font_size.default',
    large: 'settings.font_size.large',
    larger: 'settings.font_size.larger',
    small: 'settings.font_size.small',
    smaller: 'settings.font_size.smaller',
  })

  const fontSize = useCookie<FontSize>(COOKIE_KEY, {
    default: () => 'default',
  })

  const value = computed<FontSize>({
    get: () => fontSize.value,
    set: (value) => {
      fontSize.value = value
    },
  })

  function displayFn(value: FontSize): string {
    const {
      t,
    } = useGlobalI18n()

    return t(i18nKeys.get(value)!)
  }

  const items = computed<VcSelectItemProps[]>(() => fontSizes.map((item) => ({
    type: 'option',
    value: item,
  })))

  return {
    displayFn,
    items,
    value,
  }
}

export function useFontSize(): void {
  const fontSize = useCookie<FontSize>(COOKIE_KEY, {
    default: () => 'default',
  })

  const fontSizeToPxMap = new Map<FontSize, number>([
    [
      'smaller',
      12,
    ],
    [
      'small',
      14,
    ],
    [
      'default',
      16,
    ],
    [
      'large',
      18,
    ],
    [
      'larger',
      20,
    ],
  ])

  onMounted(() => {
    watch(fontSize, () => {
      document.documentElement.style.fontSize = `${fontSizeToPxMap.get(fontSize.value)}px`
    }, {
      immediate: true,
    })
  })
}
