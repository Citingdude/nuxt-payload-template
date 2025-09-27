<script setup lang="ts">
import { updateCurrentUserFormSchema } from '@repo/models'
import { VcTextField } from '@wisemen/vue-core-components'
import { useForm } from 'formango'

import AppUnsavedChanges from '~base/components/app/unsaved-changes/AppUnsavedChanges.vue'
import { useAuthStore } from '~base/stores/auth.store'
import { toFormField } from '~base/utils/form/toFormField.util'
import { useUpdateCurrentUserMutation } from '~settings/api/update-current-user/mutations/useUpdateCurrentUser.mutation'
import SettingsTitleSubtitle from '~settings/components/SettingsTitleSubtitle.vue'

const { t } = useI18n()
const authStore = useAuthStore()
const updateCurrentUserMutation = useUpdateCurrentUserMutation()
const form = useForm({
  initialState: {
    darkMode: authStore.currentUser?.preferences.darkMode ?? 'light',
    firstName: authStore.currentUser?.firstName ?? null,
    lastName: authStore.currentUser?.lastName ?? null,
  },
  schema: updateCurrentUserFormSchema,
  onSubmit(data) {
    updateCurrentUserMutation.mutate(data)
  },
})

const firstName = form.register('firstName')
const lastName = form.register('lastName')

debouncedWatch(() => [
  firstName.value.value,
  lastName.value.value,
], () => {
  form.submit()
}, { debounce: 500 })

const errorMessage = computed<string | null>(() => {
  if (updateCurrentUserMutation.isError.value) {
    return t('base.shared.save_error')
  }

  return null
})
</script>

<template>
  <div>
    <SettingsTitleSubtitle
      :title="t('settings.account.personal_info.title')"
      :subtitle="t('settings.account.personal_info.subtitle')"
    />
    <div class="flex flex-col gap-2 text-white">
      <AppUnsavedChanges
        :is-auto-saving="updateCurrentUserMutation.isPending.value"
        :auto-save-error-message="errorMessage"
        :has-unsaved-changes="form.isDirty.value"
      />
      <div class="grid grid-cols-2 gap-4">
        <VcTextField
          v-bind="toFormField(firstName)"
          :label="t('base.shared.first_name')"
          :placeholder="t('base.shared.first_name_placeholder')"
        />
        <VcTextField
          v-bind="toFormField(lastName)"
          :label="t('base.shared.last_name')"
          :placeholder="t('base.shared.last_name_placeholder')"
        />
      </div>
    </div>
  </div>
</template>
