<script setup lang="ts">
import type { HubspotField } from '@cms/types/hubspotForm.type'
import { VcTextField } from '@wisemen/vue-core-components'
import type { Field } from 'formango'

import { toFormField } from '~base/utils/form/toFormField.util'

interface Props {
  formField: Field<any, any>
  hubspotField: HubspotField
}

defineProps<Props>()
</script>

<template>
  <div class="w-full">
    <VcTextField
      :label="hubspotField.label"
      :placeholder="hubspotField.label"
      v-bind="toFormField(formField)"
    />
  </div>
</template>
