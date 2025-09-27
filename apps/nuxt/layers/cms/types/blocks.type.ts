import type { ColumnBlocks } from '@repo/payload-types'

export type SingleColumnBlock = NonNullable<NonNullable<ColumnBlocks>[number]['block']>[number]
