import type { Currency } from '@repo/models'

import { useGlobalI18n } from '~base/composables/i18n/useGlobaI18n'

export function formatCurrency(currency: Currency | null): string {
  if (currency === null) {
    return '-'
  }
  const { locale } = useGlobalI18n()

  const formatter = new Intl.NumberFormat(locale.value, {
    currency: 'EUR',
    style: 'currency',
  })

  return formatter.format(currency)
}
