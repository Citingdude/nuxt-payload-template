import type { CurrentUser } from '@repo/models'

import { useOrpc } from '~base/composables/api/useOrpc'

export class AuthService {
  static async getCurrentUser(): Promise<CurrentUser> {
    const orpc = useOrpc()

    const data = await orpc.auth.getCurrentUser()

    return data
  }
}
