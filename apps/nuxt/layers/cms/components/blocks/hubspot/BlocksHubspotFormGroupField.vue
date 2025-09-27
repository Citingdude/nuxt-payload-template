<script setup lang="ts">
import BlocksHubspotFormFieldDropdown from '@cms/components/blocks/hubspot/fields/BlocksHubspotFormFieldDropdown.vue'
import BlocksHubspotFormFieldMultipleCheckbox from '@cms/components/blocks/hubspot/fields/BlocksHubspotFormFieldMultipleCheckbox.vue'
import BlocksHubspotFormFieldPhone from '@cms/components/blocks/hubspot/fields/BlocksHubspotFormFieldPhone.vue'
import BlocksHubspotFormFieldRadio from '@cms/components/blocks/hubspot/fields/BlocksHubspotFormFieldRadio.vue'
import BlocksHubspotFormFieldText from '@cms/components/blocks/hubspot/fields/BlocksHubspotFormFieldText.vue'
import BlocksHubspotFormFieldTextarea from '@cms/components/blocks/hubspot/fields/BlocksHubspotFormFieldTextarea.vue'
import type { HubspotField } from '@cms/types/hubspotForm.type'
import type { Field } from 'formango'

import { NuxtErrorBoundary } from '#components'

interface Props {
  fieldGroupForm: Field<any, any>
  hubspotField: HubspotField
}
const props = defineProps<Props>()

function getDefaultValue(hubspotField: HubspotField): any {
  if ([
    'multiple_checkboxes',
  ].includes(hubspotField.fieldType)) {
    return []
  }

  if ([
    'dropdown',
    'email',
    'multi_line_text',
    'number',
    'phone',
    'radio',
    'single_line_text',
  ].includes(hubspotField.fieldType)) {
    return null
  }

  return []
}

const formField = props.fieldGroupForm.register(props.hubspotField.name, getDefaultValue(props.hubspotField))
</script>

<template>
  <div class="w-full">
    <BlocksHubspotFormFieldText
      v-if="['single_line_text', 'email'].includes(hubspotField.fieldType)"
      :form-field="formField"
      :hubspot-field="hubspotField"
    />
    <BlocksHubspotFormFieldTextarea
      v-else-if="['multi_line_text'].includes(hubspotField.fieldType)"
      :form-field="formField"
      :hubspot-field="hubspotField"
    />
    <BlocksHubspotFormFieldPhone
      v-else-if="['phone'].includes(hubspotField.fieldType)"
      :form-field="formField"
      :hubspot-field="hubspotField"
    />
    <BlocksHubspotFormFieldRadio
      v-else-if="['radio'].includes(hubspotField.fieldType)"
      :form-field="formField"
      :hubspot-field="hubspotField"
    />
    <BlocksHubspotFormFieldDropdown
      v-else-if="['dropdown'].includes(hubspotField.fieldType)"
      :form-field="formField"
      :hubspot-field="hubspotField"
    />
    <NuxtErrorBoundary>
      <BlocksHubspotFormFieldMultipleCheckbox
        v-if="['multiple_checkboxes'].includes(hubspotField.fieldType)"
        :form-field="formField"
        :hubspot-field="hubspotField"
      />
      <template #error="{ error }">
        {{ error }}
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
