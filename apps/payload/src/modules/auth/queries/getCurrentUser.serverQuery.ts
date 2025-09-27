import { authProcedure } from '@payload/orpc/procedures/auth.procedure'
import { AuthTransformer } from '@repo/models'

export const getCurrentUser = authProcedure.auth.getCurrentUser
  .handler(({ context }) => {
    return AuthTransformer.toCurrentUser(context.user)
  })
