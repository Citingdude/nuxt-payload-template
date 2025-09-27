import { socialSchema } from '@repo/models'

import { publicProcedure } from '../../procedures/procedures'

export const getSettingsSocials = publicProcedure
  .output(socialSchema.array())

export const SETTINGS_CONTRACT = {
  getSettingsSocials,
}
