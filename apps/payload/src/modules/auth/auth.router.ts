import { getCurrentUser } from '@payload/modules/auth/queries/getCurrentUser.serverQuery'

import { updateCurrentUser } from './mutations/updateCurrentUser.serverMutation'

export const authRouter = {
  getCurrentUser,
  updateCurrentUser,
}
