<script setup lang="ts">
import type {
  HubspotField,
  HubspotFieldOption,
} from '@cms/types/hubspotForm.type'
import type { VcSelectItemProps } from '@wisemen/vue-core-components'
import { VcSelect } from '@wisemen/vue-core-components'
import type { Field } from 'formango'

import { toFormField } from '~base/utils/form/toFormField.util'

interface Props {
  formField: Field<any, any>
  hubspotField: HubspotField
}

const props = defineProps<Props>()

const { t } = useI18n()
const model = computed<any>({
  get() {
    return props.hubspotField.options?.find((hubspotFieldOption) =>
      hubspotFieldOption.value === props.formField.modelValue.value) ?? null
  },
  set(value) {
    props.formField.setValue(value.value)
  },
})

function displayFunction(hubspotFieldOption: HubspotFieldOption) {
  return hubspotFieldOption.label
}

const options = computed<VcSelectItemProps[]>(() => {
  return props.hubspotField.options?.map((option) => {
    return {
      type: 'option',
      value: option,
    }
  }) ?? []
})
</script>

<template>
  <div class="w-full">
    <VcSelect
      v-model="model"
      :placeholder="t('base.shared.select')"
      :label="hubspotField.label"
      :errors="toFormField(formField).errors"
      :display-fn="displayFunction"
      :items="options"
      @blur="formField.onBlur"
      @change="formField.onChange"
    />
  </div>
</template>
