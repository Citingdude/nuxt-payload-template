'use client'

import { useRowLabel } from '@payloadcms/ui'

export function FieldArrayRowSectorLabel() {
  const { data } = useRowLabel<{ sector: { name?: string } }>()

  const customLabel = `${data?.sector?.name ?? '...'}`

  return (
    <div>

      {customLabel}
    </div>
  )
}
