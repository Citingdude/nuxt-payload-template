<script setup lang="ts">
import type {
  HubspotField,
} from '@cms/types/hubspotForm.type'
import type { VcRadioGroupItemProps } from '@wisemen/vue-core-components'
import {
  VcCheckboxGroup,
  VcFormFieldLabel,
} from '@wisemen/vue-core-components'
import type { Field } from 'formango'

import { toFormField } from '~base/utils/form/toFormField.util'

interface Props {
  formField: Field<any, any>
  hubspotField: HubspotField
}

const props = defineProps<Props>()

const options = computed<VcRadioGroupItemProps[]>(() => {
  return props.hubspotField.options?.map((option) => {
    return {
      hint: option.description,
      label: option.label,
      value: option.value,
    }
  }) ?? []
})
</script>

<template>
  <div class="w-full">
    <VcFormFieldLabel
      :is-required="false"
      :label="hubspotField.label"
      for=""
    />

    <VcCheckboxGroup
      :label="hubspotField.label"
      v-bind="toFormField(formField)"
      :items="options"
    />
  </div>
</template>
