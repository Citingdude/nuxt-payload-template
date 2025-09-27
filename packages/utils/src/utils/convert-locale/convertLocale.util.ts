export function convertLocale(locale: string): string {
  if (locale === 'en') {
    return 'en-US'
  }

  if (locale === 'nl') {
    return 'nl-BE'
  }

  if (locale === 'fr') {
    return 'fr-FR'
  }

  return locale
}
