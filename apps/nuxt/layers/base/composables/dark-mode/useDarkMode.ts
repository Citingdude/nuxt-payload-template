export type DarkModeValue = 'dark' | 'light' | 'system'
export function useDarkMode() {
  const darkModeValue = useState<DarkModeValue>('darkmode', () => 'system')

  return darkModeValue
}
