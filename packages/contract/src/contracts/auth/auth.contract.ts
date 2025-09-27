import {
  currentUserSchema,
  updateCurrentUserFormSchema,
} from '@repo/models'

import { authProcedure } from '../../procedures/procedures'

const getCurrentUser = authProcedure
  .output(currentUserSchema)

const updateCurrentUser = authProcedure
  .input(updateCurrentUserFormSchema)
  .output(currentUserSchema)

export const AUTH_CONTRACT = {
  getCurrentUser,
  updateCurrentUser,
}
