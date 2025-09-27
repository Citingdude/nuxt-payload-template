import { oc } from '@orpc/contract'

import { ERROR_UNAUTHORIZED } from '../errors/errors'

export const authProcedure = oc.errors({
  ERROR_UNAUTHORIZED,
})
export const publicProcedure = oc
