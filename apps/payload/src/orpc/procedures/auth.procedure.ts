import { orpc } from '@payload/orpc/orpc'

export const authProcedure = orpc.use(({ context, errors, next }) => {
  if (context.user?.email == null) {
    // @ts-expect-error - TODO: Fix this
    throw errors.ERROR_UNAUTHORIZED()
  }

  return next({
    context: {
      locale: context.locale,
      token: context.token,
      user: context.user,
    },
  })
})
