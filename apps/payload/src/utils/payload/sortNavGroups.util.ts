import { navSorting } from '@payload/payload.nav'
import type { NavGroupType } from '@payloadcms/ui/shared'
import type { CollectionSlug, GlobalSlug } from 'payload'

export function sortNavGroups(groups: NavGroupType[]): NavGroupType[] {
  const sortedGroups = groups.toSorted((a, b) => {
    const groupSorting = Object.keys(navSorting)
    const aIndex = groupSorting.indexOf(a.label.toLocaleLowerCase())
    const bIndex = groupSorting.indexOf(b.label.toLocaleLowerCase())

    if (aIndex === -1 && bIndex === -1) {
      return 0
    }

    if (aIndex === -1) {
      return 1
    }

    if (bIndex === -1) {
      return -1
    }

    return aIndex - bIndex
  })

  for (const group of sortedGroups) {
    group.entities = group.entities.toSorted((a, b) => {
      const slugOrder = navSorting[group.label.toLocaleLowerCase()]

      if (slugOrder == null) {
        return 0
      }

      const aIndex = slugOrder.indexOf(a.slug as CollectionSlug | GlobalSlug)
      const bIndex = slugOrder.indexOf(b.slug as CollectionSlug | GlobalSlug)

      if (aIndex === -1 && bIndex === -1) {
        return 0
      }

      if (aIndex === -1) {
        return 1
      }

      if (bIndex === -1) {
        return -1
      }

      return aIndex - bIndex
    })
  }

  return sortedGroups
}
