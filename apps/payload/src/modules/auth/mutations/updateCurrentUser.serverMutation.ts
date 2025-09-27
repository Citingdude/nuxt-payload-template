import { authProcedure } from '@payload/orpc/procedures/auth.procedure'
import { getPayload } from '@payload/utils/payload/getPayload.util'
import { AuthTransformer } from '@repo/models'
import type { User } from '@repo/payload-types'
import { filterOptionalValues } from '@repo/utils'

export const updateCurrentUser = authProcedure.auth.updateCurrentUser
  .handler(async ({
    context, input,
  }) => {
    const payload = await getPayload()

    const filteredInput = filterOptionalValues(input)
    const dataToUpdate: Partial<User> = {
      darkMode: filteredInput.darkMode,
      firstName: filteredInput.firstName,
      lastName: filteredInput.lastName,
    }

    const user = await payload.update({
      id: context.user.id,
      collection: 'users',
      data: dataToUpdate,
    })

    return AuthTransformer.toCurrentUser(user)
  })
