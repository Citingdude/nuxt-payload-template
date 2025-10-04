/* eslint-disable perfectionist/sort-objects */
import { toCapatilize } from '@repo/utils'
import type {
  CollectionConfig,
  CollectionSlug,
  GlobalConfig,
  GlobalSlug,
} from 'payload'

export const navSorting: Record<string, (CollectionSlug | GlobalSlug)[]> = {
  content: [
    'pages',
    'blogs',
  ],
  media: [
    'images',
    'icons',
  ],
  users: [
    'users',
  ],
  settings: [
    'settings',
  ],
}

export function setCollectionGroups<TType extends CollectionConfig | GlobalConfig>(collectionsAndGlobals: (TType)[]):
(TType)[] {
  for (const collectionOrGlobal of collectionsAndGlobals) {
    const foundGroup = Object.keys(navSorting).find((group) =>
      navSorting[group].includes(collectionOrGlobal.slug as CollectionSlug | GlobalSlug))

    if (foundGroup) {
      collectionOrGlobal.admin = {
        group: toCapatilize(foundGroup),
        ...collectionOrGlobal.admin,
      }
    }
  }

  return collectionsAndGlobals
}
