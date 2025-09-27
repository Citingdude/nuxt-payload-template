import type { ComputedRef } from 'vue'

export function useTheme(): {
  theme: ComputedRef<string>
} {
  const theme = useState<string>('theme', () => 'default')

  return {
    theme: computed<string>(() => theme.value),
  }
}
