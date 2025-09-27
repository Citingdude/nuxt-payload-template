'use client'

import { useRowLabel } from '@payloadcms/ui'

export function FieldArrayRowLabelName() {
  const { data } = useRowLabel<{ name?: string }>()

  const customLabel = `${data?.name ?? '...'}`

  return (
    <div>
      {customLabel}
    </div>
  )
}
