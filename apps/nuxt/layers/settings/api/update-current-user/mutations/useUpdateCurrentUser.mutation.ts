import type { UpdateCurrentUserForm } from '@repo/models'
import { useMutation } from '@tanstack/vue-query'

import { useOrpc } from '~base/composables/api/useOrpc'
import { useAuthStore } from '~base/stores/auth.store'

export function useUpdateCurrentUserMutation() {
  const orpc = useOrpc()
  const authStore = useAuthStore()

  return useMutation({
    mutationFn: async (updateCurrentUserForm: UpdateCurrentUserForm) => {
      const data = await orpc.auth.updateCurrentUser(updateCurrentUserForm)

      return data
    },
    onSuccess(response) {
      authStore.setCurrentUser(response)
    },
  })
}
