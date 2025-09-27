'use client'

import { useRowLabel } from '@payloadcms/ui'

export function FieldArrayRowLabelSocials() {
  const { data } = useRowLabel<{ social: { name?: string } }>()

  const customLabel = `${data?.social?.name ?? '...'}`

  return (
    <div>
      {customLabel}
    </div>
  )
}
