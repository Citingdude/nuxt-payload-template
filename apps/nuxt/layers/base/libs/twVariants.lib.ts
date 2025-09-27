import { createTV } from 'tailwind-variants'

import { config } from '~base/libs/twMerge.lib'

export type { VariantProps } from 'tailwind-variants'

export const tv = createTV({
  twMergeConfig: config,
})
