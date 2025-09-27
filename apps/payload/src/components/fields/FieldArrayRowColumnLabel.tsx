'use client'

import { useRowLabel } from '@payloadcms/ui'

export function FieldArrayRowColumnLabel() {
  const { rowNumber } = useRowLabel<{ name?: string }>()

  const customLabel = rowNumber === 0 ? 'Left column' : 'Right column'

  return (
    <div>
      {customLabel}
    </div>
  )
}
