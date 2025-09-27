<script setup lang="ts">
import { useHubspotFormMutation } from '@cms/api/hubspot/mutation/useHubspotForm.mutation'
import BlocksHubspotFormGroup from '@cms/components/blocks/hubspot/BlocksHubspotFormGroup.vue'
import type { HubspotForm } from '@cms/types/hubspotForm.type'
import { makeHubspotFormZodSchema } from '@cms/utils/makeHubspotForm.util'
import { VcButton } from '@wisemen/vue-core-components'
import { useForm } from 'formango'

import AppHeightTransition from '~base/components/app/AppHeightTransition.vue'
import AppEmptyState from '~base/components/app/empty-state/AppEmptyState.vue'
import AppEmptyStateTitle from '~base/components/app/empty-state/AppEmptyStateTitle.vue'

const props = defineProps<{
  hubspotForm: HubspotForm
}>()

const isSubmitted = ref<boolean>(false)

const hubspotZodSchema = makeHubspotFormZodSchema(props.hubspotForm)
const hubspotFormMutation = useHubspotFormMutation()
const form = useForm({
  schema: hubspotZodSchema,
  onSubmit: async (data) => {
  /*
   * Reform group0.firstname etc to just flat firstname: 'name', ...
   */

    const reformedData: Record<string, any> = {}

    for (const groupName of Object.keys(data)) {
      const group = data[groupName]

      for (const fieldName of Object.keys(group)) {
        reformedData[fieldName] = group[fieldName]
      }
    }

    await hubspotFormMutation.mutateAsync({
      formId: props.hubspotForm.id,
      data: reformedData,
    })

    isSubmitted.value = true
  },
})
</script>

<template>
  <AppHeightTransition>
    <div
      v-if="!isSubmitted"
      class="flex flex-col gap-4"
    >
      <h2 class="text-xl">
        {{ hubspotForm.name }}
      </h2>

      <div
        v-for="(fieldGroup, index) in hubspotForm.fieldGroups"
        :key="index"
      >
        <BlocksHubspotFormGroup
          :index="index"
          :field-group="fieldGroup"
          :form="form"
        />
      </div>
      <div
        id="privacy-text"
      >
        <div v-html="hubspotForm.legalConsentOptions.privacyText" />
      </div>
      <div class="flex justify-end">
        <VcButton
          :is-loading="form.isSubmitting.value"
          @click="form.submit"
        >
          {{ hubspotForm.displayOptions.submitButtonText }}
        </VcButton>
      </div>
    </div>
    <div
      v-else
      class="flex flex-col items-center justify-center gap-4"
    >
      <AppEmptyState icon="checkmarkCircle">
        <AppEmptyStateTitle>
          <div v-html="hubspotForm.configuration.postSubmitAction.value" />
        </AppEmptyStateTitle>
      </AppEmptyState>
    </div>
  </AppHeightTransition>
</template>

<style>
#privacy-text a {

  text-decoration: underline
}
</style>
