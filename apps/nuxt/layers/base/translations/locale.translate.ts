import { useGlobalI18n } from '~base/composables/i18n/useGlobaI18n'

export function translateLocale(type: string): string {
  const { t } = useGlobalI18n()

  switch (type) {
    case 'fr':
      return t('base.locale.fr')
    case 'nl':
      return t('base.locale.nl')
    case 'en':
      return t('base.locale.en')
    default:
      return t('base.locale.en')
  }
}
