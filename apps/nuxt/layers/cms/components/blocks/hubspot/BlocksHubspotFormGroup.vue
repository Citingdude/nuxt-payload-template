<script setup lang="ts">
import BlocksHubspotFormGroupField from '@cms/components/blocks/hubspot/BlocksHubspotFormGroupField.vue'
import type { HubspotFieldGroup } from '@cms/types/hubspotForm.type'
import type { Form } from 'formango'

interface Props {
  fieldGroup: HubspotFieldGroup
  form: Form<any>
  index: number
}
const props = defineProps<Props>()

const fieldGroupForm = props.form.register(`group${props.index}`)
</script>

<template>
  <div
    class="
      flex w-full flex-col gap-4
      lg:flex-row
    "
  >
    <div
      v-for="(hubspotField) in props.fieldGroup?.fields"
      :key="hubspotField.name"
      class="w-full"
    >
      <BlocksHubspotFormGroupField
        :hubspot-field="hubspotField"
        :field-group-form="fieldGroupForm"
      />
    </div>
  </div>
</template>
