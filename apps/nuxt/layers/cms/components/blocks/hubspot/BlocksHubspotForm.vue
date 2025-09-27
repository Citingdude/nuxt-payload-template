<script setup lang="ts">
import { useHubspotFormQuery } from '@cms/api/hubspot/query/useHubspot.query'
import BlocksHubspotFormSchema from '@cms/components/blocks/hubspot/BlocksHubspotFormSchema.vue'
import type { HubspotFormBlock } from '@repo/payload-types'

import AppHeightTransition from '~base/components/app/AppHeightTransition.vue'
import AppContainer from '~base/components/app/container/AppContainer.vue'

interface Props {
  block: HubspotFormBlock
}
const props = defineProps<Props>()

const hubspotFormId = computed<string>(() => {
  if (typeof props.block.hubspotForm === 'string') {
    return props.block.hubspotForm
  }

  return props.block.hubspotForm.formId
})
const hubspotFormQuery = useHubspotFormQuery({ formId: hubspotFormId.value })

onServerPrefetch(async () => {
  await hubspotFormQuery.suspense()
})
</script>

<template>
  <AppContainer>
    <AppHeightTransition>
      <div v-if="!hubspotFormQuery.isPending.value">
        <BlocksHubspotFormSchema
          v-if="hubspotFormQuery.data.value"
          :hubspot-form="hubspotFormQuery.data.value"
        />
      </div>
    </AppHeightTransition>
  </AppContainer>
</template>
