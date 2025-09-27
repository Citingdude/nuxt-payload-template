import type { RequiredKeys } from '~base/types/keys/requiredKeys.type'
import type enUs from '~root/i18n/locales/en.json'

type Flatten<T, P extends string = ''> = {
  [K in keyof T]: T[K] extends object
    ? `${P}${K & string}` | Flatten<T[K], `${P}${K & string}.`>
    : `${P}${K & string}`
}[keyof T]

export type I18nKey = Flatten<typeof enUs>

export type I18nKeyMap<TEnum extends string> = Map<TEnum, I18nKey>

export function createI18nKeyMap<TEnum extends string>(enumValues: RequiredKeys<TEnum, I18nKey>): I18nKeyMap<TEnum> {
  return new Map(Object.entries(enumValues)) as I18nKeyMap<TEnum>
}
